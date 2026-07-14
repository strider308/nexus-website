"use client";

import React from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { motion } from "motion/react";

// Detailed Proof Stories Data
const DETAILED_PROOF_STORIES = [
  {
    id: "clinicos",
    name: "ClinicOS",
    category: "Outpatient Clinic Operations Platform",
    industry: "Healthcare / Medical",
    status: "PROTOTYPE SHIPPED & RECONSTRUCTED",
    problem: "Patient queues, physician prescriptions, billing updates, and pharmacy handovers sat in manual paper files and scattered computer spreadsheets, causing diagnostic bottlenecks and prolonged wait times.",
    users: "Clinic Administrators, Physicians, Lab Technicians, Pharmacists",
    workflow: "1. Patient registers & enters queue -> 2. Physician prescribes & issues diagnostic order -> 3. Diagnostics logs results -> 4. Cashier reconciles invoice -> 5. Pharmacy dispenses medication.",
    system: "A unified, local state-machine console that tracks each patient from check-in to checkout, locking consultation notes, automating prescription transfers to the pharmacy ledger, and reconciling billing logs instantly.",
    proves: "Real-time state tracking across separate physical departments (Consultation room, Lab, Cashier, Pharmacy) prevents data duplication and keeps waiting rooms clear.",
    limitations: "This prototype is designed for local clinic local networks; it is not integrated with national health insurance APIs or electronic health record (EHR) federated databases.",
    color: "#2a7d8a",
    // Reconstructed SVG Interface Evidence
    svgEvidence: (
      <svg className="w-full h-48 border border-[#dedbc8]/14 bg-[#0d0d0d] p-4 text-[#dedbc8] font-mono text-[10px]" viewBox="0 0 400 180">
        <text x="10" y="20" className="font-bold fill-[#2a7d8a] tracking-wider text-[11px]">CLINICOS // PATIENT FLOW CONSOLE</text>
        <line x1="10" y1="30" x2="390" y2="30" stroke="rgba(222,219,200,0.14)" strokeWidth="1" />
        
        {/* Active Patients Queue */}
        <text x="10" y="45" className="font-bold fill-gray-500">ACTIVE OUTPATIENT QUEUE</text>
        
        {/* Queue Row 1 */}
        <rect x="10" y="55" width="115" height="40" fill="rgba(222,219,200,0.03)" stroke="rgba(222,219,200,0.1)" strokeWidth="1" />
        <text x="18" y="68" className="font-bold fill-[#dedbc8]">P-1084 // SAMIR S.</text>
        <text x="18" y="80" className="fill-[#2a7d8a] text-[9px] font-bold">STATE: DIAGNOSTICS</text>
        <circle cx="108" cy="75" r="4" fill="#2a7d8a" />

        {/* Queue Row 2 */}
        <rect x="135" y="55" width="115" height="40" fill="rgba(222,219,200,0.03)" stroke="rgba(222,219,200,0.1)" strokeWidth="1" />
        <text x="143" y="68" className="font-bold fill-[#dedbc8]">P-1085 // ANANYA M.</text>
        <text x="143" y="80" className="fill-[#2e6fad] text-[9px] font-bold">STATE: PHARMACY</text>
        <circle cx="233" cy="75" r="4" fill="#2e6fad" />

        {/* Queue Row 3 */}
        <rect x="260" y="55" width="130" height="40" fill="rgba(222,219,200,0.03)" stroke="rgba(222,219,200,0.1)" strokeWidth="1" />
        <text x="268" y="68" className="font-bold fill-[#dedbc8]">P-1086 // VIKRAM R.</text>
        <text x="268" y="80" className="fill-gray-500 text-[9px] font-bold">STATE: IN CHECK-IN</text>
        <circle cx="370" cy="75" r="4" fill="gray" />

        {/* Diagnostic Results Board */}
        <line x1="10" y1="110" x2="390" y2="110" stroke="rgba(222,219,200,0.14)" strokeWidth="1" />
        <text x="10" y="125" className="font-bold fill-gray-500">LAB PHARMACY DISPATCH HANDOVER</text>
        
        <rect x="10" y="135" width="380" height="30" fill="none" stroke="rgba(42,125,138,0.3)" strokeWidth="1" />
        <text x="20" y="153" className="fill-[#dedbc8]">DISPATCH #78401 // PRESCRIPTION LOCK [OK] &rarr; LEDGER UPDATE CONFIRMED</text>
        <rect x="330" y="142" width="50" height="16" fill="#2a7d8a" />
        <text x="342" y="153" className="fill-[#070707] font-bold text-[9px]">COMPLETE</text>
      </svg>
    )
  },
  {
    id: "restaurantos",
    name: "RestaurantOS",
    category: "Restaurant Ordering & Operations Platform",
    industry: "Hospitality / Food & Beverage",
    status: "PROTOTYPE SHIPPED & RECONSTRUCTED",
    problem: "Ordering, kitchen queue preparation, billing, and cashier reconciliation occurred on paper pads, WhatsApp groups, and standalone point-of-sale registers, leading to forgotten orders and mismatching shift receipts.",
    users: "Table Guests, Wait Staff, Kitchen Chefs, Cashiers, Venue Owners",
    workflow: "1. Guest scans QR at table -> 2. Guest places order -> 3. Kitchen ticket queue displays order -> 4. Kitchen marks dishes ready -> 5. Cashier prints receipt & updates sales log.",
    system: "A real-time state synchronization interface that connects order requests made via table web portals directly to the kitchen display queue, with live billing tally and automated POS sales reporting.",
    proves: "Synchronized state machines between customer action, food preparation stages, and payment systems eliminate manual ordering delays and accounting discrepancies.",
    limitations: "This prototype does not support integrations with third-party delivery aggregation software (e.g. UberEats, Zomato) or external logistics drivers.",
    color: "#c87b3a",
    // Reconstructed SVG Interface Evidence
    svgEvidence: (
      <svg className="w-full h-48 border border-[#dedbc8]/14 bg-[#0d0d0d] p-4 text-[#dedbc8] font-mono text-[10px]" viewBox="0 0 400 180">
        <text x="10" y="20" className="font-bold fill-[#c87b3a] tracking-wider text-[11px]">RESTAURANTOS // LIVE KITCHEN QUEUE</text>
        <line x1="10" y1="30" x2="390" y2="30" stroke="rgba(222,219,200,0.14)" strokeWidth="1" />

        {/* Kitchen Tickets Grid */}
        <text x="10" y="45" className="font-bold fill-gray-500">PENDING ORDER TICKETS</text>
        
        {/* Ticket 1 */}
        <rect x="10" y="55" width="180" height="50" fill="rgba(222,219,200,0.03)" stroke="rgba(200,123,58,0.3)" strokeWidth="1" />
        <text x="18" y="68" className="font-bold fill-[#dedbc8]">TABLE 04 // ORDER #4028</text>
        <text x="18" y="80" className="fill-gray-400 text-[9px]">- 2x Miso Salmon (WAITING)</text>
        <text x="18" y="92" className="fill-gray-400 text-[9px]">- 1x Jasmine Rice (WAITING)</text>
        <rect x="135" y="60" width="45" height="14" fill="#c87b3a" />
        <text x="141" y="70" className="fill-[#070707] font-bold text-[8px]">PREPARING</text>

        {/* Ticket 2 */}
        <rect x="200" y="55" width="190" height="50" fill="rgba(222,219,200,0.03)" stroke="rgba(222,219,200,0.1)" strokeWidth="1" />
        <text x="208" y="68" className="font-bold fill-[#dedbc8]">TABLE 12 // ORDER #4027</text>
        <text x="208" y="80" className="fill-gray-500 text-[9px]">- 1x Truffle Fries (DISPATCHED)</text>
        <text x="208" y="92" className="fill-gray-500 text-[9px]">- 2x Dry Cider (DISPATCHED)</text>
        <rect x="335" y="60" width="45" height="14" fill="none" stroke="gray" strokeWidth="1" />
        <text x="345" y="70" className="fill-gray-400 font-bold text-[8px]">SERVED</text>

        {/* Cashier Reconciliation Console */}
        <line x1="10" y1="120" x2="390" y2="120" stroke="rgba(222,219,200,0.14)" strokeWidth="1" />
        <text x="10" y="135" className="font-bold fill-gray-500">SHIFT BILLING RECONCILIATION</text>
        <text x="10" y="155" className="fill-[#dedbc8] text-[9px]">TOTAL TALLY: $1,482.50 // SHIFT RECONCILIATION COMPLETED [MATCH 100%]</text>
        <circle cx="380" cy="152" r="4" fill="#2a7d8a" />
      </svg>
    )
  },
  {
    id: "shipwright",
    name: "ShipWright",
    category: "Async Team Execution Workspace",
    industry: "Operations / Software Teams",
    status: "PROTOTYPE SHIPPED & RECONSTRUCTED",
    problem: "Task assignment, files, code pull reviews, and team blockages were scattered across Jira, Slack channels, and email inbox folders, causing updates to sit unresolved without visible task ownership.",
    users: "Engineering Leads, Product Managers, Developers",
    workflow: "1. Dev submits task -> 2. System checks dependencies -> 3. Dependency blockers flagged -> 4. Slack notify sent to blocker owner -> 5. Blocker cleared -> Task active.",
    system: "A centralized, dependency-aware async console that tracks task chains, detects blocks automatically, and opens dedicated clearance channels between blocking team members.",
    proves: "Structured task logic that maps dependencies prevents silent bottlenecks and cuts down slack status meetings.",
    limitations: "This prototype handles workflow states; it is not a direct repository server and relies on external GitHub webhook APIs.",
    color: "#8b7bc4",
    // Reconstructed SVG Interface Evidence
    svgEvidence: (
      <svg className="w-full h-48 border border-[#dedbc8]/14 bg-[#0d0d0d] p-4 text-[#dedbc8] font-mono text-[10px]" viewBox="0 0 400 180">
        <text x="10" y="20" className="font-bold fill-[#8b7bc4] tracking-wider text-[11px]">SHIPWRIGHT // TASK BLOCKER MAP</text>
        <line x1="10" y1="30" x2="390" y2="30" stroke="rgba(222,219,200,0.14)" strokeWidth="1" />

        {/* Task Board Cards */}
        <text x="10" y="45" className="font-bold fill-gray-500">TASK STAGE & BLOCKERS</text>
        
        {/* Blocked Task */}
        <rect x="10" y="55" width="165" height="50" fill="rgba(222,219,200,0.02)" stroke="rgba(196,74,122,0.4)" strokeWidth="1" />
        <text x="18" y="68" className="font-bold fill-[#dedbc8]">SW-420 // BUILD PROD CONFIG</text>
        <text x="18" y="80" className="fill-[#c44a7a] text-[9px] font-bold">STATUS: BLOCKED BY SW-419</text>
        <text x="18" y="92" className="fill-gray-400 text-[8px]">OWNER: SAMUJJWAL S.</text>

        {/* Blocking Task */}
        <rect x="225" y="55" width="165" height="50" fill="rgba(222,219,200,0.02)" stroke="rgba(42,125,138,0.4)" strokeWidth="1" />
        <text x="233" y="68" className="font-bold fill-[#dedbc8]">SW-419 // DEFINE FIREWALLS</text>
        <text x="233" y="80" className="fill-[#2a7d8a] text-[9px] font-bold">STATUS: CLEARANCE PROGRESS</text>
        <text x="233" y="92" className="fill-gray-400 text-[8px]">OWNER: ALEX R.</text>

        {/* Link line between blocked and blocking tasks */}
        <path d="M 175,80 L 225,80" stroke="#c44a7a" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="175,80 181,77 181,83" fill="#c44a7a" />

        {/* Notification Channel */}
        <line x1="10" y1="120" x2="390" y2="120" stroke="rgba(222,219,200,0.14)" strokeWidth="1" />
        <text x="10" y="135" className="font-bold fill-gray-500">AUTOMATED SLACK CLEARANCE RESOLVER</text>
        <text x="10" y="155" className="fill-[#dedbc8] text-[9px]">PINGING @ALEX R. ON SLACK &rarr; DEPENDENCY BLOCK BLOCKER REMINDER SENT [13:04]</text>
      </svg>
    )
  }
];

// Supporting Systems Data
const SUPPORTING_SYSTEMS = [
  {
    id: "aarogya",
    name: "Aarogya",
    category: "Personal Health Tracker",
    description: "Organizes everyday personal health information including blood pressure logs, blood glucose charts, weight, and custom medication schedules into a structured, locally stored database. We do not transmit or store your biological data on remote clouds.",
    color: "#2e6fad",
    posture: "Completely private, offline browser storage"
  },
  {
    id: "securescan",
    name: "SecureScan",
    category: "Web Security Scanner",
    description: "Brings repeatable vulnerability checks closer to dev loops. Runs automated checks for outdated components, open ports, and cross-site scripting vulnerabilities. Generates reports ranked by severity.",
    color: "#2a7d8a",
    posture: "Diagnostic framework, does not replace certified pen-tests"
  },
  {
    id: "safedate",
    name: "SafeDate",
    category: "Safety Check-in Tool",
    description: "Allows dating users to map plans, register locations, and set timed verification check-ins with trusted contacts. Designed with strict privacy boundaries without intrusive GPS tracking features.",
    color: "#c44a7a",
    posture: "Workflow-sharing product, cannot guarantee safety"
  },
  {
    id: "buildpublic",
    name: "BuildPublic",
    category: "Founder Workspace",
    description: "Combines a private founder task planner with an automated public progress log. Converts checked-off engineering tickets directly into clean updates for public audence building.",
    color: "#dedbc8",
    posture: "Development status compiler"
  }
];

export default function WorkPage() {
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
            PROVEN WORKFLOWS
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic mt-3 tracking-tight">
            Shipped Proof Systems
          </h1>
          <p className="text-base md:text-lg font-light text-gray-300 mt-4 max-w-2xl leading-relaxed">
            These systems demonstrate how we solve real operational problems. We build clean-sheet custom software to connect processes, manage table transitions, and eliminate spreadsheets.
          </p>
        </motion.div>

        {/* Detailed Proof Stories */}
        <div className="flex flex-col gap-24">
          {DETAILED_PROOF_STORIES.map((sys, idx) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#dedbc8]/10 pb-16"
              id={sys.id}
            >
              {/* Left Column: Metadata and SVG Evidence */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                    CASE STUDY 0{idx + 1} {"//"} {sys.industry.toUpperCase()}
                  </span>
                  <h2 className="text-3xl font-serif font-light text-[#dedbc8] uppercase tracking-wide">
                    {sys.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-[9px] font-mono text-gray-400 border border-[#dedbc8]/20 px-2 py-0.5 rounded">
                      {sys.category}
                    </span>
                    <span className="text-[9px] font-mono text-[#2a7d8a] bg-[#2a7d8a]/5 border border-[#2a7d8a]/20 px-2 py-0.5 rounded font-bold">
                      {sys.status}
                    </span>
                  </div>
                </div>

                {/* SVG Interface Excerpt */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                    Reconstructed Interface Evidence:
                  </span>
                  <div className="shadow-2xl rounded-sm overflow-hidden">
                    {sys.svgEvidence}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Details */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
                    1. The Operational Problem
                  </h3>
                  <p className="text-sm font-light text-gray-300 leading-relaxed">
                    {sys.problem}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
                    2. Users & Roles
                  </h3>
                  <p className="text-sm font-light text-gray-300 leading-relaxed">
                    {sys.users}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
                    3. Mapped Workflow Sequence
                  </h3>
                  <p className="text-sm font-light text-gray-400 leading-relaxed font-mono text-[11px]">
                    {sys.workflow}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
                    4. The System We Engineered
                  </h3>
                  <p className="text-sm font-light text-gray-300 leading-relaxed">
                    {sys.system}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#dedbc8]/10 text-xs">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#2a7d8a] font-bold uppercase tracking-wider">What this proves</span>
                    <span className="text-gray-400 font-light leading-relaxed">{sys.proves}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-wider">System limits</span>
                    <span className="text-gray-400 font-light leading-relaxed">{sys.limitations}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={`mailto:hello@nexus-workflows.com?subject=Inquiry%20regarding%20${sys.name}`}
                    className="border border-[#dedbc8]/30 px-5 py-2.5 text-xs font-mono uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-all duration-300 inline-block"
                  >
                    Request Walkthrough
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concise Supporting Systems */}
        <div className="flex flex-col gap-8 mt-12">
          <h2 className="font-serif text-3xl md:text-5xl font-light italic text-[#dedbc8] tracking-tight">
            Supporting System Builds
          </h2>
          <p className="text-sm md:text-base font-light text-gray-300 max-w-xl">
            Shorter experiment tracks and focused utilities. These confirm our technical capabilities in data security and automation tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {SUPPORTING_SYSTEMS.map((sys) => (
              <div 
                key={sys.id}
                className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">
                    UTILITY BUILD // {sys.name.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-bold text-[#dedbc8] uppercase tracking-wide">
                    {sys.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {sys.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#dedbc8]/10 text-[10px] font-mono text-[#2e6fad] font-bold">
                  POSTURE: {sys.posture.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation / Cross-link CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-8 md:p-12 text-center flex flex-col items-center gap-6 mt-12"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light italic text-[#dedbc8] tracking-tight">
            How we can help you build
          </h2>
          <p className="text-sm md:text-base font-light text-gray-300 max-w-xl leading-relaxed">
            See our capabilities in custom systems, automation layers, and modern dashboard design, or reach out to discuss your specific workflow rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="/services"
              className="border border-[#dedbc8] bg-[#dedbc8] px-6 py-3 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300"
            >
              Explore Capabilities &rarr;
            </a>
            <a
              href="/contact"
              className="border border-[#dedbc8]/20 px-6 py-3 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:border-[#dedbc8] transition-all duration-300"
            >
              Contact Engineering
            </a>
          </div>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}
