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
        <div className="flex flex-col md:items-end gap-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/work" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
              Work
            </Link>
            <Link href="/services" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="font-sans text-[13px] font-medium tracking-wide text-gray-300 hover:text-[#dedbc8] transition-colors">
              Accessibility
            </Link>
          </nav>

          <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-gray-400">
            <span>{BRAND_CONFIG.email}</span>
            <span>&copy; {currentYear} {BRAND_CONFIG.shortName}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default SiteFooter;
