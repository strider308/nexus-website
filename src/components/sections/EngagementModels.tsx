"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HERO } from "@/lib/content/nexus";
import { ArrowRight, Calendar, CheckSquare, Zap } from "lucide-react";

const MODELS = [
  {
    letter: "A",
    title: "Workflow Mapping Sprint",
    timeline: "1–2 weeks",
    icon: Zap,
    bestFor: "Teams that know their current workflow is messy but need technical clarity before building code.",
    deliverables: [
      "Operational workflow map",
      "User-role permissions matrix",
      "Interactive core screens wireframes",
      "First-milestone MVP scope definition",
      "Technical framework recommendation"
    ]
  },
  {
    letter: "B",
    title: "Private Beta Build",
    timeline: "4–8 weeks",
    icon: Calendar,
    bestFor: "Founders and operators ready to test a scoped version with actual users or pilot groups.",
    deliverables: [
      "Functional private beta application",
      "Secure staging deployment URL",
      "Integrated feedback collection channel",
      "Core operational status dashboard",
      "Release cutover checklist"
    ]
  },
  {
    letter: "C",
    title: "Operational System Build",
    timeline: "8–16+ weeks",
    icon: CheckSquare,
    bestFor: "Businesses replacing manual papers, spreadsheets, or disjointed SaaS tools with custom software.",
    deliverables: [
      "Multi-role production-grade workflow system",
      "Consolidated real-time owner dashboards",
      "Automated webhook & notification rules",
      "State-aware data validation filters",
      "DNS configuration & production handoff"
    ]
  }
];

export function EngagementModels() {
  return (
    <AnimatedSection id="engagement-models" className="w-full py-16 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
            Engagement Framework
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
            How Engagements Work
          </h2>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
            We work with founders and operators through three structured models designed to reduce development waste and clarify delivery goals.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {MODELS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="border border-border bg-background hover:shadow-md transition-shadow rounded-[12px] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/60">
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      MODEL {item.letter}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E6FAD] uppercase">
                      <Icon className="h-4 w-4" /> {item.timeline}
                    </span>
                  </div>

                  <h3 className="font-display text-lg md:text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase block mb-1">
                      BEST FIT
                    </span>
                    <p className="text-xs text-foreground/80 leading-relaxed font-light">
                      {item.bestFor}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase block mb-2">
                      DELIVERABLES
                    </span>
                    <ul className="flex flex-col gap-2">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-foreground/85 font-light leading-normal">
                          <span className="w-1 h-1 rounded-full bg-[#2E6FAD] shrink-0 mt-1.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={HERO.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none interactive-action mt-4"
                  )}
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground font-mono">
          Scoping calls are founder-led. Send the workflow, and we&apos;ll help shape the first system.
        </p>

      </div>
    </AnimatedSection>
  );
}
