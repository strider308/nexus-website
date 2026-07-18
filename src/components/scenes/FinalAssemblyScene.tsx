"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  scrollRef: React.RefObject<number>;
}

export function FinalAssemblyScene({ scrollRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (typeof document !== "undefined" && document.hidden) return;

    const scrollProgress = scrollRef.current ?? 0;
    // Gating check: only calculate when active
    if (scrollProgress < 0.78) return;

    const time = state.clock.getElapsedTime();

    // Opacity envelope: active from 0.80 onwards, peaking at 0.90 and locking constant
    let opacity = 0;
    if (scrollProgress >= 0.80) {
      opacity = Math.min(1, (scrollProgress - 0.80) / 0.10);
    }

    if (groupRef.current) {
      // Rotation slowed from 0.2 to 0.04 for quiet visual resolution
      groupRef.current.rotation.y = time * 0.04;
    }

    if (coreRef.current && coreRef.current.material) {
      (coreRef.current.material as THREE.Material).opacity = opacity * 0.95;
      // Core pulse frequency reduced from 1.5 to 0.6, amplitude reduced from 0.03 to 0.01
      const pulse = 0.5 + Math.sin(time * 0.6) * 0.01;
      coreRef.current.scale.setScalar(pulse);
    }

    if (ringRef.current && ringRef.current.material) {
      (ringRef.current.material as THREE.Material).opacity = opacity * 0.4;
      // Ring rotation speeds reduced from 0.1/0.15 to 0.02/0.03
      ringRef.current.rotation.x = time * 0.02;
      ringRef.current.rotation.y = time * 0.03;
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
