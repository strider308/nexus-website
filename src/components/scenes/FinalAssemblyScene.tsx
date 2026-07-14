"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  scrollProgress: number;
}

export function FinalAssemblyScene({ scrollProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Opacity envelope: active from 0.85 onwards, peaking at 0.95 and locking constant
    let opacity = 0;
    if (scrollProgress >= 0.85) {
      opacity = Math.min(1, (scrollProgress - 0.85) / 0.10);
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2;
    }

    if (coreRef.current && coreRef.current.material) {
      (coreRef.current.material as THREE.Material).opacity = opacity * 0.95;
      const pulse = 0.5 + Math.sin(time * 1.5) * 0.03;
      coreRef.current.scale.setScalar(pulse);
    }

    if (ringRef.current && ringRef.current.material) {
      (ringRef.current.material as THREE.Material).opacity = opacity * 0.4;
      ringRef.current.rotation.x = time * 0.1;
      ringRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Solid Core representing the fully assembled system */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#dedbc8" 
          emissive="#2a7d8a"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0}
        />
      </mesh>

      {/* Connected orbital ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.3, 0.02, 8, 64]} />
        <meshBasicMaterial 
          color="#2a7d8a" 
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
}
export default FinalAssemblyScene;
