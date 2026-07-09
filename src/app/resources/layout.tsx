import type { Metadata } from "next";
import { METADATA } from "@/lib/content/nexus";

export const metadata: Metadata = {
  title: "Workflow Resources — Nexus",
  description:
    "Free workflow tools and scoping checklists to use before your kickoff call. Includes a Workflow Mapping Checklist, MVP Scope Worksheet, Operational Handoff Audit, Private Beta Readiness Checklist, and Owner Visibility Checklist. No email wall.",
  alternates: {
    canonical: `${METADATA.canonicalUrl}/resources`,
  },
  openGraph: {
    title: "Workflow Resources — Nexus",
    description:
      "Five free audit tools and planning checklists from Nexus. Map your workflow, scope your MVP, or audit your operational handoffs before the scoping call.",
    url: `${METADATA.canonicalUrl}/resources`,
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
