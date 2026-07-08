"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WorkflowNodeProps {
  position: [number, number, number];
  color: string;
  size?: number;
  pulseSpeed?: number;
}

export function WorkflowNode({
  position,
  color,
  size = 0.15,
  pulseSpeed = 2
}: WorkflowNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Controlled pulsing
    const scaleFactor = 1 + 0.1 * Math.sin(state.clock.elapsedTime * pulseSpeed);
    meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position}
    >
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial 
        color={color} 
        toneMapped={false}
      />
    </mesh>
  );
}
