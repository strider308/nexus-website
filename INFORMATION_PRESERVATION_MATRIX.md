# Information Preservation Matrix — Nexus Website 3D Cinematic Experiment

This matrix documents the structural elements, copy, CTAs, and semantic details of all website routes to ensure they are perfectly preserved in the future 3D cinematic layout. All text content remains indexed in standard HTML.

---

## Route: `/` (Homepage)

| Component / Section | Element Description | ID / Anchor | SEO / A11y Significance | Gating/Preservation Instruction |
|---|---|---|---|---|
| **SiteHeader** | Main navigation links (Services, Case Studies, Demo Library, Resources) | n/a | Primary header nav structure; screen reader readable | **Must stay in HTML** (floating above canvas layer; never render navigation in WebGL) |
| **Hero** | Title ("Bespoke software systems for operators"), Subtitle ("Nexus builds custom software..."), Primary CTA ("Discuss your workflow"), Secondary CTA ("Explore shipped proof") | `#hero` | Primary indexable keyword text, H1 heading, and direct conversion hooks | **Must stay in HTML** (titles and CTAs float over canvas). The central core visual **can be visually mirrored in 3D** canvas. |
| **ProofStrip** | Modular partners/metrics tickers ("7 systems shipped", "54 tissues GTEx", etc.) | n/a | Validation, proof claims, and search engine credibility markers | **Must stay in HTML**. Ticker items are text and must remain indexable. |
| **ProblemSection** | Section heading ("Software shouldn't feel like a compromise"), problem list, comparison sliders | `#problem` | Contrast between manual chaos and structured systems | **Must stay in HTML**. Before/After comparisons **can be visually mirrored in 3D** but text copy must float in HTML. |
| **ServicesSection** | Heading ("Core Engagement Services"), lists of workflow custom applications | `#services-brochure` | Major keyword-heavy capabilities descriptions | **Must stay in HTML**. 3D visual representations of the "Blueprint Stack" **can be visually mirrored in 3D** on scroll. |
| **ProofLedger** | Section headers, statistics of case studies, proof vectors | `#proof-ledger` | Strategic trust/authority claims | **Must stay in HTML**. Connective animations between systems **can be visually mirrored in 3D**. |
| **WhyNexusCompounds** | Grid of 9 workflow primitives (Permissions, State machine, Audit log, etc.) | n/a | Technical capabilities index | **Must stay in HTML** (the cards stay as standard DOM elements with hover/focus states). |
| **CaseStudiesSection** | Hover-matrix case studies (ClinicOS, Aarogya, RestaurantOS, etc.) | `#case-studies` | Case study tags and direct navigation hooks to `/case-studies` and `/demo` | **Must stay in HTML** (stagger cards in DOM). Connective constellation lines **can be visually mirrored in 3D** (e.g. ProofConstellation scene). |
| **EngagementModels** | Process milestones (Model A, B, C cards) | `#engagement-models` | Process explanation and engagement structures | **Must stay in HTML**. SystemCard3D hover tilts **can be visually mirrored in 3D** (via CSS 3D matrix). |
| **ResourcesPreview** | Scoping checklists preview cards, "Explore resources" CTA | `#resources-preview` | Link to checklist resources page | **Must stay in HTML**. Card click trigger hooks must be standard anchor elements. |
| **FounderSection** | Personal statement from the founder, custom signature | `#founder` | Studio philosophy and human trust factor | **Must stay in HTML** (signature image or text must have alt descriptions). |
| **TrustLimitsSection** | FAQ Accordion | `#trust-limits` | Operational bounds, scope constraints, and expectations FAQ | **Must stay in HTML** (uses Radix/base-ui accordion keyboard states). |
| **FinalCTA** | Heading ("Bring the workflow..."), primary CTA, secondary CTA | `#contact` | Main conversion footer | **Must stay in HTML** (forms and buttons float above canvas). |
| **SiteFooter** | Bottom navigation links, copyright, sitemap and legal routes | n/a | Structural footer navigation | **Must stay in HTML** (standard list anchors). |

---

## Route: `/services`

*   **Status:** Server Component (Static page)
*   **A11y/SEO Goal:** Must maintain H1 title structure, clean semantic paragraphs, lucide icon text alternatives, and standard interactive buttons.

| Element / Area | ID / Anchor | Preservation Category | Instruction |
|---|---|---|---|
| H1 Page Heading & Description | n/a | **Must stay in HTML** | "Core Engagement Services" must remain indexable. |
| Service List Grid | `#workflow`, `#automation`, `#mvp`, `#dashboards`, `#ux`, `#ai` | **Must stay in HTML** | Service descriptions, expected inputs, and typical deliverables must remain indexable in standard text grids. |
| Shipped Proof Tag / Anchor | n/a | **Must stay in HTML** | Related proof labels (e.g. "ClinicOS") link logically to demo library. |
| Kickoff Scoping Call Panel | n/a | **Must stay in HTML** | "Map your workflow" CTA button must remain a clickable HTML anchor. |

---

## Route: `/case-studies`

*   **Status:** Client Component (Dynamic UI tab states)
*   **A11y/SEO Goal:** Maintain complete search visibility of all case study tags, service models, and direct demo navigation loops.

| Element / Area | ID / Anchor | Preservation Category | Instruction |
|---|---|---|---|
| H1 Page Heading & Description | n/a | **Must stay in HTML** | "Case Studies & Shipped Proof" must remain indexable. |
| Case Study Cards | `#clinicos`, `#aarogya`, `#restaurantos`, `#shipwright`, `#securescan`, `#safedate`, `#buildpublic` | **Must stay in HTML** | All content text ("What This Proves", "Capabilities Implemented") must remain in HTML. |
| Orbit/Constellation background | n/a | **Can be visually mirrored in 3D** | The canvas elements showing constellation lines must be set to `aria-hidden="true"`. |
| "Explore Demo" CTA buttons | n/a | **Must stay in HTML** | Must remain clickable HTML button/anchor tags. |

---

## Route: `/demo`

*   **Status:** Client Component (Mockups grid and active detail drawer)
*   **A11y/SEO Goal:** Enable rich keyboard interactivity, aria-live announcements for active details, and mobile-friendly fallback screens.

| Element / Area | ID / Anchor | Preservation Category | Instruction |
|---|---|---|---|
| H1 Title & Grid | n/a | **Must stay in HTML** | "Demo Library" and intro text. |
| Mockup Details & Mockup Views | `#clinicos`, `#restaurantos`, `#securescan`, etc. | **Must stay in HTML** | Live forms, synthetic queue trackers, and table states are built with HTML CSS and must remain interactive. |
| 3D Orbit Canvas | n/a | **Can be visually mirrored in 3D** | The decorative `DemoLibraryScene` must use `aria-hidden="true"`. |
| Active States | n/a | **Must stay in HTML** | Tab selections and active details must announce state change via ARIA or focus management. |

---

## Route: `/resources`

*   **Status:** Client Component (Checklists and worksheets)
*   **A11y/SEO Goal:** Ensure all checklists are copyable, structured in list tags, and fully readable by screen readers.

| Element / Area | ID / Anchor | Preservation Category | Instruction |
|---|---|---|---|
| H1 Title & Intro | n/a | **Must stay in HTML** | Intro text explaining "Useful before the call." |
| Scoping Resource Cards | `#mapping`, `#mvp`, `#handoff`, `#beta` | **Must stay in HTML** | Fully structured list checkboxes (`<ul/li>`) and title cards. |
| SystemCard3D Tilt | n/a | **Can be visually mirrored in 3D** | Tilt effect uses CSS 3D transforms on hover, falling back to standard 2D card on mobile or reduced-motion. |

---

## Route: `/privacy-policy` & `/terms-of-service`

*   **Status:** Static Text Pages
*   **A11y/SEO Goal:** Perfect readable legal text, standard print layouts, and easy user scrolling.

| Element / Area | Preservation Category | Instruction |
|---|---|---|
| All Headings (H1, H2) | **Must stay in HTML** | Clean semantic hierarchy. |
| Legal Paragraphs | **Must stay in HTML** | Standard legible body copy. |
| Operator Warnings (TODO tags) | **Must stay in HTML** | Staged warning panel indicating mock status. |
| **3D Rendering** | **Must never move into canvas** | Legal text must never be animated, shifted, or rendered inside WebGL. |

---

## Summary Rules for the 3D Cinematic Experiement

1.  **Direct Canvas Exclusions:** No text copy, paragraphs, CTAs, button click handlers, or headings can reside in the Three.js/WebGL canvas context.
2.  **No Canvas Blocking:** The WebGL Canvas must use `pointer-events: none` unless explicit user-controlled interactive rotation (e.g. in the Demo Command Room or Case Studies Constellation) is active. Even then, click boundaries must not block underlying HTML elements.
3.  **Reduced Motion Fallbacks:** When `prefers-reduced-motion: reduce` is active, the WebGL Canvas is bypassed entirely, and standard static layouts are rendered.
4.  **Edge Runtime & SEO:** Dynamic OpenGraph routes (`/opengraph-image`) must remain unaffected by WebGL code. Static page output must retain identical HTML strings for search engines.
