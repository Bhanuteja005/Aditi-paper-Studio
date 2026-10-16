"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

type Slide = { photo: ReactNode; eyebrow: string; title: string; cta: { href: string; label: string } };

const ease = [0.22, 0.61, 0.24, 1] as const;

/** Full-bleed crossfading hero with a slow zoom on each photo (after Jaipur Rugs). */
export default function HeroSlider({ slides, interval = 6000 }: { slides: Slide[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI((i + 1) % slides.length), interval);
    return () => clearTimeout(t);
  }, [i, interval, slides.length]);

  const s = slides[i];
  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Highlights">
      <h1 className="sr-only">Aditi Paperie, tree-free handmade paper from Kanha</h1>
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          <motion.div
            style={{ position: "absolute", inset: 0 }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: interval / 1000 + 1.5, ease: "linear" }}
          >
            {s.photo}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-copy">
        <div className="wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="label">{s.eyebrow}</span>
              <p className="hero-title">{s.title}</p>
              <Link href={s.cta.href} className="btn light">{s.cta.label}</Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, k) => (
          <button key={k} aria-label={`Show slide ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />
        ))}
      </div>
    </section>
  );
}
