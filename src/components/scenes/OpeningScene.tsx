"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { ChapterRange } from "@/lib/cinematic/chapter-map";

interface SceneProps {
  scrollRef: React.RefObject<number>;
  rangesRef: React.RefObject<ChapterRange[]>;
}

export function OpeningScene({ scrollRef, rangesRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state, delta) => {
    if (typeof document !== "undefined" && document.hidden) return;

    const scrollProgress = scrollRef.current ?? 0;
    const ranges = rangesRef.current ?? [];

    let localProgress = 0;
    if (ranges.length > 0) {
      const openingRange = ranges[0];
      localProgress = (scrollProgress - openingRange.start) / (openingRange.end - openingRange.start);
      localProgress = Math.max(0, Math.min(1, localProgress));
    } else {
      localProgress = Math.max(0, Math.min(1, scrollProgress / 0.14));
    }

    const eased = THREE.MathUtils.smoothstep(localProgress, 0, 1);

    // Apply final hidden state before skipping frame calculations
    if (eased >= 0.999) {
      if (materialRef.current) materialRef.current.opacity = 0;
      if (gridRef.current && gridRef.current.material) {
        (gridRef.current.material as THREE.Material).opacity = 0;
      }
      if (groupRef.current) {
        groupRef.current.scale.setScalar(0.92);
        groupRef.current.position.z = -0.6;
      }
      return;
    }

    let targetOpacity = 1;
    let targetScale = 1;
    let targetZ = 0;

    if (eased <= 0.55) {
      const t = eased / 0.55;
      targetOpacity = 1 - 0.2 * t;
      targetScale = 1 + 0.04 * t;
      targetZ = -0.1 * t;
    } else {
      const t = (eased - 0.55) / 0.45;
      targetOpacity = 0.8 * (1 - t);
      targetScale = 1.04 - 0.12 * t;
      targetZ = -0.1 - 0.5 * t;
    }

    if (materialRef.current) {
      materialRef.current.opacity = THREE.MathUtils.damp(materialRef.current.opacity, targetOpacity, 8, delta);
    }
    if (gridRef.current && gridRef.current.material) {
      const gridMat = gridRef.current.material as THREE.Material;
      gridMat.opacity = THREE.MathUtils.damp(gridMat.opacity, targetOpacity * 0.15, 8, delta);
    }

    if (groupRef.current) {
      // Incremental slow rotation
      groupRef.current.rotation.y += delta * 0.2;
      
      const currentScale = groupRef.current.scale.x;
      const nextScale = THREE.MathUtils.damp(currentScale, targetScale, 8, delta);
      groupRef.current.scale.setScalar(nextScale);

      groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 8, delta);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Operating Core sphere */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial 
          ref={materialRef} 
          color="#dedbc8" 
          transparent 
          wireframe
        />
      </mesh>

      {/* Subtle floor grid reference */}
      <gridHelper 
        ref={gridRef} 
        args={[10, 10, "#dedbc8", "#2e6fad"]} 
        position={[0, -1.2, 0]}
      >
        <lineBasicMaterial attach="material" transparent depthWrite={false} />
      </gridHelper>
    </group>
  );
}
export default OpeningScene;
