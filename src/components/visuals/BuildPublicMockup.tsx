"use client";

import React from "react";
import { motion } from "motion/react";

export function BuildPublicMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BuildPublic interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#F0F4F1"/>
      {/* Header */}
      <rect width="800" height="44" fill="#2A5A3A"/>
      <text x="16" y="17" fontFamily="sans-serif" fontSize="10" fill="white" opacity=".7">BuildPublic</text>
      <text x="16" y="33" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="white">Meera Iyer · Fieldnotes app</text>
      
      {/* Live page indicator */}
      <g>
        <motion.circle cx="682" cy="17" r="2.5" fill="#5A7F5E" animate={{ opacity: [0.35, 1, 0.35] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
        <text x="780" y="20" fontFamily="sans-serif" fontSize="10" fill="white" opacity=".7" textAnchor="end">Public page live</text>
      </g>
      <rect x="668" y="24" width="116" height="14" rx="7" fill="white" opacity=".15"/>
      <text x="726" y="34" fontFamily="sans-serif" fontSize="9" fill="white" opacity=".7" textAnchor="middle">fieldnotes.buildpublic.co</text>
 
      {/* Private side */}
      <rect x="16" y="56" width="380" height="272" rx="8" fill="white" stroke="#E5E8ED" strokeWidth="0.5"/>
      <rect x="16" y="56" width="380" height="36" rx="8" fill="#1A2B4C" opacity=".06"/>
      <rect x="16" y="74" width="380" height="18" fill="#1A2B4C" opacity=".06"/>
      <text x="28" y="76" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#1A2B4C">MY TASKS</text>
      <rect x="316" y="64" width="68" height="20" rx="4" fill="#2A5A3A"/>
      <text x="350" y="78" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">🔒 Private</text>
 
      <text x="28" y="112" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#6B6B6B">THIS WEEK</text>
      <rect x="28" y="118" width="14" height="14" rx="3" fill="#2A5A3A"/>
      <text x="35" y="129" fontFamily="sans-serif" fontSize="9" fill="white" textAnchor="middle">✓</text>
      <text x="50" y="130" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B" textDecoration="line-through">Launch beta waitlist page</text>
 
      <rect x="28" y="140" width="14" height="14" rx="3" fill="#2A5A3A"/>
      <text x="35" y="151" fontFamily="sans-serif" fontSize="9" fill="white" textAnchor="middle">✓</text>
      <text x="50" y="152" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B" textDecoration="line-through">Write first 3 blog posts</text>
 
      <rect x="28" y="162" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" strokeWidth="1.5"/>
      <text x="50" y="174" fontFamily="sans-serif" fontSize="12" fill="#1A2B4C" fontWeight="600">Get 50 waitlist signups</text>
      <text x="382" y="174" fontFamily="sans-serif" fontSize="10" fill="#E07A20" textAnchor="end" fontWeight="600">↑ 31 so far</text>
 
      <rect x="28" y="184" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" strokeWidth="1.5"/>
      <text x="50" y="196" fontFamily="sans-serif" fontSize="12" fill="#1A2B4C">Cold email 20 potential users</text>
 
      <rect x="28" y="206" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" strokeWidth="1.5"/>
      <text x="50" y="218" fontFamily="sans-serif" fontSize="12" fill="#1A2B4C">Record product demo video</text>
 
      <text x="28" y="242" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#6B6B6B">NEXT WEEK</text>
      <rect x="28" y="248" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" strokeWidth="1.5" opacity=".5"/>
      <text x="50" y="260" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B">Launch on Product Hunt</text>
      
      <rect x="28" y="268" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" strokeWidth="1.5" opacity=".5"/>
      <text x="50" y="280" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B">Onboard first 10 beta users</text>
      
      <rect x="28" y="288" width="14" height="14" rx="3" fill="white" stroke="#E5E8ED" strokeWidth="1.5" opacity=".5"/>
      <text x="50" y="298" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B">Add analytics tracking dashboard</text>
 
      {/* Public side */}
      <rect x="412" y="56" width="372" height="272" rx="8" fill="white" stroke="#E5E8ED" strokeWidth="0.5"/>
      <rect x="412" y="56" width="372" height="36" rx="8" fill="#2A5A3A" opacity=".06"/>
      <rect x="412" y="74" width="372" height="18" fill="#2A5A3A" opacity=".06"/>
      <text x="424" y="76" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#2A5A3A">PUBLIC ROADMAP</text>
      <rect x="712" y="64" width="60" height="20" rx="4" fill="#2A5A3A" opacity=".12"/>
      <text x="742" y="78" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#2A5A3A" textAnchor="middle">📢 Public</text>
 
      <text x="424" y="112" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#6B6B6B">SHIPPED</text>
      <circle cx="430" cy="126" r="3.5" fill="#2A5A3A"/>
      <text x="444" y="130" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B">Waitlist landing page is live</text>
      
      <circle cx="430" cy="148" r="3.5" fill="#2A5A3A"/>
      <text x="444" y="152" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B">Waitlist reached 30 signups</text>
 
      <text x="424" y="184" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#6B6B6B">UP NEXT</text>
      <circle cx="430" cy="198" r="3.5" fill="#E07A20"/>
      <text x="444" y="202" fontFamily="sans-serif" fontSize="12" fill="#1A2B4C" fontWeight="600">Product demo walkthrough video</text>
      
      <circle cx="430" cy="222" r="3.5" fill="#6B6B6B" opacity=".5"/>
      <text x="444" y="226" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B">Private beta launch (10 users)</text>
 
      <text x="424" y="258" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#6B6B6B">LATER</text>
      <circle cx="430" cy="272" r="3.5" fill="#6B6B6B" opacity=".5"/>
      <text x="444" y="276" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B">Public launch on Product Hunt</text>
      
      <circle cx="430" cy="296" r="3.5" fill="#6B6B6B" opacity=".5"/>
      <text x="444" y="300" fontFamily="sans-serif" fontSize="12" fill="#6B6B6B">Self-serve registration &amp; billing</text>
    </svg>
  );
}
