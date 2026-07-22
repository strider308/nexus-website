"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ProofConstellationProps {
  activeSystemId: string | null;
  activeCapabilityId: string | null;
}

const SYSTEMS = [
  { id: "clinicos", label: "ClinicOS", y: 1.5, caps: ["workflow", "automation", "dashboard", "tracking", "mvp"] },
  { id: "aarogya", label: "Aarogya", y: 1.0, caps: ["dashboard", "tracking", "safety", "mvp", "ux"] },
  { id: "restaurantos", label: "RestaurantOS", y: 0.5, caps: ["workflow", "automation", "dashboard", "tracking", "ux"] },
  { id: "shipwright", label: "ShipWright", y: 0.0, caps: ["workflow", "automation", "tracking", "mvp"] },
  { id: "securescan", label: "SecureScan", y: -0.5, caps: ["dashboard", "tracking", "safety", "mvp"] },
  { id: "safedate", label: "SafeDate", y: -1.0, caps: ["automation", "safety", "mvp", "ux"] },
  { id: "buildpublic", label: "BuildPublic", y: -1.5, caps: ["dashboard", "tracking", "mvp", "ux"] },
];

const CAPABILITIES = [
  { id: "workflow", label: "Workflow", y: 1.5 },
  { id: "automation", label: "Automation", y: 1.0 },
  { id: "dashboard", label: "Dashboard", y: 0.5 },
  { id: "tracking", label: "Data Track", y: 0.0 },
  { id: "safety", label: "Risk Logic", y: -0.5 },
  { id: "mvp", label: "MVP Beta", y: -1.0 },
  { id: "ux", label: "UX Flow", y: -1.5 },
];

export default function ProofConstellation({ activeSystemId, activeCapabilityId }: ProofConstellationProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion) return;
    const time = state.clock.getElapsedTime();
    // Subtle float
    groupRef.current.position.y = Math.sin(time * 0.4) * 0.05;
  });

  // Calculate all connections
  const connections = useMemo(() => {
    const lines: Array<{
      start: THREE.Vector3;
      end: THREE.Vector3;
      systemId: string;
      capId: string;
      color: string;
    }> = [];

    SYSTEMS.forEach((sys) => {
      sys.caps.forEach((capId) => {
        const cap = CAPABILITIES.find((c) => c.id === capId);
        if (cap) {
          lines.push({
            start: new THREE.Vector3(-1.8, sys.y, 0),
            end: new THREE.Vector3(1.8, cap.y, 0),
            systemId: sys.id,
            capId: capId,
            color: "#2E6FAD"
          });
        }
      });
    });

    return lines;
  }, []);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 4, 4]} intensity={0.8} />

      {/* Connection Lines */}
      {connections.map((line, idx) => {
        const isSysActive = activeSystemId === line.systemId;
        const isCapActive = activeCapabilityId === line.capId;
        const isHighlighted = isSysActive || isCapActive;
        const opacity = isHighlighted ? 0.95 : (activeSystemId || activeCapabilityId ? 0.08 : 0.25);
        const color = isHighlighted ? "#2A7D8A" : "#1A2B4C";

        return (
          <line key={idx}>
            <bufferGeometry 
              attach="geometry"
              onUpdate={(self) => self.setFromPoints([line.start, line.end])}
            />
            <lineBasicMaterial 
              color={color} 
              linewidth={isHighlighted ? 2 : 1} 
              opacity={opacity} 
              transparent 
            />
          </line>
        );
      })}

      {/* Systems (Left Side) */}
      {SYSTEMS.map((sys) => {
        const isActive = activeSystemId === sys.id;
        const displayColor = isActive ? "#2A7D8A" : "#2E6FAD";
        const scale = isActive ? 1.5 : 1.0;
        // High contrast text colors: active white, inactive slate-200
        const textColor = isActive ? "#ffffff" : "#cbd5e1";

        return (
          <group key={sys.id} position={[-1.8, sys.y, 0]} scale={scale}>
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial 
                color={displayColor} 
                emissive={displayColor}
                emissiveIntensity={isActive ? 0.8 : 0.1}
              />
            </mesh>
            <Text
              position={[-0.15, 0, 0]}
              fontSize={0.11}
              color={textColor}
              anchorX="right"
              anchorY="middle"
            >
              {sys.label}
            </Text>
          </group>
        );
      })}

      {/* Capabilities (Right Side) */}
      {CAPABILITIES.map((cap) => {
        const isActive = activeCapabilityId === cap.id;
        const displayColor = isActive ? "#2A7D8A" : "#1A2B4C";
        const scale = isActive ? 1.4 : 1.0;
        // High contrast text colors: active white, inactive slate-200
        const textColor = isActive ? "#ffffff" : "#cbd5e1";

        return (
          <group key={cap.id} position={[1.8, cap.y, 0]} scale={scale}>
            <mesh>
              <boxGeometry args={[0.11, 0.11, 0.11]} />
              <meshStandardMaterial 
                color={displayColor} 
                roughness={0.5}
              />
            </mesh>
            <Text
              position={[0.18, 0, 0]}
              fontSize={0.11}
              color={textColor}
              anchorX="left"
              anchorY="middle"
            >
              {cap.label}
            </Text>
          </group>
        );
      })}
    </group>
  );
}
