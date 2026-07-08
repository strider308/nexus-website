# Rebuild Execution Plan

This document tracks progress through the migration of the static Nexus reference HTML into a production-ready, interactive Next.js App Router project using TypeScript, Tailwind CSS v4, and Motion for React.

---

## 📅 Timeline & Phases

### Phase 1: Planning and Design Specifications
- [x] Analyze reference file `Nexus_Complete_Reference (2).html`.
- [x] Create Design System specifications (`design-system/MASTER.md`).
- [x] Create Homepage blueprints (`design-system/pages/home.md`).
- [x] Create Rebuild checklist (`design-system/rebuild-plan.md`).

---

### Phase 2: Content Model & Structured Data
- [x] Create `src/lib/content/nexus.ts` to hold all copy, SEO metadata, services specifications, and all seven systems' data.
- [x] Create `src/lib/design-tokens.ts` (Tailwind mappings, theme color utilities, raw variables).
- [x] Verify that no text is hardcoded directly inside components where it can be centralized.

---

### Phase 3: Base Layout & Static Structure
- [x] Configure Tailwind CSS v4 parameters in `src/app/globals.css` (custom colors, fonts, noise textures, and glows).
- [x] Modify `src/app/layout.tsx` to set Next.js App Router metadata, viewport settings, and Google Fonts (`DM_Sans` and `DM_Serif_Display`).
- [x] Implement `src/components/site/SiteHeader.tsx` (Logo, navigation links, crumbs active label, and mobile menu trigger).
- [x] Implement `src/components/site/SiteFooter.tsx` (High-contrast footer, social links, and legal version data).
- [x] Scaffold static section shells in `src/components/sections/`:
  - `Hero.tsx`
  - `ProofStrip.tsx`
  - `ProblemSection.tsx`
  - `ServicesSection.tsx`
  - `CaseStudiesSection.tsx`
  - `FounderSection.tsx`
  - `TrustLimitsSection.tsx`
  - `FinalCTA.tsx`

---

### Phase 4: Interactive States & Motion Layer
- [x] Build `src/components/ui/animated-section.tsx` as a re-usable scroll animation reveal wrapper with `prefers-reduced-motion` support.
- [x] Build `src/components/visuals/NexusNetworkVisual.tsx` (Interactive canvas/SVG representation of the 7 system nodes connected to the central Nexus node, with hover physics).
- [x] Extract and embed the SVG mockups into each of the 7 case studies.
- [x] Implement Case Study navigation tab system (updates active theme and color indicators dynamically).
- [x] Implement scroll progress fill bar and spotlight glow cursors in layout shell.
- [x] Build mobile float navigation bar (`#float-nav`) and hamburger drawer overlay.
- [x] Create disclaimer disclosure accordions.

---

### Phase 5: Design Review & Anti-Slop Audit
- [x] **A11y Audit:** Confirm contrast ratios for button labels, form labels, and focus rings.
- [x] **Rhythm Audit:** Check spacing, top-padding sizes, and vertical margin consistency.
- [x] **Italics Descender Audit:** Inspect lines containing italic text for descender clipping.
- [x] **Reduced Motion Audit:** Confirm that all layouts render immediately and statically when system reduced-motion is requested.
- [x] **Double CTA Check:** Remove redundant text links sharing same intent (e.g. standardizing contact endpoints).

---

### Phase 6: Code Integrity & Compilation
- [x] Run typescript checks and linter.
  ```bash
  npm run lint
  ```
- [x] Run production compiler to verify build output correctness.
  ```bash
  npm run build
  ```
