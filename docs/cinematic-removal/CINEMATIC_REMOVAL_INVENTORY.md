# CINEMATIC EXPERIENCE REMOVAL INVENTORY

## 1. Inventory of Removed Cinematic Artifacts

| Artifact Path / Identifier | Type | Description / Purpose | Used by Classic? | Action Taken |
|---|---|---|---|---|
| `src/app/cinematic/page.tsx` | Route | Old `/cinematic` route rendering `CinematicShell` | No | Replaced with permanent 308 redirect to `/` |
| `src/app/classic/page.tsx` | Route | Old `/classic` route rendering Classic homepage copy | No | Replaced with permanent 308 redirect to `/` |
| `src/cinematic/` | Components Directory | Entire cinematic system (`CinematicEntry`, `CinematicShell`, `QualitySliceContainer`, `ScrollWorldContainer`, `FullIntegrationQualitySlice`, `NarrativeQualitySlice`, `ContentParityReferenceSection`, etc.) | No | Deleted directory entirely |
| `src/components/cinematic/` | Components Directory | `CinematicClientShell`, `CinematicProvider`, `PreviewExperienceChooser`, `CinematicEntrance`, etc. | No | Deleted directory entirely |
| `src/components/cinematic-3d/` | Components Directory | `Cinematic3DCanvas`, `Cinematic3DProvider`, `NexusOperatingField`, `SceneQualityController`, etc. | No | Deleted directory entirely |
| `src/lib/cinematic-3d/` | Library Directory | `config.ts`, `quality.ts`, `types.ts` for 3D cinematic experiment | No | Deleted directory entirely |
| `src/lib/site-mode.ts` | Utility File | Query & cookie mode resolver (`NEXUS_SITE_MODE`) | No | Deleted file entirely |
| `src/app/layout.tsx` | Root Layout | `<CinematicClientShell>` wrapper | No | Removed wrapper |
| `src/app/page.tsx` | Root Route | Site mode branching & `PreviewExperienceChooser` render logic | No | Replaced with direct rendering of Classic homepage |
| `next.config.ts` | Framework Config | Redirect configuration | N/A | Added permanent 308 redirects for `/cinematic` and `/classic` to `/` |
| `gsap`, `@gsap/react` | Dependencies | Animation library used exclusively for cinematic timelines | No | Removed from `package.json` |
| `@splinetool/*`, `@theatre/*` | Dependencies | Unused 3D cinematic tools | No | Removed from `package.json` |
