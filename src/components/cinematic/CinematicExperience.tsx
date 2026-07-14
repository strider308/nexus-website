"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { usePerformanceTier } from "@/hooks/usePerformanceTier";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ScrollDirector } from "./ScrollDirector";
import { CinematicFallback } from "./CinematicFallback";

const CinematicCanvas = dynamic(() => import("./CinematicCanvas"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#070707] z-0" />
});

interface CinematicExperienceProps {
  children: React.ReactNode;
}

export function CinematicExperience({ children }: CinematicExperienceProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const tier = usePerformanceTier();
  const reducedMotion = useReducedMotion();

  // Force fallback static 2D design for low-tier devices or users who prefer reduced motion
  const quality = reducedMotion ? "fallback" : tier;

  return (
    <div className="relative min-h-screen bg-[#070707]">
      {/* 1. Scroll Director (coordinates scroll percentage via GSAP ScrollTrigger) */}
      <ScrollDirector onProgress={setScrollProgress} />

      {/* 2. Unified Background Scene Layer (Canvas or SVG Fallback) */}
      {quality === "fallback" ? (
        <div className="fixed inset-0 z-0 pointer-events-none select-none">
          <CinematicFallback scrollProgress={scrollProgress} />
        </div>
      ) : (
        <CinematicCanvas scrollProgress={scrollProgress} qualityTier={quality} />
      )}

      {/* 3. HTML Narrative Chapters Container (scrolling naturally above WebGL) */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
export default CinematicExperience;
