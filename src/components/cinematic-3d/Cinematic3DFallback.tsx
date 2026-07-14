import React from "react";

interface Cinematic3DFallbackProps {
  variant?: "hero" | "transformation" | "blueprint";
}

export function Cinematic3DFallback({ variant = "hero" }: Cinematic3DFallbackProps) {
  if (variant === "transformation") {
    return (
      <div className="w-full h-full min-h-[350px] bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
        {/* Background neon grid lines (faint) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#DEDBC8_1px,transparent_1px),linear-gradient(to_bottom,#DEDBC8_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* SVG Diagram: Scattered fragments aligning into structured outputs */}
        <svg className="w-full max-w-[480px] aspect-[16/9] text-[#DEDBC8]/15 relative z-10" viewBox="0 0 240 135" fill="none">
          {/* Mapping Grid Plane (Center) */}
          <g className="opacity-80">
            <polygon points="100,20 140,20 160,115 80,115" stroke="currentColor" strokeWidth="0.5" fill="rgba(42, 125, 138, 0.02)" />
            <line x1="120" y1="20" x2="120" y2="115" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
            <text x="120" y="15" textAnchor="middle" fill="#2E6FAD" fontSize="6.5" fontWeight="bold" fontFamily="monospace" letterSpacing="1.2">NEXUS MAP</text>
          </g>

          {/* Left Side: Scattered "Before" Nodes */}
          {[
            { label: "Chats", y: 25, x: 25, color: "#C0392B" },
            { label: "Sheets", y: 46, x: 35, color: "#F39C12" },
            { label: "Emails", y: 67.5, x: 20, color: "#2A7D8A" },
            { label: "Tasks", y: 89, x: 38, color: "#D35400" },
            { label: "Files", y: 110, x: 22, color: "#2E6FAD" }
          ].map((node, idx) => (
            <g key={idx}>
              <circle cx={node.x} cy={node.y} r="2.5" fill={node.color} opacity="0.6" />
              {/* Converging dotted lines passing through Center Mapping Plane */}
              <path d={`M ${node.x} ${node.y} C 70 ${node.y}, 90 67.5, 110 ${node.y}`} stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
              <text x={node.x - 6} y={node.y + 1.5} textAnchor="end" fill="#E1E0CC" opacity="0.6" fontSize="4.5" fontFamily="monospace">{node.label}</text>
            </g>
          ))}

          {/* Right Side: Aligned "After" Operating System */}
          {[
            { label: "Roles", y: 35, color: "#2A7D8A" },
            { label: "States", y: 56.5, color: "#2E6FAD" },
            { label: "Handoffs", y: 78.5, color: "#2E6FAD" },
            { label: "Visibility", y: 100, color: "#1A2B4C" }
          ].map((node, idx) => (
            <g key={idx}>
              <rect x="185" y={node.y - 4} width="22" height="8" rx="1.5" stroke="currentColor" strokeWidth="0.5" fill="black" />
              <circle cx="190" cy={node.y} r="1.5" fill={node.color} />
              {/* Straight connections out of the mapping plane */}
              <path d={`M 130 ${node.y} L 185 ${node.y}`} stroke="currentColor" strokeWidth="0.3" />
              <text x="212" y={node.y + 1.8} textAnchor="start" fill="#E1E0CC" opacity="0.7" fontSize="4.5" fontFamily="monospace">{node.label}</text>
            </g>
          ))}
        </svg>

        <span className="text-[7.5px] font-mono text-[#DEDBC8]/35 uppercase mt-3 tracking-[0.2em] relative z-10">
          Workflow Alignment Map Fallback
        </span>
      </div>
    );
  }

  if (variant === "blueprint") {
    return (
      <div className="w-full h-full min-h-[350px] bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
        {/* Background neon grid lines (faint) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#DEDBC8_1px,transparent_1px),linear-gradient(to_bottom,#DEDBC8_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* SVG Diagram: 6-layer isometric service stack */}
        <svg className="w-full max-w-[280px] aspect-[1/1] text-[#DEDBC8]/15 relative z-10" viewBox="0 0 160 160" fill="none">
          {/* Isometric Card stack */}
          {[
            { title: "Handoff & Docs", y: 35, color: "#1A2B4C" },
            { title: "Dashboards", y: 55, color: "#2E6FAD" },
            { title: "Automation", y: 75, color: "#2A7D8A" },
            { title: "Roles & Permissions", y: 95, color: "#2E6FAD" },
            { title: "Workflow Rules", y: 115, color: "#F39C12" },
            { title: "Inputs", y: 135, color: "#C0392B" }
          ].map((layer, idx) => {
            // Isometric projection offset vectors
            const cx = 80;
            const cy = layer.y;
            return (
              <g key={idx} className="opacity-90">
                {/* Isometric diamond shape */}
                <polygon 
                  points={`${cx},${cy - 8} ${cx + 40},${cy} ${cx},${cy + 8} ${cx - 40},${cy}`} 
                  stroke="currentColor" 
                  strokeWidth="0.4" 
                  fill="rgba(16, 16, 16, 0.9)"
                />
                
                {/* Glowing edge highlight */}
                <polyline 
                  points={`${cx - 40},${cy} ${cx},${cy + 8} ${cx + 40},${cy}`} 
                  stroke={layer.color} 
                  strokeWidth="0.8" 
                  opacity="0.6"
                />

                {/* Layer Title */}
                <text 
                  x={cx} 
                  y={cy + 1.5} 
                  textAnchor="middle" 
                  fill="#E1E0CC" 
                  fontSize="4.2" 
                  fontFamily="monospace"
                  letterSpacing="0.5"
                >
                  {layer.title.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        <span className="text-[7.5px] font-mono text-[#DEDBC8]/35 uppercase mt-3 tracking-[0.2em] relative z-10">
          Service Blueprint Stack Fallback
        </span>
      </div>
    );
  }

  // Default: variant === "hero"
  return (
    <div className="w-full h-full min-h-[350px] bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Background neon grid lines (faint) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#DEDBC8_1px,transparent_1px),linear-gradient(to_bottom,#DEDBC8_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* SVG Diagram detailing the Metaphor */}
      <svg className="w-full max-w-[420px] aspect-[16/9] text-[#DEDBC8]/15 relative z-10" viewBox="0 0 240 135" fill="none">
        {/* Core Node: Nexus */}
        <g className="opacity-80">
          <circle cx="120" cy="67.5" r="18" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="120" cy="67.5" r="5" fill="#2E6FAD" className="opacity-90" />
          <text x="120" y="44" textAnchor="middle" fill="#2E6FAD" fontSize="6.5" fontWeight="bold" fontFamily="monospace" letterSpacing="1.2">NEXUS</text>
        </g>

        {/* Inputs (Left Side) */}
        {[
          { label: "Chats", y: 25, color: "#C0392B" },
          { label: "Sheets", y: 46, color: "#F39C12" },
          { label: "Calls", y: 67.5, color: "#2A7D8A" },
          { label: "Files", y: 89, color: "#2E6FAD" },
          { label: "Tasks", y: 110, color: "#D35400" }
        ].map((node, idx) => (
          <g key={idx}>
            {/* Input node point */}
            <circle cx="45" cy={node.y} r="3" fill={node.color} opacity="0.8" />
            
            {/* Connection path to central Nexus core */}
            <path d={`M 48 ${node.y} L 80 ${node.y} L 102 67.5`} stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 3" />
            
            {/* Label in monospace */}
            <text x="37" y={node.y + 2} textAnchor="end" fill="#E1E0CC" opacity="0.7" fontSize="5" fontFamily="monospace">{node.label}</text>
          </g>
        ))}

        {/* Outputs (Right Side) */}
        {[
          { label: "Custom Software", y: 40, color: "#2A7D8A" },
          { label: "Automation", y: 67.5, color: "#2E6FAD" },
          { label: "Visibility", y: 95, color: "#1A2B4C" }
        ].map((node, idx) => (
          <g key={idx}>
            {/* Output Node Shape */}
            <rect x="190" y={node.y - 3} width="16" height="6" rx="1.2" stroke="currentColor" strokeWidth="0.5" fill="black" />
            <circle cx="198" cy={node.y} r="1.5" fill={node.color} />
            
            {/* Connection path from central Nexus core */}
            <path d={`M 138 67.5 L 160 ${node.y} L 190 ${node.y}`} stroke="currentColor" strokeWidth="0.3" />
            
            {/* Label in monospace */}
            <text x="210" y={node.y + 1.5} textAnchor="start" fill="#E1E0CC" opacity="0.7" fontSize="5" fontFamily="monospace">{node.label}</text>
          </g>
        ))}
      </svg>
      
      <span className="text-[7.5px] font-mono text-[#DEDBC8]/35 uppercase mt-3 tracking-[0.2em] relative z-10">
        Spatial Systems Architecture Diagram
      </span>
    </div>
  );
}
