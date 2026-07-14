"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  scrollRef: React.RefObject<number>;
}

const SYSTEMS_COUNT = 7;
const COLORS = [
  "#2a7d8a", // ClinicOS
  "#2e6fad", // Aarogya
  "#c87b3a", // RestaurantOS
  "#8b7bc4", // ShipWright
  "#2a7d8a", // SecureScan
  "#c44a7a", // SafeDate
  "#dedbc8", // BuildPublic
];

// Pre-generate stable positions outside the render function to preserve purity
const STATIC_SYSTEMS = Array.from({ length: SYSTEMS_COUNT }).map((_, idx) => {
  const angle = (idx * 2 * Math.PI) / SYSTEMS_COUNT;
  const radius = 1.6;
  const zOffset = Math.sin(idx * 5.4) * 0.25;

  return {
    position: new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.8,
      zOffset
    ),
    color: COLORS[idx % COLORS.length],
    scale: 0.12,
    speed: 0.5 + Math.abs(Math.cos(idx * 1.5)) * 0.5,
  };
});

export function ProofSystemsScene({ scrollRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (typeof document !== "undefined" && document.hidden) return;

    const time = state.clock.getElapsedTime();
    const scrollProgress = scrollRef.current ?? 0;

    // Opacity envelope: active between 0.70 and 0.95, peaking at 0.82
    let opacity = 0;
    if (scrollProgress >= 0.70 && scrollProgress <= 0.95) {
      if (scrollProgress < 0.82) {
        opacity = (scrollProgress - 0.70) / 0.12;
      } else {
        opacity = 1 - (scrollProgress - 0.82) / 0.13;
      }
    }

    if (groupRef.current) {
      // Gentle constellation rotation
      groupRef.current.rotation.z = time * 0.05;

      groupRef.current.children.forEach((child, idx) => {
        const sys = STATIC_SYSTEMS[idx];
        if (!sys) return;

        // Pulse scale reduced from 0.1 (10%) to 0.04 (4%) for visual restraint
        const pulse = sys.scale * (1 + Math.sin(time * sys.speed + idx) * 0.04);
        child.scale.setScalar(pulse);

        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.opacity = opacity;
          mat.emissiveIntensity = opacity * 0.5;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* 7 Constellation Orbs representing proof systems */}
      {STATIC_SYSTEMS.map((sys, idx) => (
        <mesh key={idx} position={sys.position}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial 
            color={sys.color}
            emissive={sys.color}
            emissiveIntensity={0}
            transparent
            opacity={0}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}
export default ProofSystemsScene;
