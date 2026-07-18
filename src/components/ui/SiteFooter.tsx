"use client";

import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/content/nexus";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#dedbc8]/14 bg-[#070707] py-12 px-6 md:px-12 select-none relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Side: Brand & Line */}
        <div className="flex flex-col gap-2">
          <Link 
            href="/" 
            className="font-sans text-xl font-bold tracking-tighter text-[#dedbc8] hover:opacity-80 transition-opacity"
          >
            {BRAND_CONFIG.shortName}
          </Link>
          <p className="text-xs font-normal text-gray-400 max-w-sm">
            {BRAND_CONFIG.primaryStatement}
          </p>
        </div>

        {/* Right Side: Navigation Links & Copyright */}
        <div className="flex flex-col md:items-end gap-6 w-full md:w-auto">
          {/* Mobile structure: two-column grid, Desktop structure: single row */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-x-6 md:gap-y-2 w-full md:w-auto">
            {/* Main Navigation Column/Row */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              <span className="md:hidden font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold border-b border-[#dedbc8]/5 pb-1 mb-1">Navigation</span>
              <Link href="/work" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
                Work
              </Link>
              <Link href="/services" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
                Contact
              </Link>
            </div>

            {/* Legal Links Column/Row */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              <span className="md:hidden font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold border-b border-[#dedbc8]/5 pb-1 mb-1">Legal</span>
              <Link href="/privacy-policy" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-gray-400 mt-2 md:mt-0">
            <a href={`mailto:${BRAND_CONFIG.email}`} className="text-gray-300 hover:text-[#2a7d8a] transition-colors font-mono font-bold">
              {BRAND_CONFIG.email}
            </a>
            <span>&copy; {currentYear} {BRAND_CONFIG.shortName}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default SiteFooter;
