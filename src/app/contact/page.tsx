"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { CONTACT } from "@/content/nexus";
import { motion } from "motion/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    workflow: "",
    engagement: "diagnostic",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful diagnostic form submission
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-24 select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10 px-6 md:px-12 pb-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#dedbc8]/14 pb-8"
        >
          <span className="text-xs font-mono tracking-wider text-gray-400 uppercase font-bold">
            DIAGNOSTIC ENGAGEMENT
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic mt-3 tracking-tight">
            Start a Conversation
          </h1>
          <p className="text-sm md:text-base font-light text-gray-300 mt-4 max-w-xl leading-relaxed">
            Tell us about your manual processes, spreadsheets, or legacy stack. We will help you audit the rules and engineer the system.
          </p>
        </motion.div>

        {/* Main Grid: Form vs. Fit Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-[#2a7d8a] bg-[#2a7d8a]/5 p-8 flex flex-col gap-4"
              >
                <h2 className="text-lg font-bold uppercase tracking-wide text-[#2a7d8a]">
                  Diagnostic Request Received
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Thank you for describing your workflow. One of our systems engineers will review your notes and respond within **1 business day** to schedule your interactive diagnostic audit.
                </p>
                <div className="h-[1px] bg-[#2a7d8a]/20 my-2" />
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#dedbc8] hover:underline text-left"
                >
                  &larr; Submit another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#0d0d0d] border border-[#dedbc8]/20 p-3 text-sm text-[#dedbc8] placeholder-gray-600 focus:outline-none focus:border-[#dedbc8] transition-colors"
                      placeholder="e.g. Samir Sharma"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#0d0d0d] border border-[#dedbc8]/20 p-3 text-sm text-[#dedbc8] placeholder-gray-600 focus:outline-none focus:border-[#dedbc8] transition-colors"
                      placeholder="e.g. samir@clinicos.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">Company / Project Name</label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-[#0d0d0d] border border-[#dedbc8]/20 p-3 text-sm text-[#dedbc8] placeholder-gray-600 focus:outline-none focus:border-[#dedbc8] transition-colors"
                    placeholder="e.g. Outpatient Clinic Services Group"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="engagement" className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">Engagement Track</label>
                  <select
                    id="engagement"
                    value={formData.engagement}
                    onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}
                    className="bg-[#0d0d0d] border border-[#dedbc8]/20 p-3 text-sm text-[#dedbc8] focus:outline-none focus:border-[#dedbc8] transition-colors"
                  >
                    <option value="diagnostic">Workflow Diagnostic Mapping</option>
                    <option value="prototype">Prototype / Private Beta Development</option>
                    <option value="build">Operational System Build</option>
                    <option value="modernization">UX & Tech Stack Modernization</option>
                    <option value="automation">Automation Stack Expansion</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="workflow" className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">Describe the Current Workflow & Silos</label>
                  <textarea
                    id="workflow"
                    required
                    rows={4}
                    value={formData.workflow}
                    onChange={(e) => setFormData({ ...formData, workflow: e.target.value })}
                    className="bg-[#0d0d0d] border border-[#dedbc8]/20 p-3 text-sm text-[#dedbc8] placeholder-gray-600 focus:outline-none focus:border-[#dedbc8] transition-colors resize-none leading-relaxed"
                    placeholder="What manual spreadsheets, chat chains, or software systems are currently disconnected? What is the main blocker?"
                  />
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="submit"
                    className="border border-[#dedbc8] bg-[#dedbc8] px-8 py-4 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300 text-center"
                  >
                    Submit Diagnostic Request
                  </button>
                  <span className="text-[10px] font-mono text-gray-500 text-center mt-2">
                    Privacy Assurance: Your operational details are protected under NDA principles.
                  </span>
                </div>
              </form>
            )}

            {/* Direct Email Alternative */}
            <div className="mt-12 p-6 border border-[#dedbc8]/10 bg-[#0d0d0d] flex flex-col gap-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#dedbc8] font-bold">
                Alternative: Email Us Directly
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                If you prefer not to use our web intake, you can email our systems engineering inbox at:
              </p>
              <div className="flex items-center gap-2 mt-1">
                <a href={CONTACT.url} className="text-sm font-mono text-[#2a7d8a] hover:underline font-bold">
                  {CONTACT.email}
                </a>
                <span className="text-[10px] font-mono text-gray-500">{"// Response within 1 business day"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Process & Fit Guidance */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Fit Guidance */}
            <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-4">
              <h2 className="font-serif text-xl italic text-[#dedbc8] tracking-tight border-b border-[#dedbc8]/10 pb-2">
                Project Fit Guidance
              </h2>

              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-green-400 font-bold">
                  Good Fit
                </h3>
                <ul className="text-xs text-gray-300 list-disc list-inside space-y-1.5 font-light leading-relaxed">
                  <li>Workflows managed in spreadsheets</li>
                  <li>Process dependent on messaging chains</li>
                  <li>Multi-role handoffs that slow throughput</li>
                  <li>Founders seeking standalone software</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                  Not a Fit
                </h3>
                <ul className="text-xs text-gray-300 list-disc list-inside space-y-1.5 font-light leading-relaxed">
                  <li>Generic marketing landing pages</li>
                  <li>Simple brochure-only templates</li>
                  <li>Pure consulting with no software outcomes</li>
                  <li>Outsourced body-shop staff augmentation</li>
                </ul>
              </div>
            </div>

            {/* Sequence Map */}
            <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-4">
              <h2 className="font-serif text-xl italic text-[#dedbc8] tracking-tight border-b border-[#dedbc8]/10 pb-2">
                What Happens Next
              </h2>
              
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex gap-3">
                  <span className="text-xs font-mono text-[#2a7d8a] font-bold">01</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wide">Workflow Audit</span>
                    <span className="text-xs text-gray-400 font-light mt-1">We analyze your spreadsheet logic and identify blockers.</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xs font-mono text-[#2e6fad] font-bold">02</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wide">Interactive Diagnostic</span>
                    <span className="text-xs text-gray-400 font-light mt-1">A joint session to map roles and transition triggers.</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xs font-mono text-[#dedbc8] font-bold">03</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wide">Stack & Build Proposal</span>
                    <span className="text-xs text-gray-400 font-light mt-1">We propose a software architecture and execution plan.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
