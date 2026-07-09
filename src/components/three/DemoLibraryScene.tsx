"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface DemoLibrarySceneProps {
  activeDemoId: string | null;
}

const SYSTEMS = [
  { id: "clinicos", label: "ClinicOS Queue", color: "#3B82F6", pos: new THREE.Vector3(-1.0, 1.0, 0) },
  { id: "restaurantos", label: "RestaurantOS Orders", color: "#EF4444", pos: new THREE.Vector3(1.0, 0.7, -0.4) },
  { id: "securescan", label: "SecureScan Report", color: "#F59E0B", pos: new THREE.Vector3(-0.8, -0.2, 0.5) },
  { id: "shipwright", label: "ShipWright Board", color: "#8B5CF6", pos: new THREE.Vector3(0.8, -0.5, -0.2) },
  { id: "buildpublic", label: "BuildPublic Log", color: "#6366F1", pos: new THREE.Vector3(-0.4, -1.2, 0.3) },
  { id: "aarogya", label: "Aarogya Tracker", color: "#10B981", pos: new THREE.Vector3(0.6, 1.2, 0.2) },
];

export default function DemoLibraryScene({ activeDemoId }: DemoLibrarySceneProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.15;
    groupRef.current.rotation.x = Math.cos(time * 0.15) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Light controls */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 3, 5]} intensity={0.8} />

      {/* Floating System Panels */}
      {SYSTEMS.map((sys) => {
        const isActive = activeDemoId === sys.id;
        const color = isActive ? sys.color : "#1A2B4C";
        const opacity = isActive ? 0.7 : 0.15;
        const scale = isActive ? 1.2 : 1.0;

        return (
          <group key={sys.id} position={sys.pos} scale={scale}>
            {/* Plane console panel */}
            <mesh>
              <planeGeometry args={[1.5, 0.6]} />
              <meshStandardMaterial 
                color={color} 
                roughness={0.7} 
                transparent 
                opacity={opacity} 
                depthWrite={false}
              />
            </mesh>
            {/* Border outline */}
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[1.52, 0.62]} />
              <meshBasicMaterial 
                color={isActive ? sys.color : "#2E6FAD"} 
                wireframe 
                transparent 
                opacity={isActive ? 0.95 : 0.25} 
              />
            </mesh>
            {/* Active Core Indicator */}
            {isActive && (
              <mesh position={[-0.6, 0, 0.02]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshBasicMaterial color={sys.color} />
              </mesh>
            )}
            {/* Text label */}
            <Text
              position={[0, 0, 0.03]}
              fontSize={0.08}
              color={isActive ? "#ffffff" : "#ffffff40"}
              anchorX="center"
              anchorY="middle"
            >
              {sys.label}
            </Text>
          </group>
        );
      })}

      {/* Matrix console lines */}
      <gridHelper args={[8, 8, "#2E6FAD", "#1A2B4C"]} position={[0, -2, -1]} rotation={[1.5, 0, 0]} />
    </group>
  );
}
