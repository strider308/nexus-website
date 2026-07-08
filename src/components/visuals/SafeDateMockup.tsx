"use client";

import React from "react";

export function SafeDateMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SafeDate interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#F9F0F5"/>
      {/* Header */}
      <rect width="800" height="44" fill="#8A2A5A"/>
      <text x="16" y="17" font-family="sans-serif" font-size="10" fill="white" opacity=".7">SafeDate</text>
      <text x="16" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Active plan · Coffee date</text>
      
      {/* Static check-in capsule */}
      <g>
        <rect x="660" y="12" width="124" height="22" rx="11" fill="white" opacity="0.2" />
        <text x="722" y="27" font-family="sans-serif" font-size="10" font-weight="700" fill="white" text-anchor="middle">Check-in: 2h 14m</text>
      </g>
 
      {/* Date plan card */}
      <rect x="16" y="56" width="300" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="28" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#8A2A5A">YOUR DATE PLAN</text>
      <text x="28" y="100" font-family="sans-serif" font-size="14" font-weight="700" fill="#1A2B4C">Coffee with Arjun</text>
      <text x="28" y="116" font-family="sans-serif" font-size="11" fill="#6B6B6B">Wednesday, 2 July 2026</text>
 
      <rect x="28" y="128" width="276" height="1" fill="#E5E8ED"/>
 
      <text x="28" y="150" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">WHERE</text>
      <text x="28" y="166" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">Blue Tokai Coffee</text>
      <text x="28" y="180" font-family="sans-serif" font-size="11" fill="#6B6B6B">Indiranagar, Bangalore</text>
 
      <text x="28" y="202" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">TIME</text>
      <text x="28" y="218" font-family="sans-serif" font-size="12" fill="#1A2B4C">4:00 PM → until done</text>
 
      <text x="28" y="240" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">CHECK-IN TIME</text>
      <text x="28" y="256" font-family="sans-serif" font-size="12" fill="#1A2B4C">6:30 PM</text>
      <text x="28" y="270" font-family="sans-serif" font-size="10" fill="#6B6B6B">Grace period: 15 minutes</text>
 
      <rect x="28" y="286" width="276" height="32" rx="4" fill="#8A2A5A"/>
      <text x="166" y="306" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">I&apos;m safe — close plan</text>
 
      {/* Trusted contacts panel */}
      <rect x="328" y="56" width="232" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="340" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#8A2A5A">TRUSTED CONTACTS</text>
      <text x="340" y="96" font-family="sans-serif" font-size="10" fill="#6B6B6B">2 contacts can see this plan</text>
 
      <rect x="340" y="106" width="208" height="60" rx="6" fill="#F9F0F5"/>
      <circle cx="360" cy="136" r="18" fill="#8A2A5A"/>
      <text x="360" y="140" font-family="sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">M</text>
      <text x="386" y="128" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">Meera (sister)</text>
      <text x="386" y="144" font-family="sans-serif" font-size="10" fill="#6B6B6B">Notified when plan shared</text>
      <rect x="504" y="118" width="36" height="16" rx="8" fill="#E8F5E9"/>
      <text x="522" y="129" font-family="sans-serif" font-size="9" font-weight="700" fill="#3A7A4A" text-anchor="middle">Active</text>
 
      <rect x="340" y="174" width="208" height="60" rx="6" fill="#F4F6FA"/>
      <circle cx="360" cy="204" r="18" fill="#8A2A5A" opacity=".7"/>
      <text x="360" y="208" font-family="sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">A</text>
      <text x="386" y="196" font-family="sans-serif" font-size="12" font-weight="600" fill="#1A2B4C">Amit (friend)</text>
      <text x="386" y="212" font-family="sans-serif" font-size="10" fill="#6B6B6B">View-only access active</text>
      <rect x="504" y="186" width="36" height="16" rx="8" fill="#E8F5E9"/>
      <text x="522" y="197" font-family="sans-serif" font-size="9" font-weight="700" fill="#3A7A4A" text-anchor="middle">Active</text>
 
      {/* Activity log */}
      <rect x="576" y="56" width="208" height="272" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="588" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#8A2A5A">LOG</text>
 
      <circle cx="594" cy="106" r="3" fill="#3A7A4A"/>
      <text x="606" y="109" font-family="sans-serif" font-size="10" fill="#1A2B4C">Plan created — 4:02 PM</text>
      <text x="606" y="121" font-family="sans-serif" font-size="9" fill="#6B6B6B">Blue Tokai Indiranagar</text>
 
      <circle cx="594" cy="146" r="3" fill="#3A7A4A"/>
      <text x="606" y="149" font-family="sans-serif" font-size="10" fill="#1A2B4C">Meera notified — 4:03 PM</text>
      <text x="606" y="161" font-family="sans-serif" font-size="9" fill="#6B6B6B">SMS confirmation received</text>
 
      <circle cx="594" cy="186" r="3" fill="#3A7A4A"/>
      <text x="606" y="189" font-family="sans-serif" font-size="10" fill="#1A2B4C">Amit notified — 4:05 PM</text>
      <text x="606" y="201" font-family="sans-serif" font-size="9" fill="#6B6B6B">Email link accessed</text>
    </svg>
  );
}
