# GSAP & Shadcn & 21st.dev Baseline Audit

This document establishes the technical audit baseline for the Nexus website refinement as of July 15, 2026.

## 1. Installed shadcn Components
From running `npx shadcn@latest info`, the following components are currently installed:
*   `accordion` (`src/components/ui/accordion.tsx`)
*   `button` (`src/components/ui/button.tsx`)
*   `sheet` (`src/components/ui/sheet.tsx`)

## 2. Raw Controls to Become Primitives
The following raw HTML forms and buttons should be replaced with shadcn components:
*   **Contact Form Inputs:** In `src/app/contact/page.tsx`, text fields and submit buttons are styled using raw classes. They will transition to shadcn `Field`, `Label`, `Input`, `Textarea`, and `Button` primitives.
*   **Services Lists & Tabs:** The engagement selector in `src/app/services/page.tsx` and custom lists should become modular `Tabs` and `Accordion` primitives.
*   **Case Study Accordions / Tabs:** Rebuilt detailed timelines and galleries should use shadcn `Carousel`, `Tabs`, and `Accordion` for accessibility and keyboard compliance.

## 3. Current GSAP and Motion Use
*   **GSAP:** Used inside `src/components/cinematic/ScrollDirector.tsx` for registering a global `ScrollTrigger` that calculates scroll progress and reports chapter updates. There are no other custom GSAP tweens or animations; the core UI remains driven by standard motion libraries.
*   **Motion:** Used extensively throughout components for entrance animations (`initial`, `animate` blocks), hover states, active transitions, and text opacity reveals.

## 4. Repeated Visual Patterns & Borders
*   **Border-T Separators:** Most layout sections use raw border-t lines (`border-t border-[#dedbc8]/10`) as separation dividers, causing a technical-documentation grid aesthetic.
*   **Repeated Grids:** Consistent two-column layouts are used on case study sub-pages.
*   **High-Contrast Background Boxes:** Many blocks (e.g. `bg-[#0d0d0d]` with `border-[#dedbc8]/10`) create a generic boxy appearance.
*   **Small Typography:** Overuse of tiny metadata uppercase tags (`text-[9px]` or `text-[10px]`) that reduce readability on small viewports.

## 5. Client-Component Boundaries
*   Dynamic pages `/work/[slug]` are server-rendered static templates that import a client leaf component (`CaseStudyClient.tsx`) for interactive tabs and accordions. This architecture is clean and preserves SEO advantages.
*   The homepage chapter sections scroll naturally over the persistent WebGL canvas.
