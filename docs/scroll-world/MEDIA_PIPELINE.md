# NEXUS SCROLL-WORLD REDESIGN — MEDIA PIPELINE & ASSET MANIFEST

## 1. Asset Manifest & Directory Structure

All media assets are stored under `public/media/` using fingerprinted or structured naming:

```
public/media/
├── scene-1-poster.webp       # Desktop poster frame (1920x1080)
├── scene-1-poster-m.webp     # Mobile portrait poster frame (1080x1920)
├── scene-1-static.webp       # Reduced motion fallback image
├── scene-1-clip.mp4          # Desktop video clip (H.264, 1080p, crf 24)
├── scene-1-clip.webm         # Desktop video clip (VP9/WebM)
├── scene-1-clip-m.mp4        # Mobile video clip (H.264, 720p, crf 26)
... (repeats for scenes 1 through 7)
```

---

## 2. Automated FFmpeg & Sharp Processing Commands

### A. Poster Extraction
```bash
ffmpeg -i scene-1-raw.mp4 -ss 00:00:00.000 -vframes 1 -q:v 2 public/media/scene-1-poster.webp
```

### B. Video Compression (Desktop 1080p)
```bash
ffmpeg -i scene-1-raw.mp4 -c:v libx264 -crf 24 -preset slow -an -movflags +faststart public/media/scene-1-clip.mp4
ffmpeg -i scene-1-raw.mp4 -c:v libvpx-vp9 -b:v 1.5M -an public/media/scene-1-clip.webm
```

### C. Mobile Native Portrait Video Compression (720p 9:16)
```bash
ffmpeg -i scene-1-raw-m.mp4 -c:v libx264 -crf 26 -preset slow -vf scale=720:1280 -an -movflags +faststart public/media/scene-1-clip-m.mp4
```

---

## 3. Fallback & Placeholder Strategy
During Phase 2 & Phase 3 (before paid AI media generation), lightweight SVG canvas placeholders and dark gradient posters are rendered dynamically by `SceneMediaPlaceholder.tsx` so zero paid credits are consumed.
