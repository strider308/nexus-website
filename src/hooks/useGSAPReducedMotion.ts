"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useGSAPReducedMotion() {
  const isReduced = useReducedMotion();
  return isReduced;
}

export default useGSAPReducedMotion;
