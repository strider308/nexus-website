"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let registered = false;

export function registerGSAP() {
  if (registered) return;
  
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    registered = true;
  }
}

// Automatically trigger registration on client import
registerGSAP();

export { gsap, ScrollTrigger, useGSAP };
