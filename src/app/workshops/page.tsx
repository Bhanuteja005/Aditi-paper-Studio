import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import { workshops } from "@/content/site";

export const metadata: Metadata = {
  title: "Workshops & Learning",
  description: "Explore hands-on papermaking at Kanha, enquire about studio and group experiences, and discover Aditi Paperie's plans for a training academy.",
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHead
        label="Workshops & learning"
        title="Learn paper by making it."
        lead="See fibres suspended in water. Lift a sheet on the mould. Discover the decisions behind a material you use every day."
        slot="workshops-hero"
        alt="An adult learner exploring handmade papermaking at a studio table"
      />

      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">Learning at Kanha</span>
            <h2 className="title">A first sheet, or a deeper practice.</h2>
            <p className="lead">Tell us who is coming and what you&apos;d like to learn. The studio will need to confirm the format, dates and fees before a visit.</p>
          </div>
          <div className="row-3">
            {workshops.map((w, k) => (
              <div className="session-card" key={w.slot} data-reveal data-delay={k + 1}>
                <span className="label" aria-hidden="true">0{k + 1}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <span className="session-status">{w.meta}</span>
                <Link href={{ pathname: "/contact", query: { about: w.title } }} className="link">
                  {w.slot === "ws-academy" ? "Enquire about the academy" : "Enquire about this experience"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint" id="academy">
        <div className="wrap split rev">
          <div data-reveal>
            <Photo slot="academy" alt="An instructor guiding two adult learners at a papermaking vat" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">The academy · In development</span>
            <h2 className="title">Knowledge to take back with you.</h2>
            <p>
              The planned academy grows from a simple intention: to teach the craft openly.
              Aditi wants learners to understand the full process and carry that knowledge into their own work and communities.
            </p>
            <p>
              The proposed programme follows the making of paper, from fibre selection and pulp preparation to sheet formation,
              pressing, drying and the development of paper objects.
            </p>
            <p className="material-note">The programme and schedule are in development. Enquiries are welcome; enrolment is not yet open.</p>
            <Link href="/contact?about=Papermaking%20Academy%20enquiry" className="btn">Enquire about the academy</Link>
          </div>
        </div>
      </section>

      <section className="section" id="enquire">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">Before you visit</span>
            <h2 className="title">Tell us about your visit.</h2>
            <p className="lead">Include these details in your enquiry so the studio can advise on a suitable session.</p>
          </div>
          <div className="cols-3" data-reveal>
            <div>
              <h3>Who is coming?</h3>
              <p>Share your group size, age range and any access or learning needs you would like to discuss.</p>
            </div>
            <div>
              <h3>What brings you here?</h3>
              <p>A school visit, an introduction to the craft or time to develop your material practice. Share what you hope to learn.</p>
            </div>
            <div>
              <h3>When works for you?</h3>
              <p>Include preferred dates. Availability, duration, fees and visit details need confirmation before you travel.</p>
            </div>
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link href="/contact?about=Studio%20visit%20or%20group%20workshop" className="btn">Begin a workshop enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
