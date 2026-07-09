"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ServiceDepthSceneProps {
  selectedService: string;
}

const LAYERS = [
  { label: "INPUTS & DATA INTAKE", z: 1.2, color: "#C0392B" },
  { label: "WORKFLOW LOGIC & STATE", z: 0.7, color: "#2E6FAD" },
  { label: "ROLES & PERMISSIONS", z: 0.2, color: "#9B59B6" },
  { label: "AUTOMATION RULES", z: -0.3, color: "#27AE60" },
  { label: "DASHBOARD VISIBILITY", z: -0.8, color: "#2A7D8A" },
  { label: "HANDOFF & DOCUMENTATION", z: -1.3, color: "#E67E22" },
];

export default function ServiceDepthScene({ selectedService }: ServiceDepthSceneProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Constant slow drift rotation if normal motion
    if (!prefersReducedMotion) {
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.15;
      groupRef.current.rotation.x = 0.35 + Math.cos(time * 0.2) * 0.05;
    } else {
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.x = 0.35;
    }
  });

  // Highlight specific layers based on selected tab
  const isLayerActive = (layerIdx: number): boolean => {
    const service = selectedService.toLowerCase();
    if (service.includes("workflow")) {
      // Custom workflow systems: emphasizes all layers
      return true;
    }
    if (service.includes("automation")) {
      // Automation layers: emphasizes automation and handoff
      return layerIdx === 3 || layerIdx === 5;
    }
    if (service.includes("mvp") || service.includes("beta")) {
      // MVP/private beta: emphasizes workflow logic and handoff/launch
      return layerIdx === 1 || layerIdx === 5;
    }
    if (service.includes("dashboard")) {
      // Owner dashboards: emphasizes visibility
      return layerIdx === 4;
    }
    if (service.includes("ux") || service.includes("modernization")) {
      // UX modernization: emphasizes interface (intake) and role clarity
      return layerIdx === 0 || layerIdx === 2;
    }
    if (service.includes("ai") || service.includes("assisted")) {
      // AI-assisted workflow: emphasizes logic, automation, and visibility
      return layerIdx === 1 || layerIdx === 3 || layerIdx === 4;
    }
    return false;
  };

  return (
    <group ref={groupRef} position={[0, 0.2, 0]}>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 3]} intensity={1.0} />

      {/* Stacked planes */}
      {LAYERS.map((layer, idx) => {
        const isActive = isLayerActive(idx);
        const displayColor = isActive ? layer.color : "#ffffff";
        
        return (
          <group key={idx} position={[0, 0, layer.z]}>
            {/* Plane surface */}
            <mesh rotation={[-1.2, 0, 0]}>
              <planeGeometry args={[2.5, 0.8]} />
              <meshStandardMaterial 
                color={displayColor} 
                roughness={0.8}
                metalness={0.2}
                transparent
                opacity={isActive ? 0.35 : 0.08}
              />
            </mesh>
            
            {/* Border Wireframe outline */}
            <mesh rotation={[-1.2, 0, 0]} position={[0, 0, 0.01]}>
              <planeGeometry args={[2.52, 0.82]} />
              <meshBasicMaterial 
                color={isActive ? displayColor : "#1A2B4C"} 
                wireframe 
                transparent 
                opacity={isActive ? 0.8 : 0.3}
              />
            </mesh>

            {/* Label */}
            <Text
              position={[-1.3, -0.15, 0.05]}
              rotation={[-0.4, 0, 0]}
              fontSize={0.08}
              color={isActive ? "#ffffff" : "#ffffff40"}
              anchorX="left"
              anchorY="middle"
            >
              {layer.label}
            </Text>
          </group>
        );
      })}
    </group>
  );
}
