import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Nexus",
  description: "Learn how Nexus handles information collection, security, and operational data storage.",
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
