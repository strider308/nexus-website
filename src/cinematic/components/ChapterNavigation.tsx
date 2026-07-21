"use client";

import React from "react";
import { NexusSceneConfig } from "../config/sceneManifest";
import { Play, Pause, ExternalLink } from "lucide-react";

interface ChapterNavigationProps {
  scenes: NexusSceneConfig[];
  currentSceneIndex: number;
  scrollProgress: number;
  isMotionPaused: boolean;
  onSelectScene: (index: number) => void;
  onToggleMotion: () => void;
}

export function ChapterNavigation({
  scenes,
  currentSceneIndex,
  scrollProgress,
  isMotionPaused,
  onSelectScene,
  onToggleMotion,
}: ChapterNavigationProps) {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 max-w-full px-3">
      {/* Chapter Navigation Bar */}
      <nav className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#09090B]/90 border border-[#27272A] backdrop-blur-xl shadow-2xl overflow-x-auto no-scrollbar">
        {scenes.map((scene, idx) => {
          const isActive = idx === currentSceneIndex;
          return (
            <button
              key={scene.id}
              onClick={() => onSelectScene(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#DEDBC8] text-black font-bold shadow-md"
                  : "text-[#A1A1AA] hover:text-white hover:bg-[#18181B]"
              }`}
            >
              <span>{scene.chapterNumber}</span>
              <span className="hidden md:inline">{scene.chapterTitle}</span>
            </button>
          );
        })}
      </nav>

      {/* Motion Pause/Play Toggle Button */}
      <button
        onClick={onToggleMotion}
        title={isMotionPaused ? "Enable Motion" : "Pause Motion"}
        className="p-2.5 rounded-full bg-[#09090B]/90 border border-[#27272A] text-[#DEDBC8] hover:text-white hover:border-[#3F3F46] backdrop-blur-xl transition-all"
      >
        {isMotionPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
      </button>

      {/* Classic Site Link */}
      <a
        href="/classic"
        className="px-3 py-2 rounded-full bg-[#18181B]/90 border border-[#27272A] text-xs font-mono text-[#A1A1AA] hover:text-white hover:border-[#3F3F46] backdrop-blur-xl flex items-center gap-1.5 transition-all hidden sm:flex"
      >
        <span>Classic Site</span>
        <ExternalLink className="w-3 h-3" />
      </a>

      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-[#27272A] pointer-events-none z-50">
        <div
          className="h-full bg-[#DEDBC8] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </header>
  );
}
