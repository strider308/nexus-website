# NEXUS SCROLL-WORLD REDESIGN — ARCHITECTURE MAP

## 1. Existing System Architecture

```
src/
├── app/
│   ├── layout.tsx                # Root Server Layout (Fonts, Metadata, JSON-LD Schema)
│   ├── page.tsx                  # Root Homepage (Static export, lists 12 section components)
│   ├── case-studies/page.tsx     # Case studies detailed breakdown
│   ├── services/page.tsx         # Comprehensive service brochure
│   ├── demo/page.tsx             # Interactive demo request intake
│   ├── privacy-policy/page.tsx   # Legal privacy terms
│   └── terms-of-service/page.tsx # Legal terms
├── components/
│   ├── sections/                 # 12 Primary content section components
│   ├── site/                     # Header, Footer, FloatingNav, LayoutExtras
│   ├── cinematic/                # Cinematic shell wrappers
│   └── ui/                       # Base UI / Shadcn design system elements
└── lib/
    └── content/nexus.ts          # Centralized authoritative copy and metadata
```

---

## 2. Proposed Dual-Engine Architecture (`classic` vs `cinematic`)

```
NEXT_PUBLIC_NEXUS_SITE_MODE = "classic" | "cinematic" (Default: "classic")
```

```
                             ┌─────────────────────────────────┐
                             │        src/app/layout.tsx       │
                             │ (JSON-LD, Meta, Root Server)    │
                             └────────────────┬────────────────┘
                                              │
                                              ▼
                             ┌─────────────────────────────────┐
                             │ src/components/cinematic/      │
                             │    CinematicClientShell         │
                             └────────────────┬────────────────┘
                                              │
                    ┌─────────────────────────┴─────────────────────────┐
                    │                                                   │
         Mode = "classic" (Default)                           Mode = "cinematic"
                    │                                                   │
                    ▼                                                   ▼
       ┌─────────────────────────┐                         ┌─────────────────────────┐
       │   Classic Engine        │                         │  Cinematic Scroll Engine│
       │  (src/app/page.tsx)     │                         │ (src/cinematic/...)     │
       │                         │                         │                         │
       │ - Standard Sections     │                         │ - GSAP ScrollTrigger    │
       │ - Static Layout         │                         │ - 3D Diorama Scenes     │
       │ - Direct DOM Access     │                         │ - Scrubbed Video Frames │
       │ - Zero Media Overhead   │                         │ - Accessible Fallbacks │
       └─────────────────────────┘                         └─────────────────────────┘
                    ▲                                                   ▲
                    │                                                   │
                    └─────────────────────────┬─────────────────────────┘
                                              │
                                              ▼
                             ┌─────────────────────────────────┐
                             │       /classic Route            │
                             │ (Hard landing fallback route)   │
                             └─────────────────────────────────┘
```

---

## 3. Component File Map & Isolation Scope

### A. Files Intentionally NOT Touched
* `src/lib/content/nexus.ts` (Authoritative copy remains single source of truth)
* `src/app/privacy-policy/page.tsx`
* `src/app/terms-of-service/page.tsx`
* `src/app/sitemap.ts` & `src/app/robots.ts`

### B. Files to be Extended
* `src/app/layout.tsx` (Add feature-flag query/cookie parser check, preserving JSON-LD)
* `src/app/page.tsx` (Add site-mode condition: render Classic or Cinematic container)
* `src/components/cinematic/CinematicClientShell.tsx` (Wrap context providers for site mode)

### C. New Components to be Introduced
* `src/app/classic/page.tsx` (Dedicated route rendering the untouched legacy layout)
* `src/cinematic/config/sceneManifest.ts` (Typed schema declaring all 7 cinematic scenes)
* `src/cinematic/components/ScrollWorldContainer.tsx` (GSAP ScrollTrigger scrubber wrapper)
* `src/cinematic/components/SceneOverlay.tsx` (Accessible content overlays)
* `src/cinematic/components/ReducedMotionFallback.tsx` (Static card view for reduced motion)

---

## 4. Rollback Path
If any issue occurs, setting `NEXT_PUBLIC_NEXUS_SITE_MODE=classic` immediately forces the application to render the untouched legacy website. Navigating to `/classic` provides an instant hardware-isolated view of the original site.
