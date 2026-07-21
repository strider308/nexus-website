"use client";

import React, { useEffect, useRef, useState } from "react";
import { NEXUS_SCENE_MANIFEST } from "../config/sceneManifest";
import { OperationalField } from "./OperationalField";
import { SceneOverlay } from "./SceneOverlay";
import { ChapterNavigation } from "./ChapterNavigation";
import { ReducedMotionExperience } from "./ReducedMotionExperience";
import { CinematicEntry } from "./CinematicEntry";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollWorldContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  
  const [hasEntered, setHasEntered] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMotionPaused, setIsMotionPaused] = useState(false);

  // GSAP ScrollTrigger Scrollytelling Setup
  useEffect(() => {
    if (isMotionPaused || !hasEntered || !containerRef.current || !viewportRef.current) return;

    const ctx = gsap.context(() => {
      // Create pinned ScrollTrigger timeline spanning 700vh
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: viewportRef.current,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          // Calculate active scene index
          const idx = NEXUS_SCENE_MANIFEST.findIndex(
            (scene) => progress >= scene.timeline.startScrollRatio && progress <= scene.timeline.endScrollRatio
          );
          if (idx !== -1 && idx !== currentSceneIndex) {
            setCurrentSceneIndex(idx);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hasEntered, isMotionPaused, currentSceneIndex]);

  // Jump to specific scene index
  const handleSelectScene = (index: number) => {
    if (!containerRef.current) return;
    const targetScene = NEXUS_SCENE_MANIFEST[index];
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = containerRef.current.offsetTop + targetScene.timeline.startScrollRatio * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  if (isMotionPaused) {
    return <ReducedMotionExperience />;
  }

  if (!hasEntered) {
    return (
      <CinematicEntry
        onEnter={() => setHasEntered(true)}
        onSkip={() => {
          setHasEntered(true);
          setTimeout(() => handleSelectScene(3), 100);
        }}
        isMotionPaused={isMotionPaused}
        onToggleMotion={() => setIsMotionPaused(!isMotionPaused)}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#09090B]"
      style={{ height: `${NEXUS_SCENE_MANIFEST.length * 100}vh` }}
    >
      {/* Floating Chapter Navigation & Progress Bar */}
      <ChapterNavigation
        scenes={NEXUS_SCENE_MANIFEST}
        currentSceneIndex={currentSceneIndex}
        scrollProgress={scrollProgress}
        isMotionPaused={isMotionPaused}
        onSelectScene={handleSelectScene}
        onToggleMotion={() => setIsMotionPaused(!isMotionPaused)}
      />

      {/* Pinned Sticky Viewport (100dvh) */}
      <div
        ref={viewportRef}
        className="w-full h-screen h-[100dvh] overflow-hidden flex items-center justify-center relative"
      >
        {NEXUS_SCENE_MANIFEST.map((scene, idx) => {
          const isActive = idx === currentSceneIndex;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"
              }`}
            >
              {/* 3D Operational Field Spatial Backdrop */}
              <OperationalField scene={scene} progress={scrollProgress} isActive={isActive} />

              {/* Accessible Content Overlay */}
              <SceneOverlay scene={scene} isActive={isActive} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
