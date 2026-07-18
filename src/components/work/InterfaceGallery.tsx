"use client";

import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { InterfaceFrame } from "./InterfaceFrame";
import type { CarouselApi } from "@/components/ui/carousel";

interface InterfaceGalleryProps {
  systemId: string;
  frames: string[];
  accentColor: string;
}

export function InterfaceGallery({ systemId, frames, accentColor }: InterfaceGalleryProps) {
  const [activeFrameIdx, setActiveFrameIdx] = useState<number>(0);
  const [api, setApi] = useState<CarouselApi>();

  // Synchronize Embla slide change to Active Tab index
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveFrameIdx(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleTabChange = (idx: number) => {
    setActiveFrameIdx(idx);
    api?.scrollTo(idx);
  };

  const getFrameCaption = (frame: string) => {
    if (systemId === "clinicos") {
      switch (frame) {
        case "reception_setup": return "ClinicOS patient registration interface: logs profile indexes grouped by primary phone numbers to bypass paper record queues.";
        case "token_view": return "ClinicOS live waiting room queue monitor: displays token positions and estimated consult wait times to prevent clinic room delays.";
        case "consult_note": return "ClinicOS doctor consultation interface: records clinical encounter notes and locks digital scripts directly to pharmacy ledger.";
        case "diagnostic_order": return "ClinicOS diagnostic order interface: dispatches lab workorders directly to diagnostic technicians in the basement.";
        case "billing_summary": return "ClinicOS billing interface: calculates consultation fees, test charges, and reconciles registers in the ledger.";
        case "pharmacy_dispense": return "ClinicOS pharmacy interface: checks locked prescriptions against batch inventory counts to clear patient checkout.";
        case "owner_dashboard": return "ClinicOS owner dashboard: audits patient volumes, average wait times, margins, and stock registers.";
      }
    }
    if (systemId === "restaurantos") {
      switch (frame) {
        case "guest_menu": return "RestaurantOS menu ordering interface: customer self-serve QR table portal with allergen warnings to bypass order pad gaps.";
        case "kitchen_display": return "RestaurantOS kitchen display monitor: splits incoming tickets by cooking progress to align preparation lines.";
        case "floor_status": return "RestaurantOS table/floor overview: displays tables layout and active dining session timers to optimize seating capacity.";
        case "ready_handoff": return "RestaurantOS ready-item handoff: waiter service console with ready pick-up notifications to eliminate cold food delivery.";
        case "billing_reconcile": return "RestaurantOS billing interface: invoices GST, service taxes, and compiles payment rounds to match cash drawers.";
        case "shift_closing": return "RestaurantOS shift reconciliation: cashiers balance registers against completed tickets.";
        case "owner_dashboard": return "RestaurantOS owner dashboard: compiles menu sales margins and hourly volume trends.";
      }
    }
    if (systemId === "shipwright") {
      switch (frame) {
        case "workspace_overview": return "ShipWright workspace overview: project directory detailing active milestones and files to bypass siloed updates.";
        case "milestone_details": return "ShipWright project milestone view: tracks waitlist rollout milestones and dependency paths to clear blocking states.";
        case "task_board": return "ShipWright task ownership board: details PM tickets, dev claims, and blocker alerts.";
        case "blocker_graph": return "ShipWright dependency/blocker map: visualizes blocker paths and trigger alerts between owners.";
        case "checkin_view": return "ShipWright check-in interface: logs daily progress logs via automated Slack integrations.";
        case "decision_log": return "ShipWright decision record: archives immutable architectural decisions (ADRs) tied to tickets.";
        case "project_summary": return "ShipWright project summary: archives milestone completions and team performance lists.";
      }
    }
    if (systemId === "aarogya") {
      switch (frame) {
        case "bp_chart": return "Aarogya BP chart: local device trend lines mapping resting blood pressure stability.";
        case "med_routine": return "Aarogya routines checklist: medication daily checklists with reminder alerts.";
        case "history_summary": return "Aarogya pre-consultation summary: exports health metrics trend reports as PDFs.";
      }
    }
    if (systemId === "securescan") {
      switch (frame) {
        case "vulnerability_card": return "SecureScan vulnerability card: details threat payloads, code lines, and fixes.";
        case "scan_history": return "SecureScan scan history: registers list of scan runs and vulnerability counts.";
        case "pipeline_status": return "SecureScan pipeline status: CI/CD triggers verifying code security during pull requests.";
      }
    }
    if (systemId === "safedate") {
      switch (frame) {
        case "safety_plan": return "SafeDate safety plan: privately schedules meetup details, times, and trusted contacts.";
        case "timer_prompt": return "SafeDate check-in countdown: mobile alert prompt to confirm safety before alerts dispatch.";
        case "alert_details": return "SafeDate alert details: routes emergency notification SMS text lines to trusted contacts.";
      }
    }
    if (systemId === "buildpublic") {
      switch (frame) {
        case "public_roadmap": return "BuildPublic roadmap: public-facing progress timeline showing completed project milestones.";
        case "task_planner": return "BuildPublic task planner: private backlog board with private task tags.";
        case "social_cross_post": return "BuildPublic social cross-post: publishes progress logs directly to connected social feeds.";
      }
    }
    return "Operational screenshot excerpt.";
  };

  const getFrameTitle = (frame: string) => {
    const formatted = frame.replace("_", " ");
    return formatted.toUpperCase();
  };

  return (
    <div className="flex flex-col gap-6 py-8 border-t border-[#dedbc8]/10 w-full select-none">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">
          System Interface Evidence
        </span>
        <h2 className="type-heading text-3xl text-[#dedbc8] tracking-tight">
          Reconstructed Console Excerpts
        </h2>
      </div>

      {/* Tabs list for categories */}
      <div className="flex flex-wrap gap-2 border-b border-[#dedbc8]/10 pb-3">
        {frames.map((frame, idx) => {
          const isActive = activeFrameIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => handleTabChange(idx)}
              className={`px-3 py-2 font-mono text-xs uppercase tracking-wider transition-[color,border-color] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] outline-none focus:ring-1 focus:ring-[#dedbc8] ${
                isActive ? "text-[#dedbc8] font-bold border-b-2" : "text-gray-400 hover:text-gray-200"
              }`}
              style={{
                borderBottomColor: isActive ? accentColor : "transparent"
              }}
            >
              {getFrameTitle(frame)}
            </button>
          );
        })}
      </div>

      {/* Embla Carousel slides */}
      <div className="relative mt-4 w-full">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {frames.map((frame, idx) => {
              const isActive = activeFrameIdx === idx;
              return (
                <CarouselItem key={idx} className="basis-full">
                  <div
                    className={`w-full transition-[opacity,transform,filter] duration-500 ease-out ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.97] opacity-40 blur-xs"
                    }`}
                  >
                    <InterfaceFrame
                      systemId={systemId}
                      frameId={frame}
                      caption={getFrameCaption(frame)}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Controls and Frame Status in Normal Flow */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-t border-[#dedbc8]/10 pt-4 w-full font-mono text-xs text-gray-500 uppercase">
            <div className="flex items-center gap-2">
              <span>EXCERPT FRAME INDEX: 0{activeFrameIdx + 1} / 0{frames.length}</span>
              <span className="text-[#2a7d8a] font-bold">{"// SPEC"}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className="border border-[#dedbc8]/20 px-3.5 py-1.5 text-xs text-[#dedbc8] hover:bg-[#dedbc8]/5 hover:text-white outline-none focus:ring-1 focus:ring-[#dedbc8] transition-colors"
                aria-label="Previous frame"
              >
                &larr; PREV
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className="border border-[#dedbc8]/20 px-3.5 py-1.5 text-xs text-[#dedbc8] hover:bg-[#dedbc8]/5 hover:text-white outline-none focus:ring-1 focus:ring-[#dedbc8] transition-colors"
                aria-label="Next frame"
              >
                NEXT &rarr;
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default InterfaceGallery;
