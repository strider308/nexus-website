import { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { METADATA, HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Cpu, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Engagement Services — Nexus",
  description: "Explore custom software, automation layers, owner dashboards, UX modernization, and private beta development models by Nexus.",
  alternates: {
    canonical: `${METADATA.canonicalUrl}/services`,
  },
  openGraph: {
    title: "Core Engagement Services — Nexus",
    description: "Explore custom software, automation layers, owner dashboards, UX modernization, and private beta development models by Nexus.",
    url: `${METADATA.canonicalUrl}/services`,
  }
};

const SERVICES_LIST = [
  {
    id: "workflow",
    title: "Custom Workflow Systems",
    when: "Your team runs on scattered tools (chats, sheets, emails), manual handoffs, and owner memory. Tasks fall through the cracks.",
    builds: "A role-aware operational web application that structures intake, assignments, active states, and completion audits.",
    inputs: "Current spreadsheets, chat logs, user roles definition, and typical bottlenecks list.",
    deliverables: "Bespoke database schema, role-tailored dashboards, automated assignment routing, and secure hosting config.",
    proof: "ClinicOS, RestaurantOS, ShipWright",
  },
  {
    id: "automation",
    title: "Automation Layers",
    when: "Staff spend hours copying data between tools, sending manual follow-ups, or running status checks.",
    builds: "Automated background pipelines, state-aware email/SMS notifications, and third-party webhook integrations.",
    inputs: "API access credentials, current operational steps guide, and trigger/event definitions.",
    deliverables: "Background task engines, SMS/email templates, API connection bridges, and error-fallback alerts.",
    proof: "ShipWright, Aarogya",
  },
  {
    id: "mvp",
    title: "MVP / Private Beta Builds",
    when: "You have a validated manual concept but need a secure, functional software version to pilot with early adopters.",
    builds: "A scoped software product featuring core workflow engines, secure authentication, and feedback collections.",
    inputs: "Core value proposition, 5-10 pilot users list, and immediate workflow objectives.",
    deliverables: "Working web app deployment, staging URL, feedback channel logs, and usage diagnostics.",
    proof: "BuildPublic, SafeDate, SecureScan",
  },
  {
    id: "dashboards",
    title: "Owner Dashboards",
    when: "You are running operations blind, relying on status meetings or phone pings to understand today's collection metrics.",
    builds: "Live consolidated dashboard screens detailing active queue metrics, turnaround times, and billing collection summaries.",
    inputs: "Required KPIs list, primary database access, and current spreadsheet report formats.",
    deliverables: "Real-time query consolidation panel, automated metric charts, stock-out/bottleneck alerts, and csv exports.",
    proof: "RestaurantOS, ClinicOS, Aarogya",
  },
  {
    id: "ux",
    title: "UX & Workflow Modernization",
    when: "Legacy systems or complex sheets are making employee training slow and input errors common.",
    builds: "Cleared-up user journeys, role-tailored forms, and robust error-prevention checks.",
    inputs: "Screenshots of legacy software, common input errors log, and employee feedback list.",
    deliverables: "Clean responsive user interfaces, simplified data input paths, and visual state indicators.",
    proof: "ClinicOS, Aarogya, RestaurantOS",
  },
  {
    id: "ai",
    title: "AI-Assisted Workflow Features",
    when: "Operators spend hours summarizing text logs, draft-writing reports, or categorizing entries manually.",
    builds: "Scoped LLM summarization APIs, template drafting assistance logs, and classification models with human oversight.",
    inputs: "Sample text files, categorization rules, and human-in-the-loop validation criteria.",
    deliverables: "LLM pipeline connectors, template auto-populators, and draft approval dashboard views.",
    proof: "ClinicOS, SecureScan",
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />
      <SiteHeader />
      
      <main id="main-content" className="flex-grow py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 text-center md:text-left">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
              Capabilities Brochure
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
              Core Engagement Services
            </h1>
            <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
              We design and build custom software that solves operational complexity. Explore our service scopes below, modeled on shipped proof systems.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {SERVICES_LIST.map((srv) => (
              <div 
                key={srv.id} 
                className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[20px] p-6 md:p-8 flex flex-col justify-between hover:border-[#DEDBC8]/25 transition-all duration-300 group"
              >
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#E1E0CC] mb-6 pb-3 border-b border-[#DEDBC8]/5">
                    {srv.title}
                  </h2>
                  
                  {/* When this matters */}
                  <div className="mb-5">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5 mb-1.5">
                      <HelpCircle className="h-3.5 w-3.5 text-[#DEDBC8]/60" /> When This Matters
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed font-light">
                      {srv.when}
                    </p>
                  </div>

                  {/* What we build */}
                  <div className="mb-5">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5 mb-1.5">
                      <Cpu className="h-3.5 w-3.5 text-[#DEDBC8]/60" /> What We Build
                    </span>
                    <p className="text-xs text-[#E1E0CC] font-semibold leading-relaxed">
                      {srv.builds}
                    </p>
                  </div>

                  {/* Expected Inputs & Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#DEDBC8]/5 mb-6">
                    <div>
                      <span className="text-[8px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">
                        Expected Inputs
                      </span>
                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                        {srv.inputs}
                      </p>
                    </div>
                    <div>
                      <span className="text-[8px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">
                        Typical Deliverables
                      </span>
                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                        {srv.deliverables}
                      </p>
                    </div>
                  </div>

                  {/* Related Proof */}
                  <div className="bg-black/40 p-3.5 rounded-[12px] border border-[#DEDBC8]/5 mb-6 flex justify-between items-center text-xs">
                    <span className="font-mono text-[9px] text-gray-500 uppercase font-bold">Related Proof:</span>
                    <span className="font-mono text-[10px] font-semibold text-[#DEDBC8]">{srv.proof}</span>
                  </div>
                </div>

                <a
                  href={HERO.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full bg-[#DEDBC8] hover:bg-[#DEDBC8]/90 text-black font-semibold rounded-full flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#DEDBC8]/50 focus-visible:ring-offset-2 outline-none transition-all duration-300 mt-2"
                  )}
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>

          {/* Expectations block */}
          <div className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lg">
            <h3 className="font-display text-xl md:text-3xl font-bold text-[#E1E0CC] mb-4">
              Not sure which service fits?
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Bring us your messy spreadsheet, paper checklists, or fragmented processes. We will map them out together during our kickoff scoping call and recommend the narrowest initial build.
            </p>
            <a
              href={HERO.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-[#DEDBC8] hover:bg-[#DEDBC8]/90 text-black rounded-full pl-5 pr-1.5 py-1.5 w-full max-w-xs mx-auto text-xs font-semibold tracking-wider uppercase transition-all duration-300 outline-none"
            >
              <span>Map your workflow</span>
              <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0">
                <ArrowRight className="h-3.5 w-3.5 text-[#DEDBC8]" />
              </div>
            </a>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
export const dynamic = "force-static";
