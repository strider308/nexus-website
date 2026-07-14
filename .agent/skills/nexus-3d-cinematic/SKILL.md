---
name: nexus-3d-cinematic
description: Convert Nexus website sections into cinematic 3D experiences.
---

# Nexus 3D Cinematic Skill

Use this skill when converting Nexus website sections into cinematic 3D experiences.

Core principles:

* Do not replace the website with a canvas.
* Add a 3D cinematic layer that supports existing content.
* All headings, paragraphs, CTAs, proof claims, links, and disclaimers must remain in HTML.
* Never put important text only inside WebGL.
* Every 3D chapter must map to an existing page section.
* Canvas must be decorative or explanatory, never the only source of meaning.
* Preserve SEO, accessibility, reduced motion, route reliability, and performance.
* Use feature flags and rollback paths.
* Default 3D cinematic flag must be off until preview QA passes.

Nexus 3D chapters:

1. Hero — Operating Field
2. Problem — Fragmented Workflow
3. Transformation — Mapping Layer
4. Services — Blueprint Stack
5. Proof — Seven Systems
6. Demo — Command Room
7. Final CTA — System Ready

Hard restrictions:

* No random floating objects.
* No 3D just for decoration.
* No scroll hijacking.
* No sound.
* No fake loading screens.
* No SEO-critical content in canvas.
* No production deploy before preview QA.
