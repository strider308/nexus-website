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
  ariaLabel: string;
}

export function ThreeCanvasShell({ children, fallback, ariaLabel }: ThreeCanvasShellProps) {
  return (
    <WebGLErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <div 
          className="w-full h-full relative" 
          role="img" 
          aria-label={ariaLabel}
        >
          <Canvas
            dpr={[1, 1.5]}
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: "high-performance",
              preserveDrawingBuffer: false
            }}
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ pointerEvents: "auto" }}
          >
            {children}
          </Canvas>
        </div>
      </Suspense>
    </WebGLErrorBoundary>
  );
}
