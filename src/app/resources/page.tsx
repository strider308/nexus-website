import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { METADATA, RESOURCE_CHECKLISTS } from "@/lib/content/nexus";

export const metadata: Metadata = { title: "Resources | Nexus", description: "Practical workflow mapping, handoff, and pilot scoping checklists.", ...(METADATA.canonicalUrl ? { alternates: { canonical: `${METADATA.canonicalUrl}/resources` } } : {}) };

export default function ResourcesPage() {
  return <div className="page-shell"><SiteHeader /><main id="main-content" className="section"><div className="content-wrap"><p className="eyebrow">Resources</p><h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Use the checklist before you choose the solution.</h1><p className="copy mt-5">These are practical prompts for exposing workflow friction. Print them, copy them into a working document, or use them in a planning conversation.</p><div className="mt-12 grid gap-10">{RESOURCE_CHECKLISTS.map((resource) => <section id={resource.id} key={resource.id} className="panel p-5 sm:p-7"><h2 className="text-2xl font-bold">{resource.title}</h2><p className="mt-2 text-muted">{resource.description}</p><fieldset className="mt-6 space-y-3"><legend className="sr-only">{resource.title} items</legend>{resource.items.map((item) => <label key={item} className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted"><input type="checkbox" className="mt-1 size-5 shrink-0 accent-brand" /><span>{item}</span></label>)}</fieldset></section>)}</div></div></main><SiteFooter /></div>;
}

export const dynamic = "force-static";
