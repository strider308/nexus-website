"use client";

import { useState } from "react";
import { AarogyaMockup } from "@/components/visuals/AarogyaMockup";
import { BuildPublicMockup } from "@/components/visuals/BuildPublicMockup";
import { ClinicOSMockup } from "@/components/visuals/ClinicOSMockup";
import { RestaurantOSMockup } from "@/components/visuals/RestaurantOSMockup";
import { SafeDateMockup } from "@/components/visuals/SafeDateMockup";
import { SecureScanMockup } from "@/components/visuals/SecureScanMockup";
import { ShipWrightMockup } from "@/components/visuals/ShipWrightMockup";
import type { CaseStudy } from "@/lib/content/nexus";

const mockups = { clinicos: ClinicOSMockup, aarogya: AarogyaMockup, restaurantos: RestaurantOSMockup, shipwright: ShipWrightMockup, securescan: SecureScanMockup, safedate: SafeDateMockup, buildpublic: BuildPublicMockup } as const;

export function DemoLibrary({ studies }: { studies: CaseStudy[] }) {
  const [activeId, setActiveId] = useState(studies[0]?.id ?? "");
  const active = studies.find((study) => study.id === activeId) ?? studies[0];
  if (!active) return null;
  const Mockup = mockups[active.id as keyof typeof mockups];
  return <div className="grid gap-8 lg:grid-cols-[18rem_1fr]"><div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible" role="tablist" aria-label="Demo selector">{studies.map((study) => <button key={study.id} id={`${study.id}-tab`} type="button" role="tab" aria-selected={active.id === study.id} aria-controls={`${study.id}-panel`} className={`shrink-0 rounded-md border px-3 text-left text-sm font-semibold ${active.id === study.id ? "border-brand bg-surface-elevated text-foreground" : "text-muted"}`} onClick={() => setActiveId(study.id)}>{study.label}</button>)}</div><section id={`${active.id}-panel`} role="tabpanel" aria-labelledby={`${active.id}-tab`} className="panel p-4 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><span className="status">{active.status}</span><h2 className="mt-4 text-2xl font-bold">{active.label}</h2><p className="mt-2 max-w-2xl text-muted">{active.tagline}</p></div><p className="max-w-xs text-sm leading-6 text-muted">{active.disclaimer}</p></div><div className="mt-7 overflow-hidden rounded-md border bg-background p-2 sm:p-4"><div className="aspect-[800/340] w-full">{Mockup && <Mockup />}</div></div><p className="mt-6 text-sm leading-6 text-muted"><strong className="text-foreground">What it proves: </strong>{active.capabilities.map((capability) => capability.title).join(", ")}.</p></section></div>;
}
