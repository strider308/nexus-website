"use client";

import React, { useEffect, useRef, useState } from "react";
import { NEXUS_SCENE_MANIFEST } from "../config/sceneManifest";
import { SceneMediaPlaceholder } from "./SceneMediaPlaceholder";
import { SceneOverlay } from "./SceneOverlay";
import { ChapterNavigation } from "./ChapterNavigation";
import { ReducedMotionExperience } from "./ReducedMotionExperience";

export function ScrollWorldContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMotionPaused, setIsMotionPaused] = useState(false);

  // Scroll listener for scene calculation & progress tracking
  useEffect(() => {
    if (isMotionPaused) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      setScrollProgress(progress);

      // Determine active scene index from progress ratio
      const sceneIndex = NEXUS_SCENE_MANIFEST.findIndex(
        (scene) => progress >= scene.timeline.startScrollRatio && progress <= scene.timeline.endScrollRatio
      );
      if (sceneIndex !== -1 && sceneIndex !== currentSceneIndex) {
        setCurrentSceneIndex(sceneIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSceneIndex, isMotionPaused]);

  // Jump to specific scene
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

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#09090B]"
      style={{ height: `${NEXUS_SCENE_MANIFEST.length * 100}vh` }}
    >
      {/* Floating Chapter Navigation & Progress Controls */}
      <ChapterNavigation
        scenes={NEXUS_SCENE_MANIFEST}
        currentSceneIndex={currentSceneIndex}
        scrollProgress={scrollProgress}
        isMotionPaused={isMotionPaused}
        onSelectScene={handleSelectScene}
        onToggleMotion={() => setIsMotionPaused(!isMotionPaused)}
      />

      {/* Pinned Sticky Viewport (100vh) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {NEXUS_SCENE_MANIFEST.map((scene, idx) => {
          const isActive = idx === currentSceneIndex;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Media Diorama Background */}
              <SceneMediaPlaceholder scene={scene} isActive={isActive} />

              {/* Accessible Content Overlay */}
              <SceneOverlay scene={scene} isActive={isActive} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
