import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DETAILED_CASE_STUDIES } from "@/content/case-studies";
import { CaseStudyClient } from "@/components/work/CaseStudyClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static parameters for all 7 case studies
export async function generateStaticParams() {
  return DETAILED_CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

// Generate metadata for each case study dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = DETAILED_CASE_STUDIES.find((item) => item.slug === slug);
  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.name} // Custom System Case Study`,
    description: study.shortDefinition,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const study = DETAILED_CASE_STUDIES.find((item) => item.slug === slug);
  if (!study) {
    notFound();
  }

  const related = DETAILED_CASE_STUDIES.filter((item) => item.slug !== slug).slice(0, 3);

  return <CaseStudyClient study={study} related={related} />;
}
