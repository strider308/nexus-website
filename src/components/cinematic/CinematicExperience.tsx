"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { usePerformanceTier } from "@/hooks/usePerformanceTier";
import { ScrollDirector } from "./ScrollDirector";
import { CinematicFallback } from "./CinematicFallback";
import { NarrativeControls } from "./NarrativeControls";
import { ChapterRange } from "@/lib/cinematic/chapter-map";

const CinematicCanvas = dynamic(() => import("./CinematicCanvas"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-[#070707] z-0 flex items-center justify-center pointer-events-none select-none">
      <svg className="w-80 h-80 opacity-[0.08] animate-pulse" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="25" fill="none" stroke="#dedbc8" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="0.8" fill="#dedbc8" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#dedbc8" strokeWidth="0.1" strokeDasharray="2 2" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="#dedbc8" strokeWidth="0.1" strokeDasharray="2 2" />
      </svg>
    </div>
  )
});

interface CinematicExperienceProps {
  children: React.ReactNode;
}

import { useMotionPreference } from "@/components/providers/MotionPreferenceProvider";

export function CinematicExperience({ children }: CinematicExperienceProps) {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const { isPaused: isMotionPaused, togglePaused: handleToggleMotion, shouldReduceMotion: reducedMotion } = useMotionPreference();
  const scrollProgressRef = React.useRef<number>(0);
  const tier = usePerformanceTier();

  const handleSkipExperience = () => {
    // Scroll directly to the final chapter
    const element = document.querySelector('[data-chapter-index="6"]');
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  const rangesRef = React.useRef<ChapterRange[]>([]);

  // Force fallback static 2D design for low-tier devices, reduced motion, or paused motion
  const quality = (reducedMotion || isMotionPaused) ? "fallback" : tier;

  return (
    <div className="relative min-h-screen bg-[#070707]">
      {/* 1. Scroll Director (coordinates scroll percentage via GSAP ScrollTrigger) */}
      <ScrollDirector scrollRef={scrollProgressRef} rangesRef={rangesRef} onChapterChange={setActiveChapter} />

      {/* 2. Unified Background Scene Layer (Canvas or SVG Fallback) */}
      {quality === "fallback" ? (
        <div className="fixed inset-0 z-0 pointer-events-none select-none">
          <CinematicFallback activeChapter={activeChapter} />
        </div>
      ) : (
        <CinematicCanvas scrollRef={scrollProgressRef} rangesRef={rangesRef} activeChapter={activeChapter} qualityTier={quality} />
      )}

      {/* 3. Narrative UI Controls overlay */}
      <NarrativeControls
        activeChapter={activeChapter}
        isMotionPaused={isMotionPaused}
        onToggleMotion={handleToggleMotion}
        onSkipExperience={handleSkipExperience}
      />

      {/* 4. HTML Narrative Chapters Container (scrolling naturally above WebGL) */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
export default CinematicExperience;
