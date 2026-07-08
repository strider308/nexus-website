"use client";

import { HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HelpCircle, Layers, Users, ArrowRight } from "lucide-react";

export function WorkflowConfigurator() {
  return (
    <section className="w-full py-16 border-b border-border bg-[#0C1828] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/50 mb-2 block">
            Engagement Kickoff Guide
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            How we scope your workflow.
          </h2>
          <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
            Every software build starts with a direct technical mapping call with the founder. Below are the three diagnostic questions we use to define your project boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configurator Steps (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Step 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[12px] p-6 flex gap-4">
              <div className="p-2.5 rounded-[8px] bg-white/10 shrink-0 h-10 w-10 flex items-center justify-center text-[#2E6FAD]">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-white/50 uppercase block mb-1">Intake Area 01</span>
                <h3 className="text-sm font-bold text-white mb-2">Identify the friction point</h3>
                <p className="text-xs font-light text-white/80 leading-relaxed mb-3">
                  We look at where your process breaks today: is it tracking records, manual handoffs/approvals, appointment queue delays, async execution lag, invoicing bottlenecks, or missing reports?
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#2E6FAD] font-bold">
                  <span>Tracking</span> · <span>Handoffs</span> · <span>Schedules</span> · <span>Execution</span> · <span>Billing</span> · <span>Metrics</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[12px] p-6 flex gap-4">
              <div className="p-2.5 rounded-[8px] bg-white/10 shrink-0 h-10 w-10 flex items-center justify-center text-[#2E6FAD]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-white/50 uppercase block mb-1">Intake Area 02</span>
                <h3 className="text-sm font-bold text-white mb-2">Map the stakeholders</h3>
                <p className="text-xs font-light text-white/80 leading-relaxed mb-3">
                  We identify every role involved. Who inputs data, who processes tasks, who tracks progress, and who needs dashboards? Mapping interfaces to roles avoids database bloat.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#2E6FAD] font-bold">
                  <span>Owners</span> · <span>Operators</span> · <span>Customers</span> · <span>System Admins</span> · <span>External Partners</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[12px] p-6 flex gap-4">
              <div className="p-2.5 rounded-[8px] bg-white/10 shrink-0 h-10 w-10 flex items-center justify-center text-[#2E6FAD]">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-white/50 uppercase block mb-1">Intake Area 03</span>
                <h3 className="text-sm font-bold text-white mb-2">Scope the initial deployment</h3>
                <p className="text-xs font-light text-white/80 leading-relaxed mb-3">
                  We determine the narrowest scope for your first milestone: are we testing with a scoped private beta MVP, adding automatic background pipelines, or building a full multi-user system?
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#2E6FAD] font-bold">
                  <span>Private Beta (MVP)</span> · <span>Background Automation</span> · <span>Live Dashboards</span> · <span>Full Custom Systems</span>
                </div>
              </div>
            </div>

          </div>

          {/* Scoping Call Preparation CTA Panel (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#162234] border border-[#2E6FAD]/30 rounded-[12px] p-6 md:p-8 min-h-[380px] shadow-lg relative overflow-hidden">
            {/* Background glowing gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[64px] bg-[#2E6FAD]/25 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#2E6FAD] uppercase block mb-4">
                PREPARING FOR YOUR CALL
              </span>

              <h3 className="font-display text-lg md:text-xl font-bold text-white mb-4">
                What to bring to our call
              </h3>
              <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed mb-6">
                You don&apos;t need a feature list or a design. Bring us your current workflow — spreadsheets, paper logs, slack channels, or current processes. We will map them together.
              </p>

              <div className="bg-[#0C1828]/60 p-4 rounded-[6px] border border-white/5 flex flex-col gap-2.5">
                <span className="text-[9px] font-mono font-bold tracking-wider text-[#2E6FAD] uppercase">
                  FIRST CONVERSATION KICKOFF
                </span>
                <span className="text-xs text-white/90 italic font-medium leading-normal">
                  &ldquo;Show us the workflow you currently manage manually.&rdquo;
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-8 border-t border-white/10 flex flex-col gap-4">
              <p className="text-[10px] text-white/50 font-sans leading-relaxed">
                Scoping calls are conducted directly with the Nexus founder. No sales representatives, no account managers.
              </p>
              <a
                href={HERO.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "default" }),
                  "w-full bg-white hover:bg-white/90 text-[#0C1828] font-bold rounded-[6px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 outline-none interactive-action"
                )}
              >
                <span>Start a conversation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
