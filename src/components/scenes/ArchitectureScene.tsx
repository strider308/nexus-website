"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  scrollRef: React.RefObject<number>;
}

const LAYERS_COUNT = 6;
const LAYER_SPACING = 0.45;

export function ArchitectureScene({ scrollRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const signalRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (typeof document !== "undefined" && document.hidden) return;

    const scrollProgress = scrollRef.current ?? 0;
    // Gating check: only calculate when active
    if (scrollProgress < 0.40 || scrollProgress > 0.64) return;

    const time = state.clock.getElapsedTime();

    // Opacity envelope: active between 0.42 and 0.62, peaking at 0.49
    let opacity = 0;
    if (scrollProgress >= 0.42 && scrollProgress <= 0.62) {
      if (scrollProgress < 0.49) {
        opacity = (scrollProgress - 0.42) / 0.07;
      } else {
        opacity = 1 - (scrollProgress - 0.49) / 0.13;
      }
    }

    // Stack reveals in sequence based on scroll progress within the segment
    const segmentProgress = Math.max(0, Math.min(1, (scrollProgress - 0.42) / 0.14));

    if (groupRef.current) {
      groupRef.current.children.forEach((child, idx) => {
        // First child is the moving signal light sphere
        if (child === signalRef.current) {
          const signalMaterial = signalRef.current.material as THREE.MeshBasicMaterial;
          if (signalMaterial) {
            signalMaterial.opacity = opacity * 0.8;
          }
          // Cycle signal height from top to bottom
          const signalY = 1.125 - ((time * 0.8) % 1) * 2.25;
          signalRef.current.position.set(0, signalY, 0);
          return;
        }

        // Each slab scales up and fades in sequence based on segmentProgress
        const threshold = idx / LAYERS_COUNT;
        const scaleProgress = Math.max(0, Math.min(1, (segmentProgress - threshold) * 3));
        
        child.scale.set(scaleProgress, 1, scaleProgress);

        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.opacity = opacity * 0.6;
          mat.emissiveIntensity = opacity * 0.35;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0.2, 0, 0]} rotation={[0.2, -0.4, 0]}>
      {/* Moving operational signal pulse */}
      <mesh ref={signalRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#2a7d8a" transparent opacity={0} />
      </mesh>

      {/* 6 Slabs stack along the Y-axis */}
      {Array.from({ length: LAYERS_COUNT }).map((_, idx) => {
        const yPos = 1.125 - idx * LAYER_SPACING;
        return (
          <mesh key={idx} position={[0, yPos, 0]}>
            <boxGeometry args={[2.5, 0.04, 1.4]} />
            <meshStandardMaterial 
              color={idx % 2 === 0 ? "#2a7d8a" : "#2e6fad"} 
              emissive={idx % 2 === 0 ? "#2a7d8a" : "#1a2b4c"}
              emissiveIntensity={0}
              transparent
              opacity={0}
              roughness={0.4}
              metalness={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}
export default ArchitectureScene;
