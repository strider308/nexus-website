import React from "react";

export function Cinematic3DFallback() {
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
