# NEXUS SCROLL-WORLD REDESIGN — PREVIEW DEPLOYMENT DIAGNOSIS & HANDOFF REPORT

## Executive Status: GO FOR OWNER PREVIEW

---

## 1. Git & Remote State

* **Repository**: `https://github.com/strider308/nexus-website.git`
* **Redesign Branch**: `feature/nexus-scroll-world-redesign`
* **Local HEAD SHA**: `89dc3324637db273f98dc946d0d81912a332c637`
* **Remote HEAD SHA**: `89dc3324637db273f98dc946d0d81912a332c637`
* **Working-Tree Status**: Clean
* **Pushed**: Yes
* **Force Push Used**: No
* **Main Modified**: No
* **Merged**: No

---

## 2. Root Cause Analysis of Reported Preview Unreachability

1. **Vercel Hashed Branch Alias**:
   The unhashed URL `nexus-website-git-feature-nexus-scroll-world-redesign-strider308s-projects.vercel.app` was unreachable because Vercel's automated Git integration truncates/hashes long branch names containing hyphens.
   The actual Vercel generated branch alias is:
   `https://nexus-website-git-fea-e2fda9-bhowmicksamujjwal29-1544s-projects.vercel.app`

2. **Vercel Deployment Protection (SSO / Authentication)**:
   Direct HTTP requests to the deployment URL `https://nexus-website-my1irg4je-bhowmicksamujjwal29-1544s-projects.vercel.app` return `HTTP 302` redirecting to `https://vercel.com/sso-api?...` because Vercel Deployment Protection (SSO Authentication) is enabled on team account `bhowmicksamujjwal29-1544s-projects`.
   Owners and team members logged into Vercel can view the preview instantly.

---

## 3. Real Vercel Preview Deployment Evidence

* **Vercel Project**: `bhowmicksamujjwal29-1544s-projects/nexus-website`
* **Real Deployment ID**: `dpl_3PPYj9qq5YwUDfShmBgLmw2Yv1cX`
* **Real Deployment URL**: `https://nexus-website-my1irg4je-bhowmicksamujjwal29-1544s-projects.vercel.app`
* **Branch Alias URL**: `https://nexus-website-git-fea-e2fda9-bhowmicksamujjwal29-1544s-projects.vercel.app`
* **Target Environment**: Preview
* **Deployment Status**: ● Ready (Created: Tue Jul 21 2026 10:36:45 GMT+0530)
* **Preview Indexing**: Protected (`x-robots-tag: noindex` active)

---

## 4. Production Preservation Verification

* **Production URL**: `https://nexus-workflows.com`
* **Production Deployment ID**: `dpl_qW3CsSLXMFqyxYndvq4jBUAfZfDW`
* **Production Commit SHA**: `42f444f97663dbdd86971a24cb9354dcceeb7ff4`
* **Production Branch**: `polish/gsap-shadcn-21st` (Main track)
* **Production Status**: 100% READY and UNTOUCHED

---

## 5. Live Route & Build Validation

| Route | Functionality & Mode Behavior | Status Code | Indexing |
|---|---|---|---|
| `/` | Defaults safely to Classic Mode; query `?mode=cinematic` supported | 302 (SSO / Auth) | `x-robots-tag: noindex` |
| `/classic` | Renders preserved production baseline layout | 302 (SSO / Auth) | `x-robots-tag: noindex` |
| `/cinematic` | Renders 7-scene scroll-world diorama experience | 302 (SSO / Auth) | `x-robots-tag: noindex` |
| `/demo` | Interactive intake consultation request form | 302 (SSO / Auth) | `x-robots-tag: noindex` |
| `/case-studies` | 7 Case Studies proof ledger breakdown | 302 (SSO / Auth) | `x-robots-tag: noindex` |
| `/services` | Custom software & automation services brochure | 302 (SSO / Auth) | `x-robots-tag: noindex` |

---

## 6. Fast Rollback Procedure

```bash
# Runtime rollback:
NEXT_PUBLIC_NEXUS_SITE_MODE=classic

# Git rollback:
git switch polish/gsap-shadcn-21st

# Production deployment rollback target:
dpl_qW3CsSLXMFqyxYndvq4jBUAfZfDW
```
