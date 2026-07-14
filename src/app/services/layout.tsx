import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Capabilities — Nexus",
  description: "Learn how we map manual workflows, design system stacks, and engineer custom role-aware software and automation layers.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
