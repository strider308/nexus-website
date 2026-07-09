"use client";

import { cn } from "@/lib/utils";
import { HERO } from "@/lib/content/nexus";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Demo Library", href: "/demo" },
  { label: "Resources", href: "/resources" },
  { label: "Inquiries", href: HERO.ctaUrl, isExternal: true },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 md:px-8">
      {/* Pill Container hanging from top edge */}
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl border-x border-b border-[#DEDBC8]/15 px-6 py-3.5 flex items-center justify-between shadow-lg shadow-black/40 backdrop-blur-md">
        
        {/* Brand Logo Wordmark */}
        <Link 
          href="/" 
          className="font-display text-sm md:text-base font-bold tracking-tight text-[#E1E0CC] hover:opacity-90 outline-none"
        >
          Nexus<span className="text-[#DEDBC8] font-light">*</span>
        </Link>

        {/* Desktop Pill Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 outline-none"
                  style={{ color: "rgba(225, 224, 204, 0.8)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 outline-none",
                  isActive ? "text-[#E1E0CC] border-b border-[#DEDBC8]/30 pb-0.5" : ""
                )}
                style={{ color: isActive ? "#E1E0CC" : "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#E1E0CC";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)";
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <button 
                className="text-[#E1E0CC] p-1.5 focus:outline-none" 
                aria-label="Toggle Navigation"
              />
            }>
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </SheetTrigger>
            <SheetContent side="top" className="w-full bg-black border-b border-[#DEDBC8]/15 px-6 py-8">
              <div className="flex flex-col gap-6 text-center">
                <div className="font-display text-lg font-bold text-[#E1E0CC] mb-2">Nexus</div>
                <nav className="flex flex-col gap-4 text-xs font-mono font-bold uppercase tracking-wider">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    if (item.isExternal) {
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className="py-2.5 border-b border-[#DEDBC8]/10 text-[#E1E0CC] hover:text-[#DEDBC8]"
                        >
                          {item.label}
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "py-2.5 border-b border-[#DEDBC8]/10 transition-colors",
                          isActive ? "text-[#DEDBC8] font-bold" : "text-[#E1E0CC]/80 hover:text-[#E1E0CC]"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
