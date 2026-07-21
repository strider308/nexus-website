# NEXUS SCROLL-WORLD REDESIGN — ACCESSIBILITY & INCLUSION SPECIFICATION

## 1. Non-Negotiable Accessibility Standards

This redesign adheres to WCAG 2.1 Level AA accessibility criteria:

1. **Semantic HTML Structure**: Every scene overlay uses standard HTML `<section>`, `<h1>`-`<h6>`, `<p>`, `<button>`, `<form>`, and `<a>` elements.
2. **Screen Reader Live Regions**: Chapter transitions announce scene changes via `aria-live="polite"` region.
3. **Keyboard Focus & Trapping**: Focusable elements (CTAs, tabs, form inputs) retain visible focus rings (`ring-2 ring-[#DEDBC8] ring-offset-2 ring-offset-black`). Pinned scroll overlays do NOT trap focus unexpectedly.
4. **Skip Links**: The top-level skip link (`<a href="#main-content">Skip to main content</a>`) is preserved in `src/app/layout.tsx`.

---

## 2. Reduced Motion Strategy (`@media (prefers-reduced-motion: reduce)`)

When `@media (prefers-reduced-motion: reduce)` is detected or the user clicks the manual "Pause Motion" control:

* **Video Scrubbing**: Completely disabled. Video decoders are detached.
* **Scroll Pinning**: Unpinned. Pages render in standard vertical block layout.
* **Visual Presentation**: High-contrast, static poster images (`/media/scene-X-static.webp`) render behind overlay text cards.
* **Zero Information Loss**: 100% of headings, content, metrics, case studies, engagement models, and form inputs remain fully visible and readable.

---

## 3. Manual Motion Control UI

A persistent floating button (`[ Pause Motion ]` / `[ Enable Motion ]`) is rendered in the fixed control bar:
* Allows users to manually force reduced-motion mode at any time.
* Persists preference in `localStorage` under key `nexus_motion_preference`.
* **OS Preference Rule**: Never overrides an OS request for reduced motion without explicit user toggle.
