import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Our Studio",
  description: "Meet the vision behind Aditi Paperie: a handmade-paper studio at Kanha, bringing together material exploration, creative livelihoods and learning.",
};

const principles = [
  { title: "Know the material", text: "Work with textile offcuts and plant fibres. Observe, experiment and learn what each can become." },
  { title: "Value the maker", text: "Build opportunities for women around Kanha to develop skills and be recognised for their creative work." },
  { title: "Teach what we learn", text: "Share the practice through studio experiences and the planned academy, so others can take it forward." },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        label="Our studio"
        title="A studio built around shared growth."
        lead="Handmade paper at Kanha Shanti Vanam, with a purpose beyond the sheet: skilled work for women, space for artists and a craft more people can learn."
        slot="about-hero"
        alt="Handmade sheets hanging to dry in a studio, with a woman working in the distance"
      />

      <section className="section">
        <div className="wrap split">
          <div data-reveal>
            <Photo slot="about-founder" alt="An ivory hand-bound journal with an ochre cloth spine on linen" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">Aditi&apos;s story</span>
            <h2 className="title">From engineering<br />to papermaking.</h2>
            <p>
              Aditi trained as a computer science engineer. Papermaking was an unexpected direction, encouraged by
              Daaji&apos;s vision that more people should have the opportunity to learn the craft.
            </p>
            <p>
              She began learning alongside papermakers in Auroville. At Kanha, she has continued that exploration with
              textile and plant fibres, developing papers and finding the right use for each.
            </p>
            <p>
              A Heartfulness practitioner and trainer, Aditi sees the studio as a place where people can develop alongside
              the work. Her ambitions connect making and selling with teaching, livelihoods and opportunities for artists.
            </p>
          </div>
        </div>
      </section>

      <section className="section tint quote">
        <div className="wrap" data-reveal>
          <blockquote>“The only vision I have is, whoever gets associated with me, should grow.”</blockquote>
          <cite>Aditi · Founder</cite>
        </div>
      </section>

      <section className="section" id="women">
        <div className="wrap split rev">
          <div data-reveal>
            <Photo slot="about-women" alt="Women working together on handmade papermaking" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">People at the centre</span>
            <h2 className="title">Skilled work.<br />An identity of one&apos;s own.</h2>
            <p>
              The studio was established with livelihoods for women from the villages around Kanha in mind.
              Learning to make paper offers a practical skill and a space for creative work.
            </p>
            <p>
              For Aditi, the purpose includes the confidence and identity that come with that work.
              As the studio grows, she wants those opportunities to grow with it.
            </p>
            <Link href="/workshops" className="link">Discover learning at the studio</Link>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap split">
          <div data-reveal>
            <Photo slot="about-artists" alt="A sculptural paper pendant lamp suspended in an interior" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">Artists, designers &amp; spaces</span>
            <h2 className="title">Paper in the hands of artists.</h2>
            <p>
              Aditi wants to create a platform for artists working with paper, connecting their practice with
              people seeking artwork and objects for homes, hotels and other spaces.
            </p>
            <p>
              Artists can share a portfolio or proposal. Designers and hospitality teams can bring a brief.
              The conversation begins with the material and the work you want to make.
            </p>
            <Link href="/contact?about=Artist%20or%20design%20collaboration" className="btn">Discuss a collaboration</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">What guides us</span>
            <h2 className="title">The principles behind the practice.</h2>
          </div>
          <div className="cols-3" data-reveal>
            {principles.map((principle) => (
              <div key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
