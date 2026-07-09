"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ProofNode {
  id: string;
  label: string;
  color: string;
}

const PROOF_SYSTEMS: ProofNode[] = [
  { id: "clinicos", label: "ClinicOS", color: "#3B82F6" },
  { id: "aarogya", label: "Aarogya", color: "#10B981" },
  { id: "restaurantos", label: "RestaurantOS", color: "#EF4444" },
  { id: "shipwright", label: "ShipWright", color: "#8B5CF6" },
  { id: "securescan", label: "SecureScan", color: "#F59E0B" },
  { id: "safedate", label: "SafeDate", color: "#EC4899" },
  { id: "buildpublic", label: "BuildPublic", color: "#6366F1" },
];

interface ProofOrbitSceneProps {
  activeId: string | null;
}

export default function ProofOrbitScene({ activeId }: ProofOrbitSceneProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const { pointer, viewport } = useThree();
  
  const orbitGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Compute node coordinates
  const nodesData = useMemo(() => {
    return PROOF_SYSTEMS.map((sys, idx) => {
      const angle = (idx * 2 * Math.PI) / PROOF_SYSTEMS.length;
      return {
        ...sys,
        angle,
        radius: 2.2
      };
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Slow idle rotation of the whole constellation (normal motion only)
    if (orbitGroupRef.current && !prefersReducedMotion) {
      orbitGroupRef.current.rotation.z = time * 0.05;
    }

    // 2. Core scale pulse
    if (coreRef.current) {
      const pulse = prefersReducedMotion ? 1.0 : 1 + 0.05 * Math.sin(time * 2);
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    // 3. Desktop mouse parallax
    if (orbitGroupRef.current && !prefersReducedMotion && !isMobile) {
      const targetX = (pointer.x * viewport.width) / 20;
      const targetY = (pointer.y * viewport.height) / 20;
      orbitGroupRef.current.position.x = THREE.MathUtils.lerp(orbitGroupRef.current.position.x, targetX, 0.05);
      orbitGroupRef.current.position.y = THREE.MathUtils.lerp(orbitGroupRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <group>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 5, 5]} intensity={1.0} />

      {/* Central Nexus Primitive Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[0.35]} />
        <meshBasicMaterial color="#2E6FAD" wireframe />
      </mesh>
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.14}
        color="#7fbbf3"
        anchorX="center"
        anchorY="middle"
      >
        CORE PRIMITIVE
      </Text>

      {/* Orbit Constellation */}
      <group ref={orbitGroupRef}>
        {nodesData.map((node) => {
          const x = node.radius * Math.cos(node.angle);
          const y = node.radius * Math.sin(node.angle);
          const isActive = activeId === node.id;
          
          return (
            <group key={node.id}>
              {/* Radial connection line from core to active node */}
              <line>
                <bufferGeometry 
                  attach="geometry"
                  onUpdate={(self) => self.setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, 0)])}
                />
                <lineBasicMaterial 
                  color={isActive ? node.color : "#1A2B4C"} 
                  linewidth={1} 
                  opacity={isActive ? 0.8 : 0.2} 
                  transparent 
                />
              </line>

              {/* Node Mesh */}
              <mesh position={[x, y, 0]} scale={isActive ? 1.5 : 1.0}>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial 
                  color={node.color} 
                  emissive={node.color} 
                  emissiveIntensity={isActive ? 0.8 : 0.1}
                />
              </mesh>

              {/* Text label */}
              <Text
                position={[x, y + 0.22, 0]}
                fontSize={0.12}
                color={isActive ? "#ffffff" : "#cbd5e1"}
                anchorX="center"
                anchorY="middle"
              >
                {node.label}
              </Text>
            </group>
          );
        })}
      </group>
    </group>
  );
}
