"use client";

import { PROBLEM } from "@/lib/content/nexus";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const TRANSFORMATIONS = [
  {
    label: "Operational Tools",
    before: "Scattered Tools",
    beforeDetail: "Different apps for chats, spreadsheets, and emails. Operators manually copy and sync data, leading to human errors and outdated logs.",
    after: "One Operational System",
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
  return (
    <AnimatedSection id="company-brochure" className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Statement (Left Column) */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-8">
              {PROBLEM.intro}
            </h2>
            
            <blockquote className="border-l-4 border-[#2E6FAD] pl-6 py-2 my-6 font-display text-xl md:text-2xl text-primary italic leading-relaxed max-w-lg">
              &ldquo;{PROBLEM.quote}&rdquo;
            </blockquote>

            {/* Mobile Workflow Resolution Panel */}
            <div className="block lg:hidden mt-6 mb-8">
              <WorkflowResolutionPanel />
            </div>

            {/* Before / After Nexus Transformation Comparison (Side-by-side Table) */}
            <div className="mt-8 pt-8 border-t border-border/80">
              <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-6">
                Workflow Transformation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted/10 border border-border rounded-[8px] p-5">
                {/* Column: Before Nexus */}
                <div className="flex flex-col gap-4">
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
                <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6">
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

          {/* Cards & Details (Right Column) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <StaggerContainer className="flex flex-col gap-4">
              {PROBLEM.cases.map((text, idx) => {
                // Infer type for labeling
                let label = "Workflow Node";
                if (text.includes("clinic")) label = "Outpatient Clinic";
                else if (text.includes("restaurant")) label = "Restaurant Service";
                else if (text.includes("team")) label = "Async Team Execution";

                return (
                  <StaggerItem key={idx}>
                    <div className="border border-border rounded-[8px] p-6 bg-muted/20 hover:border-[#1A2B4C]/40 transition-colors duration-300">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-2 block">
                        {label}
                      </span>
                      <p className="text-base text-foreground/80 leading-relaxed font-light">
                        {text}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <div className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 pl-2 border-l-2 border-border/80">
              {PROBLEM.conclusion}
            </div>

            {/* Desktop Workflow Resolution Panel */}
            <div className="hidden lg:block mt-8">
              <WorkflowResolutionPanel />
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}

function WorkflowResolutionPanel() {
  return (
    <div 
      className="border border-border/80 bg-muted/15 rounded-[12px] p-6 shadow-sm overflow-hidden relative"
      aria-label="Workflow resolution flow: scattered inputs are mapped by Nexus into a connected operational system."
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-6 flex items-center gap-2 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6FAD] animate-pulse" />
        Operational Transformation Model
      </h3>

      <div className="flex flex-col gap-6 relative z-10">
        {/* Step 1: Scattered Inputs */}
        <div className="border border-border bg-background/50 backdrop-blur-sm rounded-[8px] p-4">
          <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase block mb-2 select-none">
            1. Scattered Inputs (Fragmented State)
          </span>
          <div className="flex flex-wrap gap-2">
            {["Chats", "Sheets", "Tasks", "Calls", "Billing Notes"].map((item, idx) => (
              <span 
                key={idx} 
                className="text-[10px] px-2 py-1 bg-red-500/5 text-[#C0392B] border border-red-500/10 rounded-[4px] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Step 2: Middle Connector */}
        <div className="flex flex-col items-center py-2 relative">
          <div className="h-8 w-px bg-[linear-gradient(to_bottom,var(--border)_50%,transparent_50%)] bg-[size:1px_8px] relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2E6FAD]/10 text-[#2E6FAD] text-[9px] font-mono px-2 py-0.5 rounded-full border border-[#2E6FAD]/25 whitespace-nowrap">
              Nexus maps the workflow
            </div>
          </div>
        </div>

        {/* Step 3: Connected System */}
        <div className="border border-[#2A7D8A]/20 bg-[#2A7D8A]/5 rounded-[8px] p-4">
          <span className="text-[9px] font-mono font-bold text-[#2A7D8A] uppercase block mb-2 select-none">
            2. Connected System (Unified Operations)
          </span>
          <div className="grid grid-cols-2 gap-2">
            {["Defined Roles", "State Statuses", "Enforced Handoffs", "Live Dashboards"].map((item, idx) => (
              <span 
                key={idx} 
                className="text-[10px] px-2.5 py-1.5 bg-[#2A7D8A]/10 text-[#2A7D8A] rounded-[4px] font-semibold text-center border border-[#2A7D8A]/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Step 4: Status Indicator Rows */}
        <div className="border-t border-border/60 pt-4 mt-2 flex flex-col gap-2">
          {[
            { label: "Owner Visibility", state: "Live", color: "text-[#2A7D8A]" },
            { label: "Manual Handoff", state: "Automated", color: "text-[#2E6FAD]" },
            { label: "Customer Follow-up", state: "Status-aware", color: "text-[#2A7D8A]" }
          ].map((row, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs border-b border-border/30 last:border-b-0 pb-1.5 last:pb-0">
              <span className="text-muted-foreground font-light">{row.label}</span>
              <span className={cn("font-semibold font-mono", row.color)}>{row.state}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
