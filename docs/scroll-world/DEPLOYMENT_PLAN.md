# NEXUS SCROLL-WORLD REDESIGN — DEPLOYMENT PLAN & ISOLATION STRATEGY

## 1. Deployment Isolation Strategy

The redesign branch `feature/nexus-scroll-world-redesign` **MUST NEVER** be attached to or deployed on the production domain (`nexus-workflows.com`).

```
                              ┌──────────────────────────────┐
                              │    Production Repository     │
                              └──────────────┬───────────────┘
                                             │
                      ┌──────────────────────┴──────────────────────┐
                      │                                             │
           Production Branch                             Redesign Branch
        polish/gsap-shadcn-21st                     feature/nexus-scroll-world-redesign
                      │                                             │
                      ▼                                             ▼
          Production Deployment                         Isolated Preview Deployment
        https://nexus-workflows.com                 nexus-scroll-world-preview.vercel.app
          NEXT_PUBLIC_NEXUS_SITE_MODE=classic          NEXT_PUBLIC_NEXUS_SITE_MODE=cinematic
```

---

## 2. Environment Configuration Matrix

| Environment Variable | Production (`polish/gsap-shadcn-21st`) | Preview (`feature/nexus-scroll-world-redesign`) |
|---|---|---|
| `NEXT_PUBLIC_NEXUS_SITE_MODE` | `classic` | `cinematic` |
| `NEXT_PUBLIC_CANONICAL_URL` | `https://nexus-workflows.com` | `https://nexus-scroll-world-preview.vercel.app` |
| `RESEND_API_KEY` | Production key | Development/Sandbox Key |

---

## 3. Merge Policy & Approval Gates

1. **Gate 1**: Zero visual, functional, or SEO regressions on `/classic` route.
2. **Gate 2**: Accessibility audit passed (reduced motion, screen reader, keyboard focus).
3. **Gate 3**: Performance budget verified (< 2.5s LCP, zero dropped scroll frames).
4. **Gate 4**: Explicit, written Owner Sign-Off before any pull request is opened to merge into `polish/gsap-shadcn-21st`.
