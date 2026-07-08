# Nexus Homepage Blueprint

This file outlines the visual layout, structural content mapping, copywriting distribution, and interaction behaviors for the Nexus homepage rebuild.

---

## Section 1: Hero

### 1. Visual & Copy Mapping
*   **Eyebrow:** `CAPABILITY REFERENCE` (Small caps, mono space, high tracking, locked to a maximum of 1 per 3 sections rules).
*   **Headline:** `Nexus` (DM Serif Display, 64px desktop).
*   **Subhead:** `We build custom software and automation for complex workflows. The seven systems below are proof of what we can build — not a product menu to choose from. Bring us your workflow.` (DM Sans, max-width 65ch, max 20 words for the initial sentence/first paragraph portion to feel lightweight).
*   **Secondary Value:** `Seven systems shipped. Five industries. Built by one founder.` (DM Sans, font-weight 600).
*   **Primary CTA:** `Start a conversation` (leads to contact target or mailto:hello@nexus.example.com).
*   **Secondary CTA:** `See proof of work` (scrolls smoothly to `#case-studies`).

### 2. Layout & Interactive Asset
*   **Layout:** Left-aligned copy column, right-aligned interactive node network visual (`NexusNetworkVisual.tsx`).
*   **Visual Asset:** `NexusNetworkVisual` showing 7 colored system nodes orbiting and connecting via light vector lines to a central white node labeled "Nexus".
*   **Background:** 3 layered drifting color blobs (`--color-c-shipwright`, `--color-c-securescan`, `--color-c-safedate` with opacity 0.25 to 0.3) floating dynamically behind the hero. Add a subtle 5% opacity noise/grain SVG overlay to provide a premium textured appearance.
*   **Interaction:** Orbit nodes accelerate and glow slightly when the user's cursor approaches. Respects `prefers-reduced-motion` by freezing orbits and keeping them as a static balanced constellation.

---

## Section 2: Proof Strip

### 1. Visual & Copy Mapping
*   A clean, low-height banner directly under the Hero.
*   **Items:**
    *   `7 SYSTEMS SHIPPED`
    *   `5 INDUSTRIES COVERED`
    *   `BUILT END-TO-END`
    *   `100% CUSTOM WORKFLOWS`
*   **Typography:** Small-caps, semi-bold, mono or clean sans, tracking-wider, text-zinc-400.

### 2. Layout
*   Flexible inline row on desktop, collapsing to a 2x2 grid on tablet, and a 1x4 vertical stack on mobile. Dividers between elements are vertical lines (`var(--border)`) on desktop.

---

## Section 3: Problem Section

### 1. Visual & Copy Mapping
*   **H2:** `Important work often does not fail because people are careless. It fails because the process is scattered.`
*   **Body Copy:**
    *   `A clinic runs on phone calls, registers, token slips, patient files, billing notes, diagnostic orders, and pharmacy handoffs.`
    *   `A restaurant moves between table requests, kitchen tickets, staff memory, billing tools, and owner spreadsheets.`
    *   `A team loses decisions between chat threads, task boards, files, meetings, and personal reminders.`
*   **Editorial Blockquote:** `Who owns this? What changed? What happens next? Where is the latest information? Can the right person see the right thing at the right time?`
*   **Closing statement:** `Nexus builds software for those moments. We turn fragmented workflows into clearer systems.`

### 2. Layout & Aesthetics
*   Asymmetric typography focus. Left side features a big bold H2 and blockquote, right side displays the problem detail cards. Generous vertical padding (`py-24`) to establish a thoughtful editorial rhythm.

---

## Section 4: What Nexus Builds (Services)

### 1. Visual & Copy Mapping
*   **Eyebrow:** `SERVICES BROCHURE`
*   **H2:** `Custom software and automation for complex workflows.`
*   **Subhead:** `Bring us a messy workflow — in any industry. We'll help you map it, design it, and build software that makes it easier to operate.`
*   **Intro Paragraph:** `Every engagement starts with understanding the real workflow, not a feature list. We've built systems for clinics, restaurants, security teams, async teams, safety products, and solo founders — the industries below are what we've done, not the limit of what we do. If your workflow has roles, handoffs, and a "who owns this?" problem, it's a fit.`
*   **Double Column Cards:**
    *   `Founders & Operators` (Deep domain knowledge, technical partner, replace manual operations).
    *   `Product & Engineering Teams` (Extra capacity, product hardening, security-sensitive launch).

### 2. Layout & Accordion Table
*   Rather than displaying a dry table, the 8 primary services from the reference (Product strategy, Custom SaaS, Multi-role systems, UX modernization, Private-beta rollout, Security-conscious engineering, Hardening, AI-assisted workflows) will be structured using a clean, custom grid with interactive hover states.
*   Each service displays:
    *   `Service Title`
    *   `Description`
    *   `Best Fit For`
*   **Disclaimer:** Displayed as a neat, compact legal disclosure block at the footer of the section.

---

## Section 5: Proof-of-Work Case Studies

This is the flagship section of the homepage. To ensure visual excellence and avoid repetitive page-long scrolls, the 7 case studies are organized into a tabbed layout, allowing visitors to inspect systems interactively.

### 1. Tab Navigation
*   7 Tabs matching the color schemes of the respective products:
    1.  **ClinicOS** (Navy, `#1A2B4C`)
    2.  **Aarogya** (Sage Green, `#5A7F5E`)
    3.  **RestaurantOS** (Warm Amber, `#A05C1A`)
    4.  **ShipWright** (Purple, `#5B4B8A`)
    5.  **SecureScan** (Teal, `#2A7D8A`)
    6.  **SafeDate** (Plum, `#8A2A5A`)
    7.  **BuildPublic** (Forest Green, `#2A5A3A`)

### 2. Shared Case-Study Layout Pattern
For each active tab:
1.  **Hero Block:**
    *   `Category Label`
    *   `Product Name` (Large title in the product accent color)
    *   `Tagline`
    *   `Status Chip` (Early Access, Pilot, Private Beta, Available)
    *   `Primary CTA` & `Secondary CTA` (Book Demo / Discuss Pilot / Apply)
2.  **Mockup / Interface Zone:**
    *   High-fidelity SVG interface mockups extracted from the reference file (preserving exact details like DoctorConsultation note text, Floor plans, Kanban boards, Severity breakdowns, and public logs).
3.  **Problem Statement & Workflow Chain:**
    *   `The Problem` paragraph + `The Workflow` visual timeline showing handoffs step-by-step.
4.  **Designed For & Capabilities Grid:**
    *   Capability tags (e.g. Front desk, Queue/Consultation, Billing/Pharmacy) rendered inside cards with customized hover effects.
5.  **Integration notes & Specific Disclaimer:**
    *   Detailed disclaimer block positioned at the bottom of each study.

---

## Section 6: Founder / Company Section

### 1. Visual & Copy Mapping
*   **Eyebrow:** `COMPANY BROCHURE`
*   **H2:** `Nexus`
*   **Philosophy Subhead:** `We build software for workflows that depend on clear roles, reliable handoffs, and the right information reaching the right person.`
*   **Founder Narrative:** Detailed direct-builder relationship copy. Only one builder handles the architecture from end to end, with trusted capacity scale-ups where timeline demands.
*   **Contact Grid Table:** Displays clean rows mapping Website, Email, Demos, Pricing, Location, and Legal policies with crisp underline triggers.

---

## Section 7: Trust and Limits Section

### 1. Visual & Copy Mapping
*   **H2:** `Master Disclaimer Reference`
*   **Description:** `Required language for all product communications. Review before any public-facing use.`
*   **Company-level disclaimer block.**
*   **Interactive Accordion for Product Limits:** Includes separate folding rows for ClinicOS, Aarogya, RestaurantOS, ShipWright, SecureScan, SafeDate, BuildPublic, and Services.

---

## Section 8: Final CTA

### 1. Visual & Copy Mapping
*   **Invitation Box:** `Ready to see how it fits your workflow?`
*   **Subhead:** `Pick a product to explore in depth, or talk to us about what you're trying to solve.`
*   **CTAs:** `Book a demo` (Primary) & `Browse all products` (Secondary, scrolls up).
*   **Global Footer:** Simple serif display logo, copyright, legal links (Privacy, Terms, Sitemap), and version stamp (`22 June 2026`).
