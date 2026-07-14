# Debug 6 Errors Capture — Nexus Website

This report details the 6 React DOM property validation errors (warnings) captured during local dev runtime testing on the `experiment/3d-cinematic-website` branch.

---

## Captured Console Errors & Warnings

The following 6 errors/warnings are triggered in the browser console when navigating the website (specifically on the `/demo` route which renders the SVG mockup visual wrappers):

### 1. Invalid DOM Property `font-family`
*   **Exact Error Message:** `Warning: Invalid DOM property font-family. Did you mean fontFamily?`
*   **File Paths:**
    *   `src/components/visuals/AarogyaMockup.tsx`
    *   `src/components/visuals/BuildPublicMockup.tsx`
    *   `src/components/visuals/ClinicOSMockup.tsx`
    *   `src/components/visuals/RestaurantOSMockup.tsx`
    *   `src/components/visuals/SafeDateMockup.tsx`
    *   `src/components/visuals/SecureScanMockup.tsx`
    *   `src/components/visuals/ShipWrightMockup.tsx`
*   **Error Type:** React DOM Validation Warning
*   **Suspected Cause:** Use of kebab-case `font-family` attribute instead of camelCase `fontFamily` in SVG `<text>` elements.
*   **Impact:** Non-blocking warning (hurts console cleanliness and performance).

### 2. Invalid DOM Property `font-size`
*   **Exact Error Message:** `Warning: Invalid DOM property font-size. Did you mean fontSize?`
*   **File Paths:** (Same visual mockup files under `src/components/visuals/`)
*   **Error Type:** React DOM Validation Warning
*   **Suspected Cause:** Use of kebab-case `font-size` instead of camelCase `fontSize` in SVG `<text>` and `<tspan>` elements.
*   **Impact:** Non-blocking warning.

### 3. Invalid DOM Property `font-weight`
*   **Exact Error Message:** `Warning: Invalid DOM property font-weight. Did you mean fontWeight?`
*   **File Paths:** (Same visual mockup files under `src/components/visuals/`)
*   **Error Type:** React DOM Validation Warning
*   **Suspected Cause:** Use of kebab-case `font-weight` instead of camelCase `fontWeight` in SVG `<text>` elements.
*   **Impact:** Non-blocking warning.

### 4. Invalid DOM Property `stroke-width`
*   **Exact Error Message:** `Warning: Invalid DOM property stroke-width. Did you mean strokeWidth?`
*   **File Paths:** (Same visual mockup files under `src/components/visuals/`)
*   **Error Type:** React DOM Validation Warning
*   **Suspected Cause:** Use of kebab-case `stroke-width` instead of camelCase `strokeWidth` in SVG `<rect>`, `<line>`, `<polyline>`, and `<circle>` elements.
*   **Impact:** Non-blocking warning.

### 5. Invalid DOM Property `text-anchor`
*   **Exact Error Message:** `Warning: Invalid DOM property text-anchor. Did you mean textAnchor?`
*   **File Paths:** (Same visual mockup files under `src/components/visuals/`)
*   **Error Type:** React DOM Validation Warning
*   **Suspected Cause:** Use of kebab-case `text-anchor` instead of camelCase `textAnchor` in SVG `<text>` elements.
*   **Impact:** Non-blocking warning.

### 6. Invalid DOM Property `text-decoration`
*   **Exact Error Message:** `Warning: Invalid DOM property text-decoration. Did you mean textDecoration?`
*   **File Paths:**
    *   `src/components/visuals/BuildPublicMockup.tsx`
    *   `src/components/visuals/ShipWrightMockup.tsx`
*   **Error Type:** React DOM Validation Warning
*   **Suspected Cause:** Use of kebab-case `text-decoration` instead of camelCase `textDecoration` in SVG `<text>` elements.
*   **Impact:** Non-blocking warning.

*(Note: Other SVG properties such as `stroke-linecap` and `stroke-linejoin` also trigger similar warnings in `AarogyaMockup.tsx` and have been marked for cleanup to ensure 100% console cleanliness).*
