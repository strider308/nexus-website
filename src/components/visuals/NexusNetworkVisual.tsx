"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { PRODUCT_THEMES } from "@/lib/design-tokens";

interface NodeData {
  id: string;
  label: string;
  color: string;
  x: number;
  y: number;
  delay: number;
}

const nodes: NodeData[] = [
  { id: "clinicos", label: "ClinicOS", color: "#1A2B4C", x: 50, y: 15, delay: 0 },
  { id: "aarogya", label: "Aarogya", color: "#5A7F5E", x: 78, y: 28, delay: 0.3 },
  { id: "restaurantos", label: "RestaurantOS", color: "#A05C1A", x: 85, y: 58, delay: 0.6 },
  { id: "shipwright", label: "ShipWright", color: "#5B4B8A", x: 65, y: 82, delay: 0.9 },
  { id: "securescan", label: "SecureScan", color: "#2A7D8A", x: 35, y: 82, delay: 1.2 },
  { id: "safedate", label: "SafeDate", color: "#8A2A5A", x: 15, y: 58, delay: 1.5 },
  { id: "buildpublic", label: "BuildPublic", color: "#2A5A3A", x: 22, y: 28, delay: 1.8 }
];

export function NexusNetworkVisual() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Return simple, elegant static network if reduced motion is requested
  if (shouldReduceMotion) {
    return (
      <div className="relative w-full max-w-[400px] aspect-square mx-auto flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          {/* Node connecting lines */}
          {nodes.map((node) => (
            <line
              key={`line-${node.id}`}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="currentColor"
              className="text-muted/30 dark:text-muted-foreground/15"
              strokeWidth="0.8"
            />
          ))}

          {/* Central Nexus core */}
          <circle cx="50" cy="50" r="5" className="fill-foreground" />

          {/* Orbit Nodes */}
          {nodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r="3"
                fill={node.color}
                stroke="white"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto flex items-center justify-center">
      
      {/* Background radial highlight glowing color on hover */}
      <div 
        className="absolute inset-0 bg-radial transition-all duration-700 blur-[80px] opacity-15"
        style={{
          background: hoveredNode 
            ? `radial-gradient(circle, ${PRODUCT_THEMES[hoveredNode]?.primary} 0%, transparent 70%)` 
            : 'radial-gradient(circle, var(--accent) 0%, transparent 70%)'
        }}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible relative z-10">
        
        {/* Node connecting lines with gradient highlight on hover */}
        {nodes.map((node) => {
          const isHighlighted = hoveredNode === node.id || hoveredNode === null;
          return (
            <motion.line
              key={`line-${node.id}`}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke={hoveredNode === node.id ? node.color : "currentColor"}
              className="text-border dark:text-zinc-800"
              animate={{
                strokeWidth: hoveredNode === node.id ? 1.5 : 0.6,
                opacity: isHighlighted ? 0.7 : 0.15
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}

        {/* Central Nexus core */}
        <motion.circle
          cx="50"
          cy="50"
          r="4.5"
          className="fill-foreground dark:fill-white"
          animate={{
            scale: hoveredNode ? 1.15 : 1,
            fill: hoveredNode ? PRODUCT_THEMES[hoveredNode].primary : "#ffffff"
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Central Glow Ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          stroke="currentColor"
          className="text-[#1A2B4C]/10 dark:text-white/10"
          strokeWidth="0.5"
          fill="none"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Orbit Nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isAnyHovered = hoveredNode !== null;
          
          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => {
                const el = document.getElementById(node.id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {/* Outer pulsing ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="4.5"
                fill="none"
                stroke={node.color}
                strokeWidth="0.4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isHovered ? [1, 1.4, 1] : 1,
                  opacity: isHovered ? 0.8 : [0.15, 0.45, 0.15]
                }}
                transition={{
                  duration: isHovered ? 1.5 : 3,
                  repeat: Infinity,
                  delay: node.delay
                }}
              />

              {/* Core Node Circle */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="2.5"
                fill={node.color}
                stroke="white"
                strokeWidth="0.5"
                animate={{
                  scale: isHovered ? 1.35 : (isAnyHovered && !isHovered ? 0.85 : 1),
                  opacity: isAnyHovered && !isHovered ? 0.4 : 1
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              />

              {/* Text tooltip floating above nodes */}
              {isHovered && (
                <motion.g
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Tooltip Background */}
                  <rect
                    x={node.x - 18}
                    y={node.y - 9}
                    width="36"
                    height="6"
                    rx="1.5"
                    fill="var(--background)"
                    stroke="var(--border)"
                    strokeWidth="0.3"
                  />
                  {/* Tooltip Text */}
                  <text
                    x={node.x}
                    y={node.y - 5.2}
                    fontFamily="var(--font-sans)"
                    fontSize="2.2"
                    fontWeight="700"
                    fill={node.color}
                    textAnchor="middle"
                  >
                    {node.label}
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
