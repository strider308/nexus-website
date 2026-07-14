import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Conversation — Nexus",
  description: "Tell us about your manual processes and handoffs. Request a diagnostic workflow mapping session with our engineering team.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
