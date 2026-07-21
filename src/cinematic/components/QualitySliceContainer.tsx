"use client";

import React, { useState } from "react";
import { CinematicEntry } from "./CinematicEntry";
import { FractureScene } from "./FractureScene";
import { VisibilityScene } from "./VisibilityScene";
import { ReducedMotionExperience } from "./ReducedMotionExperience";
import { ArrowLeft, Play, Pause, ExternalLink } from "lucide-react";
import Link from "next/link";

export function QualitySliceContainer() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMotionPaused, setIsMotionPaused] = useState(false);

  if (isMotionPaused) {
    return <ReducedMotionExperience />;
  }

  if (!hasEntered) {
    return (
      <CinematicEntry
        onEnter={() => setHasEntered(true)}
        onSkip={() => {
          setHasEntered(true);
          // Durable route navigation to demo / case studies
          window.location.href = "/demo";
        }}
        isMotionPaused={isMotionPaused}
        onToggleMotion={() => setIsMotionPaused(!isMotionPaused)}
      />
    );
  }

  return (
    <div className="relative w-full bg-[#09090B] text-white">
      {/* Quality Slice Floating Header Track */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2.5 rounded-full bg-[#18181B]/90 border border-[#27272A] shadow-2xl backdrop-blur-xl flex items-center gap-6 text-xs font-mono select-none">
        <Link href="/" className="text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Chooser</span>
        </Link>

        <span className="w-px h-4 bg-[#27272A]" />

        <span className="text-[#DEDBC8] font-bold">NEXUS QUALITY SLICE // CHAPTERS 01-03</span>

        <span className="w-px h-4 bg-[#27272A]" />

        <button
          onClick={() => setIsMotionPaused(!isMotionPaused)}
          className="text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors"
        >
          {isMotionPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          <span>{isMotionPaused ? "Motion Off" : "Motion Active"}</span>
        </button>

        <Link
          href="/classic"
          className="px-2.5 py-1 rounded-full bg-[#27272A] text-[#DEDBC8] hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>Classic</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </nav>

      {/* Quality Slice Pinned Scrollytelling Sections */}
      <main className="w-full flex flex-col">
        {/* Section 1: Fracture Scene (Dedicated GSAP Timeline) */}
        <FractureScene />

        {/* Section 2: Visibility Scene (Continuous Handoff GSAP Timeline) */}
        <VisibilityScene />
      </main>
    </div>
  );
}
