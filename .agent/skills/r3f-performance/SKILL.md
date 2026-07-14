---
name: r3f-performance
description: Build or audit React Three Fiber / Three.js components for optimal performance.
---

# React Three Fiber Performance Skill

Use this skill when building or auditing React Three Fiber / Three.js components.

Rules:

* Use React Three Fiber for coded 3D scenes.
* Use Drei only where it reduces complexity.
* Keep important meaning in HTML/SVG, not canvas-only.
* Use dynamic import for heavy 3D components.
* Do not load demo-only 3D on the homepage.
* Do not mount Canvas for reduced-motion users unless static rendering is truly needed.
* Do not mount Canvas on low-end mobile if static fallback is enough.
* Decorative Canvas must be aria-hidden.
* Decorative Canvas must use pointer-events-none.
* Use dpr={[1, 1.5]}.
* Use frameloop="demand" where possible.
* Use frameloop="always" only for meaningful continuous animation.
* Avoid excessive useFrame loops.
* Avoid setState inside useFrame.
* Reuse geometry and materials where practical.
* Avoid expensive shadows and post-processing by default.
* Avoid heavy bloom, blur, particles, and depth effects on mobile.
* Use static HTML/SVG fallback if WebGL fails.
* Profile route-size and runtime impact before production.

Acceptance:

* npm run lint passes.
* npm run build passes.
* no console/WebGL errors.
* no mobile scroll jank.
* no hydration errors.
* flag false returns the current site.
