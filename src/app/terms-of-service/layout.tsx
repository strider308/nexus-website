import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Nexus",
  description: "Review the scope of service, limitations of liability, and guidelines governing the use of Nexus software and systems.",
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
