"use client";

import React from "react";
import { Sparkles, ChevronDown, ExternalLink, Play, Pause } from "lucide-react";

interface CinematicEntryProps {
  onEnter: () => void;
  onSkip: () => void;
  isMotionPaused: boolean;
  onToggleMotion: () => void;
}

export function CinematicEntry({ onEnter, onSkip, isMotionPaused, onToggleMotion }: CinematicEntryProps) {
  return (
    <div className="relative w-full h-screen bg-[#09090B] text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none z-40">
      {/* Dynamic 3D Spatial Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Top Bar Navigation & Utility Controls */}
      <header className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#DEDBC8] text-black font-bold font-mono flex items-center justify-center text-sm shadow-md">
            N
          </div>
          <span className="font-mono text-xs text-[#DEDBC8] tracking-widest uppercase">
            NEXUS // CINEMATIC NARRATIVE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMotion}
            className="px-3 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            {isMotionPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            <span>{isMotionPaused ? "Motion Paused" : "Pause Motion"}</span>
          </button>

          <a
            href="/classic"
            className="px-3 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors hidden sm:flex"
          >
            <span>View Classic Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* Center Cinematic Title & Invitation */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 my-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B]/80 border border-[#3F3F46] text-xs font-mono text-[#DEDBC8] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>CHAPTER 01-07 // THE OPERATIONAL FIELD</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.05]">
          A Connected World for Custom Software & Automation.
        </h1>

        <p className="text-base md:text-xl text-[#A1A1AA] max-w-2xl mx-auto font-sans leading-relaxed">
          Step inside the spatial narrative. Scroll to move through fragmented operations, missing visibility, and connected software architecture.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onEnter}
            className="px-8 py-3.5 rounded-full bg-[#DEDBC8] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <span>Begin Operational Journey</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={onSkip}
            className="px-6 py-3.5 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#A1A1AA] hover:text-white transition-colors"
          >
            Skip to Case Studies
          </button>
        </div>
      </div>

      {/* Bottom Cue */}
      <footer className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto text-xs font-mono text-[#52525B]">
        <span>SCROLL TO CONTROL CAMERA & DEPTH</span>
        <span>PRODUCTION BASELINE PRESERVED</span>
      </footer>
    </div>
  );
}
