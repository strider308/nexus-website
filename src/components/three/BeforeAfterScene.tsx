"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface BeforeAfterSceneProps {
  isAfter: boolean;
}

export default function BeforeAfterScene({ isAfter }: BeforeAfterSceneProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Targets for Before/After states
  // 3 planes
  const planeTargets = useMemo(() => ({
    before: [
      { pos: new THREE.Vector3(-1.0, 0.8, 0.5), rot: new THREE.Euler(-0.4, 0.3, 0.2), scale: 0.9, opacity: 0.15 },
      { pos: new THREE.Vector3(0.8, -0.4, -0.6), rot: new THREE.Euler(0.2, -0.5, -0.3), scale: 0.8, opacity: 0.1 },
      { pos: new THREE.Vector3(-0.4, -1.0, 0.2), rot: new THREE.Euler(-0.1, 0.1, 0.4), scale: 0.95, opacity: 0.12 }
    ],
    after: [
      { pos: new THREE.Vector3(0, 0.9, 0), rot: new THREE.Euler(-0.6, 0, 0), scale: 1.0, opacity: 0.25 },
      { pos: new THREE.Vector3(0, 0, 0), rot: new THREE.Euler(-0.6, 0, 0), scale: 1.0, opacity: 0.25 },
      { pos: new THREE.Vector3(0, -0.9, 0), rot: new THREE.Euler(-0.6, 0, 0), scale: 1.0, opacity: 0.25 }
    ]
  }), []);

  // 4 handoff nodes
  const nodeTargets = useMemo(() => ({
    before: [
      { pos: new THREE.Vector3(-1.8, 1.2, 0), color: "#C0392B", size: 0.08 },
      { pos: new THREE.Vector3(0.5, 0.9, -0.5), color: "#C0392B", size: 0.07 },
      { pos: new THREE.Vector3(-0.8, -0.6, 0.8), color: "#C0392B", size: 0.09 },
      { pos: new THREE.Vector3(1.6, -1.2, -0.2), color: "#C0392B", size: 0.06 }
    ],
    after: [
      { pos: new THREE.Vector3(-1.2, 0.9, 0.1), color: "#2A7D8A", size: 0.12 },
      { pos: new THREE.Vector3(-0.4, 0.0, 0.1), color: "#2E6FAD", size: 0.12 },
      { pos: new THREE.Vector3(0.4, 0.0, 0.1), color: "#2E6FAD", size: 0.12 },
      { pos: new THREE.Vector3(1.2, -0.9, 0.1), color: "#2A7D8A", size: 0.12 }
    ]
  }), []);

  // Refs
  const groupRef = useRef<THREE.Group>(null);
  const planesRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Group>(null);

  useFrame(() => {
    // Lerp logic to morph elements between states
    const targetSet = isAfter ? "after" : "before";
    const lerpSpeed = prefersReducedMotion ? 1.0 : 0.08;

    // Morph Planes
    if (planesRef.current) {
      planesRef.current.children.forEach((mesh, idx) => {
        const target = planeTargets[targetSet][idx];
        if (target) {
          mesh.position.lerp(target.pos, lerpSpeed);
          mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, target.rot.x, lerpSpeed);
          mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, target.rot.y, lerpSpeed);
          mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, target.rot.z, lerpSpeed);
          
          const mat = (mesh as THREE.Mesh).material as THREE.MeshStandardMaterial;
          if (mat) {
            mat.opacity = THREE.MathUtils.lerp(mat.opacity, target.opacity, lerpSpeed);
          }
        }
      });
    }

    // Morph Nodes
    if (nodesRef.current) {
      nodesRef.current.children.forEach((mesh, idx) => {
        const target = nodeTargets[targetSet][idx];
        if (target) {
          mesh.position.lerp(target.pos, lerpSpeed);
          const currentScale = mesh.scale.x;
          const targetScale = target.size / 0.1; // normalize size relative to geometry radius
          const newScale = THREE.MathUtils.lerp(currentScale, targetScale, lerpSpeed);
          mesh.scale.set(newScale, newScale, newScale);
          
          const mat = (mesh as THREE.Mesh).material as THREE.MeshBasicMaterial;
          if (mat) {
            mat.color.lerp(new THREE.Color(target.color), lerpSpeed);
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={0.8} />

      {/* Planes Group */}
      <group ref={planesRef}>
        {[0, 1, 2].map((idx) => (
          <mesh key={idx}>
            <planeGeometry args={[2.8, 0.6]} />
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              depthWrite={false}
              opacity={0.1}
            />
          </mesh>
        ))}
      </group>

      {/* Nodes Group */}
      <group ref={nodesRef}>
        {[0, 1, 2, 3].map((idx) => (
          <mesh key={idx}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        ))}
      </group>

      {/* Connection paths */}
      <line>
        <bufferGeometry 
          attach="geometry"
          onUpdate={(self) => {
            const positions = isAfter
              ? [-1.2, 0.9, 0.1, -0.4, 0, 0.1, 0.4, 0, 0.1, 1.2, -0.9, 0.1]
              : [-1.8, 1.2, 0, -1.0, 0.5, 0.4, 0.8, -0.2, -0.4, 1.6, -1.2, -0.2];
            self.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
          }}
        />
        <lineBasicMaterial 
          color={isAfter ? "#2A7D8A" : "#C0392B"} 
          linewidth={1} 
          opacity={0.5} 
          transparent 
        />
      </line>

      {/* Labels overlay */}
      <Text
        position={[0, 1.6, 0]}
        fontSize={0.11}
        color={isAfter ? "#2A7D8A" : "#C0392B"}
        anchorX="center"
        anchorY="middle"
      >
        {isAfter ? "RESOLVED AND ALIGNED WORKFLOW" : "SCATTERED MANUAL OPERATIONS"}
      </Text>
    </group>
  );
}
