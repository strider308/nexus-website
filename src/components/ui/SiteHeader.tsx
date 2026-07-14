"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  const links = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#dedbc8]/14 bg-[#070707]/80 backdrop-blur-md px-6 md:px-12 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-lg italic text-[#dedbc8] tracking-tight hover:opacity-80 transition-opacity"
        >
          Nexus
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-[#2a7d8a] font-bold" : "text-gray-300 hover:text-[#dedbc8]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
export default SiteHeader;
