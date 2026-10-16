import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Photo from "@/components/Photo";
import { heroSlides, papers, purposes, workshops } from "@/content/site";

export default function Home() {
  return (
    <>
      <HeroSlider
        slides={heroSlides.map((s, k) => ({
          ...s,
          photo: <Photo slot={s.slot} alt="" eager={k === 0} />,
        }))}
      />

      {/* intro */}
      <section className="section intro">
        <div className="wrap" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="mark" src="/brand/logo-mark.svg" alt="" width={54} height={57} />
          <p className="title-lg">
            Tree-free, chemical-free, <span className="gold">archival</span> paper, handmade at Kanha from textile rags and the
            fibres of the forest floor.
          </p>
          <Link href="/about" className="link">Our story</Link>
          <ul className="facts">
            <li>100% tree-free</li>
            <li>Non-toxic</li>
            <li>Archival quality</li>
            <li>Made by women</li>
          </ul>
        </div>
      </section>

      {/* papers */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title">Explore Our Papers</h2>
            <p className="lead">More than eleven papers, each pulled by hand. No two sheets are alike.</p>
          </div>
          <div className="row-5">
            {papers.map((p, k) => (
              <Link href="/paper" className="tile" key={p.slot} data-reveal data-delay={k % 5}>
                <Photo slot={p.slot} alt={p.name} sizes="(max-width: 600px) 50vw, 20vw" />
                <h3>{p.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* purpose */}
      <section className="section tint">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title">Shop by Purpose</h2>
          </div>
          <div className="row-3">
            {purposes.map((p, k) => (
              <Link href={p.href} className="purpose" key={p.slot} data-reveal data-delay={k + 1}>
                <Photo slot={p.slot} alt={p.title} sizes="(max-width: 900px) 100vw, 33vw" />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* women banner */}
      <section className="banner">
        <Photo slot="women-banner" alt="An artisan at work in the studio" />
        <div className="wrap" data-reveal>
          <span className="label">A social enterprise</span>
          <h2>Made by the women of Kanha</h2>
          <p>Every sheet supports a livelihood for women from the villages around Kanha: an income, an identity and a craft to be proud of.</p>
          <Link href="/about#women" className="btn light">Meet the makers</Link>
        </div>
      </section>

      {/* who we are */}
      <section className="section">
        <div className="wrap split">
          <div data-reveal>
            <Photo slot="about-vat" alt="A sheet of paper being lifted from the vat" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text c" data-reveal data-delay={1}>
            <span className="label">Who we are</span>
            <h2 className="title">An ancient craft, revived</h2>
            <p className="muted">
              For a thousand years paper was made by hand, from rags and plants, never trees. Inspired by Daaji&apos;s vision that
              every person should learn to make their own paper, Aditi Paperie began at Kanha Shanti Vanam in 2026 to bring that
              craft back.
            </p>
            <Link href="/about" className="btn gold">Learn more</Link>
          </div>
        </div>
      </section>

      {/* workshops */}
      <section className="section tint">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">Workshops &amp; academy</span>
            <h2 className="title">Make Your Own Paper</h2>
            <p className="lead">Most papermakers guard their secrets. We teach ours.</p>
          </div>
          <div className="row-3">
            {workshops.map((w, k) => (
              <Link href="/workshops" className="card" key={w.slot} data-reveal data-delay={k + 1}>
                <Photo slot={w.slot} alt={w.title} sizes="(max-width: 900px) 100vw, 33vw" />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <span className="meta">{w.meta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* quote */}
      <section className="section quote">
        <div className="wrap" data-reveal>
          <blockquote>“Every sheet is different. Only when you touch it do you feel it. It's like pottery, like a painting you can never paint twice.”</blockquote>
          <cite>Aditi, founder</cite>
        </div>
      </section>
    </>
  );
}
