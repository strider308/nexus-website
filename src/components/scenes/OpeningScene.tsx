"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  scrollRef: React.RefObject<number>;
}

export function OpeningScene({ scrollRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (typeof document !== "undefined" && document.hidden) return;

    const scrollProgress = scrollRef.current ?? 0;
    // Gating check: only calculate when active
    if (scrollProgress > 0.16) return;

    const time = state.clock.getElapsedTime();
    
    // Calculate opacity envelope: peak at 0.0, fade to 0.0 by 0.14
    let opacity = 0;
    if (scrollProgress <= 0.14) {
      opacity = 1 - scrollProgress / 0.14;
    }

    if (materialRef.current) {
      materialRef.current.opacity = opacity;
    }
    if (gridRef.current && gridRef.current.material) {
      (gridRef.current.material as THREE.Material).opacity = opacity * 0.15;
    }

    // Subtle rotation and pulsing
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15;
      const pulse = 1 + Math.sin(time * 2) * 0.04;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Operating Core sphere */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial 
          ref={materialRef} 
          color="#dedbc8" 
          transparent 
          wireframe
        />
      </mesh>

      {/* Subtle floor grid reference */}
      <gridHelper 
        ref={gridRef} 
        args={[10, 10, "#dedbc8", "#2e6fad"]} 
        position={[0, -1.2, 0]}
      >
        <lineBasicMaterial attach="material" transparent depthWrite={false} />
      </gridHelper>
    </group>
  );
}
export default OpeningScene;
