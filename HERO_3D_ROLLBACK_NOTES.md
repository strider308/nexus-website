# Hero 3D Rollback Notes — Nexus Website

This document outlines the rollback procedures and lists all modifications for the Nexus Hero 3D cinematic prototype.

---

## 1. Instant Reversion (No Redeploy)

To instantly disable the 3D cinematic experiment and return to the pre-experiment stable hero rendering, set or unset the environment variable:

```bash
NEXT_PUBLIC_3D_CINEMATIC=false
```

When this flag is `false`, the website evaluates only the pre-existing fallback and canvas components.

---

## 2. Hard Code Reversion (Git)

To completely discard this experiment branch and return to the main production version:

```bash
# Switch to main
git checkout main

# Discard the local experiment branch
git branch -D experiment/3d-cinematic-website
```

To revert to the pre-prototype checkpoint commit tagged during Phase 0:

```bash
git reset --hard pre-hero-3d-prototype
```

---

## 3. Inventory of Added and Modified Files

### Files Added:
```
src/lib/cinematic-3d/config.ts
src/lib/cinematic-3d/quality.ts
src/lib/cinematic-3d/content-map.ts
src/components/cinematic-3d/Cinematic3DProvider.tsx
src/components/cinematic-3d/Cinematic3DCanvas.tsx
src/components/cinematic-3d/Cinematic3DFallback.tsx
src/components/cinematic-3d/NexusOperatingField.tsx
src/components/cinematic-3d/SceneQualityController.tsx
HERO_3D_PROTOTYPE_REPORT.md
HERO_3D_QA_REPORT.md
HERO_3D_ROLLBACK_NOTES.md
```

### Files Modified:
```
src/components/sections/Hero.tsx
.env.local
```

---

## 4. Operational Risks to Monitor

*   **GPU Battery Drain on Laptops:** If users leave the tab open, continuous `useFrame` pulsing can draw power.
    - *Mitigation:* Ensure `powerPreference` is set to `"low-power"` (applied in `Cinematic3DCanvas.tsx`).
*   **WebGL Context Loss:** If the GPU runs out of memory, the browser may drop the WebGL context.
    - *Mitigation:* The `SceneQualityController` monitors `webglcontextlost` events on the canvas element and immediately switches to `Cinematic3DFallback` to prevent blank spaces.
*   **Dynamic Bundle Bloat:** If any imports of Three/R3F are added to `Hero.tsx` in a non-lazy manner, the homepage LCP will degrade.
    - *Mitigation:* Never import `@react-three` or `three` at the top level of `Hero.tsx`. They must strictly remain encapsulated inside the lazily loaded components.
