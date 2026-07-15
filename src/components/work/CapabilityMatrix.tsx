"use client";

import React from "react";
import { CAPABILITY_MATRIX_ROWS } from "@/content/case-studies";

export function CapabilityMatrix() {
  const columns = [
    { key: "systemName", label: "System Name" },
    { key: "multiRole", label: "Multi-Role Workflow" },
    { key: "automation", label: "Automations" },
    { key: "visibility", label: "Dashboards" },
    { key: "tracking", label: "Data Tracking" },
    { key: "safety", label: "Safety Logic" },
    { key: "mvp", label: "Beta / MVP Status" },
    { key: "customerExp", label: "Customer Portal" },
    { key: "auditability", label: "Audit Logs" },
    { key: "integrations", label: "Integrations" },
    { key: "permissions", label: "Permissions" }
  ];

  return (
    <div className="flex flex-col gap-6 py-8 border-t border-[#dedbc8]/10">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
          Capabilities Index
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light italic text-[#dedbc8] tracking-tight">
          System Comparison Matrix
        </h2>
        <p className="text-sm font-light text-gray-400 max-w-xl">
          A side-by-side check of what our custom builds organize across separate operational tracks.
        </p>
      </div>

      {/* Desktop/Tablet Viewport Table */}
      <div className="hidden lg:block overflow-x-auto border border-[#dedbc8]/10 bg-[#0d0d0d] mt-4">
        <table className="w-full text-left font-mono text-[9px] text-gray-300 divide-y divide-[#dedbc8]/10">
          <thead className="bg-[#070707] text-[#dedbc8] font-bold">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="p-3 uppercase tracking-wider">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dedbc8]/10">
            {CAPABILITY_MATRIX_ROWS.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/5 transition-colors">
                <td className="p-3 font-bold text-[#dedbc8]">{row.systemName}</td>
                <td className="p-3">{row.multiRole}</td>
                <td className="p-3">{row.automation}</td>
                <td className="p-3">{row.visibility}</td>
                <td className="p-3">{row.tracking}</td>
                <td className="p-3">{row.safety}</td>
                <td className="p-3">{row.mvp}</td>
                <td className="p-3">{row.customerExp}</td>
                <td className="p-3">{row.auditability}</td>
                <td className="p-3">{row.integrations}</td>
                <td className="p-3">{row.permissions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet Stacked List Viewport Fallback */}
      <div className="lg:hidden flex flex-col gap-6 mt-4">
        {CAPABILITY_MATRIX_ROWS.map((row, idx) => (
          <div 
            key={idx}
            className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-5 flex flex-col gap-3.5"
          >
            <div className="border-b border-[#dedbc8]/10 pb-2 flex justify-between items-center">
              <span className="text-xs font-mono text-gray-500 font-bold uppercase">SYSTEM METRIC PROFILE</span>
              <span className="text-sm font-bold text-[#dedbc8] uppercase tracking-wide">{row.systemName}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-[10px]">
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-500 uppercase font-bold">Multi-Role</span>
                <span className="text-gray-300">{row.multiRole}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-500 uppercase font-bold">Automations</span>
                <span className="text-gray-300">{row.automation}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-500 uppercase font-bold">Dashboards</span>
                <span className="text-gray-300">{row.visibility}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-500 uppercase font-bold">Data Tracking</span>
                <span className="text-gray-300">{row.tracking}</span>
              </div>
              <div className="flex flex-col gap-0.5 col-span-2">
                <span className="text-gray-500 uppercase font-bold">Safety Logic</span>
                <span className="text-gray-300">{row.safety}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-500 uppercase font-bold">Beta / MVP</span>
                <span className="text-gray-300">{row.mvp}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-500 uppercase font-bold">Customer Portal</span>
                <span className="text-gray-300">{row.customerExp}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-500 uppercase font-bold">Audit Logs</span>
                <span className="text-gray-300">{row.auditability}</span>
              </div>
              <div className="flex flex-col gap-0.5 col-span-2">
                <span className="text-gray-500 uppercase font-bold">Integrations</span>
                <span className="text-gray-300">{row.integrations}</span>
              </div>
              <div className="flex flex-col gap-0.5 col-span-2">
                <span className="text-gray-500 uppercase font-bold">Permissions</span>
                <span className="text-gray-300">{row.permissions}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CapabilityMatrix;
