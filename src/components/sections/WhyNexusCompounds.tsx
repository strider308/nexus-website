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
    <section className="w-full py-16 border-b border-border bg-[#0C1828] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/50 mb-2 block">
            Scalable Infrastructure
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Why Nexus Compounds
          </h2>
          <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
            The seven systems we shipped are not unrelated custom software projects. Every build strengthens and validates a core library of reusable workflow primitives, making each subsequent project faster to deploy and safer to operate.
          </p>
        </div>

        {/* Primitives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIMITIVES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="border border-white/10 bg-white/5 hover:border-white/20 p-6 rounded-[8px] flex gap-4 transition-colors"
              >
                <div className="p-2.5 rounded-[8px] bg-white/10 text-[#2E6FAD] shrink-0 h-10 w-10 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
