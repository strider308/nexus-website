"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CTAS } from "@/lib/content/nexus";

const items = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/demo", label: "Demo library" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open && wasOpen.current) triggerRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur-sm">
      <div className="content-wrap flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight">Nexus</Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {items.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="rounded-md px-3 py-2 text-sm text-muted hover:text-foreground">{item.label}</Link>)}
          <Link href={CTAS.primary.href} className="button-primary ml-2">{CTAS.primary.label}</Link>
        </nav>
        <button ref={triggerRef} type="button" className="rounded-md border px-3 text-sm font-semibold md:hidden" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>Menu</button>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t bg-surface md:hidden">
          <div className="content-wrap flex flex-col py-3">
            {items.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="rounded-md px-3 py-3 text-base" onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link href={CTAS.primary.href} className="button-primary mt-2" onClick={() => setOpen(false)}>{CTAS.primary.label}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
