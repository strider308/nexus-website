# 3D Cinematic Environment Flags & Rollback Strategy

This document details the configuration, feature flags, and rollback strategy for the Nexus 3D cinematic website experiment.

---

## 1. Feature Flags Specification

To ensure the 3D cinematic experiment is safe, reversible, and does not negatively impact SEO, performance, or accessibility, all cinematic behaviors are governed by the following environment variables:

```bash
# 1. Master switch for 3D cinematic experience layer
NEXT_PUBLIC_3D_CINEMATIC=false

# 2. Toggle for R3F / Drei debug mode (helpers, grid, stats)
NEXT_PUBLIC_3D_CINEMATIC_DEBUG=false

# 3. Canvas quality scaling target ('low', 'medium', 'high', 'auto')
NEXT_PUBLIC_3D_CINEMATIC_QUALITY=auto

# 4. Cinematic entrance overlay and route transitions (already defined)
NEXT_PUBLIC_CINEMATIC_TRANSITIONS=true
```

---

## 2. Hard Architectural Rules

*   **Default State:** `NEXT_PUBLIC_3D_CINEMATIC` must default to `false` in production. The 3D cinematic experiment will only be enabled after a full preview QA pass.
*   **Independent Control:** The page transition animation overlay (`NEXT_PUBLIC_CINEMATIC_TRANSITIONS`) and the interactive 3D WebGL sections (`NEXT_PUBLIC_3D_CINEMATIC`) must be independently toggleable. Disabling 3D must not break page transitions, and vice versa.
*   **A11y/Reduced Motion Override:** If a user prefers reduced motion (detected via browser media query or system settings), all 3D camera transitions, continuous animations, or high-framerated rendering loops must be disabled, bypassing the 3D canvas entirely or presenting the static HTML/SVG fallback.
*   **Rollback Path:** When `NEXT_PUBLIC_3D_CINEMATIC` is set to `false` (or unset), the website must fallback to the exact pre-experiment HTML and CSS representation. No layout shifts or missing copy are permitted.
*   **Information Preservation:** All core content (headings, body text, links, CTAs, case study statistics) must reside in standard, indexable HTML elements. The WebGL canvas is strictly a visual enhancement layer.
