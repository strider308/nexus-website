"use client";

import React from "react";
import { NEXUS_SCENE_MANIFEST } from "../config/sceneManifest";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CASE_STUDIES } from "@/lib/content/nexus";
import { ENGAGEMENT_MODELS_DATA } from "./SceneOverlay";

export function ReducedMotionExperience() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090B] text-white">
      <SiteHeader />

      <main id="main-content" className="flex-grow px-6 md:px-16 max-w-7xl mx-auto py-12 space-y-20">
        <div className="bg-[#18181B] border border-[#27272A] p-4 rounded-xl text-center text-xs font-mono text-[#DEDBC8]">
          REDUCED MOTION MODE ACTIVE — ALL CONTENT PRESENTED IN ACCESSIBLE STATIC LAYOUT
        </div>

        {NEXUS_SCENE_MANIFEST.map((scene) => (
          <section key={scene.id} id={scene.slug} className="scroll-mt-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#DEDBC8]">
              <span>{scene.chapterNumber} {"//"} {scene.eyebrow}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">{scene.title}</h2>
            <p className="text-[#A1A1AA] text-base md:text-lg max-w-3xl">{scene.summary}</p>

            {/* Scene 4 Case Studies static breakdown */}
            {scene.id === "scene-4" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {CASE_STUDIES.map((cs) => (
                  <div key={cs.id} className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">{cs.category}</span>
                    <h3 className="text-base font-bold text-white">{cs.label}</h3>
                    <p className="text-xs text-[#A1A1AA]">{cs.problem}</p>
                    <div className="text-xs font-mono text-[#DEDBC8] pt-2 border-t border-[#27272A]">Workflow: {cs.workflow.slice(0, 3).join(" → ")}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Scene 6 Engagement Models static breakdown */}
            {scene.id === "scene-6" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {ENGAGEMENT_MODELS_DATA.map((em) => (
                  <div key={em.id} className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] space-y-2">
                    <span className="text-xs font-mono text-[#DEDBC8] font-bold">{em.name}</span>
                    <p className="text-xs text-[#A1A1AA]">{em.description}</p>
                    <div className="text-sm font-mono font-bold text-white pt-2 border-t border-[#27272A]">{em.price}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
