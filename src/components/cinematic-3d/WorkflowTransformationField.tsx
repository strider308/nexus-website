"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { useCinematic3D } from "./Cinematic3DProvider";

interface WorkflowTransformationFieldProps {
  isAfter: boolean;
}

const NODES = [
  { label: "Tools", leftY: 1.1, leftX: -2.3, rightY: 1.0, color: "#C0392B" },
  { label: "Handoffs", leftY: 0.5, leftX: -2.0, rightY: 0.5, color: "#F39C12" },
  { label: "Visibility", leftY: -0.1, leftX: -2.4, rightY: 0.0, color: "#2A7D8A" },
  { label: "Alerts", leftY: -0.6, leftX: -1.9, rightY: -0.5, color: "#2E6FAD" },
  { label: "Memory", leftY: -1.2, leftX: -2.2, rightY: -1.0, color: "#D35400" },
];

export function WorkflowTransformationField({ isAfter }: WorkflowTransformationFieldProps) {
  const { reducedMotion, isMobile } = useCinematic3D();
  const { pointer, viewport } = useThree();

  const groupRef = useRef<THREE.Group>(null);
  const leftNodesRef = useRef<THREE.Group>(null);
  const rightNodesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Camera Parallax (Desktop/normal motion only)
    if (groupRef.current && !reducedMotion && !isMobile) {
      const targetX = (pointer.x * viewport.width) / 20;
      const targetY = (pointer.y * viewport.height) / 20;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }

    // 2. Animate "Before" nodes (Drifting chaos when isAfter is false, converging when isAfter is true)
    if (leftNodesRef.current && !reducedMotion) {
      leftNodesRef.current.children.forEach((child, idx) => {
        const node = NODES[idx];
        // Jitter drift amplitude
        const driftX = Math.sin(time * 1.5 + idx) * 0.08;
        const driftY = Math.cos(time * 1.2 + idx) * 0.08;

        // Target coordinates based on transition toggle
        const targetX = isAfter ? 0 : node.leftX; // converge to center mapping plane
        const targetY = isAfter ? 0 : node.leftY;

        child.position.x = THREE.MathUtils.lerp(child.position.x, targetX + (isAfter ? 0 : driftX), 0.08);
        child.position.y = THREE.MathUtils.lerp(child.position.y, targetY + (isAfter ? 0 : driftY), 0.08);
        
        // Scale down slightly when converged
        const targetScale = isAfter ? 0.3 : 1;
        child.scale.setScalar(THREE.MathUtils.lerp(child.scale.x, targetScale, 0.08));
      });
    }

    // 3. Animate "After" nodes (Light up and scale up when isAfter is true)
    if (rightNodesRef.current && !reducedMotion) {
      rightNodesRef.current.children.forEach((child) => {
        const targetScale = isAfter ? 1.0 : 0.2;
        child.scale.setScalar(THREE.MathUtils.lerp(child.scale.x, targetScale, 0.08));
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Central Mapping Plane/Overlay */}
      <mesh position={[0, 0, -0.2]} rotation={[0, 0.2, 0]}>
        <planeGeometry args={[1.2, 3.2]} />
        <meshBasicMaterial 
          color="#2A7D8A" 
          opacity={isAfter ? 0.25 : 0.08} 
          transparent 
          wireframe
        />
      </mesh>
      <Text
        position={[0, 1.8, 0]}
        fontSize={0.12}
        color="#2A7D8A"
        anchorX="center"
        anchorY="middle"
      >
        NEXUS MAP
      </Text>

      {/* Before Nodes Group (Left Column) */}
      <group ref={leftNodesRef}>
        {NODES.map((node, idx) => (
          <group key={idx} position={[node.leftX, node.leftY, 0]}>
            {/* Scattered dot */}
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={node.color} />
            </mesh>
            <Text
              position={[-0.15, 0, 0]}
              fontSize={0.09}
              color="#ffffff"
              fillOpacity={isAfter ? 0.2 : 0.6}
              anchorX="right"
              anchorY="middle"
            >
              {node.label}
            </Text>
          </group>
        ))}
      </group>

      {/* After Nodes Group (Right Column) */}
      <group ref={rightNodesRef}>
        {NODES.map((node, idx) => (
          <group key={idx} position={[2.0, node.rightY, 0]}>
            {/* Organized glowing blocks */}
            <mesh>
              <boxGeometry args={[0.15, 0.1, 0.15]} />
              <meshBasicMaterial 
                color={isAfter ? "#2A7D8A" : "#1A2B4C"} 
                toneMapped={false} 
              />
            </mesh>
            <Text
              position={[0.18, 0, 0]}
              fontSize={0.09}
              color="#ffffff"
              fillOpacity={isAfter ? 0.7 : 0.15}
              anchorX="left"
              anchorY="middle"
            >
              {node.label}
            </Text>
          </group>
        ))}
      </group>

      {/* Connective Line segments */}
      {NODES.map((node, idx) => (
        <line key={idx}>
          <bufferGeometry
            attach="geometry"
            onUpdate={(self) => {
              self.setFromPoints([
                new THREE.Vector3(node.leftX, node.leftY, 0),
                new THREE.Vector3(0, (node.leftY + node.rightY) / 2, 0),
                new THREE.Vector3(2.0, node.rightY, 0),
              ]);
            }}
          />
          <lineBasicMaterial 
            color={node.color} 
            opacity={isAfter ? 0.35 : 0.1} 
            transparent 
          />
        </line>
      ))}

      {/* Grid Floor reference */}
      <gridHelper args={[8, 8, "#2A7D8A", "#1A2B4C"]} position={[0, -1.8, -0.5]} rotation={[1.4, 0, 0]}>
        <lineBasicMaterial attach="material" opacity={0.2} transparent />
      </gridHelper>
    </group>
  );
}
