"use client";

import { motion, useReducedMotion } from "motion/react";

export function NexusNetworkVisual() {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is preferred, render static paths directly
  const messyInit = shouldReduceMotion ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0.2 };
  const messyAnim = shouldReduceMotion ? undefined : { pathLength: 1, opacity: 0.55 };

  const cleanInit = shouldReduceMotion ? { pathLength: 1, opacity: 0.75 } : { pathLength: 0, opacity: 0.1 };
  const cleanAnim = shouldReduceMotion ? undefined : { pathLength: 1, opacity: 0.85 };

  const nodeInit = shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 };
  const nodeAnim = shouldReduceMotion ? undefined : { scale: 1, opacity: 1 };

  return (
    <div className="relative w-full max-w-[420px] aspect-[420/200] md:aspect-[420/200] mx-auto flex items-center justify-center">
      {/* Glow highlight behind central core */}
      {!shouldReduceMotion && (
        <motion.div 
          className="absolute w-36 h-36 rounded-full blur-[48px] bg-[#2E6FAD] opacity-10 pointer-events-none"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.1, 0.16, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Desktop SVG */}
      <svg viewBox="0 0 420 200" className="hidden md:block w-full h-full overflow-visible relative z-10">
        {/* Messy converging paths (left side) */}
        <motion.path
          d="M 40 50 C 120 50, 120 100, 200 100"
          stroke="#5B4B8A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={messyInit}
          animate={messyAnim}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
        <motion.path
          d="M 40 100 Q 120 100, 200 100"
          stroke="#2A7D8A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={messyInit}
          animate={messyAnim}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        />
        <motion.path
          d="M 40 150 C 120 150, 120 100, 200 100"
          stroke="#8A2A5A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={messyInit}
          animate={messyAnim}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.02 }}
        />

        {/* Clean straight paths (right side) */}
        <motion.line
          x1="200"
          y1="100"
          x2="360"
          y2="50"
          stroke="#2E6FAD"
          strokeWidth="2"
          initial={cleanInit}
          animate={cleanAnim}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.45 }}
        />
        <motion.line
          x1="200"
          y1="100"
          x2="360"
          y2="100"
          stroke="#5A7F5E"
          strokeWidth="2"
          initial={cleanInit}
          animate={cleanAnim}
          transition={{ duration: 0.35, ease: "easeInOut", delay: 0.48 }}
        />
        <motion.line
          x1="200"
          y1="100"
          x2="360"
          y2="150"
          stroke="#A05C1A"
          strokeWidth="2"
          initial={cleanInit}
          animate={cleanAnim}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.45 }}
        />

        {/* Left Input Nodes */}
        <g>
          <circle cx="40" cy="50" r="3.5" fill="#5B4B8A" />
          <text x="32" y="38" fontFamily="var(--font-sans)" fontSize="8" fill="white" opacity="0.45" textAnchor="start">Chats</text>
        </g>
        <g>
          <circle cx="40" cy="100" r="3.5" fill="#2A7D8A" />
          <text x="32" y="88" fontFamily="var(--font-sans)" fontSize="8" fill="white" opacity="0.45" textAnchor="start">Sheets</text>
        </g>
        <g>
          <circle cx="40" cy="150" r="3.5" fill="#8A2A5A" />
          <text x="32" y="138" fontFamily="var(--font-sans)" fontSize="8" fill="white" opacity="0.45" textAnchor="start">Tasks</text>
        </g>

        {/* Central Nexus core node */}
        <g>
          <motion.circle
            cx="200"
            cy="100"
            r="10"
            fill="#0C1828"
            stroke="white"
            strokeWidth="0.8"
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { scale: [0.7, 1.15, 1], opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38, type: "spring", stiffness: 200, damping: 12 }}
          />
          <motion.circle
            cx="200"
            cy="100"
            r="5"
            fill="#ffffff"
            initial={{ scale: 1 }}
            animate={shouldReduceMotion ? undefined : { 
              scale: [1, 1.2, 1],
              fill: ["#ffffff", "#2E6FAD", "#ffffff"]
            }}
            transition={{ duration: 0.5, delay: 0.38 }}
          />
          {/* Ambient slow breathing core overlay */}
          {!shouldReduceMotion && (
            <motion.circle
              cx="200"
              cy="100"
              r="5"
              fill="#2E6FAD"
              animate={{
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          <text x="200" y="84" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="white" opacity="0.6" textAnchor="middle">NEXUS</text>
        </g>

        {/* Right Clean Output Nodes */}
        <motion.g
          initial={nodeInit}
          animate={nodeAnim}
          transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
        >
          <circle cx="360" cy="50" r="4.5" fill="#2E6FAD" />
          <text x="372" y="53" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" fill="white" textAnchor="start">Custom Software</text>
        </motion.g>
        <motion.g
          initial={nodeInit}
          animate={nodeAnim}
          transition={{ duration: 0.4, delay: 0.82, type: "spring" }}
        >
          <circle cx="360" cy="100" r="4.5" fill="#5A7F5E" />
          <text x="372" y="103" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" fill="white" textAnchor="start">Automation</text>
        </motion.g>
        <motion.g
          initial={nodeInit}
          animate={nodeAnim}
          transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
        >
          <circle cx="360" cy="150" r="4.5" fill="#A05C1A" />
          <text x="372" y="153" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" fill="white" textAnchor="start">Owner Visibility</text>
        </motion.g>
      </svg>

      {/* Mobile SVG */}
      <svg viewBox="0 0 200 360" className="block md:hidden w-full h-full overflow-visible relative z-10">
        {/* Converging Paths */}
        <motion.path
          d="M 40 40 C 40 100, 100 100, 100 160"
          stroke="#5B4B8A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={messyInit}
          animate={messyAnim}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
        <motion.path
          d="M 100 40 Q 100 100, 100 160"
          stroke="#2A7D8A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={messyInit}
          animate={messyAnim}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        />
        <motion.path
          d="M 160 40 C 160 100, 100 100, 100 160"
          stroke="#8A2A5A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={messyInit}
          animate={messyAnim}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.02 }}
        />

        {/* Straight paths */}
        <motion.line
          x1="100"
          y1="160"
          x2="40"
          y2="280"
          stroke="#2E6FAD"
          strokeWidth="2"
          initial={cleanInit}
          animate={cleanAnim}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.45 }}
        />
        <motion.line
          x1="100"
          y1="160"
          x2="100"
          y2="280"
          stroke="#5A7F5E"
          strokeWidth="2"
          initial={cleanInit}
          animate={cleanAnim}
          transition={{ duration: 0.35, ease: "easeInOut", delay: 0.48 }}
        />
        <motion.line
          x1="100"
          y1="160"
          x2="160"
          y2="280"
          stroke="#A05C1A"
          strokeWidth="2"
          initial={cleanInit}
          animate={cleanAnim}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.45 }}
        />

        {/* Top Input circles */}
        <circle cx="40" cy="40" r="3.5" fill="#5B4B8A" />
        <circle cx="100" cy="40" r="3.5" fill="#2A7D8A" />
        <circle cx="160" cy="40" r="3.5" fill="#8A2A5A" />

        {/* Central Core */}
        <g>
          <motion.circle
            cx="100"
            cy="160"
            r="9"
            fill="#0C1828"
            stroke="white"
            strokeWidth="0.8"
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { scale: [0.7, 1.15, 1], opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38, type: "spring", stiffness: 200 }}
          />
          <motion.circle
            cx="100"
            cy="160"
            r="4.5"
            fill="#ffffff"
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Bottom clean output labels */}
        <motion.g
          initial={nodeInit}
          animate={nodeAnim}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <circle cx="40" cy="280" r="4.5" fill="#2E6FAD" />
          <text x="40" y="300" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" fill="white" textAnchor="middle">Software</text>
        </motion.g>
        <motion.g
          initial={nodeInit}
          animate={nodeAnim}
          transition={{ duration: 0.4, delay: 0.82 }}
        >
          <circle cx="100" cy="280" r="4.5" fill="#5A7F5E" />
          <text x="100" y="300" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" fill="white" textAnchor="middle">Automation</text>
        </motion.g>
        <motion.g
          initial={nodeInit}
          animate={nodeAnim}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <circle cx="160" cy="280" r="4.5" fill="#A05C1A" />
          <text x="160" y="300" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" fill="white" text-anchor="middle">Visibility</text>
        </motion.g>
      </svg>
    </div>
  );
}
