"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";

const INPUTS = [
  { label: "Chats", y: 1.2, color: "#C0392B" },
  { label: "Sheets", y: 0.6, color: "#F39C12" },
  { label: "Tasks", y: 0.0, color: "#2E6FAD" },
  { label: "Calls", y: -0.6, color: "#2A7D8A" },
  { label: "Billing", y: -1.2, color: "#D35400" },
];

const OUTPUTS = [
  { label: "Custom Software", y: 0.8, color: "#2A7D8A" },
  { label: "Automation", y: 0.0, color: "#2E6FAD" },
  { label: "Visibility", y: -0.8, color: "#1A2B4C" },
];

export default function NexusSystemScene() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const { pointer, viewport } = useThree();
  
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Core pulsing
    if (coreRef.current) {
      const scale = prefersReducedMotion 
        ? 1.0 
        : 1.0 + 0.08 * Math.sin(time * 2.5);
      coreRef.current.scale.set(scale, scale, scale);
    }

    // 2. Parallax camera effect on pointer moves (desktop & normal motion only)
    if (groupRef.current && !prefersReducedMotion && !isMobile) {
      const targetX = (pointer.x * viewport.width) / 16;
      const targetY = (pointer.y * viewport.height) / 16;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Central Nexus Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#2E6FAD" toneMapped={false} />
      </mesh>
      <Text
        position={[0, 0.45, 0]}
        fontSize={0.16}
        color="#2E6FAD"
        anchorX="center"
        anchorY="middle"
      >
        NEXUS
      </Text>

      {/* Inputs (Left Side) */}
      {INPUTS.map((inp, idx) => (
        <group key={idx}>
          {/* Node */}
          <mesh position={[-2.2, inp.y, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color={inp.color} />
          </mesh>
          {/* Label */}
          <Text
            position={[-2.45, inp.y, 0]}
            fontSize={0.12}
            color="#ffffff"
            anchorX="right"
            anchorY="middle"
          >
            {inp.label}
          </Text>
          {/* Connecting line */}
          <line>
            <bufferGeometry 
              attach="geometry"
              onUpdate={(self) => self.setFromPoints([new THREE.Vector3(-2.2, inp.y, 0), new THREE.Vector3(0, 0, 0)])}
            />
            <lineBasicMaterial color={inp.color} linewidth={1} opacity={0.4} transparent />
          </line>
        </group>
      ))}

      {/* Outputs (Right Side) */}
      {OUTPUTS.map((out, idx) => (
        <group key={idx}>
          {/* Node */}
          <mesh position={[2.2, out.y, 0]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshBasicMaterial color={out.color} />
          </mesh>
          {/* Label */}
          <Text
            position={[2.5, out.y, 0]}
            fontSize={0.12}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            {out.label}
          </Text>
          {/* Connecting line */}
          <line>
            <bufferGeometry 
              attach="geometry"
              onUpdate={(self) => self.setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(2.2, out.y, 0)])}
            />
            <lineBasicMaterial color={out.color} linewidth={1} opacity={0.4} transparent />
          </line>
        </group>
      ))}

      {/* Grid Plane (Floor guidelines) */}
      <gridHelper args={[8, 8, "#2E6FAD", "#1A2B4C"]} position={[0, -2, -1]} rotation={[1.5, 0, 0]} />
    </group>
  );
}
