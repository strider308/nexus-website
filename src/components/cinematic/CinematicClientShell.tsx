"use client";

/**
 * CinematicClientShell
 *
 * A minimal client boundary that mounts the CinematicProvider and
 * PageTransitionShell inside the server root layout.
 *
 * The root layout (app/layout.tsx) remains a Server Component.
 * Only this tiny wrapper is a Client Component.
 *
 * Structure in layout.tsx:
 *   <body>
 *     <CinematicClientShell>
 *       {children}
 *     </CinematicClientShell>
 *   </body>
 */

import { ReactNode } from "react";
import { CinematicProvider } from "./CinematicProvider";
import { PageTransitionShell } from "./PageTransitionShell";

interface CinematicClientShellProps {
  children: ReactNode;
}

export function CinematicClientShell({ children }: CinematicClientShellProps) {
  return (
    <>
      {/* Entrance overlay — renders once per session when flag is on */}
      <CinematicProvider />
      {/* Route transition wrapper */}
      <PageTransitionShell>{children}</PageTransitionShell>
    </>
  );
}
