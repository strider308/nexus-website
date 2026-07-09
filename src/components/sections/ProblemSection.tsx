"use client";

import { PROBLEM } from "@/lib/content/nexus";
import { AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { WordsPullUpMultiStyle, ScrollRevealParagraph } from "../ui/words-pull-up";

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
    <section id="company-brochure" className="w-full py-16 md:py-24 border-b border-[#DEDBC8]/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Cinematic About / Thesis Card */}
        <div className="bg-[#101010] rounded-[2rem] border border-[#DEDBC8]/10 px-6 py-16 md:px-12 md:py-24 text-center max-w-6xl mx-auto mb-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />
          
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#DEDBC8] mb-6 block">
            Workflow thesis
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[1.0] sm:leading-[0.95] text-[#E1E0CC] mb-8 font-medium tracking-tight">
            <WordsPullUpMultiStyle 
              segments={[
                { text: "Nexus is a founder-led software studio,", className: "font-normal" },
                { text: " built for operational complexity.", className: "font-serif text-[#DEDBC8]" },
                { text: " We map messy workflows into custom systems people can actually run.", className: "font-normal" }
              ]}
            />
          </h2>

          <div className="max-w-3xl mx-auto mt-8">
            <ScrollRevealParagraph 
              text="Every Nexus build starts with the same question: where does the work get stuck? From there, we define roles, states, handoffs, dashboards, and launch paths — then turn the workflow into software."
              className="text-[#DEDBC8] text-sm sm:text-base md:text-lg font-light leading-relaxed text-center"
            />
          </div>
        </div>

        {/* Before/After Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 pt-8">
          
          {/* Side-by-Side Comparison tables (Left Column - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#DEDBC8]/10">
              <h3 className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground">
                How Nexus maps a workflow
              </h3>
              
              <div className="flex gap-1.5 bg-[#101010] p-1 rounded-full border border-[#DEDBC8]/15">
                <button
                  onClick={() => setIsAfter(false)}
                  className={cn(
                    "text-[8px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-all outline-none",
                    !isAfter ? "bg-[#C0392B] text-white" : "text-[#DEDBC8]/70 hover:text-white"
                  )}
                >
                  Before
                </button>
                <button
                  onClick={() => setIsAfter(true)}
                  className={cn(
                    "text-[8px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-all outline-none",
                    isAfter ? "bg-[#2A7D8A] text-white" : "text-[#DEDBC8]/70 hover:text-white"
                  )}
                >
                  After
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#101010]/30 border border-[#DEDBC8]/10 rounded-[10px] p-5">
              {/* Column: Before Nexus */}
              <div className={cn("flex flex-col gap-4 transition-opacity duration-300", isAfter && "opacity-45")}>
                <span className="text-[9px] font-mono font-bold tracking-wider text-[#C0392B] uppercase flex items-center gap-1.5 mb-1 border-b border-[#DEDBC8]/10 pb-2">
                  <AlertCircle className="h-3 w-3" /> BEFORE NEXUS
                </span>
                <div className="flex flex-col gap-4">
                  {TRANSFORMATIONS.map((t, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <h4 className="text-xs font-bold text-[#E1E0CC]">
                        {t.label}: {t.before}
                      </h4>
                      <p className="text-[11px] text-gray-400 leading-normal font-light">
                        {t.beforeDetail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column: After Nexus */}
              <div className={cn("flex flex-col gap-4 border-t md:border-t-0 md:border-l border-[#DEDBC8]/10 pt-4 md:pt-0 md:pl-6 transition-opacity duration-300", !isAfter && "opacity-45")}>
                <span className="text-[9px] font-mono font-bold tracking-wider text-[#2A7D8A] uppercase flex items-center gap-1.5 mb-1 border-b border-[#DEDBC8]/10 pb-2">
                  <CheckCircle className="h-3 w-3" /> AFTER NEXUS
                </span>
                <div className="flex flex-col gap-4">
                  {TRANSFORMATIONS.map((t, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <h4 className="text-xs font-bold text-[#2A7D8A]">
                        {t.label}: {t.after}
                      </h4>
                      <p className="text-[11px] text-gray-300 leading-normal font-light">
                        {t.afterDetail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Resolution Map (Right Column - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
            <WorkflowResolutionPanel isAfter={isAfter} setIsAfter={setIsAfter} />
          </div>

        </div>
      </div>
    </section>
  );
}

interface WorkflowResolutionPanelProps {
  isAfter: boolean;
  setIsAfter: (val: boolean) => void;
}

function WorkflowResolutionPanel({ isAfter, setIsAfter }: WorkflowResolutionPanelProps) {
  return (
    <div 
      className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[12px] p-6 shadow-sm overflow-hidden relative"
      aria-label="Workflow resolution flow: scattered inputs are mapped by Nexus into a connected operational system."
    >
      <div className="absolute inset-0 opacity-[0.05] bg-noise pointer-events-none" />

      {/* Title */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DEDBC8]/10 relative z-10">
        <h3 className="text-xs font-mono font-bold tracking-wider text-[#DEDBC8] uppercase flex items-center gap-2 select-none">
          <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", isAfter ? "bg-[#2A7D8A]" : "bg-[#C0392B]")} />
          From scattered work to connected operations
        </h3>
      </div>

      <div className="flex flex-col gap-5 relative z-10">
        {/* Step 1: Fragmented Inputs */}
        <div className={cn("border border-[#DEDBC8]/10 bg-black/40 rounded-[8px] p-4 transition-all duration-300", isAfter ? "opacity-35" : "border-[#C0392B]/30 bg-[#C0392B]/[0.01]")}>
          <span className="text-[9px] font-mono font-bold text-gray-400 uppercase block mb-2 select-none">
            1. Scattered Inputs
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
        <div className="border border-[#DEDBC8]/15 bg-black/30 rounded-[8px] p-4">
          <span className="text-[9px] font-mono font-bold text-[#DEDBC8] uppercase block mb-2 select-none">
            2. Nexus Mapping Layer
          </span>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-400 font-light">
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#DEDBC8]" />
              <span>roles defined</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#DEDBC8]" />
              <span>states named</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#DEDBC8]" />
              <span>handoffs clarified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#DEDBC8]" />
              <span>visibility points chosen</span>
            </div>
          </div>
        </div>

        {/* Step 3: Connected System */}
        <div className={cn("border border-[#DEDBC8]/10 bg-black/40 rounded-[8px] p-4 transition-all duration-300", !isAfter ? "opacity-35" : "border-[#2A7D8A]/30 bg-[#2A7D8A]/[0.01]")}>
          <span className="text-[9px] font-mono font-bold text-[#2A7D8A] uppercase block mb-2 select-none">
            3. Connected System
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

        {/* Outcome Rows */}
        <div className="border-t border-[#DEDBC8]/10 pt-4 mt-2 flex flex-col gap-2">
          {[
            { label: "Owner Visibility", status: "Live", isHighlight: isAfter },
            { label: "Manual Handoff", status: "Automated", isHighlight: isAfter },
            { label: "Customer Follow-up", status: "Status-aware", isHighlight: isAfter },
            { label: "Process Memory", status: "Encoded", isHighlight: isAfter },
            { label: "Work Ownership", status: "Assigned", isHighlight: isAfter }
          ].map((row, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs border-b border-[#DEDBC8]/5 last:border-b-0 pb-1.5 last:pb-0">
              <span className="text-gray-400 font-light">{row.label}</span>
              <span className={cn(
                "font-semibold font-mono text-[10px] px-1.5 py-0.5 rounded-[4px] border",
                row.isHighlight 
                  ? "bg-[#2A7D8A]/5 text-[#2A7D8A] border-[#2A7D8A]/10" 
                  : "bg-red-500/5 text-[#C0392B] border-red-500/10"
              )}>
                {row.isHighlight ? row.status : "Scattered"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
