"use client";

import React from "react";
import { motion } from "motion/react";

export function SecureScanMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SecureScan interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#F0F4F6"/>
      {/* Top bar */}
      <rect width="800" height="44" fill="#162830"/>
      <text x="16" y="17" fontFamily="sans-serif" fontSize="10" fill="#3A9EAA" fontWeight="700">SecureScan</text>
      <text x="16" y="33" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill="white">app.example.com — Scan #47 complete</text>
      <rect x="680" y="12" width="104" height="22" rx="4" fill="#2A7D8A"/>
      <text x="732" y="26" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">+ New Scan</text>
 
      {/* Severity summary bar */}
      <rect x="16" y="56" width="768" height="64" rx="8" fill="white" stroke="#E5E8ED" strokeWidth="0.5"/>
      <text x="28" y="74" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#6B6B6B">SCAN RESULTS SUMMARY</text>
      
      <rect x="28" y="82" width="28" height="22" rx="4" fill="#C0392B"/>
      <text x="42" y="98" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">2</text>
      <text x="62" y="95" fontFamily="sans-serif" fontSize="10" fill="#C0392B" fontWeight="700">Critical</text>
      
      <rect x="130" y="82" width="28" height="22" rx="4" fill="#E07A20"/>
      <text x="144" y="98" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">7</text>
      <text x="164" y="95" fontFamily="sans-serif" fontSize="10" fill="#E07A20" fontWeight="700">High</text>
      
      <rect x="232" y="82" width="28" height="22" rx="4" fill="#D4AC0D"/>
      <text x="246" y="98" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">14</text>
      <text x="266" y="95" fontFamily="sans-serif" fontSize="10" fill="#D4AC0D" fontWeight="700">Medium</text>
      
      <rect x="340" y="82" width="28" height="22" rx="4" fill="#5A9E6A"/>
      <text x="354" y="98" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">22</text>
      <text x="374" y="95" fontFamily="sans-serif" fontSize="10" fill="#5A9E6A" fontWeight="700">Low</text>
      
      <rect x="442" y="82" width="28" height="22" rx="4" fill="#6B6B6B"/>
      <text x="456" y="98" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">31</text>
      <text x="476" y="95" fontFamily="sans-serif" fontSize="10" fill="#6B6B6B" fontWeight="700">Info</text>
      
      <text x="768" y="84" fontFamily="sans-serif" fontSize="9" fill="#6B6B6B" textAnchor="end">Scanned: 2 Jul 2026</text>
      <text x="768" y="98" fontFamily="sans-serif" fontSize="9" fill="#6B6B6B" textAnchor="end">Duration: 4m 12s</text>
 
      {/* Findings list */}
      <rect x="16" y="132" width="380" height="196" rx="8" fill="white" stroke="#E5E8ED" strokeWidth="0.5"/>
      <text x="28" y="152" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#1A2B4C">Findings</text>
 
      <rect x="28" y="162" width="356" height="44" rx="5" fill="#FEF0EF"/>
      <rect x="28" y="162" width="4" height="44" rx="2" fill="#C0392B"/>
      
      {/* Pulsing CRITICAL label */}
      <g>
        <motion.rect x="42" y="170" width="54" height="16" rx="3" fill="#C0392B" animate={{ opacity: [0.75, 1, 0.75] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} />
        <text x="69" y="182" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">CRITICAL</text>
      </g>
      <text x="104" y="177" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#1A2B4C">SQL Injection — /api/search</text>
      <text x="104" y="193" fontFamily="sans-serif" fontSize="10" fill="#6B6B6B">Parameter &apos;q&apos; is vulnerable in query builder</text>
 
      <rect x="28" y="214" width="356" height="44" rx="5" fill="#FEF5EF"/>
      <rect x="28" y="214" width="4" height="44" rx="2" fill="#E07A20"/>
      <rect x="42" y="222" width="36" height="16" rx="3" fill="#E07A20"/>
      <text x="60" y="234" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">HIGH</text>
      <text x="86" y="229" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#1A2B4C">Expired SSL Certificate</text>
      <text x="86" y="245" fontFamily="sans-serif" fontSize="10" fill="#6B6B6B">Staging domain certificate expires in 3 days</text>
 
      <rect x="28" y="266" width="356" height="52" rx="5" fill="white" stroke="#E5E8ED" strokeWidth="0.5"/>
      <rect x="28" y="266" width="4" height="52" rx="2" fill="#D4AC0D"/>
      <rect x="42" y="274" width="44" height="16" rx="3" fill="#D4AC0D"/>
      <text x="64" y="286" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">MEDIUM</text>
      <text x="94" y="281" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#1A2B4C">Missing security headers</text>
      <text x="94" y="297" fontFamily="sans-serif" fontSize="9" fill="#6B6B6B">X-Frame-Options, CSP header not fully configured</text>
      <text x="94" y="309" fontFamily="sans-serif" fontSize="9" fill="#6B6B6B">on production API Gateway endpoints</text>
 
      {/* Code snippet details */}
      <rect x="412" y="132" width="372" height="196" rx="8" fill="white" stroke="#E5E8ED" strokeWidth="0.5"/>
      <path d="M 412 132 L 784 132 L 784 168 L 412 168 Z" fill="#F8FAFC"/>
      <rect x="412" y="132" width="372" height="36" fill="#F8FAFC" rx="8"/>
      <rect x="412" y="152" width="372" height="16" fill="#F8FAFC"/>
      <text x="428" y="154" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#1A2B4C">Vulnerable Code — search.ts:24</text>
      
      <rect x="424" y="178" width="348" height="136" rx="4" fill="#1E293B"/>
      <text x="436" y="196" fontFamily="monospace" fontSize="10" fill="#94A3B8">22 |  const query = req.query.q;</text>
      <text x="436" y="212" fontFamily="monospace" fontSize="10" fill="#EF4444">23 |  const sql = `SELECT * FROM items` + </text>
      <text x="436" y="228" fontFamily="monospace" fontSize="10" fill="#EF4444">24 |              `WHERE name LIKE &apos;%{"${query}"}%&apos;`;</text>
      <text x="436" y="244" fontFamily="monospace" fontSize="10" fill="#F59E0B">25 |  // TODO: sanitize input parameters</text>
      <text x="436" y="260" fontFamily="monospace" fontSize="10" fill="#94A3B8">26 |  const result = await db.execute(sql);</text>
      <text x="436" y="276" fontFamily="monospace" fontSize="10" fill="#94A3B8">27 |  return res.json(result);</text>
    </svg>
  );
}
