"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, Clock, Unlink, FileQuestion } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FractureScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgGridRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const pathBrokenRef = useRef<SVGPathElement>(null);
  const textTitleRef = useRef<HTMLDivElement>(null);
  const textDescRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Create dedicated GSAP scrubbed timeline pinned to sectionRef
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Initial State -> Scrubbing Sequence
        tl.to(bgGridRef.current, { scale: 1.15, rotationX: 15, duration: 1 }, 0)
          .to(card1Ref.current, { x: -80, y: -40, z: 120, rotation: -6, opacity: 1, duration: 1 }, 0)
          .to(card2Ref.current, { x: 90, y: 50, z: -100, rotation: 8, opacity: 0.9, duration: 1 }, 0)
          .to(card3Ref.current, { x: -30, y: 120, z: 180, rotation: -12, opacity: 0.8, duration: 1 }, 0)
          .to(pathBrokenRef.current, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, 0.2)
          .to(textTitleRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.1)
          .to(textDescRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3);
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#09090B] text-white flex items-center justify-center overflow-hidden select-none"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Depth Grid Background */}
      <div
        ref={bgGridRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] origin-center"
      />

      {/* SVG Custom Operational Artwork: Broken Pathways */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradientFracture" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          ref={pathBrokenRef}
          d="M 150 200 Q 400 100 650 350 T 1100 250"
          fill="none"
          stroke="url(#gradientFracture)"
          strokeWidth="3"
          strokeDasharray="12 8"
          strokeDashoffset="100"
        />
        <circle cx="150" cy="200" r="6" fill="#ef4444" className="animate-ping" />
        <circle cx="650" cy="350" r="6" fill="#f59e0b" />
        <circle cx="1100" cy="250" r="6" fill="#ef4444" />
      </svg>

      {/* Foreground & Midground Fragmented System Nodes */}
      <div className="relative z-20 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Narrative Text Block */}
        <div className="md:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>CHAPTER 02 // FRACTURE</span>
          </div>

          <div ref={textTitleRef} className="opacity-0 transform translate-y-6 transition-all duration-300">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Siloed Systems & Broken Operational Handoffs.
            </h2>
          </div>

          <div ref={textDescRef} className="opacity-0 transform translate-y-6 transition-all duration-300">
            <p className="text-sm md:text-base text-[#A1A1AA] font-sans leading-relaxed">
              In modern enterprise teams, critical context is trapped across disconnected spreadsheets, unlinked support queues, and out-of-sync API pipelines. Hidden gaps cause operational delay and silent risk.
            </p>
          </div>
        </div>

        {/* Right 3D Spatial Fragments */}
        <div className="md:col-span-7 relative h-[400px] flex items-center justify-center">
          {/* Fragment Node 1: Unlinked Spreadsheet Queue */}
          <div
            ref={card1Ref}
            className="absolute -top-6 left-4 p-5 rounded-2xl bg-[#18181B]/90 border border-red-500/40 shadow-2xl backdrop-blur-xl w-72 space-y-3 opacity-0"
          >
            <div className="flex items-center justify-between text-xs font-mono text-red-400">
              <span className="flex items-center gap-1.5">
                <Unlink className="w-4 h-4" />
                <span>UNLINKED SPREADSHEET</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-red-500/20">MISSED</span>
            </div>
            <p className="text-xs text-[#DEDBC8] font-mono">
              Queue Ticket #8492 — Missing Approval Signature
            </p>
            <div className="w-full bg-[#27272A] h-1.5 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full w-1/3" />
            </div>
          </div>

          {/* Fragment Node 2: Desynchronized API Ticket */}
          <div
            ref={card2Ref}
            className="absolute top-24 right-2 p-5 rounded-2xl bg-[#18181B]/90 border border-amber-500/40 shadow-2xl backdrop-blur-xl w-80 space-y-3 opacity-0"
          >
            <div className="flex items-center justify-between text-xs font-mono text-amber-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>API TIMEOUT RISK</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20">+42m LATENCY</span>
            </div>
            <p className="text-xs text-[#DEDBC8] font-mono">
              Patient Onboarding Webhook — Payload Undelivered
            </p>
            <div className="w-full bg-[#27272A] h-1.5 rounded-full overflow-hidden">
              <div className="bg-amber-400 h-full w-2/3" />
            </div>
          </div>

          {/* Fragment Node 3: Isolated Log Artifact */}
          <div
            ref={card3Ref}
            className="absolute bottom-4 left-12 p-4 rounded-2xl bg-[#18181B]/90 border border-[#3F3F46] shadow-2xl backdrop-blur-xl w-64 space-y-2 opacity-0"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
              <FileQuestion className="w-4 h-4 text-purple-400" />
              <span>ISOLATED AUDIT LOG</span>
            </div>
            <p className="text-[11px] font-mono text-[#71717A]">
              [WARN] No matching audit trail for transaction #00921
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
