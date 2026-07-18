"use client";
import React from "react";
import { CHAPTER_CONFIGS } from "@/lib/cinematic/config";
import { useMotionPreference } from "@/components/providers/MotionPreferenceProvider";

interface NarrativeControlsProps {
  activeChapter: number;
  onSkipExperience: () => void;
}

export function NarrativeControls({
  activeChapter,
  onSkipExperience,
}: NarrativeControlsProps) {
  const { shouldReduceMotion } = useMotionPreference();

  const configs = Object.values(CHAPTER_CONFIGS).sort((a, b) => a.index - b.index);

  const handleJumpToChapter = (index: number) => {
    const element = document.querySelector(`[data-chapter-index="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <>
      {/* Mobile/Tablet Compact Skip Control (Unobtrusive floating corner button) */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <button
          onClick={onSkipExperience}
          data-motion="interaction"
          className="bg-[#0d0d0d]/90 border border-[#dedbc8]/20 px-3.5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.98] disabled:active:scale-100 outline-none focus:ring-2 focus:ring-[#dedbc8] rounded shadow-lg"
          aria-label="Skip to final conversation"
        >
          Skip Experience
        </button>
      </div>

      {/* Desktop/Wide Tablet Control Rail */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-6 select-none max-w-[200px]">
        {/* Skip Experience Button */}
        <button
          onClick={onSkipExperience}
          data-motion="interaction"
          className="bg-[#0d0d0d]/80 border border-[#dedbc8]/20 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.98] disabled:active:scale-100 outline-none focus:ring-2 focus:ring-[#dedbc8] rounded shadow-lg"
          aria-label="Skip to final conversation"
        >
          Skip Experience
        </button>

        {/* Keyboard-Accessible Chapter Navigator */}
        <nav
          className="flex flex-col items-end gap-4 bg-[#0d0d0d]/80 border border-[#dedbc8]/14 p-4 rounded shadow-lg"
          aria-label="Narrative Progress"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1 font-bold block">
            Chapters
          </span>
          <div className="flex flex-col gap-1">
            {configs.map((config) => {
              const isActive = activeChapter === config.index;

              return (
                <div
                  key={config.id}
                  className="group/indicator flex items-center gap-3 justify-end relative"
                >
                  {/* Hover / Active Label */}
                  <span
                    className={`font-mono text-xs uppercase tracking-wider text-right transition-[opacity,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] absolute right-12 whitespace-nowrap bg-[#0d0d0d] px-2 py-1 border border-[#dedbc8]/10 rounded shadow-md pointer-events-none opacity-0 group-hover/indicator:opacity-100 group-hover/indicator:translate-x-0 group-focus-within/indicator:opacity-100 group-focus-within/indicator:translate-x-0 translate-x-2 ${
                      isActive ? "xl:opacity-100 xl:translate-x-0 text-[#dedbc8] border-[#dedbc8]/30 font-bold" : "text-gray-400"
                    }`}
                  >
                    {config.title}
                  </span>

                  {/* Interactive Indicator Dot with 40x40px Target */}
                  <button
                    onClick={() => handleJumpToChapter(config.index)}
                    className="w-10 h-10 flex items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-[#dedbc8] outline-none border border-transparent transition-transform hover:scale-105"
                    aria-label={`Jump to ${config.title}`}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-[color,background-color,border-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] border ${
                        isActive
                          ? "bg-[#dedbc8] border-[#dedbc8] scale-125"
                          : "bg-[#070707] border-gray-600 group-hover/indicator:border-[#dedbc8]"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}

export default NarrativeControls;
