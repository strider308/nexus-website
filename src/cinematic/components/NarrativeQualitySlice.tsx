"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Play, Pause, ExternalLink, Activity } from "lucide-react";
import Link from "next/link";
import { ContentParityReferenceSection } from "./ContentParityReferenceSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function NarrativeQualitySlice() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  
  // Persistent Visual References
  const bgGridRef = useRef<HTMLDivElement>(null);
  const signalCoreRef = useRef<HTMLDivElement>(null);
  const branchSpreadsheetRef = useRef<HTMLDivElement>(null);
  const branchQueueRef = useRef<HTMLDivElement>(null);
  const branchLogRef = useRef<HTMLDivElement>(null);
  const nexusSpineRef = useRef<HTMLDivElement>(null);
  
  // Chapter Narrative Refs
  const copyCh1Ref = useRef<HTMLDivElement>(null);
  const copyCh2Ref = useRef<HTMLDivElement>(null);
  const copyCh3Ref = useRef<HTMLDivElement>(null);
  const copyCh4Ref = useRef<HTMLDivElement>(null);

  const [isMotionPaused, setIsMotionPaused] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !viewportRef.current || isMotionPaused) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Master Continuous GSAP ScrollTrigger Timeline spanning Chapters 1-4
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            pin: viewportRef.current,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // -------------------------------------------------------------
        // CHAPTER 1 — THE SIGNAL APPEARS (Scroll 0% -> 25%)
        // -------------------------------------------------------------
        mainTl
          .to(copyCh1Ref.current, { opacity: 1, y: 0, duration: 0.5 })
          .to(signalCoreRef.current, { scale: 1.2, opacity: 1, duration: 0.5 }, 0)
          .to(bgGridRef.current, { z: -100, duration: 0.5 }, 0)

        // -------------------------------------------------------------
        // CHAPTER 2 — THE SIGNAL FRAGMENTS (Scroll 25% -> 50%)
        // -------------------------------------------------------------
          .to(copyCh1Ref.current, { opacity: 0, y: -20, duration: 0.3 }, 0.8)
          .to(copyCh2Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 1.0)
          .to(signalCoreRef.current, { scale: 0.8, duration: 0.8 }, 0.8)
          .to(branchSpreadsheetRef.current, { x: -180, y: -60, z: 100, opacity: 1, duration: 0.8 }, 0.8)
          .to(branchQueueRef.current, { x: 180, y: 40, z: -50, opacity: 1, duration: 0.8 }, 0.8)
          .to(branchLogRef.current, { x: -40, y: 140, z: 150, opacity: 0.9, duration: 0.8 }, 0.8)
          .to(bgGridRef.current, { rotationX: 20, rotationY: -10, duration: 0.8 }, 0.8)

        // -------------------------------------------------------------
        // CHAPTER 3 — THE SIGNAL GETS LOST (Scroll 50% -> 75%)
        // -------------------------------------------------------------
          .to(copyCh2Ref.current, { opacity: 0, y: -20, duration: 0.3 }, 1.8)
          .to(copyCh3Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 2.0)
          .to(branchSpreadsheetRef.current, { x: -240, rotation: -12, border: "1px solid #ef4444", duration: 0.8 }, 1.8)
          .to(branchQueueRef.current, { x: 240, rotation: 10, border: "1px solid #f59e0b", duration: 0.8 }, 1.8)
          .to(branchLogRef.current, { y: 200, opacity: 0.4, duration: 0.8 }, 1.8)
          .to(signalCoreRef.current, { opacity: 0.3, duration: 0.8 }, 1.8)
          .to(bgGridRef.current, { z: -300, opacity: 0.3, duration: 0.8 }, 1.8)

        // -------------------------------------------------------------
        // CHAPTER 4 — NEXUS REVEALS THE SYSTEM (Scroll 75% -> 100%)
        // -------------------------------------------------------------
          .to(copyCh3Ref.current, { opacity: 0, y: -20, duration: 0.3 }, 2.8)
          .to(copyCh4Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 3.0)
          .to(nexusSpineRef.current, { opacity: 1, scale: 1, duration: 0.8 }, 2.8)
          .to(branchSpreadsheetRef.current, { x: 0, y: -70, z: 0, rotation: 0, border: "1px solid #10b981", duration: 0.8 }, 2.8)
          .to(branchQueueRef.current, { x: 0, y: 70, z: 0, rotation: 0, border: "1px solid #10b981", duration: 0.8 }, 2.8)
          .to(branchLogRef.current, { x: 0, y: 0, opacity: 0, duration: 0.5 }, 2.8)
          .to(signalCoreRef.current, { opacity: 1, scale: 1.4, backgroundColor: "#10b981", duration: 0.8 }, 2.8)
          .to(bgGridRef.current, { rotationX: 0, rotationY: 0, z: 0, opacity: 1, duration: 0.8 }, 2.8);

      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [isMotionPaused]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#09090B] text-white">
      {/* Floating Quality Slice Track Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2.5 rounded-full bg-[#18181B]/90 border border-[#27272A] shadow-2xl backdrop-blur-xl flex items-center gap-6 text-xs font-mono select-none">
        <Link href="/" className="text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Chooser</span>
        </Link>
        <span className="w-px h-4 bg-[#27272A]" />
        <span className="text-[#DEDBC8] font-bold">NARRATIVE QUALITY SLICE // CHAPTERS 01-04</span>
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

      {/* Pinned Viewport Container (100dvh) */}
      <div
        ref={viewportRef}
        className="w-full h-screen h-[100dvh] overflow-hidden relative flex items-center justify-center select-none"
        style={{ perspective: "1200px" }}
      >
        {/* Continuous 3D Background Grid */}
        <div
          ref={bgGridRef}
          className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] origin-center"
        />

        {/* Dynamic Nexus Coordinating Spine (Revealed in Ch. 4) */}
        <div
          ref={nexusSpineRef}
          className="absolute w-[500px] h-[500px] rounded-full border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-2xl opacity-0 scale-75 pointer-events-none flex items-center justify-center shadow-[0_0_100px_rgba(16,185,129,0.1)]"
        >
          <div className="w-80 h-80 rounded-full border border-dashed border-emerald-400/40 animate-spin-slow" />
        </div>

        {/* PERSISTENT ENTITY: The Operational Signal Core (SIG-0921) */}
        <div
          ref={signalCoreRef}
          className="relative z-30 w-16 h-16 rounded-full bg-[#DEDBC8] shadow-[0_0_40px_rgba(222,219,200,0.6)] flex items-center justify-center opacity-0 transform transition-all duration-300"
        >
          <Activity className="w-8 h-8 text-black animate-pulse" />
          <span className="absolute -bottom-6 font-mono text-[10px] text-[#DEDBC8] uppercase tracking-widest whitespace-nowrap">
            SIG-0921
          </span>
        </div>

        {/* Divergent Branch 1: Spreadsheet Fragment (Ch. 2-4) */}
        <div
          ref={branchSpreadsheetRef}
          className="absolute z-20 p-4 rounded-xl bg-[#18181B]/90 border border-[#3F3F46] shadow-2xl backdrop-blur-xl w-64 space-y-2 opacity-0 font-mono text-xs"
        >
          <div className="flex items-center justify-between text-red-400">
            <span>UNLINKED SPREADSHEET</span>
            <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-[10px]">SILO_A</span>
          </div>
          <p className="text-[11px] text-[#A1A1AA]">
            Queue Ticket #8492 — Missing Approval
          </p>
        </div>

        {/* Divergent Branch 2: Support Queue Ticket Fragment (Ch. 2-4) */}
        <div
          ref={branchQueueRef}
          className="absolute z-20 p-4 rounded-xl bg-[#18181B]/90 border border-[#3F3F46] shadow-2xl backdrop-blur-xl w-64 space-y-2 opacity-0 font-mono text-xs"
        >
          <div className="flex items-center justify-between text-amber-400">
            <span>SUPPORT QUEUE</span>
            <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-[10px]">SILO_B</span>
          </div>
          <p className="text-[11px] text-[#A1A1AA]">
            Patient Webhook — +42m Latency
          </p>
        </div>

        {/* Divergent Branch 3: Isolated Audit Log (Ch. 2-3) */}
        <div
          ref={branchLogRef}
          className="absolute z-10 p-3 rounded-lg bg-[#18181B]/80 border border-[#27272A] shadow-lg backdrop-blur-md w-56 space-y-1 opacity-0 font-mono text-[10px] text-[#71717A]"
        >
          <span>[WARN] Unlinked transaction payload #00921</span>
        </div>

        {/* NARRATIVE COPY OVERLAYS */}
        <div className="absolute bottom-16 inset-x-6 z-40 max-w-xl mx-auto text-center pointer-events-none">
          {/* Chapter 1 Script */}
          <div ref={copyCh1Ref} className="opacity-0 transform translate-y-4 space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#DEDBC8]">
              CHAPTER 01 // THE SIGNAL APPEARS
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
              A critical operational signal enters the organization.
            </h2>
          </div>

          {/* Chapter 2 Script */}
          <div ref={copyCh2Ref} className="opacity-0 transform translate-y-4 space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-amber-400">
              CHAPTER 02 // THE SIGNAL FRAGMENTS
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
              Siloed systems break the signal into conflicting versions of truth.
            </h2>
          </div>

          {/* Chapter 3 Script */}
          <div ref={copyCh3Ref} className="opacity-0 transform translate-y-4 space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-red-400">
              CHAPTER 03 // THE SIGNAL GETS LOST
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
              Context is lost between tools. Nobody sees the complete picture.
            </h2>
          </div>

          {/* Chapter 4 Script */}
          <div ref={copyCh4Ref} className="opacity-0 transform translate-y-4 space-y-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              CHAPTER 04 // NEXUS REVEALS THE SYSTEM
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
              Nexus detects the fragments and reveals their true underlying connection.
            </h2>
          </div>
        </div>
      </div>

      {/* Layer 2 & 3: Complete Website Reference Deck & Contextual Deep Dives */}
      <ContentParityReferenceSection />
    </div>
  );
}
