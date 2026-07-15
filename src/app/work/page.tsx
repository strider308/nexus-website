import React from "react";
import { Metadata } from "next";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { DETAILED_CASE_STUDIES } from "@/content/case-studies";
import { WorkIndexHero } from "@/components/work/WorkIndexHero";
import { FeaturedProjectRail } from "@/components/work/FeaturedProjectRail";
import { SupportingProjectStack } from "@/components/work/SupportingProjectStack";
import { CapabilityMatrix } from "@/components/work/CapabilityMatrix";

export const metadata: Metadata = {
  title: "Proof Systems // Nexus Work Ledger",
  description: "A directory of shipped operational state machines built end-to-end. We map fragmented processes into connected custom software systems.",
};

export default function WorkIndexPage() {
  // Split projects into featured (3) and supporting (4)
  const featured = DETAILED_CASE_STUDIES.filter(
    (item) => item.slug === "clinicos" || item.slug === "restaurantos" || item.slug === "shipwright"
  );
  
  const supporting = DETAILED_CASE_STUDIES.filter(
    (item) => item.slug !== "clinicos" && item.slug !== "restaurantos" && item.slug !== "shipwright"
  );

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-16 select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10 px-6 md:px-12 pb-24 mt-12">
        
        {/* 1. Hero header (media expansion scroll) */}
        <WorkIndexHero />

        {/* 2. Featured Systems Alternating Rail */}
        <FeaturedProjectRail projects={featured} />

        {/* 3. Supporting specialized sub-systems stack */}
        <SupportingProjectStack projects={supporting} />

        {/* 4. Capability comparison matrix table */}
        <CapabilityMatrix />

      </div>

      <SiteFooter />
    </div>
  );
}
