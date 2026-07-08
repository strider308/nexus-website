"use client";

import React from "react";
import { motion } from "motion/react";

export function RestaurantOSMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RestaurantOS interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#FAF4EE"/>
      {/* Header */}
      <rect width="800" height="44" fill="#A05C1A"/>
      <text x="16" y="17" font-family="sans-serif" font-size="10" fill="white" opacity=".7">RestaurantOS</text>
      <text x="16" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="white">The Spice Garden · 7:42 PM · 6 tables active</text>
      <rect x="644" y="12" width="140" height="22" rx="4" fill="white" opacity=".2"/>
      <text x="714" y="27" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">₹ 18,240 today</text>
 
      {/* Floor plan */}
      <rect x="16" y="56" width="260" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="28" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#A05C1A">FLOOR PLAN</text>
      
      {/* Tables */}
      <rect x="28" y="88" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="58" y="111" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T1</text>
      <text x="58" y="127" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">4 pax</text>
      
      <rect x="100" y="88" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="130" y="111" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T2</text>
      <text x="130" y="127" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">2 pax</text>
      
      <rect x="172" y="88" width="60" height="56" rx="6" fill="#E5E8ED" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="202" y="111" font-family="sans-serif" font-size="11" font-weight="700" fill="#6B6B6B" text-anchor="middle">T3</text>
      <text x="202" y="127" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Free</text>
 
      <rect x="28" y="156" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="58" y="179" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T4</text>
      <text x="58" y="195" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">6 pax</text>
      
      <rect x="100" y="156" width="60" height="56" rx="6" fill="#E5E8ED" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="130" y="179" font-family="sans-serif" font-size="11" font-weight="700" fill="#6B6B6B" text-anchor="middle">T5</text>
      <text x="130" y="195" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Free</text>
      
      <rect x="172" y="156" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="202" y="179" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T6</text>
      <text x="202" y="195" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">2 pax</text>
 
      <rect x="28" y="224" width="60" height="56" rx="6" fill="#A05C1A"/>
      <text x="58" y="247" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T7</text>
      <text x="58" y="263" font-family="sans-serif" font-size="9" fill="white" opacity=".8" text-anchor="middle">4 pax</text>
      
      {/* Table T8 with pulsing billing status */}
      <g>
        <motion.rect x="100" y="224" width="60" height="56" rx="6" fill="#D4AC0D" animate={{ opacity: [0.8, 1, 0.8] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }} />
        <text x="130" y="247" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">T8</text>
        <text x="130" y="263" font-family="sans-serif" font-size="9" fill="white" text-anchor="middle">Billing</text>
      </g>
 
      {/* Active order panel */}
      <rect x="292" y="56" width="492" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="308" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C">ACTIVE ORDER — TABLE T1</text>
      <text x="768" y="78" font-family="sans-serif" font-size="10" fill="#6B6B6B" text-anchor="end">4 pax · Waiter: Rahul</text>
      
      <rect x="308" y="90" width="460" height="1" fill="#E5E8ED"/>
 
      {/* Items list */}
      <text x="308" y="112" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">2x  Paneer Tikka</text>
      <text x="768" y="112" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹ 640</text>
      
      <text x="308" y="132" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">1x  Butter Chicken</text>
      <text x="768" y="132" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹ 420</text>
      
      <text x="308" y="152" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">4x  Butter Naan</text>
      <text x="768" y="152" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹ 160</text>
      
      <text x="308" y="172" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">2x  Jeera Rice</text>
      <text x="768" y="172" font-family="sans-serif" font-size="11" fill="#1A2B4C" text-anchor="end">₹ 240</text>
 
      <rect x="308" y="186" width="460" height="1" fill="#E5E8ED"/>
      
      {/* Kitchen status */}
      <text x="308" y="208" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">KITCHEN STATUS</text>
      <rect x="308" y="216" width="460" height="32" rx="4" fill="#FEF9E7" stroke="#F9E79F" stroke-width="0.5"/>
      <circle cx="324" cy="232" r="4" fill="#F1C40F"/>
      <text x="336" y="236" font-family="sans-serif" font-size="11" font-weight="600" fill="#7D6608">Cooking (Butter Naan, Jeera Rice) · Started 4m ago</text>
      
      <rect x="308" y="254" width="460" height="1" fill="#E5E8ED"/>
 
      {/* Billing summary */}
      <text x="308" y="278" font-family="sans-serif" font-size="11" font-weight="700" fill="#6B6B6B">SUBTOTAL</text>
      <text x="768" y="278" font-family="sans-serif" font-size="11" font-weight="700" fill="#6B6B6B" text-anchor="end">₹ 1,460</text>
      
      <text x="308" y="294" font-family="sans-serif" font-size="10" fill="#6B6B6B">Taxes &amp; charges (18% GST + service charge)</text>
      <text x="768" y="294" font-family="sans-serif" font-size="11" fill="#6B6B6B" text-anchor="end">₹ 262.80</text>
      
      <text x="308" y="314" font-family="sans-serif" font-size="13" font-weight="700" fill="#1A2B4C">ESTIMATED TOTAL</text>
      <text x="768" y="314" font-family="sans-serif" font-size="13" font-weight="700" fill="#1A2B4C" text-anchor="end">₹ 1,722.80</text>
    </svg>
  );
}
