import React from "react";
import { Metadata } from "next";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { WorkIndexHero } from "@/components/work/WorkIndexHero";
import { SevenProjectShowcase } from "@/components/work/SevenProjectShowcase";
import { CapabilityMatrix } from "@/components/work/CapabilityMatrix";

export const metadata: Metadata = {
  title: "Proof Systems // Nexus Work Ledger",
  description: "A directory of custom software proof systems and operational architectures designed end-to-end.",
};

export default function WorkIndexPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-16 select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10 px-6 md:px-12 pb-24 mt-12">
        
        {/* 1. Hero header (media expansion scroll) */}
        <WorkIndexHero />

        {/* 2. Seven Systems Alternating Rail Showcase */}
        <SevenProjectShowcase />

        {/* 3. Capability comparison matrix table */}
        <CapabilityMatrix />

      </div>

      <SiteFooter />
    </div>
  );
}
