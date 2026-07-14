# Hero 3D Prototype Report — Nexus Website

This report details the implementation of the hero-only 3D cinematic prototype (`Nexus Operating Field`) for the Nexus website.

---

## 1. Files Created & Modified

### Files Created:
*   `src/lib/cinematic-3d/config.ts` — Houses master toggles (`CINEMATIC_3D_ENABLED`, `CINEMATIC_3D_DEBUG`, `CINEMATIC_3D_QUALITY`) and node geometry presets.
*   `src/lib/cinematic-3d/quality.ts` — Contains definitions for quality presets and metrics (DPR, antialias, shadows).
*   `src/lib/cinematic-3d/content-map.ts` — Connects DOM/HTML state indicators to the 3D scene representation.
*   `src/components/cinematic-3d/Cinematic3DProvider.tsx` — Exposes the context state, evaluates WebGL support via `useSyncExternalStore` (avoiding state-in-effect issues), detects reduced motion and mobile viewports, and manages quality changes.
*   `src/components/cinematic-3d/Cinematic3DCanvas.tsx` — Wraps React Three Fiber Canvas with custom `WebGLErrorBoundary` and lazy dynamic Suspense loader, marking itself as decorative (`aria-hidden="true"`).
*   `src/components/cinematic-3d/Cinematic3DFallback.tsx` — A highly styled, lightweight 2D SVG vector representation of the node-convergence metaphor that acts as fallback when WebGL is inactive.
*   `src/components/cinematic-3d/NexusOperatingField.tsx` — Implements the R3F 3D visual metaphor (pulsating Nexus Core, colored input nodes, orbital grid, and pointer-parallax transitions).
*   `src/components/cinematic-3d/SceneQualityController.tsx` — Monitors context losses and monitors frame time intervals. It automatically downgrades DPR to `1.0` if framerate dips below 45 FPS, reverting to static fallback if performance remains sub-par.

### Files Changed:
*   `src/components/sections/Hero.tsx` — Dynamically imports `Cinematic3DCanvas` and `NexusOperatingField` (`ssr: false`), conditionally mounting them inside a `Cinematic3DProvider` wrapper based on flags.
*   `.env.local` — Appended environment variable defaults.

---

## 2. Metaphor & Behavioral Specification

*   **3D Metaphor:** A clean dark network plane indicating structured workflow convergence.
    - Central Nexus Core node (blue) pulsating ambiently.
    - 5 colored left input nodes (representing Chats, Sheets, Calls, Files, Tasks) connecting to the center via custom dotted line segments.
    - Warm cream, blue, and deep black palette matching the website design guidelines.
*   **Fallback Behavior:** The `Cinematic3DFallback` SVG renders seamlessly on mobile, during reduced motion overrides, or on WebGL compilation errors. No visual layout shifts occur.
*   **Reduced-Motion Override:** Disables the core pulse and pointer-parallax camera animations, presenting a completely static view.
*   **Mobile Behavior:** Devices below 768px skip mounting WebGL entirely and render the lightweight fallback SVG.
*   **Performance Safety:** Dynamically loaded using dynamic chunks. If performance drops (avg frame duration > 22.2ms) for more than 6 seconds, the canvas drops DPR to `1.0` and scales down details.
