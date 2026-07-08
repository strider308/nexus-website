"use client";

import { useState, useEffect } from "react";
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

export function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState<string>("clinicos");
  const [salesSheetExpanded, setSalesSheetExpanded] = useState<Record<string, boolean>>({});
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
    <AnimatedSection id="case-studies" className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
            Seven systems. Five industries. One founder.
          </h2>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
            These aren&apos;t products competing for your subscription — they&apos;re evidence. Each one was scoped, designed, and built end-to-end by Nexus, in a different domain, for a different kind of user. Read them as proof of what we can do with your workflow next.
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
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/30"
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
                      className="inline-flex items-center text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border"
                      style={{ 
                        color: activeTheme.primary, 
                        borderColor: activeTheme.primary + '30',
                        backgroundColor: activeTheme.primary + '08' 
                      }}
                    >
                      Case Study
                    </span>
                    <span className="text-[10px] md:text-xs font-mono font-bold text-muted-foreground tracking-wider uppercase">
                      {activeStudy.category}
                    </span>
                  </div>

                  <h3 
                    className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    style={{ color: activeTheme.primary }}
                  >
                    {activeStudy.label}
                  </h3>
                  
                  <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed max-w-2xl">
                    {activeStudy.tagline}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-4 text-[10px] md:text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {activeStudy.status}
                    </span>
                  </div>
                </div>

                {/* Simulated Device Frame with high fidelity SVG */}
                <div className="border border-border rounded-[10px] overflow-hidden shadow-md bg-muted/30">
                  {/* Browser Bar */}
                  <div className="bg-muted border-b border-border/80 px-4 py-3 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <span className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-muted-foreground tracking-wide font-medium">
                      nexus.co/{activeStudy.id}
                    </div>
                    <div className="w-12 h-2" />
                  </div>
                  
                  {/* Render Visual Mockup */}
                  <div className="bg-background overflow-x-auto relative">
                    <div className="min-w-[640px] md:min-w-0">
                      {MockupComponent && <MockupComponent />}
                    </div>
                  </div>
                </div>

                {/* Narrative Problem Statement */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-7">
                    <h4 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-4">
                      The Problem Context
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed font-light mb-6">
                      {activeStudy.problem}
                    </p>
                    <blockquote className="border-l-2 border-accent pl-4 font-display text-lg text-primary italic leading-relaxed">
                      &ldquo;{activeStudy.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-6 bg-muted/10 p-6 border border-border/80 rounded-[8px]">
                    <div>
                      <h4 className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-3">
                        DESIGNED FOR
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeStudy.designedFor?.map((tag) => (
                          <span key={tag} className="text-xs bg-background border border-border px-2.5 py-1 rounded-[4px] font-medium text-foreground/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow chain block */}
                <div className="border border-border/80 rounded-[8px] p-6 bg-muted/5">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-6 flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    Operational Handoff Workflow
                  </h4>
                  <div className="flex flex-wrap gap-y-3 items-center">
                    {activeStudy.workflow.map((step, stepIdx) => (
                      <div key={step} className="flex items-center">
                        <span 
                          className="text-xs font-semibold px-3 py-2 rounded-[4px] text-white"
                          style={{ backgroundColor: stepIdx % 2 === 0 ? activeTheme.primary : "var(--accent)" }}
                        >
                          {step}
                        </span>
                        {stepIdx < activeStudy.workflow.length - 1 && (
                          <span className="mx-2 text-muted-foreground/60 select-none">&rsaquo;</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities grid details */}
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-6">
                    System Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeStudy.capabilities.map((cap, idx) => (
                      <div 
                        key={cap.title} 
                        className={cn(
                          "border rounded-[6px] p-6 transition-all duration-300",
                          idx === 0 
                            ? "md:col-span-2 hover:shadow-md" 
                            : "bg-background border-border hover:border-muted-foreground/30 hover:shadow-sm"
                        )}
                        style={idx === 0 ? {
                          backgroundColor: `${activeTheme.primary}0D`,
                          borderColor: `${activeTheme.primary}30`
                        } : undefined}
                      >
                        <h5 className="font-display text-base font-bold text-primary mb-4">
                          {cap.title}
                        </h5>
                        <ul className="flex flex-col gap-3">
                          {cap.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/80 font-light leading-relaxed">
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-border/60">
                  
                  {/* Left Column: Integrations */}
                  <div className="md:col-span-7 flex flex-col gap-3">
                    <h5 className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5" />
                      Hardware &amp; System Integrations
                    </h5>
                    <p className="text-xs text-foreground/80 font-light leading-relaxed">
                      {activeStudy.integrations}
                    </p>
                  </div>

                  {/* Right Column: Mini disclaimer */}
                  <div className="md:col-span-5 border-l-2 border-border/80 pl-4 py-0.5 text-[11px] text-muted-foreground leading-relaxed font-light">
                    {activeStudy.disclaimer}
                  </div>
                </div>

                {/* Interactive Sales Sheet (Replaces separate sections to keep layout clean and agency-like) */}
                <div className="border border-border rounded-[8px] bg-background shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleSalesSheet(activeStudy.id)}
                    className="w-full flex items-center justify-between p-5 bg-muted/20 font-semibold text-xs md:text-sm text-primary hover:bg-muted/30 transition-colors"
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
                          target="_blank" 
                          rel="noopener noreferrer"
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

      </div>
    </AnimatedSection>
  );
}
