"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { SceneLighting } from "./SceneLighting";
import { CameraRig } from "./CameraRig";
import { SceneQualityManager } from "./SceneQualityManager";
import { WebGLErrorBoundary } from "./WebGLErrorBoundary";
import { CinematicFallback } from "./CinematicFallback";

// Import scenes
import { OpeningScene } from "../scenes/OpeningScene";
import { FragmentedWorkflowScene } from "../scenes/FragmentedWorkflowScene";
import { MappingSystemScene } from "../scenes/MappingSystemScene";
import { ArchitectureScene } from "../scenes/ArchitectureScene";
import { ProofSystemsScene } from "../scenes/ProofSystemsScene";
import { FinalAssemblyScene } from "../scenes/FinalAssemblyScene";

interface CinematicCanvasProps {
  scrollRef: React.RefObject<number>;
  activeChapter: number;
  qualityTier: "high" | "balanced" | "low" | "fallback";
}

export function CinematicCanvas({ scrollRef, activeChapter, qualityTier }: CinematicCanvasProps) {
  // If fallback tier is detected, render 2D SVG directly with zero WebGL overhead
  if (qualityTier === "fallback") {
    return <CinematicFallback activeChapter={activeChapter} />;
  }

  const dpr = qualityTier === "high" ? 1.5 : qualityTier === "balanced" ? 1.2 : 1.0;

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
      <WebGLErrorBoundary fallback={<CinematicFallback activeChapter={activeChapter} />}>
        <Canvas
          camera={{ fov: 45, near: 0.1, far: 20, position: [0, 0, 5] }}
          dpr={[1, dpr]}
          gl={{
            antialias: qualityTier !== "low",
            alpha: true,
            powerPreference: "low-power",
            preserveDrawingBuffer: false,
          }}
          style={{ width: "100%", height: "100%" }}
          aria-hidden="true"
        >
          {/* Quality Manager & Performance Watcher */}
          <SceneQualityManager />

          {/* Unified Lights */}
          <SceneLighting />

          {/* Camera Interpolator Rig */}
          <CameraRig scrollRef={scrollRef} />

          {/* Cinematic R3F Scenes */}
          <group>
            <OpeningScene scrollRef={scrollRef} />
            <FragmentedWorkflowScene scrollRef={scrollRef} />
            <MappingSystemScene scrollRef={scrollRef} />
            <ArchitectureScene scrollRef={scrollRef} />
            <ProofSystemsScene scrollRef={scrollRef} />
            <FinalAssemblyScene scrollRef={scrollRef} />
          </group>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
export default CinematicCanvas;
