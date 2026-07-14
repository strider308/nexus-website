"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  scrollRef: React.RefObject<number>;
}

const NODES_COUNT = 18;
const COLORS = ["#c44a7a", "#c87b3a", "#8b7bc4", "#2e6fad", "#2a7d8a"];

// Pre-generate stable positions outside the render function to preserve purity
const STATIC_NODES = Array.from({ length: NODES_COUNT }).map((_, idx) => {
  // Deterministic values using sine coordinates
  const x = Math.sin(idx * 7.5) * 2.0;
  const y = Math.cos(idx * 3.2) * 1.5;
  const z = Math.sin(idx * 9.8) * 1.0;
  const speed = 0.2 + Math.abs(Math.sin(idx)) * 0.5;
  const scale = 0.05 + Math.abs(Math.cos(idx)) * 0.08;

  return {
    position: new THREE.Vector3(x, y, z),
    speed,
    color: COLORS[idx % COLORS.length],
    scale,
  };
});

export function FragmentedWorkflowScene({ scrollRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (typeof document !== "undefined" && document.hidden) return;

    const time = state.clock.getElapsedTime();
    const scrollProgress = scrollRef.current ?? 0;
    
    // Opacity envelope: active between 0.10 and 0.45, peaking at 0.25
    let opacity = 0;
    if (scrollProgress >= 0.10 && scrollProgress <= 0.45) {
      if (scrollProgress < 0.25) {
        opacity = (scrollProgress - 0.10) / 0.15;
      } else {
        opacity = 1 - (scrollProgress - 0.25) / 0.20;
      }
    }

    if (groupRef.current) {
      // Rotate the whole field slowly
      groupRef.current.rotation.y = time * 0.08;

      groupRef.current.children.forEach((child, idx) => {
        const node = STATIC_NODES[idx];
        if (!node) return;

        // Apply dynamic drift using sine/cosine offsets
        const offset = Math.sin(time * node.speed + idx) * 0.15;
        child.position.y = node.position.y + offset;
        
        // Update opacity
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          (mesh.material as THREE.Material).opacity = opacity;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {STATIC_NODES.map((node, idx) => (
        <mesh key={idx} position={node.position}>
          <boxGeometry args={[node.scale, node.scale, node.scale]} />
          <meshBasicMaterial 
            color={node.color} 
            transparent 
            opacity={0} 
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
export default FragmentedWorkflowScene;
