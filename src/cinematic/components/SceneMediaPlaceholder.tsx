"use client";

import React from "react";
import { NexusSceneConfig } from "../config/sceneManifest";

interface SceneMediaPlaceholderProps {
  scene: NexusSceneConfig;
  isActive: boolean;
}

export function SceneMediaPlaceholder({ scene, isActive }: SceneMediaPlaceholderProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-[#09090B] via-[#121216] to-[#09090B] overflow-hidden select-none">
      {/* Decorative Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Abstract 3D Diorama Placeholder Node */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center max-w-xl mx-auto">
        <div className="relative mb-6">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl border border-[#3F3F46]/40 bg-gradient-to-br from-[#18181B]/80 to-[#27272A]/40 backdrop-blur-xl shadow-2xl flex items-center justify-center transform rotate-12 transition-transform duration-700 ease-out group-hover:rotate-0">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl border border-[#A1A1AA]/20 bg-[#09090B]/60 flex items-center justify-center font-mono text-2xl md:text-4xl font-bold text-[#DEDBC8]">
              {scene.chapterNumber}
            </div>
          </div>
          {/* Subtle Ambient Pulse Light */}
          <div className={`absolute -inset-4 bg-emerald-500/10 rounded-full blur-2xl transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`} />
        </div>

        <div className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest mb-2">
          Interactive Diorama Node — {scene.chapterTitle}
        </div>
        <div className="text-sm text-[#71717A] max-w-md">
          {scene.reducedMotion.altDescription}
        </div>
      </div>
    </div>
  );
}
