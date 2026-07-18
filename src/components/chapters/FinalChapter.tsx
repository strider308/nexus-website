"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { GSAPReveal } from "@/components/motion/GSAPReveal";
import { BRAND_CONFIG } from "@/content/nexus";

export function FinalChapter() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      data-chapter-index={6}
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-24"
    >
      <div className="flex flex-col gap-6 max-w-2xl">
        <GSAPReveal yOffset={25} duration={0.8}>
          <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
            [ DIAGNOSTIC ENGAGEMENT ]
          </span>
          <h2 className="type-display text-4xl md:text-7.5rem text-[#dedbc8] mt-2">
            Map &rarr; Design &rarr; Build.
          </h2>
        </GSAPReveal>
        
        <GSAPReveal yOffset={15} duration={0.8} delay={0.15}>
          <p className="type-body text-base md:text-lg text-gray-300 mt-2">
            We will map it, design the system stack, and build the custom software that connects the work. Let&apos;s start an operational diagnostic conversation today.
          </p>
        </GSAPReveal>

        <GSAPReveal yOffset={15} duration={0.8} delay={0.3} className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            data-motion="interaction"
            className="border border-[#dedbc8] bg-[#dedbc8] px-8 py-4 text-xs font-sans font-semibold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-[color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] text-center active:scale-[0.98] rounded-none"
          >
            {BRAND_CONFIG.primaryCTA}
          </Link>
          <Link
            href="/work"
            data-motion="interaction"
            className="border border-[#dedbc8]/20 px-8 py-4 text-xs font-sans font-semibold uppercase text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8]/5 transition-[border-color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] text-center active:scale-[0.98] rounded-none"
          >
            {BRAND_CONFIG.secondaryCTA}
          </Link>
        </GSAPReveal>
      </div>
    </section>
  );
}
export default FinalChapter;
