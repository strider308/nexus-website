import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LayoutExtras } from "@/components/site/LayoutExtras";
import { FloatingProductNav } from "@/components/site/FloatingProductNav";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ProofLedger } from "@/components/sections/ProofLedger";
import { WhyNexusCompounds } from "@/components/sections/WhyNexusCompounds";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { FounderSection } from "@/components/sections/FounderSection";
import { TrustLimitsSection } from "@/components/sections/TrustLimitsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { SectionMinimap } from "@/components/three/SectionMinimap";

export default function ClassicPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Banner indicating preserved classic mode */}
      <div className="bg-[#18181B] border-b border-[#27272A] px-4 py-2 text-center text-xs font-mono text-[#A1A1AA] flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>PRESERVED CLASSIC WEBSITE BASELINE — AUTHORITATIVE EXPERIENCE</span>
      </div>

      {/* Client layout extras */}
      <LayoutExtras />
      <SectionMinimap />

      {/* Sticky Top Header */}
      <SiteHeader />

      <main id="main-content" className="flex-grow">
        <Hero />
        <ProofStrip />
        <ProblemSection />
        <ServicesSection />
        <ProofLedger />
        <WhyNexusCompounds />
        <CaseStudiesSection />
        <EngagementModels />
        <ResourcesPreview />
        <FounderSection />
        <TrustLimitsSection />
        <FinalCTA />
      </main>

      {/* Persistent Bottom shortcuts navigation */}
      <FloatingProductNav />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

export const dynamic = "force-static";
