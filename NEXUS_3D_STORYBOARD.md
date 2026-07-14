# Nexus 3D Storyboard — 7 Cinematic Chapters

This storyboard details the cinematic chapters for the proposed 3D website experiment. It specifies the matching HTML section, visual metaphors, camera actions, fallback protocols, and implementation priority.

---

## Chapter 1: Hero — Operating Field

*   **Purpose:** Establish the studio's operational theme and capture user attention with a clean, low-overhead visual.
*   **Matching Existing Section:** `Hero.tsx` (`#hero`)
*   **3D Metaphor:** A semi-abstract "operating field" where input streams (lines/nodes) converge into a central glowing system core (Nexus).
*   **3D Objects:** A central pulsating sphere (Nexus Core), 5 input node lanes on the left (representing Chats, Sheets, Tasks, Calls, Billing), 3 output target lanes on the right (Custom Software, Automation, Visibility), and connecting vector lines.
*   **Camera Behavior:** Parallax camera panning tied to the desktop pointer movements. Smooth, subtle rotations.
*   **Scroll Behavior:** The camera slowly zooms into the central Nexus core as the user scrolls down, transitioning the scene out.
*   **Fallback Behavior:** Static 2D vector graphic (`ThreeFallback.tsx`) representation of the same network node structure.
*   **Reduced-Motion Behavior:** Disable pointer-driven parallax and core pulse animation. Camera static.
*   **Mobile Behavior:** Hide the WebGL Canvas completely. Render the 2D SVG vector layout to preserve LCP and memory.
*   **Performance Risk:** High (LCP element area). Must be dynamically imported with `ssr: false` and render a lightweight mesh immediately.
*   **Implementation Priority:** **Build Now (Prototype Phase).**

---

## Chapter 2: Problem — Fragmented Workflow

*   **Purpose:** Visualize operational chaos (unconnected folders, pings, manual spreadsheets) before structured software resolves it.
*   **Matching Existing Section:** `ProblemSection.tsx` (`#problem`)
*   **3D Metaphor:** A fragmented grid or constellation of disjointed elements floating in disorder, which dynamically align when the user toggles the "Before/After" slider.
*   **3D Objects:** Flying spreadsheet grid fragments, mail envelop icons, chat bubbles, and disconnected lines floating in 3D space.
*   **Camera Behavior:** Slightly off-axis, shaking or rotating subtly to indicate instability in the "Before" state; settling to a clean orthographic grid lock in the "After" state.
*   **Scroll Behavior:** Scrolled-into-view triggers a slow orbit; the scroll position controls the alignment index of the objects if the slider is not manually dragged.
*   **Fallback Behavior:** Side-by-side static HTML/CSS comparison panels.
*   **Reduced-Motion Behavior:** Disable shaking effects and object transitions. Render the aligned "After" state statically.
*   **Mobile Behavior:** Render standard HTML before/after toggle without WebGL.
*   **Performance Risk:** Medium. Spawning too many independent floating meshes could cause draw call overhead. Must merge geometries.
*   **Implementation Priority:** **Build Later.**

---

## Chapter 3: Transformation — Mapping Layer

*   **Purpose:** Demonstrate the scoping and ingestion process where manual team tasks are translated into clean database schemas.
*   **Matching Existing Section:** `ProofStrip.tsx` or transition leading to Services.
*   **3D Metaphor:** A grid overlay scan line (laser grid) sweep across the fragmented workflow pieces, converting them into structured cubical blocks.
*   **3D Objects:** A horizontal neon grid line sweeping downwards; wireframe cubes transforming into solid, labeled blocks.
*   **Camera Behavior:** Lateral pan tracking the laser sweep down.
*   **Scroll Behavior:** Camera sweeps down in sync with the user's scroll.
*   **Fallback Behavior:** Standard CSS transition on static icons.
*   **Reduced-Motion Behavior:** Remove grid sweep animation and scaling transitions.
*   **Mobile Behavior:** Fallback to CSS transitions.
*   **Performance Risk:** Low. Basic mesh scaling and material opacity shaders.
*   **Implementation Priority:** **Build Later.**

---

## Chapter 4: Services — Blueprint Stack

*   **Purpose:** Render the studio's technical capabilities as a layered architectural blueprint.
*   **Matching Existing Section:** `ServicesSection.tsx` (`#services-brochure`)
*   **3D Metaphor:** A stacked blueprint stack where each layer represents a service block (Custom Workflow, Automations, Dashboards).
*   **3D Objects:** Transparent blue neon plane layers, stacked vertically, with wireframe outlines and technical callouts.
*   **Camera Behavior:** The camera sits at an isometric angle, looking down the stack. As the user hovers over individual service cards in the HTML, the matching 3D blueprint plane glows and moves slightly upwards.
*   **Scroll Behavior:** The blueprint layers spread out vertically on scroll down (parallax stack reveal).
*   **Fallback Behavior:** A CSS-staggered static flex layout of technical diagrams.
*   **Reduced-Motion Behavior:** Disable plane elevation, spreading parallax, and glowing pulses.
*   **Mobile Behavior:** Bypassed; standard vertical CSS grid.
*   **Performance Risk:** Medium. Transparency rendering in WebGL can cause blending issues and performance drops. Must optimize materials.
*   **Implementation Priority:** **Build Later.**

---

## Chapter 5: Proof — Seven Systems

*   **Purpose:** Interlink and explore the seven shipped proof systems of Nexus.
*   **Matching Existing Section:** `CaseStudiesSection.tsx` (`#case-studies`)
*   **3D Metaphor:** A galaxy constellation of seven primary stellar nodes, each representing a shipped project (ClinicOS, Aarogya, etc.).
*   **3D Objects:** 7 glowing star/planet meshes with orbital path lines (`ProofConstellation` and `ProofOrbitScene`).
*   **Camera Behavior:** The camera flies to center-focus on the active node when a case study card is selected or hovered in HTML.
*   **Scroll Behavior:** Standard scroll moves the constellation laterally across the background.
*   **Fallback Behavior:** Static SVG grid diagram of the seven project spheres.
*   **Reduced-Motion Behavior:** Disable camera fly-to paths and orbit rotations. Instant opacity crossfades instead.
*   **Mobile Behavior:** Canvas hidden. Render CSS tabs.
*   **Performance Risk:** Medium-High. Multiple overlapping orbital spline paths and glowing point lights.
*   **Implementation Priority:** **Build Now (Already partially drafted in previous case-study work; needs polish).**

---

## Chapter 6: Demo — Command Room

*   **Purpose:** Create a dashboard control panel visualizer for the demo library.
*   **Matching Existing Section:** `DemoPage` (`src/app/demo/page.tsx`)
*   **3D Metaphor:** An interactive "command room" or terminal viewport showing a rotating system topology.
*   **3D Objects:** A high-tech wireframe globe or topology mesh rotating in the center of the viewport, reacting to active demo states.
*   **Camera Behavior:** Continuous slow orbital rotation around the topology core. User can click and drag to rotate it.
*   **Scroll Behavior:** None (the demo section is a static screen height area).
*   **Fallback Behavior:** A static CSS wireframe mockup fallback.
*   **Reduced-Motion Behavior:** Disable auto-rotation. Drag-to-rotate remains active but damped.
*   **Mobile Behavior:** Canvas bypassed entirely. Show 2D mockup views.
*   **Performance Risk:** Medium. Line rendering in Three.js (especially wide lines) can be heavy. Use standard buffer geometry lines.
*   **Implementation Priority:** **Build Now (Partially drafted in DemoLibraryScene; needs optimization).**

---

## Chapter 7: Final CTA — System Ready

*   **Purpose:** Create a clean, operational close to the scrolling experience.
*   **Matching Existing Section:** `FinalCTA.tsx` (`#contact`)
*   **3D Metaphor:** The network stream lines from Chapter 1 converge back to a single flat line, turning into a solid, stable foundation bar under the scoping CTA.
*   **3D Objects:** Flat grid plane aligning with the border-top of the final CTA block.
*   **Camera Behavior:** Direct frontal orthographic lock.
*   **Scroll Behavior:** Camera locks as the element is pinned.
*   **Fallback Behavior:** Standard border-t divider lines.
*   **Reduced-Motion Behavior:** Static plane.
*   **Mobile Behavior:** Fallback to CSS border.
*   **Performance Risk:** Very Low.
*   **Implementation Priority:** **Build Later.**
