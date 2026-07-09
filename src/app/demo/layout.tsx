import type { Metadata } from "next";
import { METADATA } from "@/lib/content/nexus";

export const metadata: Metadata = {
  title: "Demo Library — Nexus",
  description:
    "Explore walkthrough previews and synthetic models of Nexus's shipped proof systems: ClinicOS, RestaurantOS, ShipWright, SecureScan, SafeDate, BuildPublic, and Aarogya. Seven systems demonstrating roles, handoffs, and operational dashboards.",
  alternates: {
    canonical: `${METADATA.canonicalUrl}/demo`,
  },
  openGraph: {
    title: "Demo Library — Nexus",
    description:
      "Walkthrough previews of seven operational workflow systems built end-to-end by Nexus. Covering clinic operations, restaurants, team execution, security, dating safety, and founder tools.",
    url: `${METADATA.canonicalUrl}/demo`,
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
