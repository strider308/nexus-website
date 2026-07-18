"use client";

import React, { useState } from "react";
import { CapabilityGroup } from "@/content/case-studies";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface CapabilityGroupsProps {
  groups: CapabilityGroup[];
  accentColor: string;
}

export function CapabilityGroups({ groups, accentColor }: CapabilityGroupsProps) {
  const [activeTab, setActiveTab] = useState<string>("0");

  return (
    <div className="flex flex-col gap-6 w-full select-none mt-2">
      {/* Desktop Layout: Tabs */}
      <div className="hidden md:block w-full">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex gap-8">
          <TabsList className="flex flex-col gap-2 bg-transparent border-r border-[#dedbc8]/10 pr-6 shrink-0 min-w-[200px]">
            {groups.map((group, idx) => (
              <TabsTrigger 
                key={idx} 
                value={String(idx)}
                className="w-full text-left font-mono text-xs uppercase tracking-wider justify-start px-4 py-2 hover:bg-[#dedbc8]/5 border-none"
              >
                {group.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1">
            {groups.map((group, idx) => (
              <TabsContent key={idx} value={String(idx)} className="flex flex-col gap-4 p-4 border border-[#dedbc8]/10 bg-[#0d0d0d]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#dedbc8]/10 pb-2">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-3 mt-2 text-xs text-gray-300 font-light leading-relaxed">
                  {group.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2.5 items-start">
                      <span className="shrink-0 mt-0.5" style={{ color: accentColor }}>&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>

      {/* Mobile Layout: Accordion */}
      <div className="md:hidden mt-4">
        <Accordion defaultValue={["cap-0"]} className="w-full border border-[#dedbc8]/10 bg-[#0d0d0d] p-4">
          {groups.map((group, idx) => (
            <AccordionItem key={idx} value={`cap-${idx}`} className="border-b border-[#dedbc8]/5">
              <AccordionTrigger className="hover:no-underline py-4 text-left">
                <span className="font-sans text-xs font-bold uppercase text-white tracking-wider">{group.title}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="flex flex-col gap-2 text-xs text-gray-300 font-light leading-relaxed font-sans">
                  {group.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 items-start">
                      <span className="shrink-0 mt-0.5" style={{ color: accentColor }}>&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  );
}
export default CapabilityGroups;
