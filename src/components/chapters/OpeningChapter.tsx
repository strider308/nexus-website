"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import { GSAP_EASES } from "@/lib/gsap/eases";
import Link from "next/link";
import { BRAND_CONFIG } from "@/content/nexus";

export function OpeningChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) {
        gsap.set(".opening-anim", { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: GSAP_EASES.reveal } });

      tl.fromTo(
        ".eyebrow-anim",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".headline-anim",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ".body-anim",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".cta-anim",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".cue-anim",
          { opacity: 0 },
          { opacity: 0.6, duration: 0.5 },
          "-=0.2"
        );
    },
    { scope: containerRef, dependencies: [isReduced] }
  );

  const handleSkipToSystems = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#fragmentation");
    if (element) {
      element.scrollIntoView({ behavior: isReduced ? "auto" : "smooth" });
    }
  };

  return (
    <section
      data-chapter-index={0}
      ref={containerRef}
      className="min-h-[calc(100vh-64px)] flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text pt-24 pb-16 md:pt-28 md:pb-20"
    >
      <div className="flex flex-col gap-6">
        <span className="opening-anim eyebrow-anim text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold opacity-0">
          [ SYSTEM ARCHITECTURE STUDIO ]
        </span>

        <h1
          ref={headlineRef}
          className="opening-anim headline-anim type-display text-3xl md:text-[5.5rem] text-[#dedbc8] opacity-0 pb-1 leading-tight"
        >
          Custom software for work that has outgrown spreadsheets, messages and memory.
        </h1>

        <p className="opening-anim body-anim type-body text-sm md:text-xl text-gray-300 max-w-2xl opacity-0">
          Nexus maps complex workflows, defines user roles and handoffs, and builds the connected custom systems that make operational execution seamless.
        </p>

        <div className="opening-anim cta-anim mt-4 md:mt-6 flex flex-col opacity-0">
          <div className="flex flex-wrap gap-3 md:gap-4 items-center">
            <Link
              href="/contact"
              data-motion="interaction"
              className="border border-[#dedbc8] bg-[#dedbc8] px-6 py-3.5 md:px-8 md:py-4 text-xs font-sans font-semibold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-[color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.98] rounded-none text-center"
            >
              {BRAND_CONFIG.primaryCTA} &rarr;
            </Link>
            <a
              href="#fragmentation"
              onClick={handleSkipToSystems}
              data-motion="interaction"
              className="border border-[#dedbc8]/20 px-6 py-3.5 md:px-8 md:py-4 text-xs font-sans font-semibold uppercase text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8]/5 transition-[border-color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.98] rounded-none text-center"
            >
              {BRAND_CONFIG.secondaryCTA}
            </a>
          </div>
        </div>
      </div>

      {/* Subtle scroll cue (hidden on mobile and short viewports) */}
      <div className="opening-anim cue-anim absolute bottom-6 left-6 md:left-12 hidden md:flex items-center gap-3 font-mono text-xs text-gray-500 uppercase tracking-widest opacity-0">
        <div className="w-1.5 h-1.5 bg-[#2a7d8a] rounded-full" />
        <span>SCROLL TO DISCOVER FLOWS</span>
      </div>
    </section>
  );
}
export default OpeningChapter;
