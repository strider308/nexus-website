"use client";

import React, { ReactNode, Suspense, Component } from "react";
import { Canvas } from "@react-three/fiber";
import { useCinematic3D } from "./Cinematic3DProvider";
import { SceneQualityController } from "./SceneQualityController";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
  onError: (err: boolean) => void;
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
    console.error("WebGL 3D Canvas compilation error caught:", error, errorInfo);
    this.props.onError(true);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface Cinematic3DCanvasProps {
  children: ReactNode;
  fallback: ReactNode;
}

export function Cinematic3DCanvas({ children, fallback }: Cinematic3DCanvasProps) {
  const { quality, setWebglError } = useCinematic3D();

  return (
    <WebGLErrorBoundary fallback={fallback} onError={setWebglError}>
      <Suspense fallback={fallback}>
        <div 
          className="w-full h-full relative pointer-events-none select-none"
          aria-hidden="true"
        >
          <Canvas
            dpr={[quality.dpr, quality.dpr]}
            frameloop="always" // Pulse and parallax camera need continuous loops
            gl={{
              antialias: quality.antialias,
              alpha: true,
              powerPreference: "low-power",
              preserveDrawingBuffer: false,
            }}
            camera={{ position: [0, 0, 4.5], fov: 45 }}
          >
            {/* dynamic quality supervisor */}
            <SceneQualityController />
            {children}
          </Canvas>
        </div>
      </Suspense>
    </WebGLErrorBoundary>
  );
}
