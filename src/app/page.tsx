import { getSiteMode } from "@/lib/site-mode";
import { CinematicShell } from "@/cinematic/components/CinematicShell";
import { PreviewExperienceChooser } from "@/components/cinematic/PreviewExperienceChooser";

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

interface HomeProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const siteMode = getSiteMode(resolvedParams);

  // If query parameter or env specifies preview chooser or cinematic
  if (resolvedParams?.mode === "preview" || process.env.NEXT_PUBLIC_NEXUS_SITE_MODE === "preview" || process.env.VERCEL_ENV === "preview") {
    return <PreviewExperienceChooser />;
  }

  if (siteMode === "cinematic") {
    return <CinematicShell />;
  }

  // Fail-safe Default: Render preserved Classic Website Baseline
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
