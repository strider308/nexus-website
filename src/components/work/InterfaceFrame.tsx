"use client";

import React from "react";

interface InterfaceFrameProps {
  systemId: string;
  frameId: string;
  caption?: string;
}

export function InterfaceFrame({ systemId, frameId, caption }: InterfaceFrameProps) {
  const renderMockup = () => {
    // -------------------------------------------------------------
    // CLINICOS SVG CASES (7 distinct interfaces)
    // -------------------------------------------------------------
    if (systemId === "clinicos") {
      switch (frameId) {
        case "reception_setup":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#1A2B4C" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#2a7d8a] text-[11px]">CLINICOS // PATIENT REGISTRATION MANAGER</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">REG-DESK // CLIENT INDEX</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="220" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">INDEX MATCH FINDER</text>
              <rect x="32" y="92" width="196" height="28" fill="rgba(222,219,200,0.03)" stroke="rgba(222,219,200,0.2)" />
              <text x="42" y="110" className="fill-[#dedbc8]">+91 98450 12845</text>
              <rect x="32" y="136" width="196" height="188" fill="rgba(42,125,138,0.03)" stroke="rgba(42,125,138,0.3)" />
              <text x="42" y="156" className="font-bold fill-[#2a7d8a]">FAMILY LEDGER // #FM-4028</text>
              <text x="42" y="180" className="fill-[#dedbc8] font-bold">Primary: Ramesh Nair (54 M)</text>
              <text x="42" y="194" className="fill-gray-400">BP: 138/88 // Verified</text>
              <line x1="42" y1="208" x2="218" y2="208" stroke="rgba(42,125,138,0.2)" />
              <text x="42" y="226" className="fill-[#dedbc8]">Member 2: Anita Nair (48 F)</text>
              <text x="42" y="240" className="fill-gray-400">Diabetic Review // Arrived</text>
              <line x1="42" y1="254" x2="218" y2="254" stroke="rgba(42,125,138,0.2)" />
              <text x="260" y="60" width="520" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="280" y="80" className="font-bold fill-gray-400">CREATE PROFILE REGISTRY</text>
              <text x="280" y="105" className="fill-gray-500">Add new member under primary ledger index:</text>
              <rect x="280" y="118" width="480" height="160" fill="rgba(222,219,200,0.02)" stroke="rgba(222,219,200,0.1)" />
              <text x="295" y="140" className="fill-gray-400">First Name: Dev // Last Name: Nair</text>
              <text x="295" y="160" className="fill-gray-400">Gender: Male // Age: 18 // Relation: Son</text>
              <rect x="295" y="180" width="120" height="24" fill="#2a7d8a" />
              <text x="355" y="195" className="fill-[#070707] font-bold text-center" textAnchor="middle">SAVE ENTRY</text>
            </svg>
          );
        case "token_view":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#1A2B4C" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#2a7d8a] text-[11px]">CLINICOS // WAITING ROOM QUEUE MONITOR</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">LIVE STATUS</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="480" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">ACTIVE WAITING ROOM TOKENS</text>
              <text x="32" y="110" className="fill-[#2a7d8a] font-bold">#09 Anita Nair &mdash;&mdash; Chamber 02 &mdash;&mdash; ARRIVED</text>
              <text x="32" y="130" className="fill-[#2e6fad] font-bold">#12 Meera Iyer &mdash;&mdash; Chamber 01 &mdash;&mdash; CONSULTING</text>
              <text x="32" y="150" className="fill-gray-500">#13 Rajesh Kumar &mdash;&mdash; Chamber 01 &mdash;&mdash; DIAGNOSTICS</text>
              <text x="520" y="60" width="260" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="532" y="80" className="font-bold fill-gray-400">TOKEN ISSUANCE</text>
              <rect x="532" y="95" width="236" height="60" fill="rgba(42,125,138,0.1)" stroke="#2a7d8a" />
              <text x="650" y="125" className="fill-white font-bold text-center" textAnchor="middle">ISSUE SAME-DAY TOKEN</text>
            </svg>
          );
        case "consult_note":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#1A2B4C" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#2a7d8a] text-[11px]">CLINICOS // CONSULTATION CONSOLE</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">PHYSICIAN INTERFACE</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="500" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">CLINICAL ENCOUNTER NOTES // TOKEN #09</text>
              <text x="32" y="105" className="fill-white font-bold">Patient: Anita Nair (48 F)</text>
              <rect x="32" y="120" width="456" height="80" fill="rgba(222,219,200,0.02)" stroke="rgba(222,219,200,0.1)" />
              <text x="42" y="140" className="fill-gray-300">Observation: Recurrent fatigue, chest discomfort on exertion.</text>
              <text x="42" y="160" className="fill-gray-300">Plan: Schedule Lipid panel diagnostics; lock Metformin prescription.</text>
              <rect x="32" y="220" width="220" height="24" fill="#2a7d8a" />
              <text x="142" y="235" className="fill-[#070707] font-bold text-center" textAnchor="middle">LOCK PRESCRIPTION</text>
            </svg>
          );
        case "diagnostic_order":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#1A2B4C" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#2a7d8a] text-[11px]">CLINICOS // DIAGNOSTIC LAB OPERATIONS</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">DIAGNOSTICS LAB</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">PENDING DIAGNOSTIC WORKORDERS</text>
              <rect x="32" y="95" width="736" height="50" fill="rgba(222,219,200,0.02)" stroke="rgba(222,219,200,0.1)" />
              <text x="42" y="115" className="fill-white font-bold">Encounter: #ENC-8402 &mdash; Patient: Anita Nair &mdash; Ordered: Lipid Profile</text>
              <text x="42" y="130" className="fill-[#2a7d8a] font-bold">Action Required: Draw blood sample &mdash; Log results to encounter record</text>
              <rect x="630" y="105" width="120" height="28" fill="#2a7d8a" />
              <text x="690" y="122" className="fill-[#070707] font-bold text-center" textAnchor="middle">UPLOAD RESULTS</text>
            </svg>
          );
        case "billing_summary":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#1A2B4C" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#2a7d8a] text-[11px]">CLINICOS // CASHIER RECONCILIATION LEDGER</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">BILLING COUNTER</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="480" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">ACTIVE INVOICES RECONCILIATION</text>
              <text x="32" y="110" className="fill-gray-300">Consultation (Dr. Sen) &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $25.00</text>
              <text x="32" y="130" className="fill-gray-300">Lipid Profile Test &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $40.00</text>
              <text x="32" y="150" className="fill-gray-300">Medications Dispense &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $18.50</text>
              <line x1="32" y1="170" x2="440" y2="170" stroke="rgba(222,219,200,0.2)" />
              <text x="32" y="190" className="fill-white font-bold">TOTAL OUTSTANDING TALLY &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $83.50</text>
              <rect x="32" y="210" width="140" height="28" fill="#2a7d8a" />
              <text x="102" y="227" className="fill-[#070707] font-bold text-center" textAnchor="middle">CONFIRM &amp; PRINT</text>
            </svg>
          );
        case "pharmacy_dispense":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#1A2B4C" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#2a7d8a] text-[11px]">CLINICOS // PHARMACY DISPENSING CONSOLE</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">PHARMACY COUNTER</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">DISPENSE QUEUE &mdash; LOCKED INVOICES CLEARANCE</text>
              <rect x="32" y="95" width="736" height="70" fill="rgba(222,219,200,0.02)" stroke="rgba(222,219,200,0.1)" />
              <text x="42" y="115" className="fill-white font-bold">Invoice #INV-4920 &mdash; Patient: Anita Nair &mdash; Vitals: Verified</text>
              <text x="42" y="135" className="fill-gray-400">Dispense: Metformin 500mg (Tabs) [Qty: 60] &mdash; Amlodipine 5mg [Qty: 30]</text>
              <text x="42" y="150" className="fill-green-400">Payment Status: PAID // Reconciled in register</text>
              <rect x="630" y="110" width="120" height="28" fill="#2a7d8a" />
              <text x="690" y="127" className="fill-[#070707] font-bold text-center" textAnchor="middle">DISPENSE DRUGS</text>
            </svg>
          );
        case "owner_dashboard":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#1A2B4C" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#2a7d8a] text-[11px]">CLINICOS // OPERATIONS OWNER CONTROL PANEL</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">ADMIN CONTROL</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="240" height="120" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="fill-gray-500">SHIFT VOLUMES</text>
              <text x="32" y="110" className="font-serif text-2xl font-light italic fill-[#dedbc8]">42 Patients</text>
              <text x="32" y="130" className="fill-green-400 font-bold">GP: 28 // Speciality: 14</text>
              <rect x="280" y="60" width="240" height="120" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="292" y="80" className="fill-gray-500">AVERAGE WAIT TIMES</text>
              <text x="292" y="110" className="font-serif text-2xl font-light italic fill-[#dedbc8]">14.8 minutes</text>
              <text x="292" y="130" className="fill-orange-400 font-bold">Chamber 01 Delay Alert</text>
              <rect x="540" y="60" width="240" height="120" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="552" y="80" className="fill-gray-500">SHIFT REVENUE</text>
              <text x="552" y="110" className="font-serif text-2xl font-light italic fill-[#dedbc8]">$1,482.50</text>
              <text x="552" y="130" className="fill-green-400 font-bold">100% Cashier Reconciled</text>
              <rect x="20" y="200" width="760" height="140" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="220" className="font-bold fill-gray-400">IMMUTABLE OPERATIONS TRANSACTIONS AUDIT REGISTER</text>
              <text x="32" y="240" className="fill-gray-500">[19:42] ENCOUNTER #ENC-8402 CLOSED BY DR. SEN &mdash;&mdash; VERIFIED</text>
              <text x="32" y="255" className="fill-gray-500">[19:44] INVOICE #INV-4920 PAID BY ANITA NAIR ($83.50) &mdash;&mdash; RECONCILED</text>
              <text x="32" y="270" className="fill-gray-500">[19:46] DRUGS DISPENSED FOR INVOICE #INV-4920 &mdash;&mdash; STOCK DEDUCTED</text>
            </svg>
          );
      }
    }

    // -------------------------------------------------------------
    // RESTAURANTOS SVG CASES (7 distinct interfaces)
    // -------------------------------------------------------------
    if (systemId === "restaurantos") {
      switch (frameId) {
        case "guest_menu":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#A05C1A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#c87b3a] text-[11px]">RESTAURANTOS // TABLE GUEST PORTAL</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">TABLE 04 // ORDER TAB</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="500" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-[#c87b3a]">APPETIZERS MENU</text>
              <rect x="32" y="95" width="456" height="50" fill="rgba(222,219,200,0.02)" stroke="rgba(222,219,200,0.1)" />
              <text x="42" y="115" className="fill-white font-bold">Paneer Tikka (Plate) &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $12.50</text>
              <text x="42" y="130" className="fill-gray-400">Allergen: Dairy. Grilled Indian cottage cheese with mint dip.</text>
              <rect x="440" y="105" width="40" height="18" fill="#c87b3a" />
              <text x="460" y="117" className="fill-[#070707] font-bold text-center" textAnchor="middle">ADD</text>
            </svg>
          );
        case "kitchen_display":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#A05C1A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#c87b3a] text-[11px]">RESTAURANTOS // KITCHEN QUEUE MONITOR</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">STATION: GRILL</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="360" height="280" fill="none" stroke="rgba(200,123,58,0.4)" />
              <rect x="20" y="60" width="360" height="24" fill="rgba(200,123,58,0.1)" />
              <text x="32" y="76" className="font-bold fill-[#c87b3a]">TABLE 04 // TICKET #4028</text>
              <text x="32" y="105" className="fill-white font-bold">2x Paneer Tikka (Appetizer)</text>
              <text x="32" y="125" className="fill-orange-400 font-bold">ALLERGENS WARNING: Dairy. Make it spicy.</text>
              <rect x="32" y="280" width="336" height="24" fill="#c87b3a" />
              <text x="200" y="295" className="fill-[#070707] font-bold text-center" textAnchor="middle">MARK READY</text>
            </svg>
          );
        case "floor_status":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#A05C1A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#c87b3a] text-[11px]">RESTAURANTOS // FLOOR TABLE COORDINATION</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">FLOOR MAP</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="30" y="80" width="80" height="60" rx="4" fill="#c87b3a" />
              <text x="70" y="115" className="fill-[#070707] font-bold text-[12px] text-center" textAnchor="middle">T1 [Eating]</text>
              <rect x="150" y="80" width="80" height="60" rx="4" fill="#2a7d8a" />
              <text x="190" y="115" className="fill-[#070707] font-bold text-[12px] text-center" textAnchor="middle">T2 [Bill Req]</text>
              <rect x="270" y="80" width="80" height="60" rx="4" fill="none" stroke="rgba(222,219,200,0.2)" />
              <text x="310" y="115" className="fill-gray-500 font-bold text-[12px] text-center" textAnchor="middle">T3 [Vacant]</text>
            </svg>
          );
        case "ready_handoff":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#A05C1A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#c87b3a] text-[11px]">RESTAURANTOS // WAITER SERVICE DISPATCH</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">READY DISPATCH BOARD</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">DISHES READY FOR PICKUP</text>
              <rect x="32" y="95" width="736" height="50" fill="rgba(200,123,58,0.1)" stroke="#c87b3a" />
              <text x="42" y="125" className="fill-white font-bold">2x Paneer Tikka for TABLE 04 &mdash; Ready at station: GRILL</text>
              <rect x="630" y="106" width="120" height="28" fill="#c87b3a" />
              <text x="690" y="123" className="fill-[#070707] font-bold text-center" textAnchor="middle">MARK DELIVERED</text>
            </svg>
          );
        case "billing_reconcile":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#A05C1A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#c87b3a] text-[11px]">RESTAURANTOS // BILLING RECONCILIATION</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">CHECKOUT COUNTER</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="480" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">TABLE TAB INVOICE GENERATOR</text>
              <text x="32" y="110" className="fill-gray-400">Food Items (T4 Rounds) &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $36.00</text>
              <text x="32" y="130" className="fill-gray-400">Service Tax (5%) &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $1.80</text>
              <text x="32" y="150" className="fill-gray-400">GST (12%) &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $4.32</text>
              <line x1="32" y1="170" x2="440" y2="170" stroke="rgba(222,219,200,0.2)" />
              <text x="32" y="195" className="fill-white font-bold">TOTAL OUTSTANDING INVOICE &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; $42.12</text>
              <rect x="32" y="220" width="120" height="28" fill="#c87b3a" />
              <text x="92" y="237" className="fill-[#070707] font-bold text-center" textAnchor="middle">UPI RECONCILE</text>
            </svg>
          );
        case "shift_closing":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#A05C1A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#c87b3a] text-[11px]">RESTAURANTOS // CASHIER SHIFT AUDITOR</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">SHIFT END</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">SHIFT TALLY VERIFICATION REGISTER</text>
              <text x="32" y="110" className="fill-gray-300">Total payments logged: $1,722.80 (Shift-B Drawer)</text>
              <text x="32" y="130" className="fill-green-400 font-bold">UPI checkouts matched &mdash; Cash drawer verified</text>
            </svg>
          );
        case "owner_dashboard":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#A05C1A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#c87b3a] text-[11px]">RESTAURANTOS // OWNER SALES INSIGHTS</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">OWNER VIEW</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">MENU ITEM PERFORMANCE SUMMARY</text>
              <text x="32" y="110" className="fill-white">1. Paneer Tikka (42 sold) &mdash;&mdash; Margin: 72%</text>
              <text x="32" y="130" className="fill-white">2. Butter Chicken (28 sold) &mdash;&mdash; Margin: 64%</text>
            </svg>
          );
      }
    }

    // -------------------------------------------------------------
    // SHIPWRIGHT SVG CASES (7 distinct interfaces)
    // -------------------------------------------------------------
    if (systemId === "shipwright") {
      switch (frameId) {
        case "workspace_overview":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#5B4B8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#8b7bc4] text-[11px]">SHIPWRIGHT // WORKSPACE DIRECTORY</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">WORKSPACE: METADATA</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-[#8b7bc4]">ACTIVE PROJECTS MATRIX</text>
              <rect x="32" y="95" width="716" height="50" fill="rgba(222,219,200,0.02)" stroke="rgba(222,219,200,0.1)" />
              <text x="42" y="115" className="fill-white font-bold">Project A: waitlist portal &mdash; 77% complete</text>
              <text x="42" y="130" className="fill-gray-400">Milestone rollout: Beta Waitlist System Rollout &mdash; Tasks: 18 Shipped</text>
            </svg>
          );
        case "milestone_details":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#5B4B8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#8b7bc4] text-[11px]">SHIPWRIGHT // PROJECT MILESTONES</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">MILESTONE B</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">MILESTONE B DETAIL TRACK</text>
              <text x="32" y="110" className="fill-white font-bold">Beta Waitlist System Rollout</text>
              <text x="32" y="130" className="fill-gray-400">Active blocker detected: SW-420 is blocked by SW-419</text>
            </svg>
          );
        case "task_board":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#5B4B8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#8b7bc4] text-[11px]">SHIPWRIGHT // TASK BOARD</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">BOARD VIEW</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="230" height="260" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">TODO</text>
              <rect x="260" y="60" width="230" height="260" fill="none" stroke="rgba(139,123,196,0.4)" />
              <text x="272" y="80" className="font-bold fill-[#8b7bc4]">IN PROGRESS</text>
              <text x="272" y="110" className="fill-white font-bold">SW-420 // Build prod config</text>
              <text x="272" y="130" className="fill-[#c44a7a] font-bold">BLOCKED BY SW-419</text>
            </svg>
          );
        case "blocker_graph":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#5B4B8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#8b7bc4] text-[11px]">SHIPWRIGHT // DEPENDENCY DETECTOR GRAPH</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">CYCLE DETECT</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="50" y="150" width="140" height="60" rx="4" fill="rgba(222,219,200,0.03)" stroke="rgba(222,219,200,0.2)" />
              <text x="62" y="180" className="font-bold fill-[#dedbc8]">SW-418 (Complete)</text>
              <rect x="300" y="150" width="150" height="60" rx="4" fill="rgba(42,125,138,0.05)" stroke="#2a7d8a" />
              <text x="312" y="180" className="font-bold fill-white">SW-419 (In Review)</text>
              <rect x="580" y="150" width="150" height="60" rx="4" fill="rgba(196,74,122,0.05)" stroke="#c44a7a" />
              <text x="592" y="180" className="font-bold fill-[#dedbc8]">SW-420 (Blocked)</text>
              <path d="M 190,180 L 300,180" stroke="rgba(222,219,200,0.2)" strokeWidth="1.5" />
              <path d="M 450,180 L 580,180" stroke="#c44a7a" strokeWidth="2" strokeDasharray="3 3" />
              <text x="515" y="172" className="fill-[#c44a7a] font-bold text-center" textAnchor="middle">BLOCKS</text>
            </svg>
          );
        case "checkin_view":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#5B4B8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#8b7bc4] text-[11px]">SHIPWRIGHT // DAILY TEAM CHECK-INS</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">CHECK-INS</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">SLACK CONTEXT LOGS</text>
              <rect x="32" y="95" width="736" height="50" fill="rgba(222,219,200,0.02)" stroke="rgba(222,219,200,0.1)" />
              <text x="42" y="115" className="fill-white font-bold">Priya R. &mdash; PM: Finished waitlist designs. Today: Checking copy edits.</text>
            </svg>
          );
        case "decision_log":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#5B4B8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#8b7bc4] text-[11px]">SHIPWRIGHT // SYSTEM DECISIONS (ADR)</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">DECISION REGISTERS</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">DECISION ARCHIVES</text>
              <text x="32" y="110" className="fill-white font-bold">ADR-42 // METFORMIN INVENTORY STATE TRIGGERS</text>
              <text x="32" y="130" className="fill-gray-400">Decided: Move pharmacy tracking to local browser cache tables during latency drops.</text>
            </svg>
          );
        case "project_summary":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#5B4B8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-[#8b7bc4] text-[11px]">SHIPWRIGHT // PROJECT EXECUTION SUMMARY</text>
              <text x="780" y="24" className="fill-gray-500 text-right" textAnchor="end">SUMMARY</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="20" y="60" width="760" height="280" fill="none" stroke="rgba(222,219,200,0.1)" />
              <text x="32" y="80" className="font-bold fill-gray-400">MILESTONE COMPLETIONS</text>
              <text x="32" y="110" className="fill-white">Milestone A: Beta Waitlist System Rollout &mdash; Complete [July 12]</text>
              <text x="32" y="130" className="fill-white">Milestone B: Security Firewall Configuration &mdash; Complete [July 14]</text>
            </svg>
          );
      }
    }

    // -------------------------------------------------------------
    // SUPPORTING SYSTEM SVG CASES (3 distinct interfaces each)
    // -------------------------------------------------------------
    if (systemId === "aarogya") {
      switch (frameId) {
        case "bp_chart":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#2E6FAD" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">AAROGYA // PERSONAL BP TREND CHART</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <path d="M 50,220 L 150,210 L 250,230 L 350,190 L 450,195 L 550,170 M 50,140 L 150,135 L 250,150 L 350,120 L 450,125 L 550,110" fill="none" stroke="#2e6fad" strokeWidth="1.5" />
              <circle cx="550" cy="110" r="4" fill="#2e6fad" />
              <text x="560" y="113" className="fill-white font-bold">120/78 (Resting)</text>
              <text x="50" y="280" className="fill-gray-500">Local device indicators verify a 14-day stable resting period.</text>
            </svg>
          );
        case "med_routine":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#2E6FAD" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">AAROGYA // MEDICINE ROUTINE CHECKLISTS</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <text x="50" y="80" className="fill-white font-bold">ROUTINES FOR TODAY</text>
              <text x="50" y="110" className="fill-green-400 font-bold">[X] Metformin 500mg (Tabs) &mdash; Morning (08:30)</text>
              <text x="50" y="130" className="fill-green-400 font-bold">[X] Amlodipine 5mg (Tabs) &mdash; Afternoon (13:30)</text>
              <text x="50" y="150" className="fill-gray-500">[ ] Metformin 500mg (Tabs) &mdash; Night (20:30)</text>
            </svg>
          );
        case "history_summary":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#2E6FAD" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">AAROGYA // PRE-CONSULTATION HEALTH SUMMARY</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <text x="50" y="80" className="fill-white font-bold">EXPORTS DIGEST FOR CLINIC VISITS</text>
              <text x="50" y="110" className="fill-gray-300">Blood Pressure Average: 122/80 over 30 days</text>
              <text x="50" y="130" className="fill-gray-300">Glucose Mean: 114 mg/dL (Indian meal context tags included)</text>
              <rect x="50" y="160" width="180" height="28" fill="#2e6fad" />
              <text x="140" y="177" className="fill-white font-bold text-center" textAnchor="middle">EXPORT SUMMARY PDF</text>
            </svg>
          );
      }
    }

    if (systemId === "securescan") {
      switch (frameId) {
        case "vulnerability_card":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#2A7D8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">SECURESCAN // THREAT REMEDIATION CARD</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="50" y="80" width="700" height="220" fill="rgba(196,74,122,0.05)" stroke="#c44a7a" strokeWidth="1.5" />
              <text x="70" y="110" className="fill-[#c44a7a] font-bold text-[12px]">VULNERABILITY DETECTED // SQL INJECTION</text>
              <text x="70" y="140" className="fill-white">File: src/controllers/search.ts:24</text>
              <text x="70" y="160" className="fill-gray-400">Parameter &apos;q&apos; is concatenated directly into query builder statement.</text>
              <text x="70" y="180" className="fill-gray-500">Payload: search?q=admin%27%20OR%201=1--</text>
              <text x="70" y="210" className="fill-green-400 font-bold">Suggested Fix: Use parameterized inputs with knex client bindings.</text>
            </svg>
          );
        case "scan_history":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#2A7D8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">SECURESCAN // AUTOMATED PIPELINE HISTORY</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <text x="50" y="80" className="fill-white font-bold">SCAN LOG REGISTER</text>
              <text x="50" y="110" className="fill-gray-400">Build #842: SECURE &mdash; Dependencies matched security databases.</text>
              <text x="50" y="130" className="fill-gray-400">Build #841: VULNERABLE &mdash; 1 Critical finding in search.ts.</text>
            </svg>
          );
        case "pipeline_status":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#2A7D8A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">SECURESCAN // CI/CD TRIGGER STATUS</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <text x="50" y="80" className="fill-white font-bold">PIPELINE CHECKS</text>
              <rect x="50" y="95" width="200" height="40" fill="none" stroke="#2a7d8a" />
              <text x="60" y="120" className="fill-[#2a7d8a] font-bold">github-actions: PENDING</text>
            </svg>
          );
      }
    }

    if (systemId === "safedate") {
      switch (frameId) {
        case "safety_plan":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#C44A7A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">SAFEDATE // SAFETY CHECK-IN PLAN</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <text x="50" y="80" className="fill-white font-bold">PLAN LOGS</text>
              <text x="50" y="110" className="fill-gray-300">Venue: Blue Tokai Cafe, Connaught Place</text>
              <text x="50" y="130" className="fill-gray-300">Check-in timer scheduled: 19:30 (Grace limit: 15 mins)</text>
              <text x="50" y="150" className="fill-gray-400">Contacts assigned: Friend Amit (+91 98450 49201)</text>
            </svg>
          );
        case "timer_prompt":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#C44A7A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">SAFEDATE // ACTIVE TIMER COUNTDOWN</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="50" y="80" width="300" height="180" fill="none" stroke="#c44a7a" strokeWidth="1.5" />
              <text x="70" y="120" className="fill-[#c44a7a] font-serif text-3xl font-light italic">04m 32s</text>
              <text x="70" y="160" className="fill-white font-bold">Check-in Required</text>
              <rect x="70" y="180" width="120" height="28" fill="#c44a7a" />
              <text x="130" y="197" className="fill-[#070707] font-bold text-center" textAnchor="middle">I AM SAFE</text>
            </svg>
          );
        case "alert_details":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#C44A7A" opacity="0.3" />
              <text x="20" y="24" className="font-bold fill-white text-[11px]">SAFEDATE // ALERT SMS TRANSMISSION</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <rect x="50" y="80" width="700" height="140" fill="rgba(196,74,122,0.1)" stroke="#c44a7a" />
              <text x="70" y="110" className="fill-white font-bold">ALERT TRANSFERS REGISTER</text>
              <text x="70" y="130" className="fill-gray-300">Timer expired without closeout check-in. Dispatching SMS notifications:</text>
              <text x="70" y="150" className="fill-[#c44a7a] font-bold">&quot;SafeDate Alert: User missed check-in for date at Blue Tokai Cafe.&quot;</text>
            </svg>
          );
      }
    }

    if (systemId === "buildpublic") {
      switch (frameId) {
        case "public_roadmap":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#DEDBC8" opacity="0.2" />
              <text x="20" y="24" className="font-bold fill-[#dedbc8] text-[11px]">BUILDPUBLIC // ROADMAP DASHBOARD</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <text x="50" y="80" className="fill-[#dedbc8] font-bold">PUBLIC TIMELINE</text>
              <text x="50" y="110" className="fill-white font-bold">&bull; waitlist landing page live &mdash; Dec 12</text>
              <text x="50" y="130" className="fill-gray-400">&bull; private beta launch scheduled &mdash; Dec 18</text>
            </svg>
          );
        case "task_planner":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#DEDBC8" opacity="0.2" />
              <text x="20" y="24" className="font-bold fill-[#dedbc8] text-[11px]">BUILDPUBLIC // PRIVATE EXECUTION BOARD</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <text x="50" y="80" className="fill-gray-500 font-bold">PRIVATE TASKS (SHIELDED)</text>
              <text x="50" y="110" className="fill-gray-400">&bull; Set waitlist API keys and db secrets (Secret)</text>
              <text x="50" y="130" className="fill-gray-400">&bull; Draft launch emails (Public Tagged)</text>
            </svg>
          );
        case "social_cross_post":
          return (
            <svg viewBox="0 0 800 360" className="w-full bg-[#070707] font-mono text-[10px] fill-[#dedbc8]">
              <rect width="800" height="40" fill="#DEDBC8" opacity="0.2" />
              <text x="20" y="24" className="font-bold fill-[#dedbc8] text-[11px]">BUILDPUBLIC // SOCIAL OUTBOUND TRIGGERS</text>
              <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(222,219,200,0.14)" />
              <text x="50" y="80" className="fill-white font-bold">PUSH COMPILATION DIALOG</text>
              <rect x="50" y="95" width="400" height="80" fill="rgba(222,219,200,0.02)" stroke="rgba(222,219,200,0.2)" />
              <text x="60" y="115" className="fill-gray-300">Update draft: &quot;Landing page waiting lists are live!&quot;</text>
              <rect x="60" y="140" width="100" height="24" fill="#dedbc8" />
              <text x="110" y="155" className="fill-[#070707] font-bold text-center" textAnchor="middle">PUBLISH TO X</text>
            </svg>
          );
      }
    }

    return (
      <div className="p-8 text-center text-gray-500 bg-[#0d0d0d] border border-[#dedbc8]/10 font-mono text-xs">
        [ NO PREVIEW CONFIGURED FOR FRAME: {frameId} ]
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full bg-[#0d0d0d] rounded border border-[#dedbc8]/14 overflow-hidden shadow-2xl relative group">
        {renderMockup()}
      </div>
      {caption && (
        <span className="text-[11px] font-mono text-gray-500 mt-1 uppercase tracking-wide block">
          Fig: {caption}
        </span>
      )}
    </div>
  );
}
export default InterfaceFrame;
