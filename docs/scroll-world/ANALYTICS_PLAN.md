# NEXUS SCROLL-WORLD REDESIGN — ANALYTICS PLAN & EVENT MAPPING

## 1. Event Tracking Schema (Rybbit & Standard Analytics)

Only non-PII, high-signal interaction events are tracked to measure engagement and conversion funnel health:

| Event Name | Trigger Condition | Properties Recorded | Purpose |
|---|---|---|---|
| `site_mode_loaded` | Page load completion | `mode`: `"classic" \| "cinematic"`, `reducedMotion`: `boolean` | Measure distribution of user modes. |
| `scene_entered` | Scroll threshold crosses scene boundary | `sceneId`: `string`, `chapter`: `string` | Track storytelling engagement depth. |
| `scene_completed` | User scrolls past scene end | `sceneId`: `string`, `dwellTimeMs`: `number` | Identify drop-off points. |
| `chapter_jump_clicked` | User clicks a chapter pill | `targetChapter`: `string`, `fromChapter`: `string` | Measure chapter navigation usage. |
| `motion_toggle_clicked` | User toggles reduced motion | `newPausedState`: `boolean` | Monitor accessibility preference changes. |
| `classic_switch_clicked` | User clicks "View Classic Site" | `source`: `string` | Track fallback preference rate. |
| `cta_clicked` | User clicks any primary or secondary CTA | `ctaId`: `string`, `sceneId`: `string`, `label`: `string` | Measure conversion intent. |
| `lead_form_submitted` | Intake form submission succeeds | `engagementTrack`: `string`, `domain`: `string` | Track B2B lead generation. |

---

## 2. Strictly Prohibited Telemetry Data

* **Zero Keystroke / Input Logging**: Typed text in contact forms, company names, emails, and custom workflow descriptions are NEVER passed to analytics events.
* **Zero Canvas/Scroll Telemetry**: Individual mouse coordinates, scroll velocity logs, and frame timing pixels are excluded to prevent network overhead and privacy degradation.
