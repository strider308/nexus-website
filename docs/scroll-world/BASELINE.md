# NEXUS SCROLL-WORLD REDESIGN — BASELINE AUDIT & ROLLBACK DOC

## 1. Baseline Verification

* **Original Production Branch Name**: `polish/gsap-shadcn-21st` (Main track)
* **Redesign Branch Name**: `feature/nexus-scroll-world-redesign`
* **Original Commit SHA**: `42f444f97663dbdd86971a24cb9354dcceeb7ff4`
* **Commit Message**: `docs: add Hero 3D cinematic preview QA and decision reports`
* **Date of Branch Creation**: `2026-07-21`
* **Remote Repository**: `https://github.com/strider308/nexus-website.git`
* **Current Production URL**: `https://nexus-workflows.com`
* **Current Staging URL**: `https://nexus-website-preview.vercel.app`

---

## 2. Working Tree & Isolation Status

* **Working Tree**: Clean (Untracked artifacts `.agents/skills/scroll-world/`, `playwright-report/`, `test-results/` ignored or tracked separately).
* **Isolation Guarantee**: The legacy website baseline at SHA `42f444f97663dbdd86971a24cb9354dcceeb7ff4` remains completely untouched and authoritative.
* **Stash Record**: Stashed pre-branch local changes saved as `stash@{0}`.

---

## 3. Fast Rollback Instructions

### A. Git Level Rollback
To immediately revert to the stable production baseline:
```bash
git switch polish/gsap-shadcn-21st
git reset --hard 42f444f97663dbdd86971a24cb9354dcceeb7ff4
```

### B. Deployment Level Rollback
If deploying via Vercel/Netlify:
1. Promote deployment from branch `polish/gsap-shadcn-21st` to Production.
2. Set environment variable `NEXT_PUBLIC_NEXUS_SITE_MODE=classic`.

---

## 4. Authoritative Statement

> **CRITICAL PRESERVATION NOTICE**: The legacy Nexus website at commit `42f444f97663dbdd86971a24cb9354dcceeb7ff4` remains the authoritative production baseline until explicit, written owner approval is granted to merge and activate the cinematic redesign.
