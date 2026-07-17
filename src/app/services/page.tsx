"use client";

import React, { useState, useRef } from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import { Badge } from "@/components/ui/badge";

interface StageData {
  id: number;
  title: string;
  bestFor: string;
  inputs: string;
  activities: string;
  deliverables: string;
  typicalDecisionGate: string;
  whatComesNext: string;
}

const STAGES: StageData[] = [
  {
    id: 1,
    title: "Workflow Diagnostic",
    bestFor: "Teams with processes scattered across spreadsheets, chat channels, and manual logs.",
    inputs: "Examples of current templates, screen shares of operations, and list of manual handoffs.",
    activities: "Process shadow sessions, operational interviews, data flow modeling.",
    deliverables: "A structured workflow diagnostic map, identified transaction bottlenecks, and a system stack proposal.",
    typicalDecisionGate: "Founder review of diagnostic layout & budget scope approval.",
    whatComesNext: "Transition to system blueprint mapping.",
  },
  {
    id: 2,
    title: "System Blueprint",
    bestFor: "Operations looking to define exact state machines and user roles before writing code.",
    inputs: "Approved system proposal, diagnostic maps, and role listings.",
    activities: "Drafting state machine transition diagrams, designing data schema tables, mapping API boundaries.",
    deliverables: "Comprehensive system blueprint document, complete database schema maps, and API integration paths.",
    typicalDecisionGate: "Operations leads approval of structural blueprints.",
    whatComesNext: "Move to Prototype or Pilot phase.",
  },
  {
    id: 3,
    title: "Prototype or Pilot",
    bestFor: "Founders validating workflow mechanics or seeking early user feedback.",
    inputs: "Approved system stack design, user role descriptions, and priority data schemas.",
    activities: "Staging deployment of core features, database integration, initial user loops testing.",
    deliverables: "A functional private-beta web application deployed in a staging environment for internal testing.",
    typicalDecisionGate: "Internal review of staging feedback & database loops validation.",
    whatComesNext: "Commence full operational system build.",
  },
  {
    id: 4,
    title: "Operational Build",
    bestFor: "Businesses replacing manual handoffs with production-grade custom software.",
    inputs: "Beta feedback, integrated database rules, and API specifications.",
    activities: "Engineering full backend workers, dashboard views, custom API triggers, and permission controls.",
    deliverables: "An end-to-end custom software platform with strict state machines, user permission rules, and dashboards.",
    typicalDecisionGate: "Owner validation of permissions clearance and live database triggers.",
    whatComesNext: "Transition to Validation and Handoff.",
  },
  {
    id: 5,
    title: "Validation & Handoff",
    bestFor: "Systems ready for production cutover and operational launch.",
    inputs: "Production environment tokens, domain configurations, staff listings.",
    activities: "Running end-to-end transaction tests, training staff users, deploying code assets to client repo.",
    deliverables: "Live production system, complete documentation, repository handoff, and 30-day support coverage.",
    typicalDecisionGate: "Final launch sign-off and transfer of system ownership.",
    whatComesNext: "Production operations monitoring.",
  }
];

const FIT_CRITERIA = {
  good: [
    "You manage business transactions or work sequences using spreadsheets.",
    "You rely heavily on manual text threads or email checks to track task status.",
    "You have multiple team roles collaborating on a single sequence of steps.",
    "You seek independent custom software, not long-term retainer overhead."
  ],
  bad: [
    "You need a simple brochure-only site with zero operational logic.",
    "You are looking for body-shop staff augmentation or outsourced developers.",
    "You do not have a defined operational sequence or workflow to automate.",
    "You need marketing landing pages or standard Shopify templates."
  ]
};

export default function ServicesPage() {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRailRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) return;

      // Track active stage based on scrolling positions of each stage block
      STAGES.forEach((stage, idx) => {
        ScrollTrigger.create({
          trigger: `#stage-section-${idx}`,
          start: "top 30%",
          end: "bottom 30%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveStageIdx(idx);
            }
          },
        });
      });

      // Desktop Pinned Left Rail
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 15%",
          end: "bottom 85%",
          pin: leftRailRef.current,
          pinSpacing: false,
          scrub: true,
        });
      });
    },
    { scope: containerRef }
  );

  const handleScrollToStage = (idx: number, e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(`#stage-section-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-16 select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-24 relative z-10 px-6 md:px-12 pb-24 mt-12">
        {/* Page Header */}
        <div className="border-b border-[#dedbc8]/14 pb-8 flex flex-col gap-4">
          <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
            ENGAGEMENT MODELS
          </span>
          <h1 className="type-display text-5xl md:text-7xl mt-3 text-[#dedbc8]">
            How We Build Systems
          </h1>
          <div className="flex flex-col gap-6 max-w-4xl mt-2">
            <p className="type-body text-base text-gray-300 leading-relaxed max-w-2xl">
              We design, prototype, and build custom role-aware software platforms, automated process layers, internal tools, and operational dashboards. We do not sell pre-configured packages; all outcomes are custom integrations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#dedbc8]/10 pt-6">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">What we build</h2>
                <p className="type-body text-[14px] text-gray-300 leading-relaxed">
                  Workflow diagnostics, system blueprints, prototypes, private betas, operational custom software builds, automated process layers, role-aware internal tools, and system integrations.
                </p>
              </div>
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">What the seven systems represent</h2>
                <p className="type-body text-[14px] text-gray-300 leading-relaxed">
                  The systems showcased in our catalog demonstrate how we map workflows, define roles and states, design interfaces, and build operational software. They are not off-the-shelf catalog products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Stage Stepper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative w-full">
          
          {/* Left: Sticky progress list (Desktop only) */}
          <div ref={leftRailRef} className="hidden lg:flex lg:col-span-4 flex-col gap-4 pr-6 border-r border-[#dedbc8]/10 min-h-[350px]">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-bold block mb-2">
              ENGAGEMENT STAGES
            </span>
            <div className="flex flex-col gap-2.5 relative">
              {STAGES.map((stage, idx) => {
                const isActive = activeStageIdx === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={(e) => handleScrollToStage(idx, e)}
                    className={`text-left p-3.5 border transition-all duration-300 outline-none focus:ring-1 focus:ring-[#dedbc8] flex justify-between items-center ${
                      isActive
                        ? "border-[#dedbc8] bg-[#0d0d0d] text-white"
                        : "border-transparent bg-transparent text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                      <span className="font-mono text-xs text-gray-400">0{stage.id}</span>
                      <span className="font-sans text-xs font-bold uppercase tracking-wider">{stage.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Stages details (Desktop scrolls past, Mobile renders accordion) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-12 lg:gap-24 w-full">
            {/* Desktop continuous vertical scroll blocks */}
            <div className="hidden lg:flex flex-col gap-20">
              {STAGES.map((stage, idx) => (
                <div 
                  key={stage.id}
                  id={`stage-section-${idx}`}
                  className="flex flex-col gap-4 border border-[#dedbc8]/10 bg-[#0d0d0d] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.3)] min-h-[380px] justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-[#dedbc8]/5 pb-3">
                      <span className="font-mono text-xs text-[#2a7d8a] font-bold uppercase tracking-wider">
                        STAGE 0{stage.id} {"//"} ENGAGEMENT MODEL
                      </span>
                      <Badge variant="referenceBuild">STAGE 0{stage.id}</Badge>
                    </div>

                    <h3 className="type-heading text-3xl text-white tracking-tight">
                      {stage.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mt-2 font-sans text-xs">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-wider font-bold">BEST FOR</span>
                        <span className="text-gray-300 leading-relaxed">{stage.bestFor}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-wider font-bold">INPUTS REQUIRED</span>
                        <span className="text-gray-300 leading-relaxed">{stage.inputs}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-2 font-sans text-xs">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-wider font-bold">ACTIVITIES</span>
                        <span className="text-gray-300 leading-relaxed">{stage.activities}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-wider font-bold">DELIVERABLES</span>
                        <span className="text-gray-300 leading-relaxed font-bold">{stage.deliverables}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#dedbc8]/10 pt-4 flex justify-between items-center text-xs font-mono text-gray-500 uppercase">
                    <span>GATE: {stage.typicalDecisionGate}</span>
                    <span>NEXT: {stage.whatComesNext}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Viewport: Accordion wrapper */}
            <div className="lg:hidden mt-4 w-full">
              <Accordion defaultValue={["service-0"]} className="w-full border border-[#dedbc8]/10 bg-[#0d0d0d] p-4">
                {STAGES.map((stage, idx) => (
                  <AccordionItem key={idx} value={`service-${idx}`} className="border-b border-[#dedbc8]/5">
                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                      <div className="flex gap-3 items-center">
                        <span className="font-mono text-xs text-gray-500">0{stage.id}</span>
                        <span className="font-sans text-xs font-bold uppercase text-white tracking-wider">{stage.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="flex flex-col gap-4 font-sans text-xs text-gray-300 mt-2 leading-relaxed">
                        <p><strong>Best For:</strong> {stage.bestFor}</p>
                        <p><strong>Inputs:</strong> {stage.inputs}</p>
                        <p><strong>Activities:</strong> {stage.activities}</p>
                        <p><strong>Deliverables:</strong> {stage.deliverables}</p>
                        <div className="border-t border-[#dedbc8]/5 pt-3 font-mono text-xs text-gray-500 uppercase">
                          <p>Gate: {stage.typicalDecisionGate}</p>
                          <p className="mt-1">Next: {stage.whatComesNext}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>

        {/* Fit Assessment Selection Tabs */}
        <section className="border-t border-[#dedbc8]/10 pt-16 flex flex-col gap-8 w-full select-none">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">
              Posturing Checklist
            </span>
            <h2 className="type-heading text-3xl text-[#dedbc8] tracking-tight">
              Is Nexus a Fit?
            </h2>
          </div>

          <Tabs defaultValue="good-fit" className="w-full">
            <TabsList className="grid grid-cols-2 max-w-sm mb-6 border border-[#dedbc8]/10 bg-[#0d0d0d] p-[2px]">
              <TabsTrigger value="good-fit" className="font-mono text-xs uppercase py-2">
                Good Fit Criteria
              </TabsTrigger>
              <TabsTrigger value="not-fit" className="font-mono text-xs uppercase py-2">
                Not a Fit Criteria
              </TabsTrigger>
            </TabsList>

            <TabsContent value="good-fit" className="border border-[#2a7d8a]/20 bg-[#2a7d8a]/5 p-8 flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#2a7d8a] font-bold">
                Good fit environment markers
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-300 font-normal leading-relaxed font-sans">
                {FIT_CRITERIA.good.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="text-[#2a7d8a] shrink-0 mt-1">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="not-fit" className="border border-[#c44a7a]/20 bg-[#c44a7a]/5 p-8 flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#c44a7a] font-bold">
                Not a fit environment markers
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-300 font-normal leading-relaxed font-sans">
                {FIT_CRITERIA.bad.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="text-[#c44a7a] shrink-0 mt-1">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </section>

      </div>

      <SiteFooter />
    </div>
  );
}
