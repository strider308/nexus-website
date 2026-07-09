"use client";

import { SERVICES, HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight, CheckCircle2, AlertCircle, Cpu, Layers } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import nextDynamic from "next/dynamic";
import { DepthFallback } from "../three/ThreeFallback";

const ThreeCanvasShell = nextDynamic(
  () => import("../three/ThreeCanvasShell").then((mod) => mod.ThreeCanvasShell),
  { ssr: false, loading: () => <DepthFallback /> }
);
const ServiceDepthScene = nextDynamic(
  () => import("../three/ServiceDepthScene"),
  { ssr: false }
);

const EXPLORER_SERVICES = [
  {
    id: "workflow",
    title: "Custom workflow systems",
    desc: "We build tailored software applications designed around your specific team roles, operational steps, data inputs, and invoice approvals.",
    proof: "ClinicOS Reference / RestaurantOS",
    when: "Your team is manually copying data, tracking tasks in chat channels, or using fragile custom sheets.",
    builds: "Multi-role workflow app, secure client portal page, and centralized task manager.",
    roles: "Operator, Manager, Customer, and External Admin accounts.",
    starter: "Replacing paper registers or shared spreadsheets with guided UI actions."
  },
  {
    id: "automation",
    title: "Automation layers",
    desc: "We connect your existing databases, calendar triggers, chat feeds, and notifications to remove repetitive manual follow-ups.",
    proof: "SafeDate Model / SecureScan logs",
    when: "Staff spend hours chasing client approvals, sending milestone notifications, or updating statuses manually.",
    builds: "Background event listeners, automated alerts triggers, and secure API webhooks.",
    roles: "Internal staff, clients, and connected third-party systems.",
    starter: "Eliminating manual task assignments and reminder emails."
  },
  {
    id: "mvp",
    title: "MVP / private beta builds",
    desc: "We construct lightweight, fast-loading initial versions of your software designed to validate assumptions with early pilot users.",
    proof: "Aarogya Data / ShipWright Task Board",
    when: "You are preparing a new app concept for private beta launch and need reliable state transitions.",
    builds: "Staging sandbox deploy, user feedback forms, and database rules verification.",
    roles: "Early pilot users and system administrators.",
    starter: "Launching a secure, functional workspace for 10-15 friendly testers."
  },
  {
    id: "dashboards",
    title: "Owner dashboards",
    desc: "We aggregate active room counts, table turnaround rates, and cash collections into consolidated dashboard views.",
    proof: "BuildPublic Founder Workspace",
    when: "Owners run business operations blind, lacking real-time data visibility.",
    builds: "Metric counters, data history logs, and CSV download summaries.",
    roles: "Business owners, stakeholders, and lead operators.",
    starter: "Aggregating scattered chats and sheets into single-pane status screens."
  },
  {
    id: "ux",
    title: "UX modernization",
    desc: "We redesign cluttered dashboards, consolidate overlapping navigation menus, and clean up visual layouts.",
    proof: "ClinicOS Web Layout",
    when: "System screens are too complex, leading to training fatigue or operator errors.",
    builds: "Clean sidebar menu, unified forms flow, and responsive grid panels.",
    roles: "Internal staff, operators, and customers.",
    starter: "Simplifying multi-step forms into logical operational pathways."
  },
  {
    id: "ai",
    title: "AI-assisted workflows",
    desc: "We implement secure LLM prompt integrations to draft task notes or summarize client transcripts with human confirmation gates.",
    proof: "SecureScan Analysis Assist",
    when: "Staff spend hours reading transcripts, writing summaries, or drafting manual email reports.",
    builds: "Draft text generators, background summarization scripts, and review checklists.",
    roles: "Drafting engine and human review managers.",
    starter: "Using automated models to draft summaries under manual control."
  }
];

const PROCESS_STEPS_DETAILS = [
  {
    step: "1",
    title: "Workflow Mapping",
    does: "We trace how work moves from intake trigger to completion.",
    provides: "Current sheets, process logs, and staff walk-through notes.",
    delivers: "Detailed stage transition diagrams mapping roles and database parameters.",
    reduces: "Developer waste from building incorrect database relations."
  },
  {
    step: "2",
    title: "Visual Priming",
    does: "We design clean UI panels and form stages before writing system code.",
    provides: "Approval on data fields, user roles, and layout details.",
    delivers: "High-fidelity clickable static prototypes showing actual user screens.",
    reduces: "Scope creep and design rework during backend code builds."
  },
  {
    step: "3",
    title: "Database Encode",
    does: "We build correct state machines, access roles, and audit databases.",
    provides: "Final verification of business rules and transition steps.",
    delivers: "Secure API structures, access rules, and data validation layers.",
    reduces: "Security bugs and unauthorized privilege access risks."
  },
  {
    step: "4",
    title: "Pilot Handoff",
    does: "We deploy the first system version to friendly pilot users.",
    provides: "10-15 friendly testers tracking active operations in real time.",
    delivers: "Active staging URL, error tracking setup, and client feedback forms.",
    reduces: "Bugs and system crashes during live public launch."
  },
  {
    step: "5",
    title: "System Handoff",
    does: "We clean up system logs, setup domain paths, and hand over the codebase.",
    provides: "Approval on production build and final invoice signoff.",
    delivers: "Full repository ownership and complete system documentation sheets.",
    reduces: "Key-person risk by documenting all code and configurations."
  }
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string>("workflow");
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const desktopPathFill = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "80%"]);
  const mobilePathFill = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  const activeServiceData = EXPLORER_SERVICES.find((s) => s.id === selectedService) || EXPLORER_SERVICES[0];

  return (
    <AnimatedSection id="services-brochure" className="w-full py-12 md:py-16 border-b border-border bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
            Capabilities Ledger
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
            Workflow layers Nexus builds
          </h2>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
            {SERVICES.sub}
          </p>
        </div>

        {/* Services Explorer Tool */}
        <div ref={sectionRef} className="mb-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Side: Services tab selection */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {EXPLORER_SERVICES.map((service) => {
                const isActive = selectedService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={cn(
                      "w-full text-left p-5 rounded-[8px] border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      isActive 
                        ? "bg-background border-border shadow-sm border-l-4 border-l-[#2E6FAD]" 
                        : "bg-transparent border-transparent hover:bg-background/40 hover:border-border/30"
                    )}
                  >
                    <h3 className={cn(
                      "font-display text-sm md:text-base font-bold transition-colors",
                      isActive ? "text-primary" : "text-foreground/80"
                    )}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1">
                      {service.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Detail Panel */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-border/60 pt-5 lg:pt-0 lg:pl-6 flex flex-col justify-between min-h-[300px]">
              <div className="animate-fade-in grid grid-cols-1 md:grid-cols-12 gap-6" key={selectedService}>
                {/* Text details (7 Cols) */}
                <div className="md:col-span-7 flex flex-col gap-4">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block animate-pulse">
                      WHEN THIS MATTERS
                    </span>
                    <p className="text-xs text-foreground/80 leading-relaxed font-light">
                      {activeServiceData.when}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/40">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block">
                      WHAT NEXUS BUILDS
                    </span>
                    <p className="text-xs text-primary font-medium leading-relaxed">
                      {activeServiceData.builds}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-border/40">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block">
                      ROLES INVOLVED
                    </span>
                    <p className="text-xs text-foreground/70 font-light leading-relaxed">
                      {activeServiceData.roles}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-muted/20 p-3.5 rounded-[6px] w-full">
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block">
                        RELATED PROOF SYSTEM
                      </span>
                      <span className="text-xs text-primary font-bold">
                        {activeServiceData.proof}
                      </span>
                    </div>
                    <div className="text-left md:text-right md:max-w-xs">
                      <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-0.5 block md:text-right">
                        CONVERSATION STARTER
                      </span>
                      <span className="text-xs text-[#2E6FAD] italic font-medium">
                        &ldquo;{activeServiceData.starter}&rdquo;
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3D Visual & Labeled Diagram (5 Cols, Desktop Only) */}
                <div className="hidden md:flex md:col-span-5 flex-col gap-4">
                  {/* Canvas Container */}
                  <div className="border border-border/60 bg-muted/15 rounded-[8px] overflow-hidden items-center justify-center p-2 relative h-[210px] w-full">
                    <div className="absolute top-2 left-3 text-[8px] font-mono text-muted-foreground/60 uppercase select-none">
                      Architecture Model (3D)
                    </div>
                    <div className="w-full h-full">
                      <ThreeCanvasShell 
                        ariaLabel="3D spatial architecture stack representing data layers, process logic, and live dashboards."
                        fallback={<DepthFallback />}
                      >
                        <ServiceDepthScene selectedService={selectedService} />
                      </ThreeCanvasShell>
                    </div>
                  </div>

                  {/* Labeled Static Diagram */}
                  <StaticArchitectureStack selectedService={selectedService} />
                </div>
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

                    {/* Step parameters block */}
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

interface StaticArchitectureStackProps {
  selectedService: string;
}

const ARCH_LAYERS = [
  { id: "intake", label: "1. Intake Layer", desc: "Forms, calls, spreadsheets, messages, files" },
  { id: "logic", label: "2. Logic Layer", desc: "Workflow states, rules, validations, calculations" },
  { id: "role", label: "3. Role Layer", desc: "Owner, admin, staff, customer, partner accounts" },
  { id: "automation", label: "4. Automation Layer", desc: "Notifications, assignments, reminders, webhooks" },
  { id: "visibility", label: "5. Visibility Layer", desc: "Dashboards, status views, reports, queues" },
  { id: "handoff", label: "6. Handoff Layer", desc: "Documentation, audit trail, deployment, training" },
];

function StaticArchitectureStack({ selectedService }: StaticArchitectureStackProps) {
  const service = selectedService.toLowerCase();
  
  const isLayerHighlighted = (layerId: string) => {
    if (service.includes("workflow")) return true; // all layers
    if (service.includes("automation")) {
      return layerId === "logic" || layerId === "automation" || layerId === "handoff";
    }
    if (service.includes("mvp") || service.includes("beta")) {
      return layerId === "intake" || layerId === "logic" || layerId === "visibility" || layerId === "handoff";
    }
    if (service.includes("dashboard")) {
      return layerId === "visibility" || layerId === "logic" || layerId === "role";
    }
    if (service.includes("ux") || service.includes("modernization")) {
      return layerId === "intake" || layerId === "role" || layerId === "visibility";
    }
    if (service.includes("ai") || service.includes("assisted")) {
      return layerId === "logic" || layerId === "automation" || layerId === "handoff";
    }
    return false;
  };

  return (
    <div className="border border-border/80 bg-background/50 backdrop-blur-sm rounded-[12px] p-5 shadow-sm w-full">
      <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase block mb-4 select-none">
        Service Architecture Stack
      </span>
      <div className="flex flex-col gap-3 relative pl-4">
        {/* Connecting timeline line */}
        <div className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-border/40" />

        {ARCH_LAYERS.map((layer) => {
          const isHigh = isLayerHighlighted(layer.id);
          return (
            <div key={layer.id} className="relative flex flex-col gap-0.5 group">
              {/* Bullet Node */}
              <span className={cn(
                "absolute left-[-16px] top-1.5 w-1.5 h-1.5 rounded-full border transition-all duration-300",
                isHigh 
                  ? "bg-[#2E6FAD] border-[#2E6FAD] scale-110 shadow-[0_0_8px_rgba(46,111,173,0.35)]" 
                  : "bg-background border-border/60"
              )} />
              
              <h4 className={cn(
                "text-[9px] font-bold font-mono tracking-wide uppercase transition-colors duration-300",
                isHigh ? "text-primary" : "text-muted-foreground/50"
              )}>
                {layer.label}
              </h4>
              <p className={cn(
                "text-[10px] font-light leading-normal transition-colors duration-300",
                isHigh ? "text-foreground/90 font-medium" : "text-muted-foreground/45"
              )}>
                {layer.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
