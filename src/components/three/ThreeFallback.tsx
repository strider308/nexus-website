import React from "react";

export function HeroFallback() {
  return (
    <div className="w-full h-full min-h-[300px] border border-white/5 bg-white/[0.02] rounded-[12px] flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      {/* Workflow convergence SVG */}
      <svg className="w-4/5 max-w-[260px] aspect-[4/3] text-white/20" viewBox="0 0 160 120" fill="none">
        {/* Core circle */}
        <circle cx="80" cy="60" r="16" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="80" cy="60" r="4" fill="#2E6FAD" className="opacity-80" />
        <text x="80" y="40" textAnchor="middle" fill="#2E6FAD" fontSize="6" fontFamily="monospace" letterSpacing="1">NEXUS</text>
        
        {/* Inputs (Left) */}
        {[-30, -10, 10, 30].map((yOffset, idx) => {
          const labels = ["Chats", "Sheets", "Tasks", "Billing"];
          return (
            <g key={idx}>
              <circle cx="20" cy={60 + yOffset} r="4" fill="currentColor" />
              <path d={`M 24 ${60 + yOffset} L 40 ${60 + yOffset} L 64 60`} stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
              <text x="14" y={62 + yOffset} textAnchor="end" fill="currentColor" fontSize="5" fontFamily="monospace">{labels[idx]}</text>
            </g>
          );
        })}
        
        {/* Outputs (Right) */}
        {[-20, 0, 20].map((yOffset, idx) => {
          const labels = ["Software", "Automation", "Visibility"];
          return (
            <g key={idx}>
              <rect x="136" y={57 + yOffset} width="16" height="6" rx="1" stroke="currentColor" strokeWidth="0.5" />
              <path d={`M 96 60 L 120 ${60 + yOffset} L 136 ${60 + yOffset}`} stroke="currentColor" strokeWidth="0.25" />
              <text x="156" y={62 + yOffset} textAnchor="start" fill="currentColor" fontSize="5" fontFamily="monospace">{labels[idx]}</text>
            </g>
          );
        })}
      </svg>
      <span className="text-[8px] font-mono text-white/30 uppercase mt-4 tracking-wider">Spatial Systems Architecture Diagram</span>
    </div>
  );
}

interface BeforeAfterFallbackProps {
  isAfter?: boolean;
}

export function BeforeAfterFallback({ isAfter = false }: BeforeAfterFallbackProps) {
  return (
    <div className="w-full h-full min-h-[300px] border border-border bg-muted/10 rounded-[12px] flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:12px_12px]" />
      
      <svg className="w-4/5 max-w-[240px] aspect-square text-muted-foreground/20" viewBox="0 0 100 100" fill="none">
        {isAfter ? (
          /* Connected aligned state */
          <g>
            <path d="M 15 20 L 15 80 M 50 20 L 50 80 M 85 20 L 85 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <path d="M 15 35 L 50 50 L 85 65" stroke="#2A7D8A" strokeWidth="0.75" />
            <circle cx="15" cy="35" r="3" fill="#2A7D8A" />
            <circle cx="50" cy="50" r="3" fill="#2E6FAD" />
            <circle cx="85" cy="65" r="3" fill="#2A7D8A" />
            <text x="50" y="15" textAnchor="middle" fill="#2A7D8A" fontSize="5" fontFamily="monospace">ALIGNED WORKFLOW STATE</text>
          </g>
        ) : (
          /* Scattered state */
          <g>
            <circle cx="20" cy="30" r="2.5" fill="#C0392B" />
            <circle cx="75" cy="25" r="2" fill="#C0392B" />
            <circle cx="45" cy="60" r="3" fill="#C0392B" />
            <circle cx="80" cy="75" r="2" fill="#C0392B" />
            <circle cx="25" cy="80" r="2.5" fill="#C0392B" />
            
            <path d="M 20 30 L 30 50 M 45 60 L 60 40 M 75 25 L 85 45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <text x="50" y="15" textAnchor="middle" fill="#C0392B" fontSize="5" fontFamily="monospace">SCATTERED MANUAL OPERATIONS</text>
          </g>
        )}
      </svg>
      <span className="text-[8px] font-mono text-muted-foreground/55 uppercase mt-2 tracking-wider">Workflow Transformation Map</span>
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
      <span className="text-[8px] font-mono text-muted-foreground/55 uppercase mt-4 tracking-wider">System Mapping Constellation</span>
    </div>
  );
}

export function DepthFallback() {
  return (
    <div className="w-full h-full min-h-[280px] border border-border/80 bg-muted/10 rounded-[12px] flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:12px_12px]" />
      
      {/* 6-layer architecture stack SVG fallback */}
      <svg className="w-4/5 max-w-[240px] aspect-[4/3] text-muted-foreground/25" viewBox="0 0 120 90" fill="none">
        {[0, 1, 2, 3, 4, 5].map((idx) => {
          const y = 12 + idx * 13;
          return (
            <g key={idx}>
              <polygon points={`30,${y} 90,${y} 80,${y+8} 20,${y+8}`} fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="0.25" />
              {idx < 5 && <line x1="55" y1={y+8} x2="55" y2={y+13} stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 1" />}
            </g>
          );
        })}
      </svg>
      <span className="text-[8px] font-mono text-muted-foreground/55 uppercase mt-4 tracking-wider">Service Architecture Layers</span>
    </div>
  );
}
