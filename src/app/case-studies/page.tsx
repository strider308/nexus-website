import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CASE_STUDIES, CTAS, MASTER_DISCLAIMER, METADATA } from "@/lib/content/nexus";

export const metadata: Metadata = { title: "Case studies | Nexus", description: "Evidence-led workflow software case studies, with explicit proof status and limitations.", ...(METADATA.canonicalUrl ? { alternates: { canonical: `${METADATA.canonicalUrl}/case-studies` } } : {}) };

export default function CaseStudiesPage() {
  return <div className="page-shell"><SiteHeader /><main id="main-content" className="section"><div className="content-wrap"><p className="eyebrow">Case studies</p><h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Proof of range, with the limits stated plainly.</h1><p className="copy mt-5">These systems show the operational patterns Nexus has designed and built. They are not a fixed SaaS catalog or a claim of production adoption.</p><div className="mt-10 flex gap-2 overflow-x-auto pb-2" aria-label="Case study index">{CASE_STUDIES.map((study) => <a key={study.id} href={`#${study.id}`} className="button-secondary shrink-0 text-sm">{study.label}</a>)}</div><div className="mt-12 space-y-12">{CASE_STUDIES.map((study) => <article id={study.id} key={study.id} className="scroll-mt-24 border-t pt-7"><div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr]"><div><span className="status">{study.status}</span><h2 className="mt-4 text-3xl font-bold">{study.label}</h2><p className="mt-2 text-muted">{study.category}</p></div><div><p className="text-lg leading-8 text-foreground">{study.tagline}</p><div className="mt-6 grid gap-5 sm:grid-cols-2"><div><h3 className="font-semibold">What it demonstrates</h3><p className="mt-2 text-sm leading-6 text-muted">{study.capabilities.map((capability) => capability.title).join(", ")}.</p></div><div><h3 className="font-semibold">Operational limitation</h3><p className="mt-2 text-sm leading-6 text-muted">{study.disclaimer}</p></div></div><Link href={`/demo#${study.id}`} className="button-secondary mt-6">Open related demo</Link></div></div></article>)}</div><p className="mt-14 border-t pt-6 text-sm leading-6 text-muted">{MASTER_DISCLAIMER}</p><Link href={CTAS.primary.href} className="button-primary mt-7">{CTAS.primary.label}</Link></div></main><SiteFooter /></div>;
}

export const dynamic = "force-static";
