"use client";

import React from "react";
import Link from "next/link";
import { CONTACT } from "@/content/nexus";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#dedbc8]/14 bg-[#070707] py-12 px-6 md:px-12 select-none relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Side: Brand & Line */}
        <div className="flex flex-col gap-2">
          <Link 
            href="/" 
            className="font-serif text-xl italic text-[#dedbc8] tracking-tight hover:opacity-80 transition-opacity"
          >
            Nexus
          </Link>
          <p className="text-xs font-light text-gray-400 max-w-sm">
            Custom software and automation for complex workflows.
          </p>
        </div>

        {/* Right Side: Navigation Links & Copyright */}
        <div className="flex flex-col md:items-end gap-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/work" className="font-mono text-xs uppercase tracking-wider text-gray-300 hover:text-[#dedbc8] transition-colors">
              Work
            </Link>
            <Link href="/services" className="font-mono text-xs uppercase tracking-wider text-gray-300 hover:text-[#dedbc8] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="font-mono text-xs uppercase tracking-wider text-gray-300 hover:text-[#dedbc8] transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="font-mono text-xs uppercase tracking-wider text-gray-300 hover:text-[#dedbc8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="font-mono text-xs uppercase tracking-wider text-gray-300 hover:text-[#dedbc8] transition-colors">
              Terms of Service
            </Link>
          </nav>

          <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-gray-400">
            <span>{CONTACT.email}</span>
            <span>&copy; {currentYear} Nexus. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default SiteFooter;
