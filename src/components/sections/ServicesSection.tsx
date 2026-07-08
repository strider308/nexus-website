"use client";

import { SERVICES, HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight, CheckCircle2, AlertCircle, Cpu, Layers } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

const EXPLORER_SERVICES = [
  {
    id: "workflow",
    name: "Custom workflow systems",
    when: "Your team runs on scattered tools, manual handoffs, and owner memory.",
    builds: "A role-aware operational system that connects intake, action, status, and visibility.",
    roles: "Owner, operator, staff, customer/admin.",
    proof: "ClinicOS, RestaurantOS, ShipWright",
    starter: "Show us the workflow you currently manage manually.",
  },
  {
    id: "automation",
    name: "Automation layers",
    when: "Staff spend hours copying data between sheets, sending manual notifications, or checking statuses.",
    builds: "Automated background pipelines, state-aware email/SMS notifications, and webhook integrations.",
    roles: "Operator, staff, system administrator.",
    proof: "ShipWright, Aarogya",
    starter: "Which manual task does your team repeat more than ten times a day?",
  },
  {
    id: "mvp",
    name: "MVP / private beta builds",
    when: "You have a validated concept but need a secure, functional product to roll out to first users.",
    builds: "A scoped product with secure authentication, core workflow engines, and feedback loops.",
    roles: "Founder, early adopter, pilot user.",
    proof: "BuildPublic, SafeDate, SecureScan",
    starter: "What is the single core value your users must experience in day one?",
  },
  {
    id: "dashboards",
    name: "Owner dashboards",
    when: "You are running operations blind, relying on chats to know what is finished and what is stuck.",
    builds: "Live consolidated dashboards showing queue metrics, table turnarounds, task status, and bottleneck alerts.",
    roles: "Owner, stakeholder, manager.",
    proof: "RestaurantOS, ClinicOS, Aarogya",
    starter: "What metric do you wish you could see in real-time right now?",
  },
  {
    id: "ux",
    name: "UX modernization",
    when: "Legacy systems or complex sheets are making staff training slow and input errors common.",
    builds: "Cleared-up digital pathways, role-tailored dashboards, and robust error prevention.",
    roles: "Staff, employee, field operator.",
    proof: "ClinicOS, Aarogya, RestaurantOS",
    starter: "What is the most common input mistake your staff make in the current system?",
  },
  {
    id: "ai",
    name: "AI-assisted workflow features",
    when: "Operators spend hours reading long transcripts, drafting standard updates, or manually prioritizing queues.",
    builds: "Scoped summarization pipelines, template drafts, and smart suggestion logs with strict human oversight.",
    roles: "Staff, customer support, data analyst.",
    proof: "ClinicOS, SecureScan",
    starter: "Where do your staff spend the most time reading or drafting text?",
  },
];

const PROCESS_STEPS_DETAILS = [
  {
    step: "01",
    title: "Understand",
    does: "Analyzes raw operational logs, spreadsheet structures, and role dynamics.",
    provides: "Access to operational managers, current spreadsheets, and chat groups.",
    delivers: "A scoped workflow map showing current bottlenecks.",
    reduces: "Building features that don't match the actual workflow.",
  },
  {
    step: "02",
    title: "Map",
    does: "Designs precise state transitions and role-based permissions.",
    provides: "Rules for approvals, pricing structures, and handoff criteria.",
    delivers: "Interactive wireframe screens showing each role's view.",
    reduces: "Communication failures between operators, staff, and customers.",
  },
  {
    step: "03",
    title: "Build",
    does: "Writes custom, secure web applications and automated pipelines.",
    provides: "Branding assets, API access keys, and staging environment setups.",
    delivers: "Fully built software deployed to a private staging url.",
    reduces: "Code-debt or bloated frameworks that degrade performance.",
  },
  {
    step: "04",
    title: "Validate",
    does: "Sets up feedback tracking and guides private beta users.",
    provides: "5-10 friendly users or staff members to pilot the build.",
    delivers: "Logged errors, resolved edge cases, and pilot feedback notes.",
    reduces: "Operational friction during full-scale launch.",
  },
  {
    step: "05",
    title: "Launch",
    does: "Runs production cutover checklists and transfers codebase.",
    provides: "Production domain settings and DNS access.",
    delivers: "Main production deployment live with all code handed over in Git.",
    reduces: "Downtime, broken integrations, or vendor lock-in.",
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [selectedService, setSelectedService] = useState<string>("workflow");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const desktopPathFill = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const mobilePathFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const activeServiceData = EXPLORER_SERVICES.find((s) => s.id === selectedService) || EXPLORER_SERVICES[0];

  return (
    <AnimatedSection id="services-brochure" className="w-full py-12 md:py-16 border-b border-border bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
            {SERVICES.eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
            {SERVICES.title}
          </h2>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
            {SERVICES.sub}
          </p>
        </div>

        {/* Who We Work With */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SERVICES.workWith.map((group, idx) => (
            <div key={idx} className="border border-border bg-background rounded-[8px] p-6 shadow-sm">
              <h3 className="font-display text-lg md:text-xl font-bold text-primary mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/85 font-light leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-[#2E6FAD] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Engagement Services - Interactive Explorer */}
        <div className="mb-16">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase">
                Core Engagement Services
              </h3>
              <p className="text-xs text-muted-foreground font-light mt-1">
                Explore when each service matters, what we design, and our related proof.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-background border border-border rounded-[8px] p-5 shadow-sm">
            {/* Left Side: Selectable Cards */}
            <div className="lg:col-span-5 flex flex-col gap-2" role="tablist" aria-label="Services selector list">
              {EXPLORER_SERVICES.map((service) => {
                const isSelected = service.id === selectedService;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    role="tab"
                    aria-selected={isSelected}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-[6px] border transition-all duration-200 flex items-center justify-between text-xs md:text-sm font-semibold cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      isSelected
                        ? "bg-muted border-border/80 text-primary shadow-sm"
                        : "border-transparent text-muted-foreground hover:text-primary hover:bg-muted/30"
                    )}
                  >
                    <span>{service.name}</span>
                    <ArrowRight className={cn("h-3.5 w-3.5 transition-transform duration-200 shrink-0", isSelected ? "translate-x-1 opacity-100" : "opacity-0")} />
                  </button>
                );
              })}
            </div>

            {/* Right Side: Detail Panel */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-border/60 pt-5 lg:pt-0 lg:pl-6 flex flex-col justify-between min-h-[300px]">
              <div className="animate-fade-in flex flex-col gap-4" key={selectedService}>
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block">
                    WHEN THIS MATTERS
                  </span>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-light">
                    {activeServiceData.when}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-3 border-t border-border/40">
                  <div className="md:col-span-7">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block">
                      WHAT NEXUS BUILDS
                    </span>
                    <p className="text-xs text-primary font-medium leading-relaxed">
                      {activeServiceData.builds}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block">
                      ROLES INVOLVED
                    </span>
                    <p className="text-xs text-foreground/70 font-light leading-relaxed">
                      {activeServiceData.roles}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-muted/20 p-3.5 rounded-[6px]">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block">
                      RELATED PROOF SYSTEM
                    </span>
                    <span className="text-xs text-primary font-bold">
                      {activeServiceData.proof}
                    </span>
                  </div>
                  <div className="text-right md:max-w-xs">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block md:text-right">
                      CONVERSATION STARTER
                    </span>
                    <span className="text-xs text-[#2E6FAD] italic font-medium">
                      &ldquo;{activeServiceData.starter}&rdquo;
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-muted-foreground font-mono mt-4 pt-2 border-t border-border/40 select-none">
                Select cards on the left to inspect builds.
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Process - Static Detailed Desktop View */}
        <div className="hidden md:block mb-16 relative">
          <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-8">
            Our Engagement Process
          </h3>
          
          <div ref={containerRef} className="relative py-10 px-6 border border-border/80 bg-background/60 backdrop-blur-sm rounded-[12px] shadow-sm overflow-hidden">
            {/* Background path line */}
            <div className="absolute left-[10%] right-[10%] top-[60px] h-[3px] bg-border/60 rounded-full z-0" />
            
            {/* Active filled path line */}
            <motion.div 
              className="absolute left-[10%] top-[60px] h-[3px] bg-[#2E6FAD] rounded-full origin-left z-10"
              style={{ width: shouldReduceMotion ? "80%" : desktopPathFill }}
            />

            <div className="relative grid grid-cols-5 gap-6 z-20">
              {PROCESS_STEPS_DETAILS.map((step, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="relative mb-6 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-background border-2 border-[#2E6FAD] flex items-center justify-center" />
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-[#2E6FAD]" />
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#2E6FAD] block mb-1">
                      {step.step}
                    </span>
                    <h4 className="font-display text-sm font-bold text-primary mb-3">
                      {step.title}
                    </h4>

                    {/* Step parameters block (fully visible and scan-readable) */}
                    <div className="flex flex-col gap-2.5 pt-3 border-t border-border/60 text-[10px] text-left font-light leading-relaxed text-foreground/95 w-full">
                      <div>
                        <strong className="text-[8px] font-mono text-muted-foreground uppercase block flex items-center gap-1">
                          <Cpu className="h-2 w-2 shrink-0 text-[#2E6FAD]" /> What we do
                        </strong>
                        {step.does}
                      </div>
                      <div>
                        <strong className="text-[8px] font-mono text-muted-foreground uppercase block flex items-center gap-1">
                          <Layers className="h-2 w-2 shrink-0 text-[#2E6FAD]" /> You provide
                        </strong>
                        {step.provides}
                      </div>
                      <div>
                        <strong className="text-[8px] font-mono text-primary uppercase block font-bold flex items-center gap-1">
                          <CheckCircle2 className="h-2 w-2 shrink-0 text-[#2E6FAD]" /> We deliver
                        </strong>
                        <span className="text-primary font-medium">{step.delivers}</span>
                      </div>
                      <div>
                        <strong className="text-[8px] font-mono text-[#C0392B] uppercase block font-bold flex items-center gap-1">
                          <AlertCircle className="h-2 w-2 shrink-0 text-[#C0392B]" /> Risk reduced
                        </strong>
                        {step.reduces}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Engagement Process - Mobile View (Stacked Cards) */}
        <div className="block md:hidden mb-16 relative px-2">
          <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-6">
            Our Engagement Process
          </h3>
          
          <div className="relative pl-8 py-2">
            {/* Background vertical line */}
            <div className="absolute left-[15px] top-6 bottom-6 w-[3px] bg-border/60 rounded-full z-0" />
            
            {/* Active filled vertical line */}
            <motion.div 
              className="absolute left-[15px] top-6 w-[3px] bg-[#2E6FAD] rounded-full origin-top z-10"
              style={{ height: shouldReduceMotion ? "100%" : mobilePathFill }}
            />

            <div className="flex flex-col gap-8">
              {PROCESS_STEPS_DETAILS.map((step, idx) => {
                return (
                  <div key={idx} className="relative flex items-start gap-4 group">
                    <div className="absolute left-[-25px] top-1 flex items-center justify-center z-20">
                      <div className="w-5 h-5 rounded-full bg-background border-2 border-[#2E6FAD] flex items-center justify-center" />
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-[#2E6FAD]" />
                    </div>

                    <div className="bg-background border border-border p-4 rounded-[6px] shadow-sm w-full">
                      <span className="text-[9px] font-mono font-bold text-muted-foreground block mb-0.5">
                        STEP {step.step}
                      </span>
                      <h4 className="font-display text-sm font-bold text-primary mb-3">
                        {step.title}
                      </h4>
                      
                      <div className="flex flex-col gap-3 pt-2 border-t border-border/40 text-[11px] font-light leading-relaxed text-foreground/85">
                        <div>
                          <strong className="text-[9px] font-mono uppercase text-muted-foreground block">What we do:</strong>
                          {step.does}
                        </div>
                        <div>
                          <strong className="text-[9px] font-mono uppercase text-muted-foreground block">What you provide:</strong>
                          {step.provides}
                        </div>
                        <div>
                          <strong className="text-[9px] font-mono uppercase text-primary block font-bold">What we deliver:</strong>
                          <span className="text-primary font-medium">{step.delivers}</span>
                        </div>
                        <div>
                          <strong className="text-[9px] font-mono uppercase text-[#C0392B] block font-bold">Risk reduced:</strong>
                          {step.reduces}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Final call block */}
        <div className="border border-border bg-background rounded-[8px] p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
            {SERVICES.closingTitle}
          </h3>
          <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {SERVICES.closingText}
          </p>
          <a
            href={HERO.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none interactive-action"
            )}
          >
            <span>Start a conversation</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </AnimatedSection>
  );
}
