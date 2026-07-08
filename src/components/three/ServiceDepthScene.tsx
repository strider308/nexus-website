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
  { label: "INPUTS & DATA INTAKE", z: 1.0, color: "#C0392B" },
  { label: "WORKFLOW RULES & STATE", z: 0.2, color: "#2E6FAD" },
  { label: "DASHBOARDS & VISIBILITY", z: -0.6, color: "#2A7D8A" },
  { label: "AUDIT TRAILS & INVOICING", z: -1.4, color: "#1A2B4C" },
];

export default function ServiceDepthScene({ selectedService }: ServiceDepthSceneProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Constant slow drift rotation if normal motion
    if (!prefersReducedMotion) {
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.2;
      groupRef.current.rotation.x = 0.4 + Math.cos(time * 0.2) * 0.05;
    } else {
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.x = 0.4;
    }
  });

  // Shift highlighted color layers based on selected tab
  const getHighlightColor = (layerIdx: number) => {
    // Basic heuristics to match tabs
    if (selectedService === "workflow" && layerIdx === 1) return "#2E6FAD";
    if (selectedService === "automation" && layerIdx === 0) return "#C0392B";
    if (selectedService === "dashboards" && layerIdx === 2) return "#2A7D8A";
    if (selectedService === "mvp" && layerIdx === 3) return "#8B5CF6";
    return null;
  };

  return (
    <group ref={groupRef} position={[0, 0.4, 0]}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 4, 3]} intensity={1.2} />

      {/* Stacked planes */}
      {LAYERS.map((layer, idx) => {
        const highlightedColor = getHighlightColor(idx);
        const isActive = highlightedColor !== null;
        
        return (
          <group key={idx} position={[0, 0, layer.z]}>
            {/* Plain surface */}
            <mesh rotation={[-1.2, 0, 0]}>
              <planeGeometry args={[2.5, 1.2]} />
              <meshStandardMaterial 
                color={isActive ? highlightedColor : "#ffffff"} 
                roughness={0.8}
                metalness={0.2}
                transparent
                opacity={isActive ? 0.35 : 0.08}
              />
            </mesh>
            
            {/* Border Wireframe outline */}
            <mesh rotation={[-1.2, 0, 0]} position={[0, 0, 0.01]}>
              <planeGeometry args={[2.55, 1.25]} />
              <meshBasicMaterial 
                color={isActive ? highlightedColor : "#1A2B4C"} 
                wireframe 
                transparent 
                opacity={isActive ? 0.8 : 0.3}
              />
            </mesh>

            {/* Label */}
            <Text
              position={[-1.4, -0.2, 0.1]}
              rotation={[-0.4, 0, 0]}
              fontSize={0.09}
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
