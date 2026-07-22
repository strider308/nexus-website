import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { METADATA } from "@/lib/content/nexus";

export const metadata: Metadata = { title: "Privacy policy | Nexus", description: "Current privacy information for the Nexus marketing website.", ...(METADATA.canonicalUrl ? { alternates: { canonical: `${METADATA.canonicalUrl}/privacy-policy` } } : {}) };

export default function PrivacyPolicyPage() {
  return <div className="page-shell"><SiteHeader /><main id="main-content" className="section"><article className="content-wrap max-w-3xl"><p className="eyebrow">Legal</p><h1 className="mt-3 text-4xl font-extrabold tracking-tight">Privacy policy</h1><div className="copy mt-8 space-y-6"><p>Last updated: 22 July 2026. This marketing website does not use analytics, advertising, or non-essential cookies.</p><section><h2 className="text-xl font-bold text-foreground">Information sent directly</h2><p className="mt-2">If a verified contact channel is enabled and you choose to email Nexus, the information in that message is handled to respond to the inquiry. This site does not provide a form, account area, or payment flow.</p></section><section><h2 className="text-xl font-bold text-foreground">Cookies and local storage</h2><p className="mt-2">The marketing website does not set a consent preference, analytics identifier, or other non-essential browser storage. No cookie banner is shown.</p></section><section><h2 className="text-xl font-bold text-foreground">Policy review</h2><p className="mt-2">A production privacy notice must be reviewed against the actual hosting, contact, and product data-processing configuration before launch.</p></section>{METADATA.email && <p>For privacy questions, email <a className="text-brand underline" href={`mailto:${METADATA.email}`}>{METADATA.email}</a>.</p>}</div></article></main><SiteFooter /></div>;
}

export const dynamic = "force-static";
