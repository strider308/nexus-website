"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { useCinematic3D } from "./Cinematic3DProvider";

interface BlueprintStackFieldProps {
  activeService: number | null;
}

const LAYERS = [
  { id: 6, title: "Handoff & Docs", color: "#1A2B4C" },
  { id: 5, title: "Dashboards", color: "#2E6FAD" },
  { id: 4, title: "Automation", color: "#2A7D8A" },
  { id: 3, title: "Roles & Permissions", color: "#2E6FAD" },
  { id: 2, title: "Workflow Rules", color: "#F39C12" },
  { id: 1, title: "Inputs", color: "#C0392B" },
];

const HIGHLIGHTS: Record<number, number[]> = {
  0: [1, 2, 3], // Custom Workflow Systems: Inputs, Logic, Access
  1: [2, 4],    // Automation Layers: Logic, Actions
  2: [2, 3, 6], // Private Beta Builds: Logic, Access, Deploy
  3: [5],       // Owner Dashboards: Visibility
};

export function BlueprintStackField({ activeService }: BlueprintStackFieldProps) {
  const { reducedMotion, isMobile } = useCinematic3D();
  const { pointer, viewport } = useThree();

  const groupRef = useRef<THREE.Group>(null);
  const stackRef = useRef<THREE.Group>(null);

  // Checks if a layer is highlighted by the active service
  const isLayerHighlighted = (layerId: number) => {
    if (activeService === null) return false;
    const activeLayers = HIGHLIGHTS[activeService];
    return activeLayers ? activeLayers.includes(layerId) : false;
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Camera Parallax Rig
    if (groupRef.current && !reducedMotion && !isMobile) {
      const targetX = (pointer.x * viewport.width) / 18;
      const targetY = (pointer.y * viewport.height) / 18;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      // Subtle tilt rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.15, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.15, 0.05);
    }

    // 2. Animate layers (Shift forward on Z and light up when active, or float slightly when idle)
    if (stackRef.current && !reducedMotion) {
      stackRef.current.children.forEach((child, idx) => {
        const layer = LAYERS[idx];
        const highlighted = isLayerHighlighted(layer.id);

        // Target offsets
        const targetZ = highlighted ? 0.4 : 0.0;
        const targetScaleX = highlighted ? 1.08 : 1.0;

        // Apply LERP transition
        child.position.z = THREE.MathUtils.lerp(child.position.z, targetZ, 0.1);
        child.scale.x = THREE.MathUtils.lerp(child.scale.x, targetScaleX, 0.1);
        
        // Gentle hovering wave rotation for active/all cards
        const hoverOffset = Math.sin(time * 1.5 + idx * 0.5) * 0.02;
        child.rotation.y = THREE.MathUtils.lerp(child.rotation.y, highlighted ? hoverOffset * 1.5 : hoverOffset, 0.05);
      });
    }
  });

  return (
    <group ref={groupRef} rotation={[0.1, -0.2, 0]}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} />

      {/* Layer stack */}
      <group ref={stackRef}>
        {LAYERS.map((layer, idx) => {
          const highlighted = isLayerHighlighted(layer.id);
          // Y positioning offset from top (+1.2) to bottom (-1.2)
          const yPos = 1.2 - idx * 0.48;

          return (
            <group key={layer.id} position={[0, yPos, 0]}>
              {/* Slab Mesh */}
              <mesh>
                <boxGeometry args={[3.2, 0.08, 1.8]} />
                <meshStandardMaterial 
                  color={highlighted ? "#2A7D8A" : "#121212"} 
                  roughness={0.2}
                  metalness={0.8}
                  emissive={highlighted ? "#2A7D8A" : "#1A2B4C"}
                  emissiveIntensity={highlighted ? 0.6 : 0.05}
                />
              </mesh>

              {/* Glowing Wireframe Edge */}
              <mesh scale={[1.002, 1.02, 1.002]}>
                <boxGeometry args={[3.2, 0.08, 1.8]} />
                <meshBasicMaterial 
                  color={highlighted ? "#2E6FAD" : "#222222"} 
                  wireframe
                  transparent
                  opacity={highlighted ? 0.8 : 0.2}
                />
              </mesh>

              {/* Monochrome Monospace Labels */}
              <Text
                position={[0, 0.06, 0.0]}
                rotation={[-1.57, 0, 0]} // rotate text to lie flat on the slab
                fontSize={0.11}
                color={highlighted ? "#ffffff" : "#DEDBC8"}
                fillOpacity={highlighted ? 0.9 : 0.4}
                anchorX="center"
                anchorY="middle"
              >
                {layer.title.toUpperCase()}
              </Text>
            </group>
          );
        })}
      </group>

      {/* Stack base grid reference */}
      <gridHelper args={[8, 8, "#2A7D8A", "#1A2B4C"]} position={[0, -1.8, -0.5]} rotation={[1.4, 0, 0]}>
        <lineBasicMaterial attach="material" opacity={0.15} transparent />
      </gridHelper>
    </group>
  );
}
