"use client";

import React, { useState } from "react";
import { CHAPTER_CONFIGS } from "@/lib/cinematic/config";

import { useMotionPreference } from "@/components/providers/MotionPreferenceProvider";

interface NarrativeControlsProps {
  activeChapter: number;
  isMotionPaused: boolean;
  onToggleMotion: () => void;
  onSkipExperience: () => void;
}

export function NarrativeControls({
  activeChapter,
  isMotionPaused,
  onToggleMotion,
  onSkipExperience,
}: NarrativeControlsProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { shouldReduceMotion } = useMotionPreference();

  const configs = Object.values(CHAPTER_CONFIGS).sort((a, b) => a.index - b.index);

  const handleJumpToChapter = (index: number) => {
    const element = document.querySelector(`[data-chapter-index="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-8 select-none max-w-[200px]">
      {/* 1. Skip Experience Button */}
      <button
        onClick={onSkipExperience}
        className="bg-[#0d0d0d]/80 border border-[#dedbc8]/20 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-[color,background-color,border-color,box-shadow] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] outline-none focus:ring-2 focus:ring-[#dedbc8] rounded shadow-lg"
        aria-label="Skip to final conversation"
      >
        Skip Experience
      </button>

      {/* 2. Keyboard-Accessible Chapter Navigator */}
      <nav 
        className="flex flex-col items-end gap-4 bg-[#0d0d0d]/80 border border-[#dedbc8]/14 p-4 rounded shadow-lg"
        aria-label="Narrative Progress"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 font-bold block">
          Chapters
        </span>
        <div className="flex flex-col gap-3.5">
          {configs.map((config) => {
            const isActive = activeChapter === config.index;
            const isHovered = hoveredIdx === config.index;

            return (
              <div 
                key={config.id}
                className="flex items-center gap-3 justify-end relative"
                onMouseEnter={() => setHoveredIdx(config.index)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Hover Labels */}
                <span 
                  className={`font-mono text-xs uppercase tracking-wider text-right transition-[opacity,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] absolute right-6 whitespace-nowrap bg-[#0d0d0d] px-2 py-1 border border-[#dedbc8]/10 rounded shadow-md pointer-events-none ${
                    isHovered || isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                  } ${isActive ? "text-[#dedbc8] border-[#dedbc8]/30 font-bold" : "text-gray-400"}`}
                >
                  {config.title}
                </span>

                {/* Interactive Indicator Dot */}
                <button
                  onClick={() => handleJumpToChapter(config.index)}
                  className={`w-2.5 h-2.5 rounded-full transition-[color,background-color,border-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] border focus:ring-2 focus:ring-[#dedbc8] outline-none ${
                    isActive 
                      ? "bg-[#dedbc8] border-[#dedbc8] scale-125" 
                      : "bg-[#070707] border-gray-600 hover:border-[#dedbc8]"
                  }`}
                  aria-label={`Jump to ${config.title}`}
                  aria-current={isActive ? "step" : undefined}
                />
              </div>
            );
          })}
        </div>
      </nav>

      {/* 3. Pause / Resume Motion Toggle */}
      <button
        onClick={onToggleMotion}
        className="bg-[#0d0d0d]/80 border border-[#dedbc8]/20 px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#dedbc8] hover:border-[#dedbc8] transition-[color,border-color] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] flex items-center gap-1.5 outline-none focus:ring-2 focus:ring-[#dedbc8] rounded shadow-lg"
        aria-label={isMotionPaused ? "Resume page animations" : "Pause page animations and WebGL"}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        {isMotionPaused ? "Resume Motion" : "Pause Motion"}
      </button>
    </div>
  );
}
export default NarrativeControls;
