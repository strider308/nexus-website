"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function VisibilityScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgMeshRef = useRef<HTMLDivElement>(null);
  const nexusCoreRef = useRef<HTMLDivElement>(null);
  const pathConnectedRef = useRef<SVGPathElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const textTitleRef = useRef<HTMLDivElement>(null);
  const textDescRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Dedicated GSAP scrubbed timeline pinned for Visibility scene
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

        // Continuous transition: Mesh aligns, Nexus core illuminates, connected pathways scrub on
        tl.to(bgMeshRef.current, { rotationX: 0, scale: 1, duration: 1 }, 0)
          .to(nexusCoreRef.current, { scale: 1.1, opacity: 1, duration: 1 }, 0)
          .to(pathConnectedRef.current, { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" }, 0.2)
          .to(node1Ref.current, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .to(node2Ref.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
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
      {/* 3D Perspective Aligned Grid Background */}
      <div
        ref={bgMeshRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] origin-center scale-90 rotate-x-12"
      />

      {/* SVG Custom Operational Artwork: Illuminated Connection Pathways */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradientVisibility" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          ref={pathConnectedRef}
          d="M 150 250 Q 450 150 700 300 T 1150 200"
          fill="none"
          stroke="url(#gradientVisibility)"
          strokeWidth="4"
          strokeDasharray="600"
          strokeDashoffset="600"
        />
        <circle cx="150" cy="250" r="7" fill="#10b981" />
        <circle cx="700" cy="300" r="8" fill="#3b82f6" className="animate-pulse" />
        <circle cx="1150" cy="200" r="7" fill="#10b981" />
      </svg>

      {/* Foreground Content & Connected Spine Core */}
      <div className="relative z-20 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Narrative Block */}
        <div className="md:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Eye className="w-3.5 h-3.5" />
            <span>CHAPTER 03 // VISIBILITY</span>
          </div>

          <div ref={textTitleRef} className="opacity-0 transform translate-y-6 transition-all duration-300">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Nexus Reveals the Connected Operational Picture.
            </h2>
          </div>

          <div ref={textDescRef} className="opacity-0 transform translate-y-6 transition-all duration-300">
            <p className="text-sm md:text-base text-[#A1A1AA] font-sans leading-relaxed">
              As the Nexus coordinating spine activates, disconnected data silos illuminate into a unified operational topology. Missing dependencies become clear and actionable.
            </p>
          </div>
        </div>

        {/* Right Illuminated Operational Spine Visual */}
        <div className="md:col-span-7 relative h-[400px] flex items-center justify-center">
          {/* Central Nexus Spine Hub */}
          <div
            ref={nexusCoreRef}
            className="w-64 h-64 rounded-full border border-emerald-500/40 bg-[#18181B]/80 backdrop-blur-2xl flex flex-col items-center justify-center p-6 shadow-[0_0_80px_rgba(16,185,129,0.15)] opacity-0"
          >
            <Cpu className="w-10 h-10 text-emerald-400 animate-pulse mb-3" />
            <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">NEXUS CORE SPINE</span>
            <span className="font-mono text-[10px] text-[#A1A1AA] mt-1">REAL-TIME VISIBILITY</span>
          </div>

          {/* Connected Operational Node 1 */}
          <div
            ref={node1Ref}
            className="absolute top-4 left-6 p-4 rounded-xl bg-[#18181B]/90 border border-emerald-500/30 shadow-xl backdrop-blur-xl w-64 space-y-2 opacity-0 transform translate-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>LINKED AUDIT TRAIL</span>
            </div>
            <p className="text-[11px] font-mono text-[#DEDBC8]">
              Automated Verification: 100% Traceable
            </p>
          </div>

          {/* Connected Operational Node 2 */}
          <div
            ref={node2Ref}
            className="absolute bottom-6 right-6 p-4 rounded-xl bg-[#18181B]/90 border border-blue-500/30 shadow-xl backdrop-blur-xl w-64 space-y-2 opacity-0 transform translate-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <ShieldCheck className="w-4 h-4" />
              <span>SYNCHRONIZED WEBHOOK</span>
            </div>
            <p className="text-[11px] font-mono text-[#DEDBC8]">
              Patient Queue Priority: Active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
