import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import { faqs, fibres, steps } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Paper",
  description: "How Aditi makes tree-free, chemical-free, archival paper from textile rags and plant fibres, and why it lasts.",
};

const uses = [
  { t: "Documents & deeds", d: "Land papers, certificates and records you'd rather not trust to a hard drive." },
  { t: "Heirloom photographs", d: "Print or sleeve family portraits for the next four generations." },
  { t: "Manuscripts & time capsules", d: "Words meant to be read in a hundred years, on a sheet that will still be there." },
];

export default function PaperPage() {
  return (
    <>
      <PageHead
        label="Our paper"
        title="Tree-free. Toxin-free. Timeless."
        lead="Paper is simply fibres woven together, like cloth. For a thousand years it was made by hand from rags and plants, never from trees. We are bringing that back."
        slot="paper-hero"
        alt="A papermaker lifting a sheet from the vat"
      />

      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title">What It&apos;s Made Of</h2>
            <p className="lead">We look for fibre everywhere except in trees.</p>
          </div>
          <div className="row-3">
            {fibres.map((f, k) => (
              <div className="card" key={f.slot} data-reveal data-delay={(k % 3) + 1}>
                <Photo slot={f.slot} alt={f.name} sizes="(max-width: 900px) 100vw, 33vw" />
                <h3>{f.name}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">The process</span>
            <h2 className="title">From Rag to Sheet</h2>
          </div>
          <div className="steps">
            {steps.map((s, k) => (
              <div className="step" key={s.slot} data-reveal>
                <Photo slot={s.slot} alt={s.title} sizes="(max-width: 900px) 100vw, 50vw" />
                <div>
                  <span className="num">0{k + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">Archival quality</span>
            <h2 className="title">Made to Outlast Us</h2>
            <p className="lead">
              Open a notebook from forty years ago and the pages are brown and brittle. That&apos;s the chemistry of tree paper.
              Ours has none of it. Only a handful of papermakers in India make true archival paper.
            </p>
          </div>
          <div className="cols-3" data-reveal>
            {uses.map((u) => (
              <div key={u.t}>
                <h3>{u.t}</h3>
                <p>{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title">Good to Know</h2>
          </div>
          <div className="faq" data-reveal>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="center" style={{ marginTop: 48 }}>
            <Link href="/shop" className="btn">Shop the paper</Link>
          </div>
        </div>
      </section>
    </>
  );
}
