"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { getCameraPointForProgress } from "@/lib/cinematic/chapter-map";

interface CameraRigProps {
  scrollRef: React.RefObject<number>;
}

export function CameraRig({ scrollRef }: CameraRigProps) {
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const targetPosVec = useRef(new THREE.Vector3(0, 0, 0));
  const targetLookVec = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    if (typeof document !== "undefined" && document.hidden) return;

    const progress = scrollRef.current ?? 0;
    const pt = getCameraPointForProgress(progress);
    
    // 1. Interpolate camera position using pre-allocated vector ref
    targetPosVec.current.set(pt.position[0], pt.position[1], pt.position[2]);
    state.camera.position.lerp(targetPosVec.current, 0.08);
    
    // 2. Interpolate looking target point using pre-allocated vector ref
    targetLookVec.current.set(pt.target[0], pt.target[1], pt.target[2]);
    currentTarget.current.lerp(targetLookVec.current, 0.08);
    state.camera.lookAt(currentTarget.current);
  });

  return null;
}
export default CameraRig;
