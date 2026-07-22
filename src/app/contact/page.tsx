import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { METADATA } from "@/lib/content/nexus";

export const metadata: Metadata = { title: "Map my workflow | Nexus", description: "Start a founder-led conversation about a workflow that needs a clearer operating system.", robots: { index: false, follow: true } };

export default function ContactPage() {
  const email = METADATA.email;
  return <div className="page-shell"><SiteHeader /><main id="main-content" className="section"><div className="content-wrap max-w-3xl"><p className="eyebrow">Map my workflow</p><h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Start with the handoff that keeps needing explanation.</h1><p className="copy mt-5">Describe the work, the people involved, the tools it currently crosses, and the point where ownership becomes unclear.</p>{email ? <a href={`mailto:${email}`} className="button-primary mt-7">Email Nexus</a> : <div className="panel mt-7 p-5"><h2 className="text-lg font-bold">Public contact details are being verified.</h2><p className="mt-2 text-sm leading-6 text-muted">Nexus does not publish an unverified inbox or contact route. The owner must set the verified public contact fields before this page can accept inquiries.</p></div>}</div></main><SiteFooter /></div>;
}

export const dynamic = "force-static";
