"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/content/nexus";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { useMotionPreference } from "@/components/providers/MotionPreferenceProvider";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { isPaused: isMotionPaused, togglePaused: handleToggleMotion } = useMotionPreference();

  // Close sheet when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#dedbc8]/10 bg-[#070707]/90 backdrop-blur-xs px-6 md:px-12 py-3.5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-sans text-xl font-bold tracking-tighter text-[#dedbc8] hover:opacity-80 transition-opacity"
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
                className={`font-sans text-[13px] font-medium tracking-wide relative py-1.5 transition-colors duration-300 ${
                  isActive ? "text-[#dedbc8] font-semibold" : "text-gray-400 hover:text-[#dedbc8]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#2a7d8a]"
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`font-sans text-[13px] font-medium tracking-wide relative py-1.5 transition-colors duration-300 ${
              pathname === "/contact" ? "text-[#dedbc8] font-semibold" : "text-gray-400 hover:text-[#dedbc8]"
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
            className="border border-[#dedbc8]/14 px-2 py-1 text-xs font-mono uppercase tracking-wider text-gray-400 hover:border-gray-500 hover:text-white transition-colors"
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
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-bold border-b border-[#dedbc8]/5 pb-2">
                  Navigation Matrix
                </span>
                <nav className="flex flex-col gap-6">
                  {links.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`font-sans text-base tracking-wide ${
                          isActive ? "text-[#2a7d8a] font-semibold" : "text-gray-300 hover:text-[#dedbc8]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className={`font-sans text-base tracking-wide ${
                      pathname === "/contact" ? "text-[#2a7d8a] font-semibold" : "text-gray-300 hover:text-[#dedbc8]"
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
                  className="w-full flex items-center justify-between border border-[#dedbc8]/14 p-3 text-xs font-mono uppercase tracking-wider text-[#dedbc8] hover:bg-[#dedbc8]/5"
                >
                  <span>Animation System</span>
                  <span className="text-[#2a7d8a] font-bold">
                    {isMotionPaused ? "PAUSED" : "ACTIVE"}
                  </span>
                </button>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider text-center">
                  {BRAND_CONFIG.shortName.toUpperCase()} {"// EST"} {BRAND_CONFIG.estYear}
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
