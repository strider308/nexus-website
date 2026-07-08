import React from "react";

export function SecureScanMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SecureScan interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#F0F4F6"/>
      {/* Top bar */}
      <rect width="800" height="44" fill="#162830"/>
      <text x="16" y="17" font-family="sans-serif" font-size="10" fill="#3A9EAA" font-weight="700">SecureScan</text>
      <text x="16" y="33" font-family="sans-serif" font-size="12" font-weight="600" fill="white">app.example.com — Scan #47 complete</text>
      <rect x="680" y="12" width="104" height="22" rx="4" fill="#2A7D8A"/>
      <text x="732" y="26" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">+ New Scan</text>

      {/* Severity summary bar */}
      <rect x="16" y="56" width="768" height="64" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="28" y="74" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">SCAN RESULTS SUMMARY</text>
      
      <rect x="28" y="82" width="28" height="22" rx="4" fill="#C0392B"/>
      <text x="42" y="98" font-family="sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">2</text>
      <text x="62" y="95" font-family="sans-serif" font-size="10" fill="#C0392B" font-weight="700">Critical</text>
      
      <rect x="130" y="82" width="28" height="22" rx="4" fill="#E07A20"/>
      <text x="144" y="98" font-family="sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">7</text>
      <text x="164" y="95" font-family="sans-serif" font-size="10" fill="#E07A20" font-weight="700">High</text>
      
      <rect x="232" y="82" width="28" height="22" rx="4" fill="#D4AC0D"/>
      <text x="246" y="98" font-family="sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">14</text>
      <text x="266" y="95" font-family="sans-serif" font-size="10" fill="#D4AC0D" font-weight="700">Medium</text>
      
      <rect x="340" y="82" width="28" height="22" rx="4" fill="#5A9E6A"/>
      <text x="354" y="98" font-family="sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">22</text>
      <text x="374" y="95" font-family="sans-serif" font-size="10" fill="#5A9E6A" font-weight="700">Low</text>
      
      <rect x="442" y="82" width="28" height="22" rx="4" fill="#6B6B6B"/>
      <text x="456" y="98" font-family="sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">31</text>
      <text x="476" y="95" font-family="sans-serif" font-size="10" fill="#6B6B6B" font-weight="700">Info</text>
      
      <text x="768" y="84" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="end">Scanned: 2 Jul 2026</text>
      <text x="768" y="98" font-family="sans-serif" font-size="9" fill="#6B6B6B" text-anchor="end">Duration: 4m 12s</text>

      {/* Findings list */}
      <rect x="16" y="132" width="380" height="196" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="28" y="152" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C">Findings</text>

      <rect x="28" y="162" width="356" height="44" rx="5" fill="#FEF0EF"/>
      <rect x="28" y="162" width="4" height="44" rx="2" fill="#C0392B"/>
      <rect x="42" y="170" width="54" height="16" rx="3" fill="#C0392B"/>
      <text x="69" y="182" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">CRITICAL</text>
      <text x="104" y="177" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">SQL Injection — /api/search</text>
      <text x="104" y="193" font-family="sans-serif" font-size="10" fill="#6B6B6B">Unsanitised input allows arbitrary queries</text>
      <text x="372" y="180" font-family="sans-serif" font-size="10" fill="#2A7D8A" text-anchor="end" font-weight="600">Details →</text>

      <rect x="28" y="212" width="356" height="44" rx="5" fill="#FEF0EF"/>
      <rect x="28" y="212" width="4" height="44" rx="2" fill="#C0392B"/>
      <rect x="42" y="220" width="54" height="16" rx="3" fill="#C0392B"/>
      <text x="69" y="232" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">CRITICAL</text>
      <text x="104" y="227" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">Exposed .env file — root path</text>
      <text x="104" y="243" font-family="sans-serif" font-size="10" fill="#6B6B6B">Credentials accessible without auth</text>
      <text x="372" y="230" font-family="sans-serif" font-size="10" fill="#2A7D8A" text-anchor="end" font-weight="600">Details →</text>

      <rect x="28" y="262" width="356" height="36" rx="5" fill="#FFF8ED" stroke="#FFCC80" stroke-width="0.5"/>
      <rect x="28" y="262" width="4" height="36" rx="2" fill="#E07A20"/>
      <rect x="42" y="271" width="40" height="16" rx="3" fill="#E07A20"/>
      <text x="62" y="283" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">HIGH</text>
      <text x="92" y="280" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">Missing CSRF tokens — POST</text>
      <text x="372" y="280" font-family="sans-serif" font-size="10" fill="#2A7D8A" text-anchor="end" font-weight="600">Details →</text>

      <rect x="28" y="304" width="356" height="16" rx="4" fill="#F0F4F6"/>
      <text x="206" y="315" font-family="sans-serif" font-size="9" fill="#6B6B6B" font-weight="600" text-anchor="middle">+ 43 more findings — view all</text>

      {/* Finding detail panel */}
      <rect x="408" y="132" width="376" height="196" rx="8" fill="white" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="420" y="152" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C">Finding detail</text>
      <rect x="420" y="162" width="54" height="16" rx="3" fill="#C0392B"/>
      <text x="447" y="174" font-family="sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">CRITICAL</text>

      <text x="420" y="196" font-family="sans-serif" font-size="12" font-weight="700" fill="#1A2B4C">SQL Injection</text>
      <text x="420" y="210" font-family="sans-serif" font-size="10" fill="#6B6B6B">Endpoint: GET /api/search?q=</text>
      
      <text x="420" y="228" font-family="sans-serif" font-size="9" font-weight="750" fill="#6B6B6B">EVIDENCE</text>
      <rect x="420" y="234" width="352" height="38" rx="4" fill="#162830"/>
      <text x="430" y="248" font-family="monospace" font-size="10" fill="#3A9EAA">GET /api/search?q=1&apos;+OR+&apos;1&apos;=&apos;1</text>
      <text x="430" y="262" font-family="monospace" font-size="10" fill="#6FA876">→ 200 OK, 2,847 rows returned</text>
      
      <text x="420" y="288" font-family="sans-serif" font-size="9" font-weight="750" fill="#6B6B6B">REMEDIATION</text>
      <text x="420" y="304" font-family="sans-serif" font-size="10" fill="#2C2C2C">Use parameterised queries or prepared statements.</text>
      <text x="420" y="318" font-family="sans-serif" font-size="10" fill="#2C2C2C">Validate and sanitise all user-controlled input.</text>
    </svg>
  );
}
