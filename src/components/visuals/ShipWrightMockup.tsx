import React from "react";

export function ShipWrightMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ShipWright interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#F2F0F8"/>
      {/* Top bar */}
      <rect width="800" height="44" fill="#5B4B8A"/>
      <text x="16" y="17" font-family="sans-serif" font-size="10" fill="white" opacity=".7">ShipWright</text>
      <text x="16" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Q3 Launch — Design &amp; Engineering</text>
      <text x="780" y="20" font-family="sans-serif" font-size="10" fill="white" opacity=".7" text-anchor="end">Check-in due in 2h</text>
      <rect x="636" y="26" width="144" height="14" rx="7" fill="white" opacity=".15"/>
      <rect x="636" y="26" width="90" height="14" rx="7" fill="white" opacity=".3"/>
      <text x="630" y="36" font-family="sans-serif" font-size="9" fill="white" opacity=".6" text-anchor="end">62% done</text>

      {/* Three-column kanban */}
      {/* TODO column */}
      <rect x="16" y="56" width="240" height="272" rx="8" fill="#E8E4F4"/>
      <text x="28" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#5B4B8A">TODO</text>
      <rect x="220" y="66" width="22" height="18" rx="9" fill="#5B4B8A" opacity=".3"/>
      <text x="231" y="79" font-family="sans-serif" font-size="10" font-weight="700" fill="#5B4B8A" text-anchor="middle">3</text>

      <rect x="24" y="88" width="224" height="72" rx="6" fill="white" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="36" y="106" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">Write onboarding email sequence</text>
      <text x="36" y="122" font-family="sans-serif" font-size="10" fill="#6B6B6B">3 emails · welcome, day 3, day 7</text>
      <circle cx="36" cy="142" r="10" fill="#8A2A5A"/>
      <text x="36" y="146" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">P</text>
      <text x="50" y="146" font-family="sans-serif" font-size="10" fill="#6B6B6B">Priya</text>
      <rect x="174" y="134" width="64" height="18" rx="9" fill="#EEF1F7"/>
      <text x="206" y="146" font-family="sans-serif" font-size="9" fill="#5B4B8A" text-anchor="middle" font-weight="600">Due 5 Jul</text>

      <rect x="24" y="168" width="224" height="60" rx="6" fill="white" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="36" y="186" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">Set up error monitoring</text>
      <text x="36" y="202" font-family="sans-serif" font-size="10" fill="#6B6B6B">Sentry integration + alerts</text>
      <circle cx="36" cy="216" r="10" fill="#1A2B4C"/>
      <text x="36" y="220" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">R</text>
      <text x="50" y="220" font-family="sans-serif" font-size="10" fill="#6B6B6B">Rahul</text>

      <rect x="24" y="236" width="224" height="52" rx="6" fill="white" opacity=".7" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="36" y="254" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">User research — 5 interviews</text>
      <text x="36" y="270" font-family="sans-serif" font-size="10" fill="#6B6B6B">Recruit + schedule</text>

      {/* IN PROGRESS column */}
      <rect x="280" y="56" width="240" height="272" rx="8" fill="#DDD8F0"/>
      <text x="292" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#5B4B8A">IN PROGRESS</text>
      <rect x="484" y="66" width="22" height="18" rx="9" fill="#5B4B8A" opacity=".5"/>
      <text x="495" y="79" font-family="sans-serif" font-size="10" font-weight="700" fill="#5B4B8A" text-anchor="middle">3</text>

      <rect x="288" y="88" width="224" height="80" rx="6" fill="white" stroke="#E2E2DE" stroke-width="0.5"/>
      <rect x="288" y="88" width="4" height="80" rx="2" fill="#5B4B8A"/>
      <text x="300" y="106" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">Redesign pricing page</text>
      <text x="300" y="122" font-family="sans-serif" font-size="10" fill="#6B6B6B">Figma → dev handoff by EOD</text>
      <circle cx="300" cy="148" r="10" fill="#5A7F5E"/>
      <text x="300" y="152" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">A</text>
      <text x="314" y="152" font-family="sans-serif" font-size="10" fill="#6B6B6B">Ananya</text>
      <rect x="388" y="142" width="90" height="12" rx="3" fill="#F2F0F8"/>
      <rect x="388" y="142" width="65" height="12" rx="3" fill="#5B4B8A" opacity=".7"/>
      <text x="484" y="152" font-family="sans-serif" font-size="9" fill="#5B4B8A" font-weight="600" text-anchor="start">72%</text>

      <rect x="288" y="176" width="224" height="60" rx="6" fill="white" stroke="#E2E2DE" stroke-width="0.5"/>
      <rect x="288" y="176" width="4" height="60" rx="2" fill="#5B4B8A"/>
      <text x="300" y="194" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">API rate limiting</text>
      <text x="300" y="210" font-family="sans-serif" font-size="10" fill="#6B6B6B">Redis + token bucket impl.</text>
      <circle cx="300" cy="224" r="10" fill="#1A2B4C"/>
      <text x="300" y="228" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">R</text>
      <text x="314" y="228" font-family="sans-serif" font-size="10" fill="#6B6B6B">Rahul</text>

      <rect x="288" y="244" width="224" height="52" rx="6" fill="white" opacity=".8" stroke="#E2E2DE" stroke-width="0.5"/>
      <rect x="288" y="244" width="4" height="52" rx="2" fill="#D4AC0D"/>
      <text x="300" y="262" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">Weekly check-in digest</text>
      <text x="300" y="278" font-family="sans-serif" font-size="10" fill="#6B6B6B">Email template + send logic</text>

      {/* DONE column */}
      <rect x="544" y="56" width="240" height="272" rx="8" fill="#E4F0E6"/>
      <text x="556" y="78" font-family="sans-serif" font-size="11" font-weight="700" fill="#3A7A4A">DONE</text>
      <rect x="748" y="66" width="22" height="18" rx="9" fill="#3A7A4A" opacity=".4"/>
      <text x="759" y="79" font-family="sans-serif" font-size="10" font-weight="700" fill="#3A7A4A" text-anchor="middle">3</text>

      <rect x="552" y="88" width="224" height="60" rx="6" fill="white" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="564" y="106" font-family="sans-serif" font-size="11" font-weight="600" fill="#6B6B6B" text-decoration="line-through">Define Q3 OKRs</text>
      <text x="564" y="122" font-family="sans-serif" font-size="10" fill="#6B6B6B">Completed 28 Jun</text>
      <circle cx="564" cy="136" r="10" fill="#5B4B8A" opacity=".5"/>
      <text x="564" y="140" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">P</text>
      <rect x="716" y="126" width="44" height="16" rx="8" fill="#E4F0E6"/>
      <text x="738" y="137" font-family="sans-serif" font-size="9" fill="#3A7A4A" font-weight="750" text-anchor="middle">Done</text>

      <rect x="552" y="156" width="224" height="60" rx="6" fill="white" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="564" y="174" font-family="sans-serif" font-size="11" font-weight="600" fill="#6B6B6B" text-decoration="line-through">Onboarding flow v1</text>
      <text x="564" y="190" font-family="sans-serif" font-size="10" fill="#6B6B6B">Completed 30 Jun</text>
      <circle cx="564" cy="204" r="10" fill="#8A2A5A" opacity=".5"/>
      <text x="564" y="208" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">P</text>
      <rect x="716" y="194" width="44" height="16" rx="8" fill="#E4F0E6"/>
      <text x="738" y="205" font-family="sans-serif" font-size="9" fill="#3A7A4A" font-weight="750" text-anchor="middle">Done</text>

      <rect x="552" y="224" width="224" height="52" rx="6" fill="white" opacity=".7" stroke="#E2E2DE" stroke-width="0.5"/>
      <text x="564" y="242" font-family="sans-serif" font-size="11" font-weight="600" fill="#6B6B6B" text-decoration="line-through">Fix auth token refresh bug</text>
      <text x="564" y="258" font-family="sans-serif" font-size="10" fill="#6B6B6B">Completed 1 Jul</text>
    </svg>
  );
}
