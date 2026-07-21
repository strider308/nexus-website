# SCROLL-WORLD SKILL AUDIT & SAFETY EVALUATION

## 1. Skill Metadata & Provenance

* **Skill Name**: `scroll-world`
* **Repository URL**: `https://github.com/oso95/scroll-world.git`
* **Local Installation Path**: `c:\dev\website\.agents\skills\scroll-world`
* **License**: MIT License
* **Audit Date**: 2026-07-21

---

## 2. File & Script Inspection

| File | Purpose | Security / Risk Assessment |
|---|---|---|
| `SKILL.md` | AI Agent Workflow instructions | Safe. Contains prompt templates and execution guidelines. No autonomous network code. |
| `references/scrub-engine.js` | Vanilla JS Scroll Scrubbing engine | Safe. Frame-canvas scrub engine using `requestAnimationFrame`. No external dependencies, no telemetry. |
| `references/knockout.py` | PIL image background flood-fill | Safe. Uses standard Python Pillow library for image alpha processing. Does not make network requests. |
| `references/pipeline.md` | Batch FFmpeg & Higgsfield CLI scripts | Safe. Shell templates for `ffmpeg` frame extraction and `higgsfield` CLI calls. |
| `references/prompts.md` | Diorama prompt templates | Safe. Pure markdown prompt specifications for 3D isometric diorama generation. |

---

## 3. Tool & External Dependency Audit

1. **FFmpeg / ffprobe**: Local binary tools used solely for video frame extraction (`ffmpeg -i clip.mp4 -vf fps=30 frame_%04d.jpg`). Safe.
2. **Python 3 + Pillow**: Used for local background transparency processing. Safe.
3. **Higgsfield / OpenAI CLI**: Generates AI images/videos. **Guarded by Section 1 Safety Rules**: No paid API generation will be run during Phase 0–3. Placeholder frame sequences will be used for testing.

---

## 4. Permission & Execution Boundaries

* **FileSystem Safety**: All file writes are strictly confined to `c:\dev\website\` (specifically `public/media/` and `docs/scroll-world/`). No files are written outside the repository root.
* **Network Safety**: Zero unauthorized external requests or telemetry.
* **Conclusion**: `scroll-world` is **APPROVED** as an experimental skill under strict placeholder-first guardrails.
