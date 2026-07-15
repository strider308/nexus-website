"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMotionPaused, setIsMotionPaused] = useState(false);
  const isReduced = useReducedMotion();

  // Load initial motion preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nexus_motion_paused");
      if (saved !== null) {
        setIsMotionPaused(saved === "true");
      }
    } catch {
      // safe fallback
    }
  }, []);

  const handleToggleMotion = () => {
    const nextVal = !isMotionPaused;
    setIsMotionPaused(nextVal);
    try {
      localStorage.setItem("nexus_motion_paused", String(nextVal));
      // Force page reload to apply changes cleanly across GSAP states
      window.location.reload();
    } catch {
      // safe fallback
    }
  };

  // Close sheet when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#dedbc8]/10 bg-[#070707]/90 backdrop-blur-xs px-6 md:px-12 py-3.5 transition-all duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-serif text-xl italic text-[#dedbc8] tracking-tight hover:opacity-80 transition-opacity"
        >
          Nexus
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider relative py-1.5 transition-colors duration-300 ${
                  isActive ? "text-[#dedbc8] font-bold" : "text-gray-400 hover:text-[#dedbc8]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#2a7d8a] transition-all duration-300"
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`font-mono text-xs uppercase tracking-wider relative py-1.5 transition-colors duration-300 ${
              pathname === "/contact" ? "text-[#dedbc8] font-bold" : "text-gray-400 hover:text-[#dedbc8]"
            }`}
          >
            Contact
            {pathname === "/contact" && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#2a7d8a]" />
            )}
          </Link>

          {/* Quick Pause Motion control */}
          <button
            onClick={handleToggleMotion}
            className="border border-[#dedbc8]/14 px-2 py-1 text-[9px] font-mono uppercase tracking-wider text-gray-400 hover:border-gray-500 hover:text-white transition-colors"
            title="Toggle global animation scrubbers"
          >
            {isMotionPaused ? "Resume Motion" : "Pause Motion"}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className="md:hidden flex items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-[#dedbc8] border-none" />}>
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#070707] border-l border-[#dedbc8]/10 p-6 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-8 mt-12">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold border-b border-[#dedbc8]/5 pb-2">
                  Navigation Matrix
                </span>
                <nav className="flex flex-col gap-6">
                  {links.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`font-mono text-base uppercase tracking-wider ${
                          isActive ? "text-[#2a7d8a] font-bold" : "text-gray-300 hover:text-[#dedbc8]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/contact"
                    className={`font-mono text-base uppercase tracking-wider ${
                      pathname === "/contact" ? "text-[#2a7d8a] font-bold" : "text-gray-300 hover:text-[#dedbc8]"
                    }`}
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Mobile controls & footer */}
              <div className="flex flex-col gap-6 border-t border-[#dedbc8]/5 pt-6">
                <button
                  onClick={handleToggleMotion}
                  className="w-full flex items-center justify-between border border-[#dedbc8]/14 p-3 text-[10px] font-mono uppercase tracking-wider text-[#dedbc8] hover:bg-[#dedbc8]/5"
                >
                  <span>Animation System</span>
                  <span className="text-[#2a7d8a] font-bold">
                    {isMotionPaused ? "PAUSED" : "ACTIVE"}
                  </span>
                </button>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider text-center">
                  NEXUS SYSTEMS CO. // EST 2026
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
export default SiteHeader;
