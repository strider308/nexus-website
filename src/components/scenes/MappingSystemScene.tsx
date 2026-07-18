"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  scrollRef: React.RefObject<number>;
}

const NODES_COUNT = 8;

// Pre-generate stable mappings outside render loop to maintain purity
const STATIC_MAPPINGS = Array.from({ length: NODES_COUNT }).map((_, idx) => {
  const y = -1.2 + (idx * 2.4) / (NODES_COUNT - 1);
  const startY = y + Math.sin(idx * 4.5) * 0.4;
  const startX = -2.5 - Math.abs(Math.cos(idx * 2.3)) * 0.5;

  return {
    startY,
    startX,
    endY: y,
    endX: 2.0,
    color: idx % 2 === 0 ? "#2a7d8a" : "#2e6fad",
  };
});

export function MappingSystemScene({ scrollRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (typeof document !== "undefined" && document.hidden) return;

    const scrollProgress = scrollRef.current ?? 0;
    // Gating check: only calculate when active
    if (scrollProgress < 0.26 || scrollProgress > 0.44) return;
    
    // Opacity envelope: active between 0.28 and 0.42, peaking at 0.35
    let opacity = 0;
    if (scrollProgress >= 0.28 && scrollProgress <= 0.42) {
      if (scrollProgress < 0.35) {
        opacity = (scrollProgress - 0.28) / 0.07;
      } else {
        opacity = 1 - (scrollProgress - 0.35) / 0.07;
      }
    }

    // Move nodes from start positions to mapped coordinates along scroll progress within this chapter segment
    const segmentProgress = Math.max(0, Math.min(1, (scrollProgress - 0.28) / 0.14));

    if (groupRef.current) {
      groupRef.current.children.forEach((child, idx) => {
        // First child is the map plane mesh
        if (idx === 0) {
          const planeMaterial = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          if (planeMaterial) {
            planeMaterial.opacity = opacity * 0.2;
          }
          return;
        }

        const mapIdx = idx - 1;
        const mapping = STATIC_MAPPINGS[mapIdx];
        if (!mapping) return;

        // Interpolate position along transition
        const currentX = THREE.MathUtils.lerp(mapping.startX, mapping.endX, segmentProgress);
        const currentY = THREE.MathUtils.lerp(mapping.startY, mapping.endY, segmentProgress);
        
        child.position.set(currentX, currentY, 0);

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
      {/* Mapping plane wireframe overlay */}
      <mesh rotation={[0, 0.4, 0]}>
        <planeGeometry args={[1.8, 3.2]} />
        <meshBasicMaterial 
          color="#2a7d8a" 
          transparent 
          wireframe 
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* Mapping workflow nodes */}
      {STATIC_MAPPINGS.map((mapping, idx) => (
        <mesh key={idx} position={[mapping.startX, mapping.startY, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial 
            color={mapping.color} 
            transparent 
            opacity={0}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
export default MappingSystemScene;
