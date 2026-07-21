# DEPENDENCY CLEANUP AUDIT

## 1. Removed Dependencies (Exclusively Used by Cinematic)

* `gsap` (^3.15.0) — Removed. (No Classic component imports GSAP).
* `@gsap/react` (^2.1.2) — Removed.
* `@splinetool/react-spline` (^4.1.0) — Removed.
* `@splinetool/runtime` (^1.12.98) — Removed.
* `@theatre/core` (^0.5.1) — Removed.
* `@theatre/r3f` (^0.5.1) — Removed.
* `@theatre/studio` (^0.5.1) — Removed.

---

## 2. Retained Dependencies (Required by Classic Website)

* `three` (^0.185.1) — Retained. (Required by Classic 3D canvas components: `NexusSystemScene`, `ProofOrbitScene`, `ProofConstellation`, `DemoLibraryScene`, `SystemCard3D`, `SectionMinimap`).
* `@react-three/fiber` (^9.6.1) — Retained. (Required by Classic 3D canvas components).
* `@react-three/drei` (^10.7.7) — Retained. (Required by Classic 3D canvas components).
* `@react-three/postprocessing` & `postprocessing` — Retained. (Required by Classic 3D canvas postprocessing).
* `motion` (^12.42.2) — Retained. (Required by Classic Framer Motion components).
* `lucide-react` — Retained. (Required by Classic UI components).
