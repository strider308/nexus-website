"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { useCinematic3D } from "./Cinematic3DProvider";

// Let's import the nodes from config.ts:
import { HERO_CHAPTER as HERO_CONFIG } from "@/lib/cinematic-3d/config";

export function NexusOperatingField() {
  const { reducedMotion } = useCinematic3D();
  const { pointer, viewport } = useThree();

  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const nodeGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (reducedMotion) return;

    const time = state.clock.getElapsedTime();

    // 1. Slow central Nexus core pulse
    if (coreRef.current) {
      const scale = 1.0 + 0.05 * Math.sin(time * 1.5);
      coreRef.current.scale.set(scale, scale, scale);
    }

    // 2. Parallax camera rig on pointer move (smooth LERPed camera rotation/shift)
    if (groupRef.current) {
      const targetX = (pointer.x * viewport.width) / 20;
      const targetY = (pointer.y * viewport.height) / 20;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }

    // 3. Subtle floating ambient motion on nodes
    if (nodeGroupRef.current) {
      nodeGroupRef.current.children.forEach((child, idx) => {
        if (child instanceof THREE.Group) {
          child.position.y = child.position.y + 0.001 * Math.sin(time + idx);
        }
      });
    }
  });

  const nodes = HERO_CONFIG.nodes;

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 2]} intensity={1.0} />
      <pointLight position={[0, 0, 1]} intensity={0.8} color="#2E6FAD" />

      {/* Central Nexus Core Sphere */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial color="#2E6FAD" toneMapped={false} />
      </mesh>
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.15}
        color="#2E6FAD"
        font="/fonts/monospace" // Fallback to system sans if not found
        anchorX="center"
        anchorY="middle"
      >
        NEXUS
      </Text>

      {/* Scattered inputs converging (Left Side) */}
      <group ref={nodeGroupRef}>
        {nodes.map((node, idx) => {
          // Left Side Nodes
          const startX = -2.4;
          return (
            <group key={idx} position={[startX, node.y, 0]}>
              {/* Spherical node */}
              <mesh>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshBasicMaterial color={node.color} />
              </mesh>
              {/* Labeled text in monospace */}
              <Text
                position={[-0.2, 0, 0]}
                fontSize={0.11}
                color="#E1E0CC"
                anchorX="right"
                anchorY="middle"
              >
                {node.label}
              </Text>
              
              {/* Connective Line to Nexus Core */}
              <line>
                <bufferGeometry
                  attach="geometry"
                  onUpdate={(self) =>
                    self.setFromPoints([
                      new THREE.Vector3(0, 0, 0),
                      new THREE.Vector3(-startX, -node.y, 0),
                    ])
                  }
                />
                <lineBasicMaterial color={node.color} linewidth={1} opacity={0.3} transparent />
              </line>
            </group>
          );
        })}
      </group>

      {/* 3D Depth Grid Plane (Floor reference) */}
      <gridHelper
        args={[10, 10, "#2E6FAD", "#1A2B4C"]}
        position={[0, -1.8, -0.5]}
        rotation={[1.4, 0, 0]}
      >
        <lineBasicMaterial attach="material" opacity={0.35} transparent />
      </gridHelper>
    </group>
  );
}
