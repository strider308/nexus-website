# 21st.dev Component Inspiration Map

This document tracks selected interaction patterns from 21st.dev and explains how they are adapted for the Nexus website.

## 1. Interaction Patterns & Adaptation Plan

### A. Container Scroll Animation
*   **Reference Name:** `container-scroll-animation` (Scroll-driven perspective card tilt)
*   **Interaction Idea:** A 3D-perspective mockup of an interface that rotates and levels flat (scale 1.0, rotateX 0) as the user scrolls into the viewport.
*   **Where it helps Nexus:** Case study hero headers. Visualizes the main system interface console entering from an editorial perspective and settling in as the user reads.
*   **What must be changed:** No literal laptop frame; we use our minimalist `InterfaceFrame` SVG directly. Tilt should be restrained (rotateX: 4 to 7 degrees, scale: 0.9 to 1.0) with clean shadows.
*   **Accessibility & Performance:** Disable the rotation on mobile; hook it to `prefers-reduced-motion` logic. Use GSAP instead of state updates on scroll.

### B. Scroll Media Expansion
*   **Reference Name:** `scroll-media-expansion` (Hero mock expansion)
*   **Interaction Idea:** An image or canvas container starts at 60-70% width and grows to 100% full-width on scroll.
*   **Where it helps Nexus:** The portfolio `/work` index hero visual. Expands from a framed layout to a full-bleed interface grid.
*   **What must be changed:** Must not wrap video; works with SVG compositions. Keep it subtle and transition border-radius cleanly.

### C. Display Cards Stack
*   **Reference Name:** `display-cards-stack` (Overlapping cards)
*   **Interaction Idea:** A stack of overlapping cards that fan out or shift focus on click or scroll.
*   **Where it helps Nexus:** The supporting systems section at the bottom of `/work` index. Converts the four cards (Aarogya, SecureScan, SafeDate, BuildPublic) into a clean, interactive overlapping card stack.
*   **What must be changed:** Keyboard accessible; tab focus raises the card. Simple vertical flow on mobile. No high rotation angles.

### D. Process Timeline / Radial Stepper
*   **Reference Name:** `radial-orbital-timeline` (Horizontal workflow)
*   **Interaction Idea:** A stepped workflow path where the current stage is highlighted while other stages remain in the background.
*   **Where it helps Nexus:** `WorkflowJourney` component. Connects workflow stages using animated SVG path drawing.
*   **What must be changed:** Group stages into phases to avoid overcrowding. Render as a simple vertical accordion on mobile.

### E. Feature Carousel
*   **Reference Name:** `feature-carousel` (Tabs with center active slide)
*   **Interaction Idea:** A slide deck where active frames scale up and inactive slides fade/sink back.
*   **Where it helps Nexus:** `InterfaceGallery` component, supporting categories tabs and scrollable screenshots.
*   **What must be changed:** No image distortion. Use shadcn `Carousel` and `Tabs` with GSAP animations for spatial transitions.

---

## 2. General Implementation Guidelines
*   **No custom cursor libraries:** Banned to prevent performance jank.
*   **No scroll hijacking:** All scroll triggers must hook into native scroll mechanics.
*   **Rebuild, do not paste:** Implement these patterns directly with standard Tailwind classes and GSAP timelines.
