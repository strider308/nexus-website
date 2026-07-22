import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { MASTER_DISCLAIMER, METADATA } from "@/lib/content/nexus";

export const metadata: Metadata = { title: "Terms of service | Nexus", description: "Current terms and product limitations for Nexus marketing materials.", ...(METADATA.canonicalUrl ? { alternates: { canonical: `${METADATA.canonicalUrl}/terms-of-service` } } : {}) };

export default function TermsOfServicePage() {
  return <div className="page-shell"><SiteHeader /><main id="main-content" className="section"><article className="content-wrap max-w-3xl"><p className="eyebrow">Legal</p><h1 className="mt-3 text-4xl font-extrabold tracking-tight">Terms of service</h1><div className="copy mt-8 space-y-6"><p>Last updated: 22 July 2026. The site presents Nexus services, workflow references, and product demonstrations for evaluation.</p><section><h2 className="text-xl font-bold text-foreground">Reference materials</h2><p className="mt-2">Case studies and demos demonstrate design and implementation capability. They are not an offer of a fixed subscription product or a claim that every listed capability is generally available.</p></section><section><h2 className="text-xl font-bold text-foreground">Limitations</h2><p className="mt-2">{MASTER_DISCLAIMER}</p></section><section><h2 className="text-xl font-bold text-foreground">Agreement scope</h2><p className="mt-2">Any delivery, pricing, data handling, security, support, and ownership obligations must be defined in a separate written agreement. These website terms do not create a service engagement.</p></section></div></article></main><SiteFooter /></div>;
}

export const dynamic = "force-static";
