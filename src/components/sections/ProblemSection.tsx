"use client";

import { AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { WordsPullUpMultiStyle, ScrollRevealParagraph } from "../ui/words-pull-up";
import { motion, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import { TRANSFORMATION_3D_ENABLED, CINEMATIC_3D_DEBUG } from "@/lib/cinematic-3d/config";
import { Cinematic3DProvider, useCinematic3D } from "../cinematic-3d/Cinematic3DProvider";
import { Cinematic3DFallback } from "../cinematic-3d/Cinematic3DFallback";

const Cinematic3DCanvas = dynamic(
  () => import("../cinematic-3d/Cinematic3DCanvas").then((mod) => mod.Cinematic3DCanvas),
  { ssr: false, loading: () => <Cinematic3DFallback variant="transformation" /> }
);

const WorkflowTransformationField = dynamic(
  () => import("../cinematic-3d/WorkflowTransformationField").then((mod) => mod.WorkflowTransformationField),
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
    <section id="company-brochure" className="w-full py-16 md:py-24 border-b border-[#DEDBC8]/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Cinematic About / Thesis Card */}
        <div className="bg-[#101010] rounded-[2rem] border border-[#DEDBC8]/10 px-6 py-16 md:px-12 md:py-24 text-center max-w-6xl mx-auto mb-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />
          
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase text-[#DEDBC8] mb-6 block">
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
              className="text-[#DEDBC8] text-base sm:text-lg md:text-xl font-light leading-relaxed text-center"
            />
          </div>
        </div>

        {/* Before/After Detail Section */}
        <div className="flex flex-col gap-8 mt-12 pt-8">
          
          {/* Side-by-Side Comparison tables */}
          <div className="w-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#DEDBC8]/10">
              <h3 className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase text-gray-400">
                How Nexus maps a workflow
              </h3>
              
              <div className="flex gap-1.5 bg-[#101010] p-1 rounded-full border border-[#DEDBC8]/15">
                <button
                  onClick={() => setIsAfter(false)}
                  className={cn(
                    "text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-all outline-none",
                    !isAfter ? "bg-[#C0392B] text-white" : "text-[#DEDBC8]/70 hover:text-white"
                  )}
                >
                  Before
                </button>
                <button
                  onClick={() => setIsAfter(true)}
                  className={cn(
                    "text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-all outline-none",
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
                <span className="text-xs font-mono font-bold tracking-wider text-[#C0392B] uppercase flex items-center gap-1.5 mb-1 border-b border-[#DEDBC8]/10 pb-2">
                  <AlertCircle className="h-3.5 w-3.5" /> BEFORE NEXUS
                </span>
                <div className="flex flex-col gap-4">
                  {TRANSFORMATIONS.map((t, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <h4 className="text-sm font-bold text-[#E1E0CC]">
                        {t.label}: {t.before}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                        {t.beforeDetail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column: After Nexus */}
              <div className={cn("flex flex-col gap-4 border-t md:border-t-0 md:border-l border-[#DEDBC8]/10 pt-4 md:pt-0 md:pl-6 transition-opacity duration-300", !isAfter && "opacity-45")}>
                <span className="text-xs font-mono font-bold tracking-wider text-[#2A7D8A] uppercase flex items-center gap-1.5 mb-1 border-b border-[#DEDBC8]/10 pb-2">
                  <CheckCircle className="h-3.5 w-3.5" /> AFTER NEXUS
                </span>
                <div className="flex flex-col gap-4">
                  {TRANSFORMATIONS.map((t, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <h4 className="text-sm font-bold text-[#2A7D8A]">
                        {t.label}: {t.after}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                        {t.afterDetail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Resolution Map (Horizontal on Desktop) */}
          <div className="w-full mt-4">
            <WorkflowResolutionPanel isAfter={isAfter} />
          </div>

        </div>
      </div>
    </section>
  );
}

function Cinematic3DDebugBadge() {
  const { is3DActive, quality, isMobile, reducedMotion, webglError, isEnabled } = useCinematic3D();
  
  if (!CINEMATIC_3D_DEBUG) return null;

  let status = "Inactive";
  if (!isEnabled) status = "Flag Disabled";
  else if (reducedMotion) status = "Reduced Motion Skip";
  else if (isMobile) status = "Mobile Fallback";
  else if (webglError) status = "WebGL Error Fallback";
  else if (is3DActive) status = `Active (${quality.dpr}x DPR)`;

  return (
    <div className="absolute top-2 right-2 z-[99] bg-black/85 text-[9px] text-[#DEDBC8]/90 border border-[#DEDBC8]/30 px-1.5 py-0.5 rounded font-mono select-none pointer-events-auto">
      3D: <span className="font-bold text-sky-400">{status}</span>
    </div>
  );
}

interface WorkflowResolutionPanelProps {
  isAfter: boolean;
}

function WorkflowResolutionPanel({ isAfter }: WorkflowResolutionPanelProps) {
  return (
    <Cinematic3DProvider isEnabledOverride={TRANSFORMATION_3D_ENABLED}>
      <WorkflowResolutionPanelInner isAfter={isAfter} />
    </Cinematic3DProvider>
  );
}

function WorkflowResolutionPanelInner({ isAfter }: WorkflowResolutionPanelProps) {
  const shouldReduceMotion = useReducedMotion();
  const { is3DActive, isEnabled } = useCinematic3D();
  const show3DContainer = isEnabled || CINEMATIC_3D_DEBUG;

  return (
    <div 
      className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[20px] p-6 md:p-8 shadow-lg overflow-hidden relative w-full"
      aria-label="Workflow resolution flow: scattered inputs are mapped by Nexus into a connected operational system."
    >
      {/* 3D Canvas Background layer */}
      {show3DContainer && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <Cinematic3DDebugBadge />
          {is3DActive ? (
            <Cinematic3DCanvas fallback={<Cinematic3DFallback variant="transformation" />}>
              <WorkflowTransformationField isAfter={isAfter} />
            </Cinematic3DCanvas>
          ) : (
            <Cinematic3DFallback variant="transformation" />
          )}
        </div>
      )}

      <div className="absolute inset-0 opacity-[0.05] bg-noise pointer-events-none z-[1]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#DEDBC8]/10 relative z-10">
        <h3 className="text-sm md:text-base font-mono font-bold tracking-wider text-[#DEDBC8] uppercase flex items-center gap-2 select-none">
          <span className="w-2 h-2 rounded-full bg-[#2A7D8A] animate-pulse" />
          How Nexus turns messy operations into a working system
        </h3>
      </div>

      {/* Desktop: 5 Columns grid for side-by-side with animated arrow lines | Mobile: Stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-4 items-stretch relative z-10">
        
        {/* Column 1: Before Nexus */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: isAfter ? 0.35 : 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "border rounded-[16px] p-6 flex flex-col justify-between min-h-[220px] transition-colors duration-500",
            isAfter 
              ? "border-[#DEDBC8]/5 bg-black/20" 
              : "border-red-500/20 bg-red-500/[0.02]"
          )}
        >
          <div>
            <span className="text-xs font-mono font-bold text-red-400 uppercase block mb-4 select-none">
              1. Before Nexus (Scattered Manual Operations)
            </span>
            <ul className="flex flex-col gap-3">
              {[
                "Scattered chats",
                "Spreadsheets",
                "Manual follow-ups",
                "Unclear ownership",
                "No live visibility"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500 mt-6 border-t border-[#DEDBC8]/5 pt-3">
            Friction, lost history, copy-paste errors
          </p>
        </motion.div>

        {/* Connector 1 */}
        <div className="hidden lg:flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 text-[#DEDBC8]/30" viewBox="0 0 32 32" fill="none">
            <motion.path
              d="M 2 16 L 30 16 M 22 8 L 30 16 L 22 24"
              stroke={isAfter ? "#DEDBC8" : "#EF4444"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </div>

        {/* Column 2: Nexus Maps */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#DEDBC8]/20 bg-black/40 rounded-[16px] p-6 flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <span className="text-xs font-mono font-bold text-[#DEDBC8] uppercase block mb-4 select-none">
              2. Nexus Maps the Workflow
            </span>
            <ul className="flex flex-col gap-3">
              {[
                "Name the roles",
                "Define the states",
                "Assign ownership",
                "Connect handoffs",
                "Decide visibility points",
                "Automate repeat actions"
              ].map((step, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DEDBC8] shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500 mt-6 border-t border-[#DEDBC8]/5 pt-3">
            Encoding business rules into code
          </p>
        </motion.div>

        {/* Connector 2 */}
        <div className="hidden lg:flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 text-[#DEDBC8]/30" viewBox="0 0 32 32" fill="none">
            <motion.path
              d="M 2 16 L 30 16 M 22 8 L 30 16 L 22 24"
              stroke={isAfter ? "#2A7D8A" : "#DEDBC8"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.1 }}
              animate={{ 
                pathLength: isAfter ? 1 : 0, 
                opacity: isAfter ? 1 : 0.1,
                stroke: isAfter ? "#2A7D8A" : "rgba(222, 219, 200, 0.2)"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </div>

        {/* Column 3: After Nexus */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ 
            opacity: isAfter ? 1 : 0.35, 
            y: 0,
            scale: isAfter ? 1 : (shouldReduceMotion ? 1 : 0.98)
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "border rounded-[16px] p-6 flex flex-col justify-between min-h-[220px] transition-colors duration-500",
            !isAfter 
              ? "border-[#DEDBC8]/5 bg-black/20" 
              : "border-[#2A7D8A]/20 bg-[#2A7D8A]/[0.02]"
          )}
        >
          <div>
            <span className="text-xs font-mono font-bold text-[#2A7D8A] uppercase block mb-4 select-none">
              3. After Nexus (Connected System)
            </span>
            <ul className="flex flex-col gap-3">
              {[
                "Role-based screens",
                "Status-aware workflow",
                "Automated handoffs",
                "Owner dashboard",
                "Audit trail"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2A7D8A] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500 mt-6 border-t border-[#DEDBC8]/5 pt-3">
            Predictable speed, live reporting metrics
          </p>
        </motion.div>

      </div>
    </div>
  );
}
