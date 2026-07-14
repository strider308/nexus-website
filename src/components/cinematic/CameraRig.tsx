"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { getCameraPointForProgress } from "@/lib/cinematic/chapter-map";

interface CameraRigProps {
  scrollProgress: number;
}

export function CameraRig({ scrollProgress }: CameraRigProps) {
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    const pt = getCameraPointForProgress(scrollProgress);
    
    // 1. Interpolate camera position
    const targetPos = new THREE.Vector3(...pt.position);
    state.camera.position.lerp(targetPos, 0.08);
    
    // 2. Interpolate looking target point
    const targetLook = new THREE.Vector3(...pt.target);
    currentTarget.current.lerp(targetLook, 0.08);
    state.camera.lookAt(currentTarget.current);
  });

  return null;
}
