"use client";

import { PROBLEM } from "@/lib/content/nexus";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import dynamic from "next/dynamic";
import { BeforeAfterFallback } from "../three/ThreeFallback";

const ThreeCanvasShell = dynamic(
  () => import("../three/ThreeCanvasShell").then((mod) => mod.ThreeCanvasShell),
  { ssr: false, loading: () => <BeforeAfterFallback /> }
);
const BeforeAfterScene = dynamic(
  () => import("../three/BeforeAfterScene"),
  { ssr: false }
);

const TRANSFORMATIONS = [
  {
    label: "Operational Tools",
    before: "Scattered Tools",
    beforeDetail: "Different apps for chats, spreadsheets, and emails. Operators manually copy and sync data, leading to human errors and outdated logs.",
    after: "One Operating System",
    afterDetail: "Everyone works on the same state. Intake, action logs, customer updates, and invoicing reside in a single custom web app.",
  },
  {
    label: "Task Handoffs",
    before: "Manual Handoffs",
    beforeDetail: "Relying on owners or staff to remember to notify the next person, check completion, or ping clients. Work gets stuck in silent queues.",
    after: "Automated Handoffs",
    afterDetail: "The system enforces operational pathways. Moving a record triggers notifications, prepares drafts, and assigns tasks instantly.",
  },
  {
    label: "Business Visibility",
    before: "No Owner Visibility",
    beforeDetail: "Owners run operations blind. Spotting bottlenecks requires digging through chats, calling staff, or waiting for client complaints.",
    after: "Live Dashboards",
    afterDetail: "Consolidated screens show table turnarounds, active clinic room counts, open pipeline stages, and real-time operational metrics.",
  },
  {
    label: "Status Follow-ups",
    before: "Repeated Follow-ups",
    beforeDetail: "Clients call or message to ask if their records are ready, or staff spend hours chasing status updates from external partners.",
    after: "Status-Aware Alerts",
    afterDetail: "Automatic alerts are fired at key milestones, and clients can track their orders through simple, secure public links.",
  },
  {
    label: "Process Memory",
    before: "Fragile Process Memory",
    beforeDetail: "Operations break when key staff leave, because the rules live in people's heads. Training new hires takes weeks of hand-holding.",
    after: "Repeatable Workflows",
    afterDetail: "Business rules are encoded directly into the user interface controls. Staff are guided step-by-step through correct procedures.",
  },
];

export function ProblemSection() {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <AnimatedSection id="company-brochure" className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Statement & Side-by-Side Comparison (Left Column - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
              Workflow Transformation
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
              From fragmented work to one operating system
            </h2>
            <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-2xl">
              {PROBLEM.intro}
            </p>
            
            <blockquote className="border-l-4 border-[#2E6FAD] pl-6 py-2 my-5 font-display text-xl md:text-2xl text-primary italic leading-relaxed max-w-lg">
              &ldquo;{PROBLEM.quote}&rdquo;
            </blockquote>

            {/* Narrative Cases list */}
            <div className="my-6">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PROBLEM.cases.map((text, idx) => {
                  let label = "Workflow Node";
                  if (text.includes("clinic")) label = "Outpatient Clinic";
                  else if (text.includes("restaurant")) label = "Restaurant Service";
                  else if (text.includes("team")) label = "Async Team Execution";

                  return (
                    <StaggerItem key={idx}>
                      <div className="border border-border rounded-[8px] p-4 bg-muted/10 hover:border-[#1A2B4C]/35 transition-colors duration-300 h-full">
                        <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-1 block">
                          {label}
                        </span>
                        <p className="text-xs text-foreground/80 leading-relaxed font-light">
                          {text}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

            <div className="text-sm md:text-base font-light leading-relaxed text-foreground/90 pl-3 border-l-2 border-border/80 my-4">
              {PROBLEM.conclusion}
            </div>

            {/* Side-by-Side Comparison tables */}
            <div className="mt-8 pt-8 border-t border-border/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted/10 border border-border rounded-[8px] p-5">
                {/* Column: Before Nexus */}
                <div className={cn("flex flex-col gap-4 transition-opacity duration-300", isAfter && "opacity-45")}>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#C0392B] uppercase flex items-center gap-1.5 mb-1 border-b border-border/60 pb-2">
                    <AlertCircle className="h-3.5 w-3.5" /> BEFORE NEXUS
                  </span>
                  <div className="flex flex-col gap-4">
                    {TRANSFORMATIONS.map((t, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <h4 className="text-xs font-bold text-primary">
                          {t.label}: {t.before}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-normal font-light">
                          {t.beforeDetail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column: After Nexus */}
                <div className={cn("flex flex-col gap-4 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6 transition-opacity duration-300", !isAfter && "opacity-45")}>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#2A7D8A] uppercase flex items-center gap-1.5 mb-1 border-b border-border/60 pb-2">
                    <CheckCircle className="h-3.5 w-3.5" /> AFTER NEXUS
                  </span>
                  <div className="flex flex-col gap-4">
                    {TRANSFORMATIONS.map((t, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <h4 className="text-xs font-bold text-[#2A7D8A]">
                          {t.label}: {t.after}
                        </h4>
                        <p className="text-[11px] text-foreground/80 leading-normal font-light">
                          {t.afterDetail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Resolution Map & 3D Canvas (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
            
            {/* 3D Morph Visualizer Frame */}
            <div className="hidden lg:flex border border-border rounded-[10px] bg-muted/20 items-center justify-center p-3 relative h-[210px] overflow-hidden">
              <div className="absolute top-2.5 left-3 text-[8px] font-mono text-muted-foreground/60 uppercase select-none">
                Transformation Space (3D WebGL)
              </div>
              <div className="w-full h-full">
                <ThreeCanvasShell 
                  ariaLabel="A 3D spatial transformation panel morphing between manual scattered operations and aligned automated workflow paths."
                  fallback={<BeforeAfterFallback isAfter={isAfter} />}
                >
                  <BeforeAfterScene isAfter={isAfter} />
                </ThreeCanvasShell>
              </div>
            </div>

            {/* Workflow Resolution Map (HTML/SVG Diagram) */}
            <WorkflowResolutionPanel isAfter={isAfter} setIsAfter={setIsAfter} />

          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}

interface WorkflowResolutionPanelProps {
  isAfter: boolean;
  setIsAfter: (val: boolean) => void;
}

function WorkflowResolutionPanel({ isAfter, setIsAfter }: WorkflowResolutionPanelProps) {
  return (
    <div 
      className="border border-border bg-background rounded-[12px] p-6 shadow-sm overflow-hidden relative"
      aria-label="Workflow resolution flow: scattered inputs are mapped by Nexus into a connected operational system."
    >
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Title & State Selectors */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50 relative z-10">
        <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-2 select-none">
          <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", isAfter ? "bg-[#2A7D8A]" : "bg-[#C0392B]")} />
          Workflow Resolution Map
        </h3>
        
        <div className="flex gap-1.5 bg-muted p-0.5 rounded-full border border-border">
          <button
            onClick={() => setIsAfter(false)}
            className={cn(
              "text-[8px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full transition-all outline-none",
              !isAfter ? "bg-[#C0392B] text-white" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Before
          </button>
          <button
            onClick={() => setIsAfter(true)}
            className={cn(
              "text-[8px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full transition-all outline-none",
              isAfter ? "bg-[#2A7D8A] text-white" : "text-muted-foreground hover:text-foreground"
            )}
          >
            After
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 relative z-10">
        {/* Step 1: Fragmented Inputs */}
        <div className={cn("border border-border bg-background/50 rounded-[8px] p-4 transition-all duration-300", isAfter ? "opacity-35" : "border-[#C0392B]/30 bg-[#C0392B]/[0.01]")}>
          <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase block mb-2 select-none">
            1. Fragmented Inputs (Before State)
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["Chats", "Sheets", "Tasks", "Calls", "Billing Notes"].map((item, idx) => (
              <span 
                key={idx} 
                className="text-[9px] px-2 py-0.5 bg-red-500/5 text-[#C0392B] border border-red-500/10 rounded-[4px] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Step 2: Mapping Layer */}
        <div className="border border-border/80 bg-background/40 rounded-[8px] p-4">
          <span className="text-[9px] font-mono font-bold text-[#2E6FAD] uppercase block mb-2 select-none">
            2. Nexus Mapping Layer
          </span>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-muted-foreground font-light">
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#2E6FAD]" />
              <span>roles defined</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#2E6FAD]" />
              <span>states named</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#2E6FAD]" />
              <span>handoffs clarified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#2E6FAD]" />
              <span>visibility points chosen</span>
            </div>
          </div>
        </div>

        {/* Step 3: Connected System */}
        <div className={cn("border border-border bg-background/50 rounded-[8px] p-4 transition-all duration-300", !isAfter ? "opacity-35" : "border-[#2A7D8A]/30 bg-[#2A7D8A]/[0.01]")}>
          <span className="text-[9px] font-mono font-bold text-[#2A7D8A] uppercase block mb-2 select-none">
            3. Connected System (After State)
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              "role-based screens",
              "status-aware workflow",
              "automated handoffs",
              "owner dashboard",
              "audit trail"
            ].map((item, idx) => (
              <span 
                key={idx} 
                className="text-[9px] px-2 py-1 bg-[#2A7D8A]/5 text-[#2A7D8A] rounded-[4px] font-semibold text-center border border-[#2A7D8A]/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Step 4: Outcome Rows */}
        <div className="border-t border-border/50 pt-4 mt-2 flex flex-col gap-2">
          {[
            { label: "Owner Visibility", status: "Live", isHighlight: isAfter },
            { label: "Manual Handoff", status: "Automated", isHighlight: isAfter },
            { label: "Customer Follow-up", status: "Status-aware", isHighlight: isAfter },
            { label: "Process Memory", status: "Encoded", isHighlight: isAfter },
            { label: "Work Ownership", status: "Assigned", isHighlight: isAfter }
          ].map((row, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs border-b border-border/30 last:border-b-0 pb-1.5 last:pb-0">
              <span className="text-muted-foreground font-light">{row.label}</span>
              <span className={cn(
                "font-semibold font-mono text-[10px] px-1.5 py-0.5 rounded-[4px] border",
                row.isHighlight 
                  ? "bg-[#2A7D8A]/5 text-[#2A7D8A] border-[#2A7D8A]/10" 
                  : "bg-red-500/5 text-[#C0392B] border-red-500/10"
              )}>
                {row.isHighlight ? row.status : "Fragmented"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
