import type { Metadata } from "next";
import Link from "next/link";
import { DemoLibrary } from "@/components/site/DemoLibrary";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CASE_STUDIES, CTAS, METADATA } from "@/lib/content/nexus";

export const metadata: Metadata = { title: "Demo library | Nexus", description: "Focused reference previews that demonstrate operational software patterns and their limitations.", ...(METADATA.canonicalUrl ? { alternates: { canonical: `${METADATA.canonicalUrl}/demo` } } : {}) };

export default function DemoPage() {
  return <div className="page-shell"><SiteHeader /><main id="main-content" className="section"><div className="content-wrap"><p className="eyebrow">Demo library</p><h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Inspect one workflow pattern at a time.</h1><p className="copy mt-5">These are reference previews. They demonstrate interface and workflow logic, not a promise that every capability is available as a product.</p><div className="mt-12"><DemoLibrary studies={CASE_STUDIES} /></div><Link href={CTAS.primary.href} className="button-primary mt-10">{CTAS.primary.label}</Link></div></main><SiteFooter /></div>;
}

export const dynamic = "force-static";
