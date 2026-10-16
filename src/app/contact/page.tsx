import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit the Aditi Paperie studio at Kanha Shanti Vanam, or write to us about paper, custom orders and workshops.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ about?: string | string[] }> }) {
  const query = await searchParams;
  const about = (Array.isArray(query.about) ? query.about[0] : query.about)?.trim().slice(0, 200) ?? "";
  return (
    <>
      <PageHead
        label="Contact"
        title="Something in mind?"
        lead="Whether you want a single sheet, a thousand diaries or an afternoon at the vat, we'd love to hear from you."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div data-reveal>
            <div className="info"><h4>Studio location</h4><p>{site.location}</p></div>
            <div className="info"><h4>Plan a visit</h4><p>{site.hours || "The exact studio address, visiting hours and directions will be shared before visits open."}</p></div>
            {site.email && <div className="info"><h4>Email</h4><a href={`mailto:${site.email}`}>{site.email}</a></div>}
            {site.phone && <div className="info"><h4>Phone</h4><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a></div>}
            {!site.email && <div className="info"><h4>Start with an idea</h4><p>Our studio contact details will be added here soon. In the meantime, use this form to prepare and save an enquiry.</p></div>}
          </div>
          <div data-reveal data-delay={1}>
            <ContactForm key={about} about={about} />
          </div>
        </div>
      </section>
    </>
  );
}
