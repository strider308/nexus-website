"use client";

import React from "react";

interface RoleMapProps {
  systemId: string;
  users: string[];
  accentColor: string;
}

export function RoleMap({ systemId, users, accentColor }: RoleMapProps) {
  // Generate a custom diagram flow based on the systemId
  const renderFlowDiagram = () => {
    if (systemId === "clinicos") {
      return (
        <div className="flex flex-col gap-4 bg-[#0d0d0d] p-6 border border-[#dedbc8]/10 rounded-sm">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">
            Patient Journey &amp; Desk Handoffs Map
          </span>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-center text-xs font-mono py-4">
            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">FRONT DESK</span>
              <span className="font-bold fill-[#dedbc8] uppercase">01 // Receptionist</span>
              <p className="text-[9px] text-gray-500 mt-1">Registers patient and assigns same-day queue tokens</p>
            </div>
            
            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded" style={{ borderColor: accentColor }}>
              <span className="block mb-1" style={{ color: accentColor }}>CHAMBER</span>
              <span className="font-bold fill-[#dedbc8] uppercase">02 // Doctor</span>
              <p className="text-[9px] text-gray-500 mt-1">Prescribes medications and directs diagnostic orders</p>
            </div>

            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">CASHIER</span>
              <span className="font-bold fill-[#dedbc8] uppercase">03 // Billing</span>
              <p className="text-[9px] text-gray-500 mt-1">Reconciles fees and confirms receipt clearances</p>
            </div>

            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">PHARMACY</span>
              <span className="font-bold fill-[#dedbc8] uppercase">04 // Pharmacist</span>
              <p className="text-[9px] text-gray-500 mt-1">Dispenses stock items matching locked digit slips</p>
            </div>
          </div>
        </div>
      );
    }

    if (systemId === "restaurantos") {
      return (
        <div className="flex flex-col gap-4 bg-[#0d0d0d] p-6 border border-[#dedbc8]/10 rounded-sm">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">
            Table-to-Kitchen Service Coordination Map
          </span>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-center text-xs font-mono py-4">
            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">DINING TABLE</span>
              <span className="font-bold fill-[#dedbc8] uppercase">01 // Table Guest</span>
              <p className="text-[9px] text-gray-500 mt-1">Scans menu and dispatches order round tickets</p>
            </div>

            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">SERVICE FLOORS</span>
              <span className="font-bold fill-[#dedbc8] uppercase">02 // Floor Waiter</span>
              <p className="text-[9px] text-gray-500 mt-1">Approves menu queues and delivers ready dishes</p>
            </div>

            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded" style={{ borderColor: accentColor }}>
              <span className="block mb-1" style={{ color: accentColor }}>KITCHEN DEPTS</span>
              <span className="font-bold fill-[#dedbc8] uppercase">03 // Kitchen Chef</span>
              <p className="text-[9px] text-gray-500 mt-1">Splits items by prep station and signals ready indicators</p>
            </div>

            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">CASH COUNTERS</span>
              <span className="font-bold fill-[#dedbc8] uppercase">04 // Cashier</span>
              <p className="text-[9px] text-gray-500 mt-1">Compiles final floor tickets and matches drawer receipts</p>
            </div>
          </div>
        </div>
      );
    }

    if (systemId === "shipwright") {
      return (
        <div className="flex flex-col gap-4 bg-[#0d0d0d] p-6 border border-[#dedbc8]/10 rounded-sm">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">
            Async Team Execution dependency workflow
          </span>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-center text-xs font-mono py-4">
            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">MILESTONES BOARD</span>
              <span className="font-bold fill-[#dedbc8] uppercase">01 // Product Manager</span>
              <p className="text-[9px] text-gray-500 mt-1">Outlines priority tasks and maps core dependencies</p>
            </div>

            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded" style={{ borderColor: accentColor }}>
              <span className="block mb-1" style={{ color: accentColor }}>BACKLOG QUEUES</span>
              <span className="font-bold fill-[#dedbc8] uppercase">02 // Developer</span>
              <p className="text-[9px] text-gray-500 mt-1">Claims tickets, submits work, and flags blocks</p>
            </div>

            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">REVIEWS PANEL</span>
              <span className="font-bold fill-[#dedbc8] uppercase">03 // Engineering Lead</span>
              <p className="text-[9px] text-gray-500 mt-1">Clears dependency blocker alerts and approves tickets</p>
            </div>

            <div className="text-gray-500 font-bold hidden md:block">&rarr;</div>
            <div className="text-gray-500 font-bold block md:hidden">&darr;</div>

            <div className="border border-[#dedbc8]/20 p-3 bg-black flex-1 w-full rounded">
              <span className="text-gray-400 block mb-1">DIGESTS LOGS</span>
              <span className="font-bold fill-[#dedbc8] uppercase">04 // Operator</span>
              <p className="text-[9px] text-gray-500 mt-1">Compiles automated status logs and records context</p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col gap-6 py-8 border-t border-[#dedbc8]/10">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
          Operations Roles &amp; Team Map
        </span>
        <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
          Who interacts with the system
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        {/* User list */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
            Designed-For Audience Roles
          </span>
          <div className="grid grid-cols-1 gap-2.5">
            {users.map((user, idx) => {
              const parts = user.split(" — ");
              return (
                <div key={idx} className="flex gap-3 text-xs leading-relaxed font-light text-gray-300">
                  <span className="font-mono font-bold" style={{ color: accentColor }}>
                    [0{idx + 1}]
                  </span>
                  <div>
                    <strong className="text-[#dedbc8] uppercase font-bold block">{parts[0]}</strong>
                    {parts[1] && <span className="text-gray-400 text-[11px] block mt-0.5">{parts[1]}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Diagram card */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {renderFlowDiagram()}
        </div>
      </div>
    </div>
  );
}
export default RoleMap;
