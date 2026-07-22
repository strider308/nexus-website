import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CASE_STUDIES, CTAS, METADATA, SERVICE_FAMILIES, SERVICES } from "@/lib/content/nexus";

export const metadata: Metadata = { title: "Services | Nexus", description: "Workflow mapping, operational systems, product pilots, and automation hardening for founder-led teams.", ...(METADATA.canonicalUrl ? { alternates: { canonical: `${METADATA.canonicalUrl}/services` } } : {}) };

export default function ServicesPage() {
  return <div className="page-shell"><SiteHeader /><main id="main-content" className="section"><div className="content-wrap"><p className="eyebrow">Services</p><h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Build the system your operation can actually run.</h1><p className="copy mt-5">Nexus starts with the workflow, then defines the smallest useful system, the evidence it must create, and the boundaries it needs to respect.</p><div className="mt-12 grid gap-10">{SERVICE_FAMILIES.map((family, index) => { const proof = CASE_STUDIES[index]; const detail = SERVICES.items[index]; return <article key={family.title} className="grid gap-6 border-t pt-6 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="text-2xl font-bold">{family.title}</h2><p className="copy mt-2">{family.description}</p></div><div className="grid gap-5 text-sm leading-6 text-muted sm:grid-cols-2"><div><h3 className="font-semibold text-foreground">When this matters</h3><p className="mt-1">{detail.bestFit}</p></div><div><h3 className="font-semibold text-foreground">What Nexus builds</h3><p className="mt-1">{detail.description}</p></div><div><h3 className="font-semibold text-foreground">Expected inputs</h3><p className="mt-1">A real workflow, its users, current tools, and the decisions that create friction.</p></div><div><h3 className="font-semibold text-foreground">Related proof</h3><Link href={`/case-studies#${proof.id}`} className="mt-1 inline-block text-brand">{proof.label}</Link></div></div></article>; })}</div><section className="panel mt-14 p-7"><h2 className="text-2xl font-bold">A scoped first step beats a vague transformation project.</h2><p className="copy mt-3">Bring the workflow that is most difficult to explain, hand off, or audit. We will start there.</p><Link href={CTAS.primary.href} className="button-primary mt-6">{CTAS.primary.label}</Link></section></div></main><SiteFooter /></div>;
}

export const dynamic = "force-static";
