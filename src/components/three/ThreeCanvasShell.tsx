"use client";

import React, { Component, ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("WebGL Canvas Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface ThreeCanvasShellProps {
  children: ReactNode;
  fallback: ReactNode;
  ariaLabel?: string;
  interactive?: boolean;
  decorative?: boolean;
  frameloop?: "always" | "demand" | "never";
  powerPreference?: "default" | "high-performance" | "low-power";
}

export function ThreeCanvasShell({ 
  children, 
  fallback, 
  ariaLabel,
  interactive = false,
  decorative = true,
  frameloop = "demand",
  powerPreference = "low-power"
}: ThreeCanvasShellProps) {
  const wrapperProps = decorative 
    ? { "aria-hidden": "true" as const }
    : { role: "img", "aria-label": ariaLabel };

  return (
    <WebGLErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <div 
          className="w-full h-full relative" 
          {...wrapperProps}
        >
          <Canvas
            dpr={[1, 1.5]}
            frameloop={frameloop}
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: powerPreference,
              preserveDrawingBuffer: false
            }}
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ pointerEvents: interactive ? "auto" : "none" }}
          >
            {children}
          </Canvas>
        </div>
      </Suspense>
    </WebGLErrorBoundary>
  );
}
