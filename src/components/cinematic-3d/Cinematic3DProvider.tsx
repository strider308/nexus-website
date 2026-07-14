"use client";

import React, { createContext, useContext, ReactNode, useState, useSyncExternalStore } from "react";
import { useIsHydrated, useMediaQuery } from "@/hooks/useClientState";
import { useIsMobile } from "@/hooks/useIsMobile";
import { CINEMATIC_3D_ENABLED, CINEMATIC_3D_QUALITY } from "@/lib/cinematic-3d/config";
import { getQualityMetrics, QualityMetrics } from "@/lib/cinematic-3d/quality";

interface Cinematic3DContextType {
  isEnabled: boolean;
  is3DActive: boolean;
  quality: QualityMetrics;
  isMobile: boolean;
  reducedMotion: boolean;
  setQuality: React.Dispatch<React.SetStateAction<QualityMetrics>>;
  webglError: boolean;
  setWebglError: (err: boolean) => void;
}

const Cinematic3DContext = createContext<Cinematic3DContextType | null>(null);

function emptySubscribe() {
  return () => {};
}

function getWebGLSupportSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function Cinematic3DProvider({
  children,
  isEnabledOverride,
}: {
  children: ReactNode;
  isEnabledOverride?: boolean;
}) {
  const isHydrated = useIsHydrated();
  const isMobile = useIsMobile();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [webglError, setWebglError] = useState(false);

  const [quality, setQuality] = useState<QualityMetrics>(() =>
    getQualityMetrics(CINEMATIC_3D_QUALITY)
  );

  // Check WebGL support using useSyncExternalStore to prevent setState-in-effect issues
  const isWebGLSupported = useSyncExternalStore(
    emptySubscribe,
    getWebGLSupportSnapshot,
    () => false
  );



  const isEnabled = isEnabledOverride !== undefined ? isEnabledOverride : CINEMATIC_3D_ENABLED;
  
  // Decide whether WebGL can run
  const is3DActive =
    isHydrated &&
    isEnabled &&
    isWebGLSupported &&
    !webglError &&
    !isMobile &&
    !reducedMotion;

  return (
    <Cinematic3DContext.Provider
      value={{
        isEnabled,
        is3DActive,
        quality,
        isMobile,
        reducedMotion,
        setQuality,
        webglError,
        setWebglError,
      }}
    >
      {children}
    </Cinematic3DContext.Provider>
  );
}

export function useCinematic3D() {
  const context = useContext(Cinematic3DContext);
  if (!context) {
    throw new Error("useCinematic3D must be used within a Cinematic3DProvider");
  }
  return context;
}
