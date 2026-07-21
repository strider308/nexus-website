"use client";

import React, { useRef } from "react";
import { NexusSceneConfig } from "../config/sceneManifest";
import { Cpu, Network, ShieldCheck, Database, Layers, Activity, Lock } from "lucide-react";

interface OperationalFieldProps {
  scene: NexusSceneConfig;
  progress: number;
  isActive: boolean;
}

export function OperationalField({ scene, progress, isActive }: OperationalFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Derive spatial Z-push and rotation based on progress
  const zPush = progress * 600; // Push camera forward through Z space
  const rotationY = (progress - 0.5) * 20; // Subtle perspective tilt
  const nodeScale = 0.9 + Math.sin(progress * Math.PI) * 0.15; // Dynamic scaling

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center bg-[#09090B] overflow-hidden select-none"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Plane 1: Background Atmospheric Grid (Z: -400px) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] transition-transform duration-300 ease-out"
        style={{
          transform: `translateZ(${zPush * 0.2 - 300}px) rotateY(${rotationY * 0.5}deg)`,
        }}
      />

      {/* Ambient Pulsing Energy Field */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-1000 ${
          isActive ? "bg-emerald-500/15 opacity-100 scale-100" : "bg-emerald-500/5 opacity-30 scale-75"
        }`}
        style={{
          transform: `translateZ(${zPush * 0.5}px)`,
        }}
      />

      {/* Plane 2: Midground 3D Operational Nodes & Connections (Z: 0px) */}
      <div
        className="relative z-10 w-full max-w-5xl h-[500px] flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `translateZ(${zPush * 0.8}px) rotateY(${rotationY}deg) scale(${nodeScale})`,
        }}
      >
        {/* Central Operational Node Visual */}
        <div className="relative flex items-center justify-center">
          {/* Outer Rotating Energy Ring */}
          <div
            className={`w-72 h-72 md:w-96 md:h-96 rounded-full border border-dashed border-[#DEDBC8]/30 flex items-center justify-center transition-transform duration-1000 ${
              isActive ? "rotate-45 scale-105 border-emerald-400/40" : "rotate-0 scale-95"
            }`}
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-[#3F3F46]/50 bg-[#18181B]/40 backdrop-blur-2xl flex items-center justify-center shadow-2xl">
              {/* Core Chapter Symbol & Icon */}
              <div className="flex flex-col items-center space-y-2 text-center p-4">
                {scene.id === "scene-1" && <Network className="w-12 h-12 text-[#DEDBC8] animate-pulse" />}
                {scene.id === "scene-2" && <Activity className="w-12 h-12 text-amber-400" />}
                {scene.id === "scene-3" && <Cpu className="w-12 h-12 text-emerald-400" />}
                {scene.id === "scene-4" && <Layers className="w-12 h-12 text-blue-400" />}
                {scene.id === "scene-5" && <Database className="w-12 h-12 text-purple-400" />}
                {scene.id === "scene-6" && <Lock className="w-12 h-12 text-emerald-400" />}
                {scene.id === "scene-7" && <ShieldCheck className="w-12 h-12 text-[#DEDBC8]" />}

                <span className="font-mono text-2xl font-bold text-white tracking-widest">{scene.chapterNumber}</span>
                <span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">{scene.chapterTitle}</span>
              </div>
            </div>
          </div>

          {/* Floating Satellites (Fragmented System Nodes) */}
          <div className="absolute -top-12 -left-16 p-3 rounded-xl bg-[#18181B]/90 border border-[#27272A] shadow-xl backdrop-blur-md hidden md:flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Siloed Spreadsheet Data</span>
          </div>

          <div className="absolute -bottom-10 -right-16 p-3 rounded-xl bg-[#18181B]/90 border border-[#27272A] shadow-xl backdrop-blur-md hidden md:flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Nexus Automated Pipeline</span>
          </div>
        </div>
      </div>

      {/* Plane 3: Foreground Parallax Elements (Z: +200px) */}
      <div
        className="absolute inset-0 pointer-events-none z-20 flex justify-between p-8"
        style={{
          transform: `translateZ(${zPush * 1.2 + 100}px)`,
        }}
      >
        <div className="text-[10px] font-mono text-[#52525B] uppercase tracking-widest self-start">
          SYS_OPERATIONAL_FIELD // DEPTH_LAYER_01
        </div>
        <div className="text-[10px] font-mono text-[#52525B] uppercase tracking-widest self-end">
          NEXUS_CORE_SPINE // ACTIVE
        </div>
      </div>
    </div>
  );
}
