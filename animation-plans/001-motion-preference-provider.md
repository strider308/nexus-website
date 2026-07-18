# 001 — MotionPreferenceProvider and Reactive Pause Architecture

- **Status**: TODO
- **Commit**: c8f70f9d883c960e9159126fd949da91fb5f53f3
- **Severity**: HIGH
- **Category**: Interruptibility
- **Estimated scope**: 9 files

## Problem
Currently, the motion pause state is tracked independently by different components (`SiteHeader.tsx`, `CinematicExperience.tsx`, `SevenProofSystems.tsx`) using non-reactive static state hooks and local storage reads, requiring a manual window reload to apply settings. This leads to out-of-sync indicators and does not react to OS prefers-reduced-motion changes dynamically.

## Target
Introduce a shared `MotionPreferenceProvider` wrapping the application root in `src/app/layout.tsx` to serve as the single, reactive source of truth for motion.

## Steps

### 1. Create `src/components/providers/MotionPreferenceProvider.tsx`
Build the provider component with safety guards for client hydration:
```typescript
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface MotionPreferenceContextType {
  isPaused: boolean;
  isOSReduced: boolean;
  shouldReduceMotion: boolean;
  setPaused: (paused: boolean) => void;
  togglePaused: () => void;
}

const MotionPreferenceContext = createContext<MotionPreferenceContextType | undefined>(undefined);

export function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [isPaused, setIsPaused] = useState(false);
  const [isOSReduced, setIsOSReduced] = useState(false);

  // Initialize safely on mount to prevent server-client hydration mismatches
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const saved = localStorage.getItem("nexus_motion_paused");
      setIsPaused(saved === "true");
    } catch {
      // safe fallback
    }

    // Set OS preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsOSReduced(mediaQuery.matches);

    const handleOSChange = (e: MediaQueryListEvent) => {
      setIsOSReduced(e.matches);
    };

    // React to OS prefers-reduced-motion change
    mediaQuery.addEventListener("change", handleOSChange);

    // Sync across browser tabs on storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "nexus_motion_paused") {
        setIsPaused(e.newValue === "true");
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOSChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const shouldReduceMotion = isOSReduced || isPaused;

  // Sync html element class for global CSS transition rules
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (shouldReduceMotion) {
      document.documentElement.classList.add("motion-paused");
    } else {
      document.documentElement.classList.remove("motion-paused");
    }
  }, [shouldReduceMotion]);

  const setPaused = (paused: boolean) => {
    setIsPaused(paused);
    try {
      localStorage.setItem("nexus_motion_paused", String(paused));
    } catch {
      // safe fallback
    }
  };

  const togglePaused = () => {
    setPaused(!isPaused);
  };

  return (
    <MotionPreferenceContext.Provider
      value={{
        isPaused,
        isOSReduced,
        shouldReduceMotion,
        setPaused,
        togglePaused,
      }}
    >
      {children}
    </MotionPreferenceContext.Provider>
  );
}

export function useMotionPreference() {
  const context = useContext(MotionPreferenceContext);
  if (!context) {
    throw new Error("useMotionPreference must be used within a MotionPreferenceProvider");
  }
  return context;
}
```

### 2. Update `src/hooks/useReducedMotion.ts`
Modify the hook to consume the context provider:
```typescript
import { useMotionPreference } from "@/components/providers/MotionPreferenceProvider";

export function useReducedMotion(): boolean {
  try {
    const { shouldReduceMotion } = useMotionPreference();
    return shouldReduceMotion;
  } catch {
    // Return fallback for context-less environments (such as testing)
    return false;
  }
}
```

### 3. Update `src/app/layout.tsx`
Mount `MotionPreferenceProvider` wrapping the child elements:
```typescript
import { MotionPreferenceProvider } from "@/components/providers/MotionPreferenceProvider";

// Wrap body inside layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" ...>
      <body>
        <MotionPreferenceProvider>
          {children}
        </MotionPreferenceProvider>
      </body>
    </html>
  );
}
```

### 4. Update `src/components/ui/SiteHeader.tsx`
Replace local state with the provider hooks:
```typescript
  const { isPaused, togglePaused } = useMotionPreference();
  // Remove duplicate states and use handleToggleMotion calling togglePaused directly
```

### 5. Update `src/components/cinematic/CinematicExperience.tsx`
Replace local state with `useMotionPreference()` to dynamically switch quality to `"fallback"` without page reload:
```typescript
  const { shouldReduceMotion } = useMotionPreference();
  const quality = shouldReduceMotion ? "fallback" : tier;
```

### 6. Update `src/components/home/SevenProofSystems.tsx`
Read `shouldReduceMotion` dynamically from `useGSAPReducedMotion()` and hook it as a dependency in `useGSAP`:
```typescript
  const isReduced = useGSAPReducedMotion();
  
  useGSAP(
    () => {
      // Rebuild or clear triggers on change
      if (isReduced) {
        // Fallback layout - disable/kill ScrollTriggers safely
        ScrollTrigger.getAll().forEach(t => t.kill());
        // Show static elements
        return;
      }
      // Re-create ScrollTriggers for interactive view
    },
    { dependencies: [isReduced] }
  );
```

## Verification
- Run `npm run lint` and `npm run build` to verify clean typescript compiling.
- Toggle prefers-reduced-motion in DevTools rendering. Verify no page reload occurs, the 3D Canvas unmounts instantly, and the page switches cleanly to static content layouts.
