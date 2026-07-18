import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DETAILED_CASE_STUDIES } from "@/content/case-studies";
import { CaseStudyClient } from "@/components/work/CaseStudyClient";
import { METADATA } from "@/content/nexus";

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": METADATA.canonicalUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": `${METADATA.canonicalUrl}/work`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": study.name,
            "item": `${METADATA.canonicalUrl}/work/${study.slug}`
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": study.name,
        "applicationCategory": study.slug === "aarogya" ? "HealthApplication" : study.slug === "securescan" ? "DeveloperApplication" : "BusinessApplication",
        "operatingSystem": "Web",
        "description": study.shortDefinition,
        "url": `${METADATA.canonicalUrl}/work/${study.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyClient study={study} related={related} />
    </>
  );
}
