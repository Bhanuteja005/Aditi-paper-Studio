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
            <p>Tree-free, chemical-free, archival paper, handmade by the women of Kanha.</p>
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
            <p>{site.hours}</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p>New papers and workshop dates, a few times a year.</p>
            {/* TODO connect to the client's newsletter tool */}
            <form className="news" action="#" aria-label="Newsletter">
              <input type="email" placeholder="Your email" aria-label="Email" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
        <div className="foot-base">
          <span>© {site.legal}</span>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
