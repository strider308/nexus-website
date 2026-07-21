# NEXUS SCROLL-WORLD REDESIGN — MOBILE NARRATIVE & TOUCH STRATEGY

## 1. Native Mobile Composition (9:16 Portrait)

* **No Desktop Cropping**: Desktop 16:9 widescreen videos are NOT cropped for mobile. A native 9:16 vertical diorama framing is used for portrait devices (`< 768px`).
* **Viewport Unit Resilience**: Modern mobile CSS (`dvh` / `svh` instead of standard `100vh`) is used to prevent layout jumping when mobile browser URL address bars collapse or expand during scrolling.
* **Touch-Friendly Controls**: Floating chapter navigation pills and action buttons feature generous touch targets (`min-height: 48px`, `min-width: 48px`).

---

## 2. Capability Detection & Fallbacks

```typescript
// Mobile capability detection logic
export function getDeviceCapabilityTier(): 'A' | 'B' | 'C' {
  if (typeof window === 'undefined') return 'C';
  
  const isSaveData = (navigator as any).connection?.saveData === true;
  const isLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  const isMobile = window.innerWidth < 768;

  if (isSaveData || isLowMemory) return 'C'; // Static Poster Tier
  if (isMobile) return 'B';                  // Mobile 9:16 Video Tier
  return 'A';                                // Full Desktop 16:9 Tier
}
```

* **Tier C on Low Memory / Save Data**: Automatically bypasses video frame scrubbing and displays static WebP diorama cards with native touch scrolling. Zero battery drain or data usage spike.
