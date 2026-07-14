"use client";

import React from "react";
import { motion } from "motion/react";

interface CinematicFallbackProps {
  activeChapter: number;
}

export function CinematicFallback({ activeChapter }: CinematicFallbackProps) {
  const chapter = activeChapter;

  return (
    <div className="absolute inset-0 w-full h-full bg-[#070707] z-0 overflow-hidden pointer-events-none select-none flex items-center justify-center">
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise" />

      {/* Chapter 1: Opening - Faint Nexus Core */}
      {chapter === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          className="w-40 h-40 border border-[#dedbc8]/30 rounded-full flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#dedbc8] animate-ping" />
        </motion.div>
      )}

      {/* Chapter 2: Fragmented - Chaotic Drifting Dots */}
      {chapter === 1 && (
        <div className="absolute inset-0 w-full h-full">
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Chaotic unconnected lines and points */}
            <circle cx="20" cy="30" r="1.5" fill="#c44a7a" className="animate-pulse" />
            <circle cx="80" cy="20" r="1.2" fill="#c87b3a" />
            <circle cx="45" cy="75" r="1.6" fill="#8b7bc4" />
            <circle cx="75" cy="80" r="1.0" fill="#2e6fad" />
            <line x1="15" y1="25" x2="30" y2="40" stroke="#dedbc8" strokeWidth="0.1" strokeDasharray="1 1" />
            <line x1="70" y1="75" x2="85" y2="90" stroke="#dedbc8" strokeWidth="0.1" strokeDasharray="1 1" />
          </svg>
        </div>
      )}

      {/* Chapter 3: Mapping - Central grid & converging lines */}
      {chapter === 2 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-64 h-64 opacity-25" viewBox="0 0 100 100">
            {/* Mapping plane */}
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="#2a7d8a" strokeWidth="0.5" strokeDasharray="2 2" />
            {/* Connected nodes */}
            <circle cx="50" cy="50" r="2.5" fill="#2a7d8a" />
            <line x1="20" y1="50" x2="47.5" y2="50" stroke="#2a7d8a" strokeWidth="0.3" />
            <line x1="80" y1="50" x2="52.5" y2="50" stroke="#2a7d8a" strokeWidth="0.3" />
            <circle cx="20" cy="50" r="1.5" fill="#dedbc8" />
            <circle cx="80" cy="50" r="1.5" fill="#dedbc8" />
          </svg>
        </div>
      )}

      {/* Chapter 4: Architecture - Stack of layers */}
      {chapter === 3 && (
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 opacity-30">
          <div className="w-48 h-2 border border-[#2e6fad] bg-[#2e6fad]/5 rounded" />
          <div className="w-48 h-2 border border-[#2a7d8a] bg-[#2a7d8a]/5 rounded" />
          <div className="w-48 h-2 border border-[#dedbc8]/30 bg-transparent rounded" />
          <div className="w-48 h-2 border border-[#2a7d8a] bg-[#2a7d8a]/5 rounded" />
          <div className="w-48 h-2 border border-[#2e6fad] bg-[#2e6fad]/5 rounded" />
        </div>
      )}

      {/* Chapter 5: Proof Systems - Constellation */}
      {chapter === 4 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-80 h-80 opacity-20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#dedbc8" strokeWidth="0.2" strokeDasharray="3 3" />
            {/* System orbits */}
            <circle cx="50" cy="20" r="2" fill="#2a7d8a" />
            <circle cx="80" cy="50" r="2.2" fill="#2e6fad" />
            <circle cx="50" cy="80" r="1.8" fill="#c87b3a" />
            <circle cx="20" cy="50" r="2" fill="#c44a7a" />
          </svg>
        </div>
      )}

      {/* Chapter 6: Final - Clean Resolved core */}
      {chapter === 5 && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.25 }}
          className="w-48 h-48 border border-[#2a7d8a]/40 rounded-full flex items-center justify-center"
        >
          <div className="w-24 h-24 border border-[#dedbc8]/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#dedbc8]" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
