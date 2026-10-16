import Link from "next/link";
import { nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-full.svg" alt={site.name} width={170} height={64} />
            <p>Tree-free paper, new possibilities. A handmade paper studio at Kanha, growing through craft and shared learning.</p>
          </div>
          <div>
            <h4>Explore</h4>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
          </div>
          <div>
            <h4>Visit</h4>
            <p>{site.location}</p>
            <p>{site.hours || "Visit details to be confirmed with the studio."}</p>
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            {site.phone && <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>}
            <Link href="/contact">Plan an enquiry</Link>
          </div>
          <div>
            <h4>Learn the craft</h4>
            <p>From a first sheet to a deeper practice. Explore the studio&apos;s vision for shared learning.</p>
            <Link href="/workshops">Explore workshops →</Link>
          </div>
        </div>
        <div className="foot-base">
          <span>© {site.legal}</span>
          {site.instagram ? <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram <span className="sr-only">(opens a new tab)</span></a> : <span>Made with care. Shared with purpose.</span>}
        </div>
      </div>
    </footer>
  );
}
