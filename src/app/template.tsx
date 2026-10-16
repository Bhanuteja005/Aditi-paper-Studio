"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { getLenis } from "@/components/SmoothScroll";

/**
 * Remounts on every navigation. Its effect runs only after the page beneath it has hydrated,
 * so it's the safe place to start [data-reveal] observers (they add an attribute to
 * server-rendered elements; doing that earlier causes hydration mismatches).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.setAttribute("data-shown", "");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]:not([data-shown])").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 0.61, 0.24, 1] }}>
      {children}
    </motion.div>
  );
}
