"use client";

import React from "react";

export function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 3]} intensity={1.0} castShadow={false} />
      <pointLight position={[-5, -5, -2]} intensity={0.3} color="#2e6fad" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#2a7d8a" />
    </>
  );
}
