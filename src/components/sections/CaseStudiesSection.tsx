"use client";

import { useState } from "react";
import { useIsHydrated, useMediaQuery } from "@/hooks/useClientState";
import { CASE_STUDIES } from "@/lib/content/nexus";
import { PRODUCT_THEMES } from "@/lib/design-tokens";
import { ClinicOSMockup } from "../visuals/ClinicOSMockup";
import { AarogyaMockup } from "../visuals/AarogyaMockup";
import { RestaurantOSMockup } from "../visuals/RestaurantOSMockup";
import { ShipWrightMockup } from "../visuals/ShipWrightMockup";
import { SecureScanMockup } from "../visuals/SecureScanMockup";
import { SafeDateMockup } from "../visuals/SafeDateMockup";
import { BuildPublicMockup } from "../visuals/BuildPublicMockup";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { OrbitFallback } from "../three/ThreeFallback";

const ThreeCanvasShell = dynamic(
  () => import("../three/ThreeCanvasShell").then((mod) => mod.ThreeCanvasShell),
  { ssr: false, loading: () => <OrbitFallback /> }
);
const ProofOrbitScene = dynamic(
  () => import("../three/ProofOrbitScene"),
  { ssr: false }
);
const ProofConstellation = dynamic(
  () => import("../three/ProofConstellation"),
  { ssr: false }
);
import { ChevronDown, ChevronUp, Layers, Link as LinkIcon, Cpu } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

// Mapping of mockup components
const mockupMap: Record<string, React.ComponentType> = {
  clinicos: ClinicOSMockup,
  aarogya: AarogyaMockup,
  restaurantos: RestaurantOSMockup,
  shipwright: ShipWrightMockup,
  securescan: SecureScanMockup,
  safedate: SafeDateMockup,
  buildpublic: BuildPublicMockup
};

const WHAT_THIS_PROVES: Record<string, string[]> = {
  clinicos: [
    "Multi-role outpatient operations",
    "Queue and appointment state logic",
    "Billing and pharmacy handoffs",
    "Owner visibility",
    "Audit-aware workflows"
  ],
  aarogya: [
    "Personal data tracking",
    "Trend summaries",
    "User-controlled health records",
    "Export/delete flows",
    "Safety-conscious health UX"
  ],
  restaurantos: [
    "Table-to-kitchen flow",
    "Live order state",
    "Billing reconciliation",
    "Service coordination",
    "Owner dashboarding"
  ],
  shipwright: [
    "Async execution",
    "Task ownership",
    "Accountability loops",
    "Team progress visibility",
    "Founder/operator workflows"
  ],
  securescan: [
    "Authorized risk scanning",
    "Severity classification",
    "Sample reports",
    "Developer workflow",
    "Security-conscious product UX"
  ],
  safedate: [
    "Consent-aware sharing",
    "Timed check-ins",
    "Trusted-contact flows",
    "Safety-state logic",
    "Sensitive UX design"
  ],
  buildpublic: [
    "Founder accountability",
    "Public/private progress layers",
    "Milestone sharing",
    "Execution dashboards",
    "Audience-facing workflow"
  ]
};

const CAPABILITIES = [
  { id: "workflow", label: "Multi-role workflow" },
  { id: "automation", label: "Automation layers" },
  { id: "dashboard", label: "Dashboard visibility" },
  { id: "tracking", label: "Data tracking" },
  { id: "safety", label: "Risk & safety logic" },
  { id: "mvp", label: "MVP / private beta" },
  { id: "ux", label: "Customer experience" },
];

const MAP_SYSTEMS = [
  { id: "clinicos", label: "ClinicOS", capabilities: ["workflow", "automation", "dashboard", "tracking", "mvp"] },
  { id: "aarogya", label: "Aarogya", capabilities: ["dashboard", "tracking", "safety", "mvp", "ux"] },
  { id: "restaurantos", label: "RestaurantOS", capabilities: ["workflow", "automation", "dashboard", "tracking", "ux"] },
  { id: "shipwright", label: "ShipWright", capabilities: ["workflow", "automation", "tracking", "mvp"] },
  { id: "securescan", label: "SecureScan", capabilities: ["dashboard", "tracking", "safety", "mvp"] },
  { id: "safedate", label: "SafeDate", capabilities: ["automation", "safety", "mvp", "ux"] },
  { id: "buildpublic", label: "BuildPublic", capabilities: ["dashboard", "tracking", "mvp", "ux"] },
];

export function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState<string>("clinicos");
  const [salesSheetExpanded, setSalesSheetExpanded] = useState<Record<string, boolean>>({});
  const [hoveredSystemId, setHoveredSystemId] = useState<string | null>(null);
  const [hoveredCapabilityId, setHoveredCapabilityId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const mounted = useIsHydrated();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const showCanvas = mounted && !isMobile && !shouldReduceMotion;

  const activeStudy = CASE_STUDIES.find((study) => study.id === activeTab) || CASE_STUDIES[0];
  const MockupComponent = mockupMap[activeStudy.id];
  const activeTheme = PRODUCT_THEMES[activeStudy.id];

  const toggleSalesSheet = (id: string) => {
    setSalesSheetExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const activeIdx = CASE_STUDIES.findIndex((study) => study.id === activeTab);
    let nextIdx = activeIdx;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      nextIdx = (activeIdx + 1) % CASE_STUDIES.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      nextIdx = (activeIdx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIdx = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIdx = CASE_STUDIES.length - 1;
    }

    if (nextIdx !== activeIdx) {
      const nextStudy = CASE_STUDIES[nextIdx];
      setActiveTab(nextStudy.id);
      setTimeout(() => {
        const btn = document.getElementById(`tab-${nextStudy.id}`);
        if (btn) btn.focus();
      }, 0);
    }
  };

  return (
    <AnimatedSection id="case-studies" className="w-full py-20 md:py-28 border-b border-[#DEDBC8]/10 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
            Walkthrough Ledger
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
            Proof Systems in Action
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
            Step-by-step walkthroughs of our shipped operational systems. Select a system below to inspect its interface, user roles, what this proves, and commercial disclaimers.
          </p>
        </div>

        {/* Tabbed Case Study Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Menu (Left Column on Desktop, Top horizontal on Mobile) */}
          <div 
            role="tablist" 
            aria-label="Systems shipped case studies"
            onKeyDown={handleKeyDown}
            className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 border-b lg:border-b-0 border-border lg:border-l lg:border-border pl-0 lg:pl-4 scrollbar-none scroll-smooth"
          >
            {CASE_STUDIES.map((study) => {
              const isActive = study.id === activeTab;
              const theme = PRODUCT_THEMES[study.id];
              return (
                <button
                  key={study.id}
                  id={`tab-${study.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${study.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabChange(study.id)}
                  className={`relative flex items-center gap-3 shrink-0 px-4 py-3 rounded-[6px] text-xs md:text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 outline-none cursor-pointer z-10 ${
                    isActive
                      ? "text-[#E1E0CC]"
                      : "text-gray-400 hover:text-white hover:bg-[#101010]/50"
                  }`}
                  style={{
                    borderLeft: isActive ? `3px solid ${theme.primary}` : "3px solid transparent"
                  }}
                >
                  {/* Gliding active tab background indicator */}
                  {isActive && !shouldReduceMotion && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-muted rounded-[6px] z-[-1]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  {isActive && (shouldReduceMotion || !mounted) && (
                    <span className="absolute inset-0 bg-muted rounded-[6px] z-[-1]" />
                  )}

                  {/* Status dot coloring matching reference */}
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <span>{study.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Case Study Details (Right Column) */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStudy.id}
                id={`panel-${activeStudy.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeStudy.id}`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-10 focus:outline-none"
              >
                
                {/* Header Information */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span 
                      className="inline-flex items-center text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border"
                      style={{ 
                        color: activeTheme.primary, 
                        borderColor: activeTheme.primary + '30',
                        backgroundColor: activeTheme.primary + '08' 
                      }}
                    >
                      Case Study
                    </span>
                    <span className="text-xs md:text-sm font-mono font-bold text-gray-400 tracking-wider uppercase">
                      {activeStudy.category}
                    </span>
                  </div>

                  <h3 
                    className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    style={{ color: activeTheme.primary }}
                  >
                    {activeStudy.label}
                  </h3>
                  
                  <p className="text-base md:text-lg lg:text-xl font-light text-gray-300 leading-relaxed max-w-2xl">
                    {activeStudy.tagline}
                  </p>

                  {/* What This Proves Summary Block */}
                  <div className="mt-4 p-4 border border-[#DEDBC8]/10 bg-black/45 rounded-[12px] max-w-2xl">
                    <span className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase mb-2 block">
                      What This Proves
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {WHAT_THIS_PROVES[activeStudy.id]?.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-[#E1E0CC]">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: activeTheme.primary }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-4 text-xs md:text-sm font-bold tracking-wider text-gray-400 uppercase">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {activeStudy.status}
                    </span>
                  </div>
                </div>

                {/* Simulated Device Frame & 3D Orbit Constellation Visualizer */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Mockup Frame (7 Cols) */}
                  <div className="lg:col-span-7 border border-[#DEDBC8]/10 rounded-[12px] overflow-hidden shadow-md bg-black/40 flex flex-col justify-between">
                    {/* Browser Bar */}
                    <div className="bg-[#101010] border-b border-[#DEDBC8]/10 px-4 py-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-400/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <span className="w-3 h-3 rounded-full bg-green-400/80" />
                      </div>
                      <div className="text-xs md:text-sm font-mono text-gray-400 tracking-wide font-medium">
                        nexus.co/{activeStudy.id}
                      </div>
                      <div className="w-12 h-2" />
                    </div>
                    {/* Render Visual Mockup */}
                    <div className="bg-black overflow-x-auto relative flex-grow flex items-center">
                      <div className="w-full min-w-[640px] md:min-w-0">
                        {MockupComponent && <MockupComponent />}
                      </div>
                    </div>
                  </div>

                  {/* 3D Orbit Constellation Visualizer (5 Cols, Desktop Only) */}
                  <div className="hidden lg:flex lg:col-span-5 border border-[#DEDBC8]/10 rounded-[12px] overflow-hidden shadow-md bg-[#101010]/40 items-center justify-center p-4 relative min-h-[280px]">
                    <div className="absolute top-4.5 left-5 text-xs font-mono text-gray-500 uppercase select-none font-bold">
                      Active Orbit Node
                    </div>
                    <div className="w-full h-full">
                      {showCanvas ? (
                        <ThreeCanvasShell 
                          ariaLabel="A 3D system orbit constellation mapping out ClinicOS, Aarogya, and other proof modules."
                          fallback={<OrbitFallback />}
                          decorative={true}
                          interactive={false}
                          frameloop="demand"
                          powerPreference="low-power"
                        >
                          <ProofOrbitScene activeId={activeStudy.id} />
                        </ThreeCanvasShell>
                      ) : (
                        <OrbitFallback />
                      )}
                    </div>
                  </div>
                </div>

                {/* Narrative Problem Statement */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-7">
                    <h4 className="text-sm font-mono font-bold tracking-wider text-gray-400 uppercase mb-4">
                      The Problem Context
                    </h4>
                    <p className="text-base text-gray-300 leading-relaxed font-light mb-6">
                      {activeStudy.problem}
                    </p>
                    <blockquote className="border-l-2 border-accent pl-4 font-display text-lg text-primary italic leading-relaxed">
                      &ldquo;{activeStudy.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-6 bg-[#101010]/30 p-6 border border-[#DEDBC8]/10 rounded-[12px]">
                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase mb-3">
                        DESIGNED FOR
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeStudy.designedFor?.map((tag) => (
                          <span key={tag} className="text-sm bg-black border border-[#DEDBC8]/15 px-2.5 py-1 rounded-[4px] font-medium text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow chain block */}
                <div className="border border-[#DEDBC8]/10 rounded-[12px] p-6 bg-black/30">
                  <h4 className="text-sm font-mono font-bold tracking-wider text-gray-400 uppercase mb-6 flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    Operational Handoff Workflow
                  </h4>
                  <div className="flex flex-wrap gap-y-3 items-center">
                    {activeStudy.workflow.map((step, stepIdx) => (
                      <div key={step} className="flex items-center">
                        <span 
                          className="text-sm font-semibold px-3 py-2 rounded-[6px] text-white"
                          style={{ backgroundColor: stepIdx % 2 === 0 ? activeTheme.primary : "var(--accent)" }}
                        >
                          {step}
                        </span>
                        {stepIdx < activeStudy.workflow.length - 1 && (
                          <span className="mx-2 text-gray-400 select-none">&rsaquo;</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities grid details */}
                <div>
                  <h4 className="text-sm font-mono font-bold tracking-wider text-gray-400 uppercase mb-6">
                    System Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeStudy.capabilities.map((cap, idx) => (
                      <div 
                        key={cap.title} 
                        className={cn(
                          "border rounded-[12px] p-6 transition-all duration-300",
                          idx === 0 
                            ? "md:col-span-2 hover:shadow-md" 
                            : "bg-background border-[#DEDBC8]/10 hover:border-[#DEDBC8]/25 hover:shadow-sm"
                        )}
                        style={idx === 0 ? {
                          backgroundColor: `${activeTheme.primary}0D`,
                          borderColor: `${activeTheme.primary}30`
                        } : undefined}
                      >
                        <h5 className="font-display text-lg font-bold text-primary mb-4">
                          {cap.title}
                        </h5>
                        <ul className="flex flex-col gap-3">
                          {cap.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="flex items-start gap-2.5 text-sm md:text-base text-gray-300 font-light leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: activeTheme.primary }} />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integrations detail & specific Disclaimer */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-[#DEDBC8]/10">
                  
                  {/* Left Column: Integrations */}
                  <div className="md:col-span-7 flex flex-col gap-3">
                    <h5 className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5" />
                      Hardware &amp; System Integrations
                    </h5>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {activeStudy.integrations}
                    </p>
                  </div>

                  {/* Right Column: Mini disclaimer */}
                  <div className="md:col-span-5 border-l-2 border-[#DEDBC8]/10 pl-4 py-0.5 text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {activeStudy.disclaimer}
                  </div>
                </div>

                {/* Interactive Sales Sheet (Replaces separate sections to keep layout clean and agency-like) */}
                <div className="border border-[#DEDBC8]/10 rounded-[12px] bg-black shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleSalesSheet(activeStudy.id)}
                    className="w-full flex items-center justify-between p-5 bg-[#101010]/80 font-bold text-xs md:text-sm text-primary hover:bg-[#101010] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" style={{ color: activeTheme.primary }} />
                      Sales Sheet &amp; Commercial Differentiators for {activeStudy.label}
                    </span>
                    {salesSheetExpanded[activeStudy.id] ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  {salesSheetExpanded[activeStudy.id] && (
                    <div className="p-6 border-t border-border flex flex-col gap-6 animate-fade-in">
                      <div>
                        <h6 className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-2">
                          THE CORE PROBLEM
                        </h6>
                        <p className="text-sm text-foreground/80 font-light leading-relaxed">
                          {activeStudy.salesSheet.problem}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/60">
                        <div>
                          <h6 className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-2">
                            PRIMARY VALUE POSITION
                          </h6>
                          <p className="text-sm text-primary font-semibold leading-relaxed">
                            {activeStudy.salesSheet.headline}
                          </p>
                        </div>
                        <div>
                          <h6 className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-2">
                            DIFFERENTIATORS
                          </h6>
                          <p className="text-sm text-foreground/80 font-light leading-relaxed">
                            {activeStudy.salesSheet.differentiators}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-[10px] text-muted-foreground font-light leading-relaxed md:max-w-xl">
                          <strong>Responsible Use Note:</strong> {activeStudy.salesSheet.note}
                        </div>
                        <a 
                          href={activeStudy.ctaPrimaryUrl} 
                          className={cn(buttonVariants({ size: "default" }), "shrink-0 font-semibold rounded-[6px] text-white hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-offset-2 outline-none")}
                          style={{ backgroundColor: activeTheme.primary }}
                        >
                          {activeStudy.salesSheet.cta}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Capability Proof Map */}
        <div className="mt-16 pt-12 border-t border-[#DEDBC8]/10">
          <div className="mb-8">
            <h3 className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase mb-2">
              Capability Proof Map
            </h3>
            <p className="text-sm font-light text-gray-300 leading-relaxed max-w-3xl">
              A matrix view mapping our shipped proof systems against their core architectural capabilities. Hover over cells to inspect connections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Table Matrix (7 Cols) */}
            <div className="lg:col-span-7 overflow-x-auto border border-[#DEDBC8]/10 bg-[#101010] rounded-[12px] shadow-sm">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-[#DEDBC8]/10 bg-[#212121]">
                    <th className="p-4 text-xs font-mono font-bold text-[#E1E0CC] uppercase tracking-wider min-w-[120px] select-none">
                      System
                    </th>
                    {CAPABILITIES.map((cap) => (
                      <th 
                        key={cap.id} 
                        tabIndex={0}
                        className={cn(
                          "p-4 text-xs font-mono font-bold uppercase tracking-wider min-w-[100px] transition-colors duration-200 outline-none focus-visible:bg-black focus-visible:text-white cursor-default select-none",
                          hoveredCapabilityId === cap.id ? "text-[#E1E0CC] bg-[#212121]" : "text-[#DEDBC8]"
                        )}
                        onMouseEnter={() => setHoveredCapabilityId(cap.id)}
                        onMouseLeave={() => setHoveredCapabilityId(null)}
                        onFocus={() => setHoveredCapabilityId(cap.id)}
                        onBlur={() => setHoveredCapabilityId(null)}
                      >
                        {cap.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MAP_SYSTEMS.map((sys) => (
                    <tr 
                      key={sys.id} 
                      tabIndex={0}
                      className={cn(
                        "border-b border-[#DEDBC8]/5 transition-colors duration-200 outline-none focus-visible:bg-[#212121]",
                        hoveredSystemId === sys.id ? "bg-[#212121]" : "hover:bg-[#212121]/40"
                      )}
                      onMouseEnter={() => setHoveredSystemId(sys.id)}
                      onMouseLeave={() => setHoveredSystemId(null)}
                      onFocus={() => setHoveredSystemId(sys.id)}
                      onBlur={() => setHoveredSystemId(null)}
                    >
                      <td className="p-4 text-xs font-bold text-[#E1E0CC]">
                        {sys.label}
                      </td>
                      {CAPABILITIES.map((cap) => {
                        const hasCap = sys.capabilities.includes(cap.id);
                        const isFocusedCell = hoveredSystemId === sys.id && hoveredCapabilityId === cap.id;
                        const isRowColActive = hoveredSystemId === sys.id || hoveredCapabilityId === cap.id;

                        return (
                          <td 
                            key={cap.id} 
                            tabIndex={0}
                            className={cn(
                              "p-4 text-xs outline-none transition-all duration-200 cursor-default select-none relative",
                              isFocusedCell 
                                ? "bg-[#2A7D8A]/10 text-white font-semibold ring-1 ring-inset ring-[#2A7D8A]/35" 
                                : isRowColActive 
                                  ? "bg-[#2A7D8A]/[0.02] text-gray-200" 
                                  : "text-gray-400"
                            )}
                            onMouseEnter={() => {
                              setHoveredSystemId(sys.id);
                              setHoveredCapabilityId(cap.id);
                            }}
                            onMouseLeave={() => {
                              setHoveredSystemId(null);
                              setHoveredCapabilityId(null);
                            }}
                            onFocus={() => {
                              setHoveredSystemId(sys.id);
                              setHoveredCapabilityId(cap.id);
                            }}
                            onBlur={() => {
                              setHoveredSystemId(null);
                              setHoveredCapabilityId(null);
                            }}
                          >
                            {hasCap ? (
                              <motion.span 
                                layout
                                className="flex items-center gap-1.5 font-semibold text-[#2A7D8A]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2A7D8A] shrink-0 animate-pulse" />
                                Active
                              </motion.span>
                            ) : (
                              <span className="text-gray-600 font-light">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3D Proof Constellation Visualizer (5 Cols, Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-5 border border-[#DEDBC8]/10 rounded-[12px] bg-[#101010] items-center justify-center p-4 relative min-h-[340px]">
              <div className="absolute top-3 left-4 text-xs font-mono text-[#DEDBC8]/60 uppercase select-none">
                Proof systems and capabilities
              </div>
              <div className="w-full h-full">
                {showCanvas ? (
                  <ThreeCanvasShell 
                    ariaLabel="A 3D interactive connection matrix mapping shipped systems to core capabilities like workflow rules, automation actions, and owner dashboards."
                    fallback={<OrbitFallback />}
                    decorative={true}
                    interactive={false}
                    frameloop="always"
                    powerPreference="low-power"
                  >
                    <ProofConstellation 
                      activeSystemId={hoveredSystemId} 
                      activeCapabilityId={hoveredCapabilityId} 
                    />
                  </ThreeCanvasShell>
                ) : (
                  <OrbitFallback />
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
