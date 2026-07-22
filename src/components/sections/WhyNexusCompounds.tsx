"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Cpu, Layers, GitBranch, Shield, Bell, Eye, Database, HelpCircle, CheckSquare } from "lucide-react";

const PRIMITIVES = [
  {
    icon: Layers,
    title: "Role-based workflows",
    desc: "Enforcing permissions so owners, managers, staff, and clients only edit what they own."
  },
  {
    icon: GitBranch,
    title: "Queue & status systems",
    desc: "State machine logic to route tokens, table orders, and development milestones without leaks."
  },
  {
    icon: Eye,
    title: "Dashboards & visibility",
    desc: "Real-time query consolidation to show active wait times and operational bottlenecks."
  },
  {
    icon: Shield,
    title: "Permissions & audit logs",
    desc: "Step-by-step transaction logs verifying who moved a status and when it occurred."
  },
  {
    icon: Bell,
    title: "Notifications & follow-ups",
    desc: "State-aware SMS and email triggers to alert clients or request action updates automatically."
  },
  {
    icon: Database,
    title: "Data tracking",
    desc: "Structured logging schemas for vital parameters (BP trends, table inventory, audit scans)."
  },
  {
    icon: HelpCircle,
    title: "Risk & safety logic",
    desc: "Time-locked check-in thresholds and vulnerability categorization algorithms."
  },
  {
    icon: Cpu,
    title: "Private-beta launch systems",
    desc: "Authentication gates, staging rollouts, and feedback loops to manage early validation pilots."
  },
  {
    icon: CheckSquare,
    title: "Workflow documentation",
    desc: "Encoding operational rules directly into visual UI controls instead of training books."
  }
];

export function WhyNexusCompounds() {
  return (
    <AnimatedSection className="w-full py-20 md:py-28 border-b border-[#DEDBC8]/10 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
            Scalable Infrastructure
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
            Why Nexus Compounds
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
            The seven systems we shipped are not unrelated custom software projects. Every build strengthens and validates a core library of reusable workflow primitives, making each subsequent project faster to deploy and safer to operate.
          </p>
        </div>

        {/* Primitives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRIMITIVES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="border border-[#DEDBC8]/10 bg-[#101010] hover:border-[#DEDBC8]/25 p-6 rounded-[12px] flex gap-4 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-[8px] bg-black/40 border border-[#DEDBC8]/10 text-[#DEDBC8] shrink-0 h-10 w-10 flex items-center justify-center transition-colors group-hover:bg-[#DEDBC8] group-hover:text-black">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#E1E0CC] mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
}
