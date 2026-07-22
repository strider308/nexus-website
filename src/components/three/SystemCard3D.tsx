"use client";

import React, { useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface SystemCard3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SystemCard3D({ children, className = "", ...props }: SystemCard3DProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates around zero
    const xPercent = x / rect.width - 0.5;
    const yPercent = y / rect.height - 0.5;

    // Rotate bounds max 4 degrees for calm, restrained premium feel
    const rotateX = -yPercent * 4;
    const rotateY = xPercent * 4;

    setTransformStyle(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.005, 1.005, 1.005)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
        willChange: "transform"
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
