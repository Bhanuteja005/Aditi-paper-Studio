"use client";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
type Slide = { photo: ReactNode; eyebrow: string };
/** Slow image crossfades keep the headline steady; interaction pauses the timer. */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  useEffect(() => {
    if (hovered || focused || !visible || reducedMotion || slides.length < 2) return;
    const timer = setTimeout(() => setActive((value) => (value + 1) % slides.length), 7000);
    return () => clearTimeout(timer);
  }, [active, hovered, focused, visible, reducedMotion, slides.length]);
  return (
    <section className="hero atelier-hero" aria-label="Aditi Paperie introduction" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="hero-images">
        {slides.map((slide, index) => (
          <div key={slide.eyebrow} className={`slide ${active === index ? "is-active" : ""}`} aria-hidden={index !== active}>{slide.photo}</div>
        ))}
      </div>
      <div className="hero-copy"><div className="wrap">
        <span className="label">A handmade paper studio · Kanha, India</span>
        <h1 className="hero-title">A new life.<br />In every fibre.</h1>
        <p className="hero-description">Tree-free paper. Thoughtful objects.<br />A craft worth passing on.</p>
        <div className="hero-actions">
          <Link href="/shop" className="btn light">Explore the collection</Link>
          <Link href="/workshops" className="hero-link">Experience the craft <span aria-hidden="true">↗</span></Link>
        </div>
      </div></div>
      <div className="hero-bottom wrap">
        <p className="hero-note">From discarded fibres.<br />To something worth keeping.</p>
        <div className="hero-controls" role="group" aria-label="Choose a hero photograph">
          {slides.map((slide, index) => (
            <button key={slide.eyebrow} type="button" aria-pressed={index === active} aria-label={`Show ${slide.eyebrow.toLowerCase()}`} onClick={() => setActive(index)}>
              <span className="hero-control-number">0{index + 1}</span><span>{slide.eyebrow}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
