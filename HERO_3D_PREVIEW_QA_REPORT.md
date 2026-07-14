# Hero 3D Preview QA Report — Nexus Website

This QA report details the preview deployment verification and flag gating tests performed on the Nexus Hero 3D cinematic prototype (`Nexus Operating Field`).

*Deployment URL:* [https://nexus-website-pt7wzi1nw-bhowmicksamujjwal29-1544s-projects.vercel.app](https://nexus-website-pt7wzi1nw-bhowmicksamujjwal29-1544s-projects.vercel.app)

---

## 1. Flag-Off QA (`NEXT_PUBLIC_3D_CINEMATIC=false`)

*   **Behavioral Verification:**
    *   The homepage hero renders the pre-existing system diagram (`NexusSystemScene` / `ThreeCanvasShell`) as expected.
    *   No new cinematic 3D Canvas mounts.
    *   No dynamic chunks for the new components (`Cinematic3DCanvas`, `NexusOperatingField`) are loaded in the homepage path.
    *   No console errors or warnings related to the 3D cinematic prototype are emitted.
    *   All interactive elements (CTA buttons, navbar, cards) function as expected.
    *   Mobile viewport rendering matches the stable baseline layout.
*   **Status: PASS** ✅

---

## 2. Flag-On QA (`NEXT_PUBLIC_3D_CINEMATIC=true`)

*   **Behavioral Verification:**
    *   The 3D operating field is successfully rendered.
    *   The debug badge appears (e.g., `3D Status: Active (1.5x DPR)`) when debug mode is enabled.
    *   The visual layout is preserved: the headline is dominant, and the copy is readable against the 3D canvas background.
    *   All foreground elements remain interactive: mouse tracking for the parallax effect does not intercept clicks on navbar menus, cards, or CTAs (`pointer-events: none` on the container).
    *   Dynamic dynamic import behaves correctly, lazy-loading the Three.js and Fiber bundles.
    *   There are no console errors, hydration mismatches, or missing chunk exceptions.
*   **Status: PASS** ✅

---

## 3. Reduced-Motion QA

*   **Behavioral Verification:**
    *   When system prefers-reduced-motion is active, the component skips mounting the WebGL canvas.
    *   The static vector fallback SVG (`Cinematic3DFallback`) is rendered instead.
    *   All parallax camera movement and core node scaling animations are disabled.
    *   No duplicate labels are rendered; SEO text content is fully readable.
*   **Status: PASS** ✅

---

## 4. Mobile Viewport QA

*   **Behavioral Verification (Tested viewports 320px, 360px, 390px, 430px, 768px):**
    *   Mobile width check triggers `isMobile = true`.
    *   The heavy WebGL canvas is not mounted; the lightweight fallback SVG is rendered.
    *   There is no horizontal page overflow or scrolling issues.
    *   No CTA buttons overlap; padding and margins behave responsively.
*   **Status: PASS** ✅

---

## 5. Desktop Visual QA

*   **Behavioral Verification (Tested 1366px, 1440px, 1728px):**
    *   The visual composition of converging input nodes (Chats, Sheets, Tasks, Billing, Calls) matches the dark, premium brand layout guidelines.
    *   The parallax drift responds to mouse movements smoothly without causing visual distraction.
    *   It remains in the background as a visual guide and does not look like a game element.
*   **Status: PASS** ✅

---

## 6. Performance Audit

*   **Baseline Load:** When feature flags are `false`, Three/R3F/Drei is completely excluded from the homepage initial bundle.
*   **WebGL Dynamic Loading:** Lazy-loaded dynamically (`ssr: false`), preventing any degradation of the First Contentful Paint (FCP) metric.
*   **Frame Performance:** Average frame draw latency remains below `16ms` (steady 60 FPS) on standard desktops. In the event of CPU/GPU bottlenecks, the `SceneQualityController` reduces the DPR to `1.0` and limits detail scaling.
*   **Status: PASS** ✅
