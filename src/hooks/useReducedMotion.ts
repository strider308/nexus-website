import { useContext } from "react";
import { MotionPreferenceContext } from "@/components/providers/MotionPreferenceProvider";

export function useReducedMotion(): boolean {
  const context = useContext(MotionPreferenceContext);
  return context ? context.shouldReduceMotion : false;
}
