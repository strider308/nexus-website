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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LayoutExtras />
      <SectionMinimap />
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

      <FloatingProductNav />
      <SiteFooter />
    </div>
  );
}

export const dynamic = "force-static";
