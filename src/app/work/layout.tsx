import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof Systems — Nexus",
  description: "Explore seven custom software and automation proof systems by Nexus across healthcare, dining, teams, and developer operations.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
