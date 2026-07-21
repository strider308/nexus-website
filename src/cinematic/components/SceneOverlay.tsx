"use client";

import React, { useState } from "react";
import { NexusSceneConfig } from "../config/sceneManifest";
import { motion, AnimatePresence } from "motion/react";
import { CASE_STUDIES } from "@/lib/content/nexus";
import { ArrowRight } from "lucide-react";

export const ENGAGEMENT_MODELS_DATA = [
  {
    id: "diagnostic",
    name: "1. Diagnostic System Audit",
    duration: "1-2 Weeks",
    description: "Deep-dive mapping of your operational bottlenecks, role permissions, and software architecture requirements with a fixed delivery plan.",
    price: "Fixed-Scope Assessment",
  },
  {
    id: "sprint",
    name: "2. Fixed-Scope Sprint",
    duration: "4-8 Weeks",
    description: "Rapid end-to-end design and build of a standalone custom software system or automation pipeline with private-beta testing.",
    price: "Milestone-Based Delivery",
  },
  {
    id: "engine",
    name: "3. Dedicated Systems Engine",
    duration: "Ongoing Partnership",
    description: "Continuous architectural support, feature expansion, and operational optimization for scaling businesses and product teams.",
    price: "Retainer & Capacity Engine",
  },
];

interface SceneOverlayProps {
  scene: NexusSceneConfig;
  isActive: boolean;
}

export function SceneOverlay({ scene, isActive }: SceneOverlayProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(CASE_STUDIES[0].id);

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pointer-events-auto max-w-3xl"
        >
          {/* Chapter Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B]/90 border border-[#3F3F46] text-xs font-mono text-[#DEDBC8] mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{scene.chapterNumber} {"//"} {scene.eyebrow}</span>
          </div>

          {/* Scene Main Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.1] mb-4 drop-shadow-md">
            {scene.title}
          </h2>

          {/* Scene Summary */}
          <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed mb-6 max-w-2xl">
            {scene.summary}
          </p>

          {/* Scene 4 Specific: Interactive Proof Ledger Case Study Tabs */}
          {scene.id === "scene-4" && (
            <div className="mt-4 p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] backdrop-blur-xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {CASE_STUDIES.map((cs) => (
                  <button
                    key={cs.id}
                    onClick={() => setSelectedCaseStudy(cs.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      selectedCaseStudy === cs.id
                        ? "bg-[#DEDBC8] text-black font-bold shadow-md"
                        : "bg-[#27272A]/60 text-[#A1A1AA] hover:text-white hover:bg-[#27272A]"
                    }`}
                  >
                    {cs.label}
                  </button>
                ))}
              </div>

              {/* Active Case Study Details */}
              {(() => {
                const activeCs = CASE_STUDIES.find((c) => c.id === selectedCaseStudy) || CASE_STUDIES[0];
                return (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#DEDBC8] uppercase tracking-wider">{activeCs.category}</span>
                      <span className="text-xs font-mono text-[#A1A1AA]">{activeCs.status}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{activeCs.label} — {activeCs.tagline}</h3>
                    <p className="text-xs text-[#A1A1AA] line-clamp-2">{activeCs.problem}</p>
                    <div className="flex items-center gap-4 text-xs font-mono text-emerald-400 pt-2 border-t border-[#27272A]">
                      <span>Workflow: {activeCs.workflow.slice(0, 4).join(" → ")}</span>
                      <a href="/case-studies" className="inline-flex items-center gap-1 text-[#DEDBC8] hover:underline ml-auto">
                        View Full Case Study <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Scene 6 Specific: Engagement Model Cards */}
          {scene.id === "scene-6" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              {ENGAGEMENT_MODELS_DATA.map((model) => (
                <div key={model.id} className="p-4 rounded-xl bg-[#18181B]/80 border border-[#27272A] backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#DEDBC8] font-bold">{model.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#27272A] text-[#A1A1AA]">{model.duration}</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] mb-3 line-clamp-2">{model.description}</p>
                  <div className="text-xs font-mono font-bold text-white">{model.price}</div>
                </div>
              ))}
            </div>
          )}

          {/* Scene 7 Specific: Intake Form */}
          {scene.id === "scene-7" && (
            <div className="mt-4 p-6 rounded-2xl bg-[#18181B]/90 border border-[#3F3F46] backdrop-blur-xl max-w-lg">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Intake received. We will contact you within 24 hours.");
                }}
                className="space-y-3"
              >
                <div>
                  <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#09090B] border border-[#27272A] text-white focus:outline-none focus:border-[#DEDBC8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#09090B] border border-[#27272A] text-white focus:outline-none focus:border-[#DEDBC8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Workflow Description</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Describe your current manual bottleneck or system challenge..."
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#09090B] border border-[#27272A] text-white focus:outline-none focus:border-[#DEDBC8]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#DEDBC8] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
