import React from "react";

export function AarogyaMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aarogya interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#F2F7F3"/>
      {/* Header bar */}
      <rect width="800" height="48" fill="#5A7F5E"/>
      <text x="20" y="20" font-family="sans-serif" font-size="11" fill="white" opacity=".7">Aarogya</text>
      <text x="20" y="37" font-family="sans-serif" font-size="14" font-weight="700" fill="white">Good morning, Priya</text>
      <text x="780" y="29" font-family="sans-serif" font-size="11" fill="white" opacity=".7" text-anchor="end">2 Jul 2026</text>

      {/* Metric tiles row */}
      <rect x="16" y="60" width="174" height="80" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="28" y="82" font-family="sans-serif" font-size="10" font-weight="700" fill="#5A7F5E">BLOOD PRESSURE</text>
      <text x="28" y="108" font-family="sans-serif" font-size="26" font-weight="700" fill="#1A2B4C">120<tspan font-size="14" fill="#6B6B6B">/</tspan>78</text>
      <text x="28" y="126" font-family="sans-serif" font-size="10" fill="#3A7A4A">↓ Improved from last week</text>

      <rect x="202" y="60" width="174" height="80" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="214" y="82" font-family="sans-serif" font-size="10" font-weight="700" fill="#5A7F5E">BLOOD GLUCOSE</text>
      <text x="214" y="108" font-family="sans-serif" font-size="26" font-weight="700" fill="#1A2B4C">104<tspan font-size="14" fill="#6B6B6B"> mg/dL</tspan></text>
      <text x="214" y="126" font-family="sans-serif" font-size="10" fill="#6B6B6B">Fasting · this morning</text>

      <rect x="388" y="60" width="174" height="80" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="400" y="82" font-family="sans-serif" font-size="10" font-weight="700" fill="#5A7F5E">WEIGHT</text>
      <text x="400" y="108" font-family="sans-serif" font-size="26" font-weight="700" fill="#1A2B4C">67.2<tspan font-size="14" fill="#6B6B6B"> kg</tspan></text>
      <text x="400" y="126" font-family="sans-serif" font-size="10" fill="#E07A20">↑ +0.4 from last week</text>

      <rect x="574" y="60" width="210" height="80" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="586" y="82" font-family="sans-serif" font-size="10" font-weight="700" fill="#5A7F5E">MEDICATIONS TODAY</text>
      <text x="586" y="100" font-family="sans-serif" font-size="11" fill="#1A2B4C">✓  Metformin 500mg — 8:00 AM</text>
      <text x="586" y="116" font-family="sans-serif" font-size="11" fill="#1A2B4C">✓  Amlodipine 5mg — 8:00 AM</text>
      <text x="586" y="132" font-family="sans-serif" font-size="11" fill="#6B6B6B">○  Metformin 500mg — 8:00 PM</text>

      {/* Trend chart */}
      <rect x="16" y="152" width="498" height="172" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="28" y="174" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C">Blood Pressure — Last 4 weeks</text>
      <text x="480" y="174" font-family="sans-serif" font-size="10" fill="#5A7F5E" text-anchor="end" font-weight="600">Systolic</text>

      {/* Y axis labels */}
      <text x="28" y="198" font-family="sans-serif" font-size="9" fill="#6B6B6B">150</text>
      <text x="28" y="228" font-family="sans-serif" font-size="9" fill="#6B6B6B">130</text>
      <text x="28" y="258" font-family="sans-serif" font-size="9" fill="#6B6B6B">110</text>
      <text x="28" y="288" font-family="sans-serif" font-size="9" fill="#6B6B6B">90</text>
      
      {/* Grid lines */}
      <line x1="48" y1="193" x2="490" y2="193" stroke="#E5E8ED" stroke-width="1"/>
      <line x1="48" y1="223" x2="490" y2="223" stroke="#E5E8ED" stroke-width="1"/>
      <line x1="48" y1="253" x2="490" y2="253" stroke="#E5E8ED" stroke-width="1"/>
      <line x1="48" y1="283" x2="490" y2="283" stroke="#E5E8ED" stroke-width="1"/>
      
      {/* BP trend line (systolic) - improving */}
      <polyline points="60,248 120,238 180,245 240,232 300,228 360,235 420,222 480,213" fill="none" stroke="#5A7F5E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      
      {/* Data point dots */}
      <circle cx="60" cy="248" r="4" fill="#5A7F5E"/>
      <circle cx="120" cy="238" r="4" fill="#5A7F5E"/>
      <circle cx="180" cy="245" r="4" fill="#5A7F5E"/>
      <circle cx="240" cy="232" r="4" fill="#5A7F5E"/>
      <circle cx="300" cy="228" r="4" fill="#5A7F5E"/>
      <circle cx="360" cy="235" r="4" fill="#5A7F5E"/>
      <circle cx="420" cy="222" r="4" fill="#5A7F5E"/>
      <circle cx="480" cy="213" r="5" fill="#5A7F5E" stroke="white" stroke-width="2"/>
      
      {/* X axis labels */}
      <text x="60" y="304" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Jun 4</text>
      <text x="180" y="304" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Jun 11</text>
      <text x="300" y="304" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Jun 18</text>
      <text x="420" y="304" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="middle">Jun 25</text>
      <text x="480" y="304" font-family="sans-serif" font-size="9" fill="#5A7F5E" font-weight="700" text-anchor="middle">Today</text>
      
      {/* Weekly summary panel */}
      <rect x="526" y="152" width="258" height="172" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="538" y="174" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C">Weekly summary</text>
      <text x="538" y="196" font-family="sans-serif" font-size="10" fill="#6B6B6B">BP readings logged</text>
      <text x="770" y="196" font-family="sans-serif" font-size="10" font-weight="700" fill="#1A2B4C" text-anchor="end">7 / 7 days</text>
      <text x="538" y="214" font-family="sans-serif" font-size="10" fill="#6B6B6B">Glucose readings</text>
      <text x="770" y="214" font-family="sans-serif" font-size="10" font-weight="700" fill="#1A2B4C" text-anchor="end">5 / 7 days</text>
      <text x="538" y="232" font-family="sans-serif" font-size="10" fill="#6B6B6B">Medication adherence</text>
      <text x="770" y="232" font-family="sans-serif" font-size="10" font-weight="700" fill="#3A7A4A" text-anchor="end">94%</text>
      <text x="538" y="250" font-family="sans-serif" font-size="10" fill="#6B6B6B">Avg systolic BP</text>
      <text x="770" y="250" font-family="sans-serif" font-size="10" font-weight="700" fill="#1A2B4C" text-anchor="end">130 mmHg</text>
      
      <rect x="538" y="264" width="232" height="1" fill="#E5E8ED"/>
      <rect x="538" y="274" width="232" height="36" rx="6" fill="#F2F7F3"/>
      <text x="654" y="289" font-family="sans-serif" font-size="10" font-weight="700" fill="#5A7F5E" text-anchor="middle">Export this week&apos;s data</text>
      <text x="654" y="302" font-family="sans-serif" font-size="9" fill="#5A7F5E" text-anchor="middle">PDF · CSV · Share with doctor</text>
    </svg>
  );
}
