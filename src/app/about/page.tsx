import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "About Us",
  description: "Aditi Paperie is a tree-free handmade paper studio and social enterprise at Kanha Shanti Vanam, founded in 2026.",
};

const promises = [
  { t: "For the planet", d: "No trees cut, no toxins released, nothing that can't return to the earth or come back to us to be made again." },
  { t: "For the women", d: "Livelihood, identity and creative work for women from the villages around Kanha." },
  { t: "For the craft", d: "An academy that teaches openly, so papermaking reaches every city and every village." },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        label="About us"
        title="A paper studio in a place of stillness"
        lead="Aditi Paperie lives at Kanha Shanti Vanam. It began in March 2026 with a simple vision: that every person, and every child especially, should learn to make their own paper."
        slot="about-hero"
        alt="An artisan at work"
      />

      <section className="section">
        <div className="wrap split">
          <div data-reveal>
            <Photo slot="about-founder" alt="A hand-bound diary, the first gift that started it all" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">The founder</span>
            <h2 className="title">Aditi&apos;s story</h2>
            <p className="muted">
              Aditi is a computer science engineer who never imagined working with paper. A lifelong Heartfulness practitioner and
              trainer, she was encouraged by Daaji, who has carried the vision of papermaking for everyone for more than forty
              years, to start the studio single-handedly.
            </p>
            <p className="muted">
              She first learnt the craft in Auroville, working alongside papermakers at the vat. Her first gift to Daaji was a small
              handmade diary. Today the studio makes more than eleven kinds of paper, with more in development.
            </p>
            <p style={{ fontWeight: 400 }}>“My only vision is that whoever gets associated with me should grow.”</p>
          </div>
        </div>
      </section>

      <section className="banner" id="women">
        <Photo slot="about-women" alt="A woman artisan at work" />
        <div className="wrap" data-reveal>
          <span className="label">A social enterprise</span>
          <h2>Identity. Creativity. A future.</h2>
          <p>
            Aditi Paperie LLP was formed to bring livelihood to women from the villages around Kanha. Women have always known how to
            take what&apos;s left over and turn it into something beautiful. We gave that gift a studio.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split rev">
          <div data-reveal>
            <Photo slot="about-artists" alt="Art and décor made on handmade paper" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">A platform for artists</span>
            <h2 className="title">Art that gets its due</h2>
            <p className="muted">
              Local artists rarely get the visibility their work deserves. We work with them to create art, décor and wall pieces
              on handmade paper for homes, hotels and hospitality spaces that want something with a soul.
            </p>
            <Link href="/contact" className="link">Collaborate with us</Link>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title">What We Stand For</h2>
          </div>
          <div className="cols-3" data-reveal>
            {promises.map((p) => (
              <div key={p.t}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
