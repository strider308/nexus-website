# NEXUS SCROLL-WORLD REDESIGN — PERFORMANCE BUDGET & MEDIA OPTIMIZATION

## 1. Core Target Metrics & Budgets

| Metric | Target / Cap | Strategy |
|---|---|---|
| **Initial JS Bundle** | `< 180 KB` gzipped | Code-split GSAP & Three.js dynamically; load scroll scrubber only when site-mode is cinematic. |
| **Initial LCP Asset** | `< 80 KB` | Preload lightweight WebP poster (`/media/scene-1-poster.webp`). |
| **Per-Scene Video Segment** | `< 2.5 MB` per scene clip | Highly compressed H.264/MP4 and WebM formats at 1080p 30fps. |
| **Total Media Preload** | `0 MB` (Zero initial batch preload) | Load video segments lazily when user approaches within 1 scene (100vh threshold). |
| **Active Video Decoders** | `Max 1 active decoder` | Unload / pause non-visible video elements when scrolled out of viewport. |
| **Decoded GPU Memory** | `< 120 MB` | Clean up object URLs and detached canvas contexts. |

---

## 2. Capability Tiers

* **Tier A (High Performance Desktop)**: Full 1080p video scrub sequence with GSAP timeline pinning.
* **Tier B (Mobile / Mid-range Device)**: 720p 9:16 portrait video scrub sequence.
* **Tier C (Low Memory / Battery Saver / Data Saver)**: High-resolution static WebP poster cards + CSS micro-animations.
