import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { DETAILED_CASE_STUDIES } from "@/content/case-studies";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";
import { CapabilityMatrix } from "@/components/work/CapabilityMatrix";

export const metadata: Metadata = {
  title: "Proof Systems // Nexus Work Ledger",
  description: "A directory of shipped operational state machines built end-to-end. We map fragmented processes into connected custom software systems.",
};

export default function WorkIndexPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-16 select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-20 relative z-10 px-6 md:px-12 pb-24 mt-12">
        {/* Page Header */}
        <div className="border-b border-[#dedbc8]/14 pb-8 flex flex-col gap-4">
          <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">
            SHIPPED PROJECTS LEDGER
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic tracking-tight">
            Evidence of Range
          </h1>
          <p className="text-base md:text-lg font-light text-gray-300 max-w-2xl leading-relaxed">
            Nexus builds custom software systems and automation for complex workflows. We replace fragmented spreadsheets, manual handoffs, and paper registers with connected software engines. Below is the ledger of seven operational systems we designed and built end-to-end.
          </p>
        </div>

        {/* Project Entries Index */}
        <div className="flex flex-col gap-24">
          {DETAILED_CASE_STUDIES.map((study, idx) => (
            <div 
              key={study.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-[#dedbc8]/10 pb-16"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <div className="flex flex-wrap gap-2.5 items-center">
                  <span className="font-mono text-[9px] text-gray-500 font-bold uppercase">SYSTEM 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accentColor }} />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold">{study.category}</span>
                </div>

                <h2 className="font-serif text-3xl font-light text-white tracking-tight">
                  {study.name}
                </h2>

                {/* Prose Definition */}
                <p className="text-sm font-light text-gray-300 leading-relaxed italic">
                  {study.shortDefinition}
                </p>

                {/* Problem Statement */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9px] text-gray-500 uppercase font-bold">Operational Problem</span>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {study.problemNarrative[0]}
                  </p>
                </div>

                {/* Intended Users */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9px] text-gray-500 uppercase font-bold">Intended Users</span>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {study.intendedUsers.join(", ")}
                  </p>
                </div>

                {/* Status / Scope */}
                <div className="flex justify-between items-center text-[10px] font-mono border-t border-[#dedbc8]/5 pt-4">
                  <span className="text-gray-500 font-bold">STATUS:</span>
                  <span className="text-white font-bold uppercase">{study.status}</span>
                </div>

                {/* Link to study */}
                <div className="mt-2">
                  <Link 
                    href={`/work/${study.slug}`}
                    className="inline-block border border-[#dedbc8] px-5 py-2.5 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-all duration-300"
                  >
                    Read Detailed Case Study &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block font-bold">PRIMARY SCREEN PREVIEW</span>
                <InterfaceFrame 
                  systemId={study.slug} 
                  frameId={study.visualFrames[0]} 
                  caption={`${study.name} primary operational console view.`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Capability Comparison Matrix */}
        <section id="comparison-matrix" className="mt-12 pt-8">
          <CapabilityMatrix />
        </section>

        {/* Contact CTA */}
        <div className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-8 md:p-12 text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
            Have a fragmented workflow to connect?
          </h2>
          <p className="text-sm md:text-base font-light text-gray-300 max-w-xl leading-relaxed">
            Every engagement starts with understanding the real workflow. Share details about your operational processes to discuss design blueprints.
          </p>
          <Link
            href="/contact"
            className="border border-[#dedbc8] bg-[#dedbc8] px-6 py-3 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300"
          >
            Contact Engineering &rarr;
          </Link>
        </div>

      </div>

      <SiteFooter />
    </div>
  );
}
