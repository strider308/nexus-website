import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WorkflowVisual } from "@/components/site/WorkflowVisual";
import { CASE_STUDIES, CTAS, ENGAGEMENT_LEVELS, FOUNDER, HERO, RESOURCE_CHECKLISTS, SERVICE_FAMILIES } from "@/lib/content/nexus";

const featuredProof = CASE_STUDIES.slice(0, 3);

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="section pt-14 md:pt-20"><div className="content-wrap grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div><p className="eyebrow">Custom workflow systems</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{HERO.title}</h1><p className="copy mt-5">{HERO.tagline}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={CTAS.primary.href} className="button-primary">{CTAS.primary.label}</Link><Link href={CTAS.proof.href} className="button-secondary">{CTAS.proof.label}</Link></div></div>
          <WorkflowVisual />
        </div></section>

        <section className="border-y py-5"><div className="content-wrap flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted"><span>Built around roles and handoffs</span><span>Founder-led delivery</span><span>Proof status stated plainly</span></div></section>

        <section id="process" className="section"><div className="content-wrap grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">The operating problem</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">When work is scattered, responsibility gets reconstructed by hand.</h2></div><div className="space-y-5 text-base leading-7 text-muted"><p>Requests move through calls, chats, spreadsheets, inboxes, and memory. Each handoff asks someone to repeat context and decide what is current.</p><p className="border-l-2 border-brand pl-4 text-foreground">Nexus turns that fragmented path into a shared operational system with clear ownership, status, and next actions.</p></div></div></section>

        <section id="services" className="section border-y bg-surface"><div className="content-wrap"><p className="eyebrow">What Nexus builds</p><h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Four ways to make the work more legible.</h2><div className="mt-10 grid gap-6 sm:grid-cols-2">{SERVICE_FAMILIES.map((service) => <article key={service.title} className="border-t pt-4"><h3 className="text-xl font-bold">{service.title}</h3><p className="copy mt-2">{service.description}</p></article>)}</div><Link href="/services" className="button-secondary mt-10">See services in detail</Link></div></section>

        <section className="section"><div className="content-wrap"><p className="eyebrow">Selected proof</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Three systems, each with a different operating problem.</h2><div className="mt-10 grid gap-6 lg:grid-cols-3">{featuredProof.map((study) => <article key={study.id} className="panel flex flex-col p-5"><span className="status">{study.status}</span><h3 className="mt-5 text-xl font-bold">{study.label}</h3><p className="mt-2 text-sm text-muted">{study.tagline}</p><p className="mt-5 text-sm font-semibold text-foreground">It proves: {study.category}</p><Link href={`/case-studies#${study.id}`} className="mt-6 text-sm font-bold text-brand">Read the case study</Link></article>)}</div><Link href={CTAS.proof.href} className="button-secondary mt-8">{CTAS.proof.label}</Link></div></section>

        <section className="section border-y bg-surface"><div className="content-wrap grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Work together</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Start at the level the problem needs.</h2></div><div className="grid gap-5 sm:grid-cols-3">{ENGAGEMENT_LEVELS.map((level) => <article key={level.title}><h3 className="text-lg font-bold">{level.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{level.description}</p></article>)}</div></div></section>

        <section className="section"><div className="content-wrap grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Founder accountability</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The person mapping the system stays close to the build.</h2></div><div className="copy space-y-4"><p>{FOUNDER.text1}</p><p>{FOUNDER.text2}</p></div></div></section>

        <section className="section border-y bg-surface"><div className="content-wrap"><p className="eyebrow">Useful before a call</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Bring a clearer starting point.</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{RESOURCE_CHECKLISTS.map((resource) => <article key={resource.id}><h3 className="text-lg font-bold">{resource.title}</h3><p className="mt-2 text-sm text-muted">{resource.description}</p></article>)}</div><Link href={CTAS.resources.href} className="button-secondary mt-8">{CTAS.resources.label}</Link></div></section>

        <section className="section"><div className="content-wrap panel p-7 sm:p-10"><p className="eyebrow">Next step</p><h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Map the part of your operation that is hardest to keep in sync.</h2><p className="copy mt-4">Start with the work that regularly needs an owner to ask what happened, who owns it, or what should happen next.</p><Link href={CTAS.primary.href} className="button-primary mt-7">{CTAS.primary.label}</Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}

export const dynamic = "force-static";
