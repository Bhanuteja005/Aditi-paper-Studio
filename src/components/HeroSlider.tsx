"use client";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
type Slide = { photo: ReactNode; eyebrow: string };
const SLIDE_DURATION_MS = 5000;
/** Slow image crossfades keep the headline steady; interaction pauses the timer. */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [selection, setSelection] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();
  const autoplay = !reducedMotion && slides.length > 1;
  const playing = autoplay && !hovered && !focused && visible;
  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  return (
    <section className="hero atelier-hero" aria-label="Aditi Paperie introduction" onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }} onPointerLeave={() => setHovered(false)} onPointerDown={() => setFocused(false)} onFocusCapture={(event) => setFocused(event.target.matches(":focus-visible"))} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
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
            <button key={slide.eyebrow} type="button" aria-pressed={index === active} aria-label={`Show ${slide.eyebrow.toLowerCase()}`} onClick={() => { setActive(index); setSelection((value) => value + 1); }}>
              {index === active && (
                <span
                  key={`${active}-${selection}`}
                  className="hero-control-progress"
                  aria-hidden="true"
                  data-autoplay={autoplay}
                  style={{ animationDuration: `${SLIDE_DURATION_MS}ms`, animationPlayState: playing ? "running" : "paused" }}
                  // The fill is the slide clock, so visual progress and advancement cannot drift.
                  onAnimationEnd={() => { if (autoplay) setActive((value) => (value + 1) % slides.length); }}
                />
              )}
              <span className="hero-control-number">0{index + 1}</span><span>{slide.eyebrow}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
