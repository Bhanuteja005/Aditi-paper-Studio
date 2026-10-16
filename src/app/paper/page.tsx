import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import { faqs, fibres, steps } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Paper",
  description: "Explore Aditi Paperie's handmade paper, textile and plant fibres, sheet-making process, and possibilities for writing, gifting and design.",
};

const uses = [
  { title: "Writing & drawing", text: "Journals, loose sheets and correspondence. Choose the weight and surface for the marks you want to make.", href: "/shop?c=stationery", link: "Explore stationery" },
  { title: "Invitations & gifts", text: "An invitation held in the hand, a personal note, a gift made for someone. Begin with the paper and build from there.", href: "/shop?c=archival", link: "Explore gifting" },
  { title: "Objects & interiors", text: "Light through a paper shade. Texture on a wall. Discuss paper objects and artwork for homes and hospitality.", href: "/contact?about=Paper%20for%20an%20interior%20project", link: "Discuss a project" },
];

export default function PaperPage() {
  return (
    <>
      <PageHead
        label="The material"
        title="The character is in the fibre."
        lead="Cotton, textile offcuts and plant fibres, formed by hand into paper. Look closely: the surface holds traces of what went into it and how it was made."
        slot="paper-hero"
        alt="A curled sheet of translucent handmade paper on a plinth, lit to reveal its fibres"
      />

      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">A material practice</span>
            <h2 className="title">Cotton, cloth and the plants around us.</h2>
            <p className="lead">Each fibre behaves differently. The studio explores those differences through the colour, texture and feel of the finished sheet.</p>
          </div>
          <div className="split">
            <div data-reveal>
              <Photo slot="fibre-study" alt="Cotton, textile offcuts and plant fibres arranged beside handmade paper" sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div data-reveal data-delay={1}>
              <dl className="material-list">
                {fibres.map((f) => (
                  <div key={f.slot}>
                    <dt>{f.name}</dt>
                    <dd>{f.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="material-note">Research is ongoing. Ask which fibre blends and finishes are available for your project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">From fibre to form</span>
            <h2 className="title">The making of a sheet.</h2>
            <p className="lead">Pulp is lifted on a mould and deckle, pressed and dried. Small decisions at each stage shape the finished surface.</p>
          </div>
          <div className="split rev">
            <div data-reveal>
              <Photo slot="process-detail" alt="Hands forming a sheet with a wooden mould and deckle" sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <ol className="process-list" data-reveal>
              {steps.map((s, k) => (
                <li key={s.slot}>
                  <span className="label" aria-hidden="true">0{k + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">Paper in use</span>
            <h2 className="title">From a page to a room.</h2>
            <p className="lead">Fibre, weight and finish guide what a sheet can become. Start with the use you have in mind.</p>
          </div>
          <div className="cols-3" data-reveal>
            {uses.map((u) => (
              <div key={u.title}>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
                <Link href={u.href} className="link">{u.link}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">Choosing your paper</span>
            <h2 className="title">Choose the paper for the work.</h2>
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
            <p className="lead" style={{ margin: "0 auto 24px" }}>Planning a print run or a custom piece? Share the application, size and finish so the studio can advise on samples.</p>
            <Link href="/contact?about=Paper%20samples%20and%20specifications" className="btn">Ask about samples</Link>
          </div>
        </div>
      </section>
    </>
  );
}
