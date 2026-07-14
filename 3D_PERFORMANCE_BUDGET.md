# 3D Performance Budget — Nexus Website

This document sets the hard performance budgets, Lighthouse goals, and automatic stop/degradation conditions for the Nexus 3D cinematic website experiment.

---

## 1. Hard Performance Budgets

*   **Zero Initial Payload Spike:** The homepage initial text, styling, and basic structures must render immediately. Loading Three.js or R3F libraries in the initial HTTP payload is prohibited.
*   **No SEO Impact:** Crawlers must receive semantic, static HTML copy. No text indexing may rely on WebGL execution.
*   **A11y Gating:** Users with `prefers-reduced-motion: reduce` must bypass WebGL rendering entirely.
*   **Mobile Exclusion:** Devices below `768px` viewport width must render 2D static SVG/HTML components rather than mounting WebGL canvas contexts.
*   **Non-Blocking Inputs:** The background Canvas element must never block click events, selection paths, or focus flows. Use `pointer-events: none` on the canvas background.
*   **Zero Scroll Hijacking:** Custom scroll controls, velocity overrides, or smooth-scroll JS hijacks are strictly prohibited. The native page scrollbar must remain untouched.
*   **No Unapproved Bundle Spikes:** Dynamic chunks must keep Three.js out of the main landing bundle.
*   **Post-Processing Restriction:** No bloom, depth of field, or blur passes may be enabled by default. Performance must be prioritized.
*   **Preview QA Gate:** The 3D cinematic master flag (`NEXT_PUBLIC_3D_CINEMATIC`) must remain `false` in production until preview QA validates it.

---

## 2. Route Size Baseline

*   **Current Total JS Size Baseline:** `2.32 MB` (total uncompressed size of all built chunks in `.next/static/chunks/`).
*   **Initial Homepage Chunk Limit:** `150 KB` gzipped.
*   **Allowed Initial Bundle Increase:** `0 KB` (all 3D components must be dynamically imported with `ssr: false` to keep Three.js out of the initial critical chunk).
*   **GSAP Impact Limit:** GSAP core bundle is `~60 KB` gzipped. It must only load when animation states are active.
*   **Three.js / R3F / Drei Bundle Impact:** These libraries represent `~200 KB` gzipped of total code. They must be packaged in separate lazy-loaded chunks.

---

## 3. Lighthouse & Web Vitals Targets

*   **Desktop Performance Score:** `>= 90/100`
*   **Mobile Performance Score:** `>= 75/100` (rendered via static 2D fallbacks)
*   **Largest Contentful Paint (LCP):** `< 2.5 seconds` on desktop
*   **First Contentful Paint (FCP):** `< 1.2 seconds`
*   **Cumulative Layout Shift (CLS):** `0.0`
*   **Total Blocking Time (TBT):** `< 200 milliseconds`

---

## 4. Automatic Stop & Reversion Conditions

The experiment must be disabled or reverted immediately if any of these conditions are met during preview QA or staging testing:

*   **Hero LCP/FCP Degradation:** If FCP or LCP increases by more than `500ms` compared to the pre-experiment baseline.
*   **Readability Drop:** If the 3D visual backdrop reduces contrast or readability of the text content.
*   **Framerate Jank:** If the WebGL viewport renders below `45 FPS` for more than `4 seconds` on desktop.
*   **Interactivity Lag:** If hover actions, page transitions, or click events stutter (TBT > 300ms).
*   **Indexing Loss:** If auditing tools show that search engine bots fail to index headings or paragraphs.
