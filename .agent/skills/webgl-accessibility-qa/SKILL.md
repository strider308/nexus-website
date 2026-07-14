---
name: webgl-accessibility-qa
description: Audit WebGL, Three.js, React Three Fiber, Spline, or canvas-based section accessibility.
---

# WebGL Accessibility QA Skill

Use this skill when auditing any WebGL, Three.js, React Three Fiber, Spline, or canvas-based section.

Checklist:

* Does all important content exist outside canvas?
* Are headings and CTAs normal HTML?
* Are links normal HTML?
* Does the experience work with WebGL disabled?
* Does reduced-motion disable camera movement and continuous animation?
* Is decorative canvas aria-hidden?
* Does canvas avoid blocking pointer events?
* Are keyboard users able to navigate all content?
* Is focus visible?
* Is there a static fallback?
* Is mobile performance acceptable?
* Are canvas labels duplicated in HTML if meaningful?
* Are screen readers protected from decorative visual noise?
* Are there no console errors?
* Are there no hydration mismatches?
* Does SEO still see all information?

Failure condition:
If the page loses meaning without WebGL, the implementation fails.
