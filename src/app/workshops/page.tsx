import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import ContactForm from "@/components/ContactForm";
import { workshops } from "@/content/site";

export const metadata: Metadata = {
  title: "Workshops & Academy",
  description: "Make your own handmade paper at Kanha with studio experiences, sessions for children and a full papermaking academy.",
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHead
        label="Workshops & academy"
        title="Every person should make their own paper"
        lead="Our studio is meant to be experienced. Come to Kanha, put your hands in the pulp, and leave with a sheet that's entirely yours."
        slot="workshops-hero"
        alt="Papermakers at work in the studio"
      />

      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title">Choose Your Session</h2>
          </div>
          <div className="row-3">
            {workshops.map((w, k) => (
              <a href="#book" className="card" key={w.slot} data-reveal data-delay={k + 1}>
                <Photo slot={w.slot} alt={w.title} sizes="(max-width: 900px) 100vw, 33vw" />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <span className="meta">{w.meta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap split rev">
          <div data-reveal>
            <Photo slot="academy" alt="A trainee forming a sheet at the vat" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">The training academy</span>
            <h2 className="title">We share every secret</h2>
            <p className="muted">
              Only a few organisations in India make handmade paper, and most keep their methods to themselves. Our academy exists
              to open the door and take this craft to every city and every village.
            </p>
            <p className="muted">
              Fibre selection · beating the pulp · forming and couching · pressing and drying · finishing and making paper products.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="book" style={{ scrollMarginTop: 90 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="head" data-reveal>
            <span className="label">Book</span>
            <h2 className="title">Reserve a Place</h2>
            <p className="lead">Tell us who&apos;s coming and when, and we&apos;ll write back with available dates.</p>
          </div>
          <ContactForm kind="workshop" />
        </div>
      </section>
    </>
  );
}
