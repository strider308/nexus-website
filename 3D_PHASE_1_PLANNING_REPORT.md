# 3D Phase 1 Planning Report — Nexus Website

This report details the planning documents created, risks assessed, and recommendations for Phase 1 of the Nexus 3D cinematic website experiment.

---

## 1. Planning Documents Created

The following research and planning documents have been established in the project root:

*   [INFORMATION_PRESERVATION_MATRIX.md](file:///C:/dev/website/INFORMATION_PRESERVATION_MATRIX.md) — Audits every route (`/`, `/services`, `/case-studies`, `/demo`, `/resources`, `/privacy-policy`, `/terms-of-service`) to map and protect indexable content, disclaimers, links, and headings.
*   [NEXUS_3D_STORYBOARD.md](file:///C:/dev/website/NEXUS_3D_STORYBOARD.md) — Blueprints the 7 cinematic chapters (Hero, Problem, Transformation, Services, Proof, Demo, Final CTA) with matching HTML elements, camera movement models, scroll paths, and mobile fallbacks.
*   [3D_CINEMATIC_TECHNICAL_ARCHITECTURE.md](file:///C:/dev/website/3D_CINEMATIC_TECHNICAL_ARCHITECTURE.md) — Details directory file layout, dynamic loading strategy, WebGL context loss recovery plans, and accessibility bounds.
*   [3D_PERFORMANCE_BUDGET.md](file:///C:/dev/website/3D_PERFORMANCE_BUDGET.md) — Sets performance targets (Lighthouse, LCP, CLS, TBT), JavaScript bundle caps, and automated stop/reversion parameters.

---

## 2. Technical & Performance Risks Assessed

*   **Largest Contentful Paint (LCP) Overhead (High Risk):** Instantiating a 3D R3F Canvas in the Hero section could block browser main thread or increase First Contentful Paint.
    *   *Mitigation:* The Canvas component will be loaded via dynamic imports (`ssr: false`) and will only mount on desktop if the user doesn't prefer reduced motion. A static 2D vector fallback will render immediately.
*   **Touch Device Lag (Medium Risk):** Mobile and low-end tablet GPUs can stutter heavily during WebGL rendering, degrading mobile conversion rates.
    *   *Mitigation:* Mobile screen widths (`width < 768px`) will bypass WebGL completely and render standard HTML and static 2D vector files.
*   **Search Engine Optimization (SEO) & Indexability (Critical Risk):** Rendering core titles or lists inside a Canvas scene hides them from indexation engines.
    *   *Mitigation:* The WebGL Canvas is placed in a background layer with `pointer-events: none` and `aria-hidden="true"`. All copy stays in standard semantic HTML/DOM layout.
*   **Transparency Blending (Medium Risk):** In the Services "Blueprint Stack" chapter, rendering multiple overlapping semi-transparent glass planes can lead to WebGL depth sorting glitches.
    *   *Mitigation:* Optimize plane rendering layers and material settings, and fallback to CSS grid layouts if depth sorting jitters.

---

## 3. Core Recommendations

1.  **Keep 3D Master Flag OFF by Default:** Do not change environment values in production until a full preview QA cycles.
2.  **Enforce Strict Lazy Loading:** Package Three.js, R3F, and Drei into a separate chunk so that page loads for `/services`, `/resources`, and general static views are unaffected.
3.  **Use CSS 3D Transforms Where WebGL is overkill:** For card tilts (like `SystemCard3D.tsx`), use standard CSS perspective matrix transformations rather than rendering canvas instances.

---

## 4. Final Verdict

**Proceed to hero 3D prototype**
