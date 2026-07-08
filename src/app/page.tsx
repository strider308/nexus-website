import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LayoutExtras } from "@/components/site/LayoutExtras";
import { FloatingProductNav } from "@/components/site/FloatingProductNav";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TrustLimitsSection } from "@/components/sections/TrustLimitsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Client layout extras (progress bar, spotlight mouse track, cookie banner) */}
      <LayoutExtras />

      {/* Sticky Top Header */}
      <SiteHeader />

      <main className="flex-grow">
        {/* Sections */}
        <Hero />
        <ProofStrip />
        <ProblemSection />
        <ServicesSection />
        <CaseStudiesSection />
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
