"use client";

import React from "react";
import { motion } from "motion/react";

export function ClinicOSMockup() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ClinicOS interface preview" className="w-full block select-none">
      {/* Background */}
      <rect width="800" height="340" fill="#F4F6FA"/>
      {/* Sidebar */}
      <rect width="160" height="340" fill="#1A2B4C"/>
      <text x="16" y="30" font-family="sans-serif" font-size="12" font-weight="700" fill="white" opacity=".9">ClinicOS</text>
      <rect x="8" y="44" width="144" height="28" rx="4" fill="white" opacity=".12"/>
      <text x="16" y="63" font-family="sans-serif" font-size="11" fill="white">Queue</text>
      <text x="16" y="90" font-family="sans-serif" font-size="11" fill="white" opacity=".5">Patients</text>
      <text x="16" y="112" font-family="sans-serif" font-size="11" fill="white" opacity=".5">Billing</text>
      <text x="16" y="134" font-family="sans-serif" font-size="11" fill="white" opacity=".5">Pharmacy</text>
      
      {/* Queue panel */}
      <rect x="176" y="16" width="208" height="308" rx="8" fill="white" stroke="#E5E8ED" stroke-width="1"/>
      <text x="192" y="38" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C">LIVE QUEUE</text>
      <text x="368" y="38" font-family="sans-serif" font-size="10" fill="#6B6B6B" text-anchor="end">4 waiting</text>
      
      {/* Queue items */}
      <rect x="184" y="56" width="192" height="40" rx="5" fill="#EEF2F9"/>
      <rect x="188" y="65" width="24" height="22" rx="4" fill="#1A2B4C"/>
      <text x="200" y="80" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">42</text>
      <text x="220" y="74" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C">Rajesh Kumar</text>
      <text x="220" y="87" font-family="sans-serif" font-size="10" fill="#6B6B6B">Called · Room 3</text>
      
      <rect x="184" y="104" width="192" height="40" rx="5" fill="white" stroke="#E5E8ED" stroke-width="1"/>
      <rect x="188" y="113" width="24" height="22" rx="4" fill="#6B6B6B" opacity=".3"/>
      <text x="200" y="128" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C" text-anchor="middle">43</text>
      <text x="220" y="122" font-family="sans-serif" font-size="11" fill="#1A2B4C">Meera Iyer</text>
      <text x="220" y="135" font-family="sans-serif" font-size="10" fill="#2E7D32">Arrived · Waiting</text>
      <motion.circle cx="312" cy="132" r="2.5" fill="#2E7D32" animate={{ opacity: [0.35, 1, 0.35] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
 
      <rect x="184" y="152" width="192" height="40" rx="5" fill="white" stroke="#E5E8ED" stroke-width="1"/>
      <rect x="188" y="161" width="24" height="22" rx="4" fill="#6B6B6B" opacity=".3"/>
      <text x="200" y="176" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C" text-anchor="middle">44</text>
      <text x="220" y="170" font-family="sans-serif" font-size="11" fill="#1A2B4C">Mohammed Irfan</text>
      <text x="220" y="183" font-family="sans-serif" font-size="10" fill="#6B6B6B">New patient · ENT</text>
 
      <rect x="184" y="200" width="192" height="40" rx="5" fill="white" stroke="#E5E8ED" stroke-width="1"/>
      <rect x="188" y="209" width="24" height="22" rx="4" fill="#6B6B6B" opacity=".3"/>
      <text x="200" y="224" font-family="sans-serif" font-size="11" font-weight="700" fill="#1A2B4C" text-anchor="middle">45</text>
      <text x="220" y="218" font-family="sans-serif" font-size="11" fill="#1A2B4C">Anita Nair</text>
      <text x="220" y="231" font-family="sans-serif" font-size="10" fill="#6B6B6B">Blood pressure check</text>
 
      {/* Doctor session panel */}
      <rect x="400" y="16" width="384" height="308" rx="8" fill="white" stroke="#E5E8ED" stroke-width="1"/>
      <path d="M 400 16 L 784 16 L 784 64 L 400 64 Z" fill="#1A2B4C"/>
      {/* Fix round corners of path to match rect */}
      <rect x="400" y="16" width="384" height="48" fill="#1A2B4C" rx="8"/>
      <rect x="400" y="44" width="384" height="20" fill="#1A2B4C"/>
      
      <text x="416" y="36" font-family="sans-serif" font-size="10" fill="white" opacity=".6" font-weight="600">NOW CONSULTING</text>
      <text x="416" y="52" font-family="sans-serif" font-size="13" font-weight="700" fill="white">Token 42 · Rajesh Kumar</text>
      <text x="768" y="46" font-family="sans-serif" font-size="10" fill="white" opacity=".6" text-anchor="end">9:22 AM</text>
 
      <text x="416" y="88" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">PATIENT</text>
      <text x="416" y="104" font-family="sans-serif" font-size="13" font-weight="600" fill="#1A2B4C">Rajesh Kumar, 54 M</text>
      <text x="416" y="120" font-family="sans-serif" font-size="11" fill="#6B6B6B">GP Consultation · Returning patient</text>
 
      <rect x="416" y="132" width="352" height="1" fill="#E5E8ED"/>
 
      <text x="416" y="152" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">NOTES</text>
      <rect x="416" y="160" width="352" height="56" rx="4" fill="#F8F8F8" stroke="#E5E8ED" stroke-width="0.5"/>
      <text x="426" y="176" font-family="sans-serif" font-size="11" fill="#2C2C2C">Presenting: mild chest discomfort, shortness</text>
      <text x="426" y="190" font-family="sans-serif" font-size="11" fill="#2C2C2C">of breath on exertion. BP 138/88. Pulse 76.</text>
      <text x="426" y="204" font-family="sans-serif" font-size="11" fill="#6B6B6B">History: hypertension (managed). No allergies.</text>
 
      {/* consultation actions */}
      <rect x="416" y="228" width="110" height="30" rx="4" fill="#1A2B4C"/>
      <text x="471" y="246" font-family="sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">Prescription</text>
      
      <rect x="534" y="228" width="110" height="30" rx="4" fill="#EEF1F7"/>
      <text x="589" y="246" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C" text-anchor="middle">Lab order</text>
      
      <rect x="652" y="228" width="116" height="30" rx="4" fill="#EEF1F7"/>
      <text x="710" y="246" font-family="sans-serif" font-size="11" font-weight="600" fill="#1A2B4C" text-anchor="middle">Complete &amp; bill</text>
 
      <rect x="416" y="272" width="352" height="1" fill="#E5E8ED"/>
      <text x="416" y="290" font-family="sans-serif" font-size="10" font-weight="700" fill="#6B6B6B">PREVIOUS VISITS</text>
      <text x="416" y="306" font-family="sans-serif" font-size="11" fill="#6B6B6B">12 Jun — BP 142/90, prescribed amlodipine</text>
      <text x="416" y="320" font-family="sans-serif" font-size="11" fill="#6B6B6B">28 May — Routine check, all clear</text>
    </svg>
  );
}
