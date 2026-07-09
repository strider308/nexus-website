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
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      
      <main id="main-content" className="flex-grow bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
              Reference Prototypes
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight mb-4">
              Demo Library
            </h1>
            <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
              Explore walkthrough previews and synthetic models of our shipped proof systems. These reference previews demonstrate structural capabilities (roles, handoffs, dashboard indicators) in action.
            </p>
          </div>

          {/* Demos Command Center Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            {/* Left: Demos list (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              {DEMO_CARDS.map((card) => {
                const Mockup = card.mockup;
                return (
                  <SystemCard3D 
                    key={card.id}
                    className="border border-border bg-background rounded-[12px] p-6 md:p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow scroll-mt-24 font-light text-muted-foreground"
                  >
                    <div 
                      onMouseEnter={() => setActiveDemoId(card.id)}
                      onMouseLeave={() => setActiveDemoId(null)}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[9px] font-mono font-bold text-white bg-slate-500 uppercase px-2 py-0.5 rounded-[4px]">
                          {card.type}
                        </span>
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-primary mb-3">
                        {card.title}
                      </h2>
                      <p className="text-xs leading-relaxed font-light mb-4">
                        {card.proves}
                      </p>

                      <div className="border-t border-border/60 pt-4 mb-4 flex flex-col gap-2">
                        <div>
                          <strong className="text-[9px] font-mono uppercase text-muted-foreground block">Key Capabilities:</strong>
                          <span className="text-xs text-primary font-medium">{card.capabilities}</span>
                        </div>
                        <div>
                          <strong className="text-[9px] font-mono uppercase text-muted-foreground block">Best Fit For:</strong>
                          <span className="text-xs text-foreground/80 font-light">{card.bestFit}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mockup Display */}
                    <div className="border border-border/80 rounded-[8px] overflow-hidden bg-muted/20 shadow-sm flex items-center justify-center p-2 sm:p-4">
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
                        "w-full bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none interactive-action mt-2"
                      )}
                    >
                      <span>Discuss this model in your kickoff call</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </SystemCard3D>
                );
              })}
            </div>

            {/* Right: 3D command console panel (5 cols, sticky) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-24 border border-border rounded-[12px] bg-muted/20 items-center justify-center p-4 min-h-[460px]">
              <div className="absolute top-3 left-4 text-[9px] font-mono text-muted-foreground/60 uppercase select-none">
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
