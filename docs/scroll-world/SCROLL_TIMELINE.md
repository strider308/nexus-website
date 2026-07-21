# NEXUS SCROLL-WORLD REDESIGN — SCROLL TIMELINE & PINNING SPECIFICATION

## 1. Timeline Layout & Progress Ranges

The scroll timeline spans a total pin distance of 700vh (100vh per scene) orchestrated by GSAP ScrollTrigger.

```
Total Scroll Distance: 700vh (ScrollProgress: 0.0 -> 1.0)

0.00 -------------- 0.14 -------------- 0.28 -------------- 0.42 -------------- 0.57 -------------- 0.71 -------------- 0.85 ------ 1.00
  │   Scene 1       │   Scene 2       │   Scene 3       │   Scene 4       │   Scene 5       │   Scene 6       │   Scene 7   │
  │   The Frontier  │   Cost of Chaos │   Nexus Engine  │   Proof Ledger  │   Scale & Value │   Trust & Scope │   Intake CTA│
```

---

## 2. Per-Scene Animation Keyframe Table

| Progress Range | Active Scene | Visual Action | Text Overlay Action | Pinned Container State |
|---|---|---|---|---|
| `0.00 - 0.14` | **Scene 1** | Panning across frontier isometric island | H1 fades in (`0.00-0.03`), holds (`0.03-0.10`), fades out (`0.10-0.14`) | Pinned at top (`100vh`) |
| `0.14 - 0.28` | **Scene 2** | Camera dives 60° into office interior | Problem cards slide in (`0.16-0.24`), fade out (`0.24-0.28`) | Pinned at top (`100vh`) |
| `0.28 - 0.42` | **Scene 3** | Central Nexus core illuminates & connects pipelines | Service grid fades & scales in (`0.30-0.38`), fades out (`0.38-0.42`) | Pinned at top (`100vh`) |
| `0.42 - 0.57` | **Scene 4** | Camera tracks across 7 case study modules | Active case study tab & metrics update dynamically | Pinned at top (`100vh`) |
| `0.57 - 0.71` | **Scene 5** | Pull back to wide 45° overhead view | Compounding value cards fade in (`0.59-0.67`), fade out (`0.67-0.71`) | Pinned at top (`100vh`) |
| `0.71 - 0.85` | **Scene 6** | Zoom-in on fortified vault structure | Engagement model tiers slide up (`0.73-0.81`), fade out (`0.81-0.85`) | Pinned at top (`100vh`) |
| `0.85 - 1.00` | **Scene 7** | Camera locks on terminal screen | Final consultation form & founder message lock into view | Unpinned / Released to Footer |

---

## 3. Reverse Scroll & Jump Behavior

* **Reverse Scroll**: Reversing scroll position (`progress` moving backwards from 1.0 to 0.0) scrubs video frames in reverse and reverses text opacity/transform keyframes cleanly via GSAP ScrollTrigger timeline interpolation.
* **Chapter Navigation Jump**: Clicking a chapter tab (e.g. Chapter `04 // PROOF LEDGER`) triggers `gsap.to(window, { scrollTo: targetProgress * totalScrollHeight, duration: 1.2, ease: "power2.inOut" })`.
