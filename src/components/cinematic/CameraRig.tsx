"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { getCameraPointForProgress, ChapterRange } from "@/lib/cinematic/chapter-map";

interface CameraRigProps {
  scrollRef: React.RefObject<number>;
  rangesRef: React.RefObject<ChapterRange[]>;
}

export function CameraRig({ scrollRef, rangesRef }: CameraRigProps) {
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    if (typeof document !== "undefined" && document.hidden) return;

    const progress = scrollRef.current ?? 0;
    const ranges = rangesRef.current ?? [];
    const pt = getCameraPointForProgress(progress, ranges);
    
    // Frame-rate independent delta-aware damping for position (position damping lambda = 8.5)
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, pt.position[0], 8.5, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, pt.position[1], 8.5, delta);
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, pt.position[2], 8.5, delta);
    
    // Frame-rate independent delta-aware damping for look target (look-target damping lambda = 10)
    currentTarget.current.x = THREE.MathUtils.damp(currentTarget.current.x, pt.target[0], 10, delta);
    currentTarget.current.y = THREE.MathUtils.damp(currentTarget.current.y, pt.target[1], 10, delta);
    currentTarget.current.z = THREE.MathUtils.damp(currentTarget.current.z, pt.target[2], 10, delta);
    
    state.camera.lookAt(currentTarget.current);
  });

  return null;
}
export default CameraRig;
