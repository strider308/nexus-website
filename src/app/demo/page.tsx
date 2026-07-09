"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClinicOSMockup } from "@/components/visuals/ClinicOSMockup";
import { AarogyaMockup } from "@/components/visuals/AarogyaMockup";
import { RestaurantOSMockup } from "@/components/visuals/RestaurantOSMockup";
import { ShipWrightMockup } from "@/components/visuals/ShipWrightMockup";
import { SecureScanMockup } from "@/components/visuals/SecureScanMockup";
import { SafeDateMockup } from "@/components/visuals/SafeDateMockup";
import { BuildPublicMockup } from "@/components/visuals/BuildPublicMockup";
import { ArrowRight } from "lucide-react";
import nextDynamic from "next/dynamic";
import { OrbitFallback } from "@/components/three/ThreeFallback";
import { SystemCard3D } from "@/components/three/SystemCard3D";

const ThreeCanvasShell = nextDynamic(
  () => import("@/components/three/ThreeCanvasShell").then((mod) => mod.ThreeCanvasShell),
  { ssr: false, loading: () => <OrbitFallback /> }
);
const DemoLibraryScene = nextDynamic(
  () => import("@/components/three/DemoLibraryScene"),
  { ssr: false }
);

const DEMO_CARDS = [
  {
    id: "clinicos",
    title: "ClinicOS Reference Preview",
    type: "Synthetic Walkthrough",
    proves: "Patient registration forms, doctor token queue updates, consultation summaries, and diagnostic billing workflows.",
    capabilities: "Queue state transition, role permissions separation, multi-profile contact lookup",
    bestFit: "Independent outpatient clinics and polyclinic managers",
    mockup: ClinicOSMockup
  },
  {
    id: "restaurantos",
    title: "RestaurantOS Order Preview",
    type: "Workflow Simulation",
    proves: "Customer-facing table QR menus, order dispatch to kitchen queues, and cash register audit dashboards.",
    capabilities: "Live table state tracking, order status handoffs, Cash drawers balancing logs",
    bestFit: "Bespoke fine-dining operators and multi-role kitchens",
    mockup: RestaurantOSMockup
  },
  {
    id: "securescan",
    title: "SecureScan Vulnerability Sample Report",
    type: "Sample PDF Walkthrough",
    proves: "Developer-facing authorized threat logs, severity tag outputs, and vulnerability details.",
    capabilities: "CVE data tracking, severity metrics tagging, developer alerts triggers",
    bestFit: "SaaS founders auditing software dependencies and deployment pipelines",
    mockup: SecureScanMockup
  },
  {
    id: "shipwright",
    title: "ShipWright Task Progress Preview",
    type: "Workflow Mockup",
    proves: "Async task ownership checkpoints, check-in timelines, and team progress trackers.",
    capabilities: "Check-in log entries, task completion status tags, accountability blocks",
    bestFit: "Async teams and founders looking to eliminate standup meetings",
    mockup: ShipWrightMockup
  },
  {
    id: "buildpublic",
    title: "BuildPublic Founder Workspace",
    type: "Reference Preview",
    proves: "Private task boards connected to public execution logs.",
    capabilities: "Public/private data segregation feeds, automated log streams, milestone metrics",
    bestFit: "Indie hackers and solo-founders building public audiences",
    mockup: BuildPublicMockup
  },
  {
    id: "aarogya",
    title: "Aarogya Data Tracker",
    type: "Reference Preview",
    proves: "Client-side biometric trend graphing with local storage controls.",
    capabilities: "Trend lines math, local database controls, CSV file download",
    bestFit: "Healthcare developers looking for local-first tracking designs",
    mockup: AarogyaMockup
  },
  {
    id: "safedate",
    title: "SafeDate Closeout Model",
    type: "Reference Preview",
    proves: "Time-locked check-in countdown loops and contact notification triggers.",
    capabilities: "Status state transitions, time countdown loops, email/SMS triggers",
    bestFit: "Lifestyle apps needing high-integrity safety design patterns",
    mockup: SafeDateMockup
  }
];

export default function DemoPage() {
  const [activeDemoId, setActiveDemoId] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />
      <SiteHeader />
      
      <main id="main-content" className="flex-grow py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 text-center md:text-left">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
              Reference Prototypes
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
              Demo Library
            </h1>
            <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
              Explore walkthrough previews and synthetic models of our shipped proof systems. These reference previews demonstrate structural capabilities (roles, handoffs, dashboard indicators) in action.
            </p>
          </div>

          {/* Demos Command Center Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-20">
            {/* Left: Demos list (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {DEMO_CARDS.map((card) => {
                const Mockup = card.mockup;
                return (
                  <SystemCard3D 
                    key={card.id}
                    className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[20px] p-6 md:p-8 flex flex-col gap-6 hover:border-[#DEDBC8]/25 transition-all duration-300 scroll-mt-28 group"
                  >
                    <div 
                      onMouseEnter={() => setActiveDemoId(card.id)}
                      onMouseLeave={() => setActiveDemoId(null)}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[8px] font-mono font-bold text-[#E1E0CC] border border-[#DEDBC8]/15 bg-black/40 uppercase px-2.5 py-0.5 rounded-full select-none">
                          {card.type}
                        </span>
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-[#E1E0CC] mb-3">
                        {card.title}
                      </h2>
                      <p className="text-xs leading-relaxed font-light text-gray-400 mb-4">
                        {card.proves}
                      </p>

                      <div className="border-t border-[#DEDBC8]/5 pt-4 mb-4 flex flex-col gap-3 font-light text-gray-400">
                        <div>
                          <strong className="text-[9px] font-mono uppercase text-gray-500 block mb-0.5">Key Capabilities:</strong>
                          <span className="text-xs text-[#E1E0CC] font-semibold">{card.capabilities}</span>
                        </div>
                        <div>
                          <strong className="text-[9px] font-mono uppercase text-gray-500 block mb-0.5">Best Fit For:</strong>
                          <span className="text-xs text-gray-300 font-light">{card.bestFit}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mockup Display */}
                    <div className="border border-[#DEDBC8]/10 rounded-[12px] overflow-hidden bg-black/40 shadow-sm flex items-center justify-center p-2 sm:p-4">
                      <div className="w-full aspect-[800/340] max-h-[300px]">
                        <Mockup />
                      </div>
                    </div>

                    <a
                      href={HERO.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: "default" }),
                        "w-full bg-[#DEDBC8] hover:bg-[#DEDBC8]/90 text-black font-semibold rounded-full flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#DEDBC8]/50 focus-visible:ring-offset-2 outline-none transition-all duration-300 mt-2"
                      )}
                    >
                      <span>Discuss in kickoff call</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </SystemCard3D>
                );
              })}
            </div>

            {/* Right: 3D command console panel (5 cols, sticky) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28 border border-[#DEDBC8]/10 rounded-[20px] bg-[#101010] items-center justify-center p-4 min-h-[460px] shadow-lg">
              <div className="absolute top-4.5 left-5 text-[9px] font-mono text-gray-500 uppercase select-none font-bold">
                Control Console
              </div>
              <div className="w-full h-[420px]">
                <ThreeCanvasShell 
                  ariaLabel="A 3D command terminal console display mapping live order updates and queue pipelines."
                  fallback={<OrbitFallback />}
                >
                  <DemoLibraryScene activeDemoId={activeDemoId} />
                </ThreeCanvasShell>
              </div>
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
export const dynamic = "force-static";
