"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import { GSAP_EASES } from "@/lib/gsap/eases";

export function FragmentedChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) {
        gsap.set(".fragment-card", { opacity: 1, x: 0, y: 0 });
        return;
      }

      // Staggered fragments entry
      gsap.fromTo(
        ".fragment-card-0",
        { opacity: 0, x: -60, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: GSAP_EASES.reveal,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".fragment-card-1",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: GSAP_EASES.reveal,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".fragment-card-2",
        { opacity: 0, x: 60, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: GSAP_EASES.reveal,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section 
      id="fragmentation"
      data-chapter-index={1}
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-20"
    >
      <div className="flex flex-col gap-6 max-w-3xl">
        <span className="text-xs font-mono tracking-widest text-[#c44a7a] uppercase font-bold">
          [ PROCESS FRAGMENTATION ]
        </span>
        
        <h2 className="type-heading text-3xl md:text-6xl text-[#dedbc8] tracking-tight">
          Important work rarely fails because people do not care.
        </h2>

        <p className="type-body text-base md:text-lg text-gray-300 max-w-2xl">
          It fails because the process is scattered across phone calls, sheets, chats, and verbal syncs. Information disappears inside separate functional silos.
        </p>

        {/* 3 Concrete Workflow Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative">
          <div className="fragment-card fragment-card-0 border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-3.5 opacity-0 will-change-transform">
            <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
              Healthcare Operations
            </span>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide">
              Outpatient Queue Drifts
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light font-sans">
              Registration data sits in silos while waiting queues, lab orders, and pharmacy inventory are written on paper slips, causing patient delays.
            </p>
          </div>

          <div className="fragment-card fragment-card-1 border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-3.5 opacity-0 will-change-transform">
            <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
              Food &amp; Beverage POS
            </span>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide">
              Table-to-Kitchen Gaps
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light font-sans">
              Waiters log orders on pads, cashiers key checkout items manually, and kitchens track orders on paper tickets. Discrepancies lead to leakage and delays.
            </p>
          </div>

          <div className="fragment-card fragment-card-2 border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-3.5 opacity-0 will-change-transform">
            <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
              Engineering Workspace
            </span>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide">
              Siloed Blocker Checks
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light font-sans">
              Critical project handoffs and architectural decision approvals stall inside private Slack channels. Blocking paths remain invisible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FragmentedChapter;
