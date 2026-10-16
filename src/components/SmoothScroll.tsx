"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

/** Gentle inertial scrolling (Lenis). Reveal observers live in app/template.tsx. */
export default function SmoothScroll() {
  useEffect(() => {
    document.documentElement.dataset.js = "";
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ lerp: 0.1, autoRaf: true });
    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);
  return null;
}
