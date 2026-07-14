"use client";

import React from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { motion } from "motion/react";

// Services Engagement Types
const ENGAGEMENTS = [
  {
    id: "diagnostic",
    title: "Workflow Diagnostic",
    bestFor: "Teams with processes scattered across spreadsheets, chat channels, and manual logs.",
    inputs: "Examples of current templates, screen shares of operations, and list of manual handoffs.",
    deliverables: "A structured workflow diagnostic map, identified transaction bottlenecks, and a system stack proposal.",
    duration: "1 to 2 weeks",
    involvement: "2x 90-minute interviews with operations leads.",
    nextStep: "Receive a stack design and fixed-scope development proposal.",
  },
  {
    id: "prototype",
    title: "Prototype / Private Beta",
    bestFor: "Founders validating workflow mechanics or seeking early user feedback.",
    inputs: "Approved system stack design, user role descriptions, and priority data schemas.",
    deliverables: "A functional private-beta web application deployed in a staging environment for internal testing.",
    duration: "4 to 6 weeks",
    involvement: "Weekly 45-minute sync review and database feedback.",
    nextStep: "Transition to a full operational system build.",
  },
  {
    id: "system-build",
    title: "Operational System Build",
    bestFor: "Businesses replacing manual handoffs with production-grade custom software.",
    inputs: "Beta feedback, integrated database rules, and API specifications.",
    deliverables: "An end-to-end custom software platform with strict state machines, user permission rules, and dashboards.",
    duration: "8 to 12 weeks",
    involvement: "Weekly check-ins and final staff user training.",
    nextStep: "Go live with automated transition support.",
  },
  {
    id: "modernization",
    title: "UX & Tech Stack Modernization",
    bestFor: "Operations running on slow legacy software that requires user interface speed improvements.",
    inputs: "Existing source code access, user friction reports, and API maps.",
    deliverables: "A refactored, high-performance web dashboard with modern client-server data synchronization.",
    duration: "6 to 10 weeks",
    involvement: "Design review sessions and staging verification.",
    nextStep: "Production cutover and legacy decommissioning.",
  },
  {
    id: "automation",
    title: "Automation Stack Expansion",
    bestFor: "Established systems seeking API triggers, Slack alerts, or database automation triggers.",
    inputs: "Access to active system data models and target third-party API keys.",
    deliverables: "Custom background workers, queue-based integrations, and automated alert logs.",
    duration: "3 to 5 weeks",
    involvement: "API clearance mapping and integration testing.",
    nextStep: "Continuous automated monitoring setup.",
  }
];

// Fit Criteria
const GOOD_FIT = [
  "You manage business transactions or work sequences using spreadsheets.",
  "You rely heavily on manual text threads or email checks to track task status.",
  "You have multiple team roles collaborating on a single sequence of steps.",
  "You seek independent custom software, not long-term retainer overhead."
];

const NOT_A_FIT = [
  "You need a simple brochure-only site with zero operational logic.",
  "You are looking for body-shop staff augmentation or outsourced developers.",
  "You do not have a defined operational sequence or workflow to automate.",
  "You need marketing landing pages or standard Shopify templates."
];

// FAQs
const FAQS = [
  {
    q: "Who owns the custom software code after delivery?",
    a: "You do. We write clean, standard React/TypeScript and Node.js code and deliver it directly to your GitHub repository. There are no proprietary lock-ins or usage licenses."
  },
  {
    q: "What technical stack do you typically recommend?",
    a: "We prefer Next.js, React, TypeScript, and Node.js with PostgreSQL or Supabase. This stack ensures fast rendering speed, high security, and easy maintenance."
  },
  {
    q: "How do you handle post-launch support?",
    a: "We provide 30 days of direct deployment monitoring and bug fixes included with every system build. After that, we define clear support boundaries and transition code to your developers."
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-24 select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10 px-6 md:px-12 pb-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#dedbc8]/14 pb-8"
        >
          <span className="text-xs font-mono tracking-wider text-gray-400 uppercase font-bold">
            SERVICES & ENGAGEMENT MODELS
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic mt-3 tracking-tight">
            How We Build
          </h1>
          <p className="text-base md:text-lg font-light text-gray-300 mt-4 max-w-xl leading-relaxed">
            We structure our custom software work around five engagement types. We define inputs, deliverables, and durations up front so you get buying clarity.
          </p>
        </motion.div>

        {/* Engagement Models List */}
        <div className="flex flex-col gap-12">
          {ENGAGEMENTS.map((eng, idx) => (
            <motion.div
              key={eng.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 md:p-8 flex flex-col gap-6"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#dedbc8]/10 pb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                    ENGAGEMENT MODEL // 0{idx + 1}
                  </span>
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-[#dedbc8]">
                    {eng.title}
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#2a7d8a] bg-[#2a7d8a]/5 border border-[#2a7d8a]/20 px-3 py-1 rounded font-bold">
                  DURATION: {eng.duration.toUpperCase()}
                </span>
              </div>

              {/* Grid Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-gray-500 font-bold uppercase">Best For</span>
                  <span className="text-gray-300 font-light leading-relaxed">{eng.bestFor}</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-gray-500 font-bold uppercase">Inputs Needed</span>
                  <span className="text-gray-300 font-light leading-relaxed">{eng.inputs}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-gray-500 font-bold uppercase">Key Deliverables</span>
                  <span className="text-gray-300 font-light leading-relaxed">{eng.deliverables}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-gray-500 font-bold uppercase">Expected Client Involvement</span>
                  <span className="text-gray-300 font-light leading-relaxed">{eng.involvement}</span>
                </div>
              </div>

              {/* Next Step Banner */}
              <div className="pt-4 border-t border-[#dedbc8]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                <div className="flex gap-2 items-center">
                  <span className="font-mono text-[10px] text-[#2e6fad] font-bold uppercase">Next step:</span>
                  <span className="text-gray-400 font-light">{eng.nextStep}</span>
                </div>
                <a
                  href={`/contact?track=${eng.id}`}
                  className="text-xs font-mono font-bold uppercase text-[#dedbc8] hover:text-white flex items-center gap-1"
                >
                  Initiate Diagnostic &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fit Analysis and Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#dedbc8]/14 pt-12">
          {/* Fit column */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
              Good-Fit Criteria
            </h2>
            <ul className="flex flex-col gap-3">
              {GOOD_FIT.map((fit, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-300 font-light leading-relaxed">
                  <span className="text-[#2a7d8a] font-bold">&bull;</span>
                  <span>{fit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit column */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
              Not-a-Fit Criteria
            </h2>
            <ul className="flex flex-col gap-3">
              {NOT_A_FIT.map((fit, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-300 font-light leading-relaxed">
                  <span className="text-[#c44a7a] font-bold">&bull;</span>
                  <span>{fit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Engagement Boundaries Alert */}
        <div className="border border-gray-600 bg-transparent p-6 rounded-sm flex flex-col gap-2">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
            Engagement Boundaries
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            We build independent, custom software systems. We do not provide long-term, unstructured retainer consulting. Every contract has a fixed scope, clear deliverables, and a defined handover plan. Our code is written to be easily operated, modified, and scaled by your internal engineers.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="flex flex-col gap-8 border-t border-[#dedbc8]/14 pt-12">
          <h2 className="font-serif text-3xl md:text-5xl font-light italic text-[#dedbc8] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#dedbc8]">
                  {faq.q}
                </h3>
                <p className="text-sm font-light text-gray-300 leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-8 md:p-12 text-center flex flex-col items-center gap-6 mt-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light italic text-[#dedbc8] tracking-tight">
            Ready to structure your workflow?
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 max-w-xl leading-relaxed">
            Every software build starts with a custom diagnostic map. Let&apos;s design the system stack for your handoffs.
          </p>
          <a
            href="/contact"
            className="border border-[#dedbc8] bg-[#dedbc8] px-8 py-4 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300"
          >
            Start a Diagnostic Conversation
          </a>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}
