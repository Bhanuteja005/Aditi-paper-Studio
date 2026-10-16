import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit the Aditi Paperie studio at Kanha Shanti Vanam, or write to us about paper, custom orders and workshops.",
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        label="Contact"
        title="Come by. Say hello."
        lead="Whether you want a single sheet, a thousand diaries or an afternoon at the vat, we'd love to hear from you."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div data-reveal>
            <div className="info"><h4>Studio</h4><p>{site.location}</p></div>
            <div className="info"><h4>Hours</h4><p>{site.hours}</p></div>
            <div className="info"><h4>Email</h4><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div className="info"><h4>Phone</h4><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></div>
          </div>
          <div data-reveal data-delay={1}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
