# 3D Cinematic Technical Architecture — Nexus Website

This document specifies the technical architecture, directory layouts, and design patterns for the proposed 3D cinematic layers.

---

## 1. File Structure Blueprint

All code relating to the 3D cinematic experiment must be contained inside these two namespaces to prevent pollution of existing components:

```
src/
├── components/
│   └── cinematic-3d/
│       ├── Cinematic3DProvider.tsx     # Context provider managing active chapter, debug overlays, and quality states
│       ├── Cinematic3DCanvas.tsx       # Core React Three Fiber Canvas shell with error boundaries and DPR manager
│       ├── Cinematic3DFallback.tsx     # Static CSS/SVG 2D fallbacks matching each chapter's visual layout
│       ├── ScrollCameraRig.tsx         # Camera controller responding to page scroll and cursor hover interpolation
│       ├── ChapterObserver.tsx         # IntersectionObserver wrapper tracking current visible HTML section
│       ├── NexusOperatingField.tsx     # Chapter 1 (Hero) R3F scene implementation
│       ├── WorkflowFragmentsScene.tsx  # Chapter 2 (Problem) R3F scene implementation
│       ├── BlueprintStackScene.tsx     # Chapter 4 (Services) R3F scene implementation
│       ├── ProofConstellationScene.tsx # Chapter 5 (Proof) R3F scene implementation
│       ├── DemoCommandRoomScene.tsx    # Chapter 6 (Demo) R3F scene implementation
│       └── SceneQualityController.tsx  # Dynamic performance scaler (FPS tracking, pixel-ratio drop, mesh-cull)
│
└── lib/
    └── cinematic-3d/
        ├── config.ts                   # Environment flags, viewport margins, and quality presets constants
        ├── chapters.ts                 # Map of chapter IDs to matching HTML section IDs
        ├── camera-paths.ts             # Mathematical spline paths for camera coordinates per scroll offset
        ├── quality.ts                  # Logic for checking GPU tier, frame duration latency, and scaling down settings
        └── content-map.ts              # Connective state maps syncing HTML hover indices with 3D object highlights
```

---

## 2. Behavioral Constraints & Gating

### A. Feature Flag Behavior
*   The entire `components/cinematic-3d/` module must be gated behind:
    `process.env.NEXT_PUBLIC_3D_CINEMATIC === 'true'`
*   When this flag is `false` or undefined, none of the files inside `src/components/cinematic-3d/` should be imported or executed in the critical path of the website.
*   The page transition overlay (`NEXT_PUBLIC_CINEMATIC_TRANSITIONS`) and the interactive 3D WebGL sections must be independently disableable.

### B. Reduced-Motion Integration
*   The `Cinematic3DProvider` must read the motion configuration:
    `const shouldReduceMotion = useReducedMotion();`
*   If `shouldReduceMotion` is `true`:
    *   Do not mount the `Cinematic3DCanvas` element.
    *   Directly render the matching `Cinematic3DFallback` HTML layout.
    *   All camera movements, panning, and background animations must remain completely static.

### C. Mobile Fallback Policy
*   Mobile viewport dimensions (`width < 768px`) or touch-only input profiles must bypass WebGL rendering entirely to conserve device battery and avoid scroll stutter.
*   The canvas is swapped out in favor of lightweight CSS/SVG fallbacks on mobile.

### D. Dynamic Import & Route Bundle Strategy
*   To keep the homepage First Contentful Paint (FCP) and Largest Contentful Paint (LCP) as low as possible, the `Cinematic3DCanvas` must be dynamically imported using Next.js `next/dynamic` with `ssr: false`:
    ```typescript
    const Cinematic3DCanvas = dynamic(
      () => import('@/components/cinematic-3d/Cinematic3DCanvas').then(mod => mod.Cinematic3DCanvas),
      { ssr: false, loading: () => <Cinematic3DFallback type="hero" /> }
    );
    ```
*   This ensures the main layout bundle size remains unaffected by Three.js, R3F, and Drei during static analysis and initial load.

---

## 3. WebGL Failure & Error Handling

*   **WebGL Error Boundary:** The `Cinematic3DCanvas` must be wrapped in a custom React `ErrorBoundary` specifically designed to catch WebGL context losses or compilation failures.
*   **Context Loss Recovery:** If a `webglcontextlost` event is fired by the browser, the canvas must unmount cleanly and render the static fallback representation, logging the error to diagnostics.
*   **Automatic Degradation:** The `SceneQualityController` will monitor frame times. If the framerate falls below 45 FPS for more than 4 consecutive seconds:
    1.  Lower the Device Pixel Ratio (DPR) cap from `1.5` to `1.0`.
    2.  Disable complex shadows and post-processing filters.
    3.  If performance remains poor, unmount the canvas and revert to the static 2D layout.

---

## 4. Accessibility & SEO Rules

*   **Aria-Hidden Canvas:** The canvas element must be marked `aria-hidden="true"` and `role="presentation"` to hide decorative visual calculations from screen readers.
*   **Semantic DOM Content:** All titles, text, lists, and CTAs must be standard DOM nodes outside the canvas container. The canvas must sit in a `fixed` or `absolute` background layer behind the content.
*   **Standard Focus Traversal:** The canvas must have `pointer-events: none` and not take document focus (`tabindex="-1"`), allowing users to tab normally through the operational HTML sections.
*   **SEO Crawling:** Search crawlers must see the exact same HTML node structure regardless of the 3D experiment flag state. The layout outputs identical text nodes to preserve indexing rankings.

---

## 5. Rollback Strategy

*   **Option 1 (Hotfix):** Disable `NEXT_PUBLIC_3D_CINEMATIC=false` via the hosting dashboard (e.g. Vercel environment flags).
*   **Option 2 (Git Revert):**
    ```bash
    git checkout pre-3d-cinematic-experiment
    ```
*   **Option 3 (File Clean):** Remove `/src/components/cinematic-3d/` and its references inside the app layout.
