# Hero 3D Decision — Nexus Website

## Final Verdict

**Keep hero 3D prototype**

---

## Rationale

1.  **Strict Performance Safeguards:**
    *   Dynamic imports (`ssr: false`) prevent Three.js/Fiber from bloating the initial homepage bundle when the feature flag is disabled.
    *   `SceneQualityController` monitors average frame execution times and degrades the pixel ratio (DPR) to `1.0` if framerates drop below 45 FPS, keeping the experience smooth.
2.  **Robust Fallback Layering:**
    *   Uses a highly optimized vector SVG fallback (`Cinematic3DFallback`) on mobile viewports, system prefers-reduced-motion triggers, or if WebGL compilation/linking fails.
    *   No layout shifts occur when switching between fallback and canvas render states.
3.  **Clean Code & Architecture:**
    *   Fixed all React DOM warnings (attribute case compliance).
    *   Avoided `setState-in-effect` issues by using `useSyncExternalStore`-backed hooks (`useClientState.ts`) to resolve client checks before execution.
    *   Eslint and build commands run with **0 errors and 0 warnings**.
4.  **Aesthetics & Readability:**
    *   Communicates the central brand message ("chaos to organization") effectively by converging input nodes onto the central core.
    *   The background canvas uses `pointer-events: none`, allowing standard hero copy, headings, and CTA buttons to receive user focus and remain 100% readable.

---

## Action Plan

*   Keep `NEXT_PUBLIC_3D_CINEMATIC=false` as the default in production.
*   Allow internal teams and stakeholders to enable the 3D cinematic layout by toggling the flag `NEXT_PUBLIC_3D_CINEMATIC=true` on preview domains or query strings.
*   Do not extend 3D to any other sections (Problem, Services, Proof) until this hero prototype has undergone real user validation and conversion metric checks on the staging site.
