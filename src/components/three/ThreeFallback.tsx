import React from "react";

export function HeroFallback() {
  return (
    <div className="w-full h-full min-h-[300px] border border-white/5 bg-white/[0.02] rounded-[12px] flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Grid line texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      {/* Orbit/Circle SVG visual fallback */}
      <svg className="w-4/5 max-w-[280px] aspect-square text-white/10" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="3" fill="#2E6FAD" className="opacity-80" />
        
        {/* Connection nodes */}
        <line x1="20" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="0.25" />
        <line x1="80" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="0.25" />
        <line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.25" />
        
        <circle cx="20" cy="50" r="2" fill="currentColor" />
        <circle cx="80" cy="50" r="2" fill="currentColor" />
        <circle cx="50" cy="20" r="2" fill="currentColor" />
      </svg>
      <span className="text-[9px] font-mono text-white/30 uppercase mt-4">Loading Spatial Operations Visual...</span>
    </div>
  );
}

export function OrbitFallback() {
  return (
    <div className="w-full h-full min-h-[300px] border border-border/80 bg-muted/10 rounded-[12px] flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:12px_12px]" />
      <svg className="w-4/5 max-w-[240px] aspect-square text-muted-foreground/20" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="5" fill="#1A2B4C" />
        
        {/* Orbital systems */}
        {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 35 * Math.cos(rad);
          const y = 50 + 35 * Math.sin(rad);
          return (
            <g key={idx}>
              <line x1="50" y1="50" x2={x} y2={y} stroke="currentColor" strokeWidth="0.25" />
              <circle cx={x} cy={y} r="2.5" fill="#2E6FAD" className="opacity-75" />
            </g>
          );
        })}
      </svg>
      <span className="text-[9px] font-mono text-muted-foreground/40 uppercase mt-4">Loading System Constellation...</span>
    </div>
  );
}

export function DepthFallback() {
  return (
    <div className="w-full h-full min-h-[280px] border border-border/80 bg-muted/10 rounded-[12px] flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:12px_12px]" />
      <div className="flex flex-col gap-3 w-4/5 max-w-[240px] opacity-25">
        <div className="h-6 bg-primary/20 border border-primary/30 rounded skew-x-12 transform origin-left" />
        <div className="h-6 bg-primary/30 border border-primary/40 rounded skew-x-12 transform origin-left" />
        <div className="h-6 bg-primary/40 border border-primary/50 rounded skew-x-12 transform origin-left" />
      </div>
      <span className="text-[9px] font-mono text-muted-foreground/40 uppercase mt-4">Loading Layer Architecture...</span>
    </div>
  );
}
