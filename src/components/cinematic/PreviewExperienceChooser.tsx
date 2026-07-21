"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, LayoutGrid, ShieldCheck } from "lucide-react";

export function PreviewExperienceChooser() {
  return (
    <div className="relative min-h-screen w-full bg-[#09090B] text-white flex flex-col items-center justify-center p-6 overflow-hidden select-none">
      {/* Background Depth Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full text-center space-y-8">
        {/* Environment Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#DEDBC8]">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>NEXUS EXPERIENCE PREVIEW — ISOLATED PREVIEW ENVIRONMENT</span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
            Two Ways to Explore Nexus.
          </h1>
          <p className="text-base md:text-lg text-[#A1A1AA] max-w-xl mx-auto font-sans">
            Choose an experience mode below. The production website remains 100% untouched.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-4">
          {/* Cinematic Option (Primary) */}
          <Link
            href="/cinematic"
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#18181B] to-[#27272A]/80 border-2 border-[#DEDBC8]/40 hover:border-[#DEDBC8] transition-all duration-300 shadow-2xl hover:scale-[1.02] flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#DEDBC8] text-black flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-white group-hover:text-[#DEDBC8] transition-colors">
                Cinematic Experience
              </h2>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                An immersive, scroll-controlled 3D diorama narrative through the connected Nexus operational field.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono font-bold text-[#DEDBC8] uppercase tracking-wider">
              <span>Enter Cinematic World</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Classic Option (Secondary) */}
          <Link
            href="/classic"
            className="group relative p-6 rounded-2xl bg-[#18181B]/60 border border-[#27272A] hover:border-[#3F3F46] transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#27272A] text-[#A1A1AA] flex items-center justify-center">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-white group-hover:text-white transition-colors">
                Classic Website Baseline
              </h2>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                The standard production layout presenting complete technical brochures, case studies, and services.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono font-bold text-[#A1A1AA] uppercase tracking-wider group-hover:text-white">
              <span>View Classic Site</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Footer Guarantee */}
        <p className="text-xs font-mono text-[#71717A] pt-4">
          Experimental preview — production remains unchanged at nexus-workflows.com
        </p>
      </div>
    </div>
  );
}
