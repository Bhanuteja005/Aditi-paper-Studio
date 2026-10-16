"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/content/site";
import { getLenis } from "./SmoothScroll";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // remember which page the menu was opened on, so navigating closes it
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) getLenis()?.stop();
    else getLenis()?.start();
  }, [open]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-full.svg" alt={site.name} width={122} height={46} />
        </Link>
        <nav className="nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname === n.href ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <Link href="/workshops" className="btn gold">Book a workshop</Link>
        </div>
        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpenAt(open ? null : pathname)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {[{ href: "/", label: "Home" }, ...nav].map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
            <Link href="/workshops" className="btn gold">Book a workshop</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
