"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { getLenis } from "./SmoothScroll";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const headerBar = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const toggleButton = toggle.current;
    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    getLenis()?.stop();

    const background = [...document.querySelectorAll<HTMLElement>("main, footer, .skip")];
    if (headerBar.current) background.push(headerBar.current);
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });

    const focusable = () => Array.from(menu.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    const frame = requestAnimationFrame(() => focusable()[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreFocus.current = true;
        setOpenAt(null);
      }
      if (event.key === "Tab") {
        const elements = focusable();
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) focusable()[0]?.focus();
    };
    // Follow the CSS-controlled trigger rather than duplicating its breakpoint.
    const onResize = () => {
      if (toggleButton && window.getComputedStyle(toggleButton).display === "none") setOpenAt(null);
    };
    const onHistoryNavigation = () => {
      restoreFocus.current = false;
      setOpenAt(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocus);
    window.addEventListener("popstate", onHistoryNavigation);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("popstate", onHistoryNavigation);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      getLenis()?.start();
      if (restoreFocus.current && toggleButton?.offsetParent !== null) toggleButton?.focus();
    };
  }, [open]);

  const closeForNavigation = () => {
    restoreFocus.current = false;
    setOpenAt(null);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap" ref={headerBar}>
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-full.svg" alt={site.name} width={122} height={46} />
        </Link>
        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-cta">
          <Link href="/workshops" className="btn gold">Explore workshops</Link>
        </div>
        <button
          ref={toggle}
          type="button"
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={open ? "mobile-navigation" : undefined}
          aria-haspopup="dialog"
          onClick={() => { restoreFocus.current = true; setOpenAt(open ? null : pathname); }}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div
          ref={menu}
          id="mobile-navigation"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          data-lenis-prevent
        >
          <div className="mobile-menu-top">
            <Link href="/" className="brand" aria-label={`${site.name} home`} onClick={closeForNavigation}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-full.svg" alt={site.name} width={122} height={46} />
            </Link>
            <button className="mobile-menu-close" type="button" onClick={() => { restoreFocus.current = true; setOpenAt(null); }}>Close menu <span aria-hidden="true">×</span></button>
          </div>
          <nav className="mobile-nav" aria-label="Mobile">
            {[{ href: "/", label: "Home" }, ...nav].map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeForNavigation}>{item.label}</Link>
            ))}
            <Link href="/workshops" className="btn gold" onClick={closeForNavigation}>Explore workshops</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
