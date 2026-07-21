# NEXUS SCROLL-WORLD REDESIGN — SCENE MAP & MEDIA MANIFEST

## Scene Manifest Structure

The scene manifest (`src/cinematic/config/sceneManifest.ts`) controls scene ordering, content mappings, media assets, timing ranges, and fallback strategies.

```typescript
export interface NexusScene {
  id: string;
  slug: string;
  chapterNumber: string;
  chapterTitle: string;
  eyebrow: string;
  title: string;
  summary: string;
  sourceContentIds: string[];
  desktop: {
    videoPoster: string;
    videoMp4?: string;
    videoWebm?: string;
    aspectRatio: number; // 1.777 for 16:9
  };
  mobile: {
    videoPoster: string;
    videoMp4?: string;
    videoWebm?: string;
    aspectRatio: number; // 0.5625 for 9:16
  };
  reducedMotion: {
    posterImage: string;
    altDescription: string;
  };
  timeline: {
    startScrollRatio: number; // e.g. 0.0
    endScrollRatio: number;   // e.g. 0.15
  };
  analyticsEvent: string;
}
```

---

## Master 7-Scene Mapping Table

| Scene ID | Chapter | Slug | Primary Source Content | Desktop Poster | Mobile Poster | Reduced Motion Asset |
|---|---|---|---|---|---|---|
| `scene-1` | 01 | `frontier` | Hero Section, Proof Strip | `/media/scene-1-poster.webp` | `/media/scene-1-poster-m.webp` | `/media/scene-1-static.webp` |
| `scene-2` | 02 | `chaos` | Problem Section | `/media/scene-2-poster.webp` | `/media/scene-2-poster-m.webp` | `/media/scene-2-static.webp` |
| `scene-3` | 03 | `engine` | Services Section | `/media/scene-3-poster.webp` | `/media/scene-3-poster-m.webp` | `/media/scene-3-static.webp` |
| `scene-4` | 04 | `ledger` | Case Studies & Proof Ledger | `/media/scene-4-poster.webp` | `/media/scene-4-poster-m.webp` | `/media/scene-4-static.webp` |
| `scene-5` | 05 | `scale` | Why Nexus Compounds | `/media/scene-5-poster.webp` | `/media/scene-5-poster-m.webp` | `/media/scene-5-static.webp` |
| `scene-6` | 06 | `trust` | Engagement Models, Trust | `/media/scene-6-poster.webp` | `/media/scene-6-poster-m.webp` | `/media/scene-6-static.webp` |
| `scene-7` | 07 | `initiate` | Founder & Final CTA Form | `/media/scene-7-poster.webp` | `/media/scene-7-poster-m.webp` | `/media/scene-7-static.webp` |
