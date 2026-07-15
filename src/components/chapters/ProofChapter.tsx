"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { DETAILED_CASE_STUDIES } from "@/content/case-studies";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";
import { MediaExpansion } from "@/components/motion/MediaExpansion";
import { GSAPReveal } from "@/components/motion/GSAPReveal";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";

export function ProofChapter() {
  const [activeCardIdx, setActiveCardIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  // Split case studies into featured (3) and supporting (4)
  const featured = DETAILED_CASE_STUDIES.filter(
    (item) => item.slug === "clinicos" || item.slug === "restaurantos" || item.slug === "shipwright"
  );
  
  const supporting = DETAILED_CASE_STUDIES.filter(
    (item) => item.slug !== "clinicos" && item.slug !== "restaurantos" && item.slug !== "shipwright"
  );

  return (
    <section 
      data-chapter-index={5}
      ref={containerRef}
      className="min-h-screen relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-24"
    >
      <div className="flex flex-col gap-6 mb-16">
        <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
          [ PROVEN ARCHITECTURES ]
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
          Shipped System Proofs
        </h2>
        <p className="text-base font-light text-gray-300 leading-relaxed font-sans max-w-xl">
          Below is the evidence of our engineering. We build functional systems tailored to complex workflow environments.
        </p>
      </div>

      {/* Part 1: Featured Project Media Expansion Rails */}
      <div className="flex flex-col gap-24 mb-32">
        {featured.map((project, idx) => (
          <div key={project.slug} className="flex flex-col gap-6 border-b border-[#dedbc8]/10 pb-16">
            <GSAPReveal yOffset={20} duration={0.8}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#2a7d8a] font-bold">0{idx + 1} // FEATURED</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
                <span className="font-mono text-xs uppercase text-gray-400 font-bold">{project.category}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight mt-2">
                {project.name}
              </h3>
            </GSAPReveal>

            {/* Media Expansion Wrapper */}
            <MediaExpansion 
              startWidth="80%" 
              endWidth="100%" 
              startScale={0.97} 
              endScale={1.0} 
              className="mt-4"
            >
              <InterfaceFrame 
                systemId={project.slug} 
                frameId={project.visualFrames[0]} 
                caption={`${project.name} primary console interface.`}
              />
            </MediaExpansion>

            <GSAPReveal yOffset={15} duration={0.8} delay={0.2} className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
              <div className="md:col-span-8 flex flex-col gap-3">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-bold">SYSTEM DEFINITION</span>
                <p className="text-sm font-light text-gray-300 leading-relaxed font-sans">
                  {project.shortDefinition}
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-3 justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-bold">KEY PROOF POINT</span>
                  <span className="text-xs text-gray-300 font-bold uppercase tracking-wide">
                    {project.proofPoints[0]}
                  </span>
                </div>
                <Link 
                  href={`/work/${project.slug}`}
                  className="mt-4 inline-block border border-[#dedbc8] px-5 py-2.5 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-all duration-300 rounded-none"
                >
                  Read Detailed Case Study &rarr;
                </Link>
              </div>
            </GSAPReveal>
          </div>
        ))}
      </div>

      {/* Part 2: Supporting Systems Overlapping Display Stack */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-mono tracking-widest text-gray-500 uppercase font-bold">
            [ ADDITIONAL LEDGER SYSTEMS ]
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-[#dedbc8] italic tracking-tight">
            Specialized Sub-systems
          </h3>
        </div>

        {/* Display Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-4">
          {/* Left Stack Controls */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            {supporting.map((sys, idx) => {
              const isActive = activeCardIdx === idx;
              return (
                <button
                  key={sys.slug}
                  onClick={() => setActiveCardIdx(idx)}
                  className={`text-left p-3.5 border-l-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-[#dedbc8] ${
                    isActive
                      ? "border-[#dedbc8] bg-[#0d0d0d] pl-5 text-[#dedbc8]"
                      : "border-[#dedbc8]/10 bg-transparent text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <span className="font-mono text-[9px] text-gray-500 font-bold uppercase">LEDGER SYSTEM 0{idx + 4}</span>
                  <div className="text-xs font-bold uppercase tracking-wider mt-1">{sys.name}</div>
                </button>
              );
            })}
          </div>

          {/* Right Card Stack Deck */}
          <div className="md:col-span-8 relative min-h-[300px] border border-[#dedbc8]/10 bg-[#0d0d0d] p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-[#dedbc8]/10 pb-3">
                <span className="font-mono text-[9px] text-gray-400 font-bold uppercase">
                  {supporting[activeCardIdx].category}
                </span>
                <span className="font-mono text-[9px] text-[#2a7d8a] font-bold">
                  STATUS: {supporting[activeCardIdx].status}
                </span>
              </div>

              <h4 className="font-sans text-lg font-bold text-white uppercase tracking-wide">
                {supporting[activeCardIdx].name}
              </h4>

              <p className="text-xs text-gray-300 leading-relaxed font-light font-sans">
                {supporting[activeCardIdx].shortDefinition}
              </p>

              <div className="flex flex-col gap-1 mt-2">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-bold">PRIMARY USER</span>
                <span className="text-xs text-gray-300 font-bold">
                  {supporting[activeCardIdx].intendedUsers.join(", ")}
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#dedbc8]/10 flex gap-4 mt-6">
              <Link
                href={`/work/${supporting[activeCardIdx].slug}`}
                className="text-xs font-mono font-bold uppercase text-[#dedbc8] hover:text-white flex items-center gap-1.5"
              >
                Inspect System Architecture &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProofChapter;
