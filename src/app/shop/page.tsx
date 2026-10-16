import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import ShopGrid from "@/components/ShopGrid";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "The Collection",
  description: "Explore handmade-paper design directions for sheets, journals, letters, invitations and lighting. Enquire about specifications, availability and custom projects.",
};

export default function ShopPage() {
  const items = products.map((p) => ({
    ...p,
    photo: <Photo slot={p.slot} alt={p.name} sizes="(max-width: 600px) 50vw, (max-width: 1080px) 33vw, 25vw" />,
  }));

  return (
    <>
      <PageHead
        compact
        label="Paper & objects"
        title="Paper for the desk, the home and the occasion."
        lead="Handmade sheets, journals, stationery and lighting. Choose a direction, then explore the details with the studio."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="collection-note" data-reveal>
            <div>
              <span className="label">Find your paper</span>
              <p>Texture, weight, colour and finish. Start with what you have in mind; we can explore the details together.</p>
            </div>
            <Link href="/contact?about=Custom%20or%20business%20project" className="link">Custom &amp; business enquiries</Link>
          </div>
          <Suspense fallback={<p className="center">Loading the collection…</p>}>
            <ShopGrid items={items} />
          </Suspense>
        </div>
      </section>

      <section className="section tint" id="custom">
        <div className="wrap split">
          <div data-reveal>
            <Photo slot="shop-custom" alt="An invitation suite arranged on handmade paper" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">Custom &amp; business projects</span>
            <h2 className="title">Made around<br />your brief.</h2>
            <p>
              A stationery suite for a wedding. A journal for a team. A paper object for a hotel.
              Bring the purpose and the details; the studio can help explore an appropriate material and finish.
            </p>
            <p>
              Include quantities, dimensions, delivery location and your required date.
              Samples and production options need to be agreed before an order is confirmed.
            </p>
            <Link href="/contact?about=Custom%20or%20business%20project" className="btn">Start a project brief</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head" data-reveal>
            <span className="label">From interest to object</span>
            <h2 className="title">The details come first.</h2>
          </div>
          <div className="cols-3" data-reveal>
            <div>
              <h3>01 · Choose a direction</h3>
              <p>Select a piece from the collection or describe your own. Include how it will be used and the quantity you need.</p>
            </div>
            <div>
              <h3>02 · Confirm the details</h3>
              <p>Agree on the material, dimensions, finish, quantity, price and timing before placing an order.</p>
            </div>
            <div>
              <h3>03 · Look at the material</h3>
              <p>Texture, tone and edges vary between handmade sheets. Discuss a sample when matching a finish or planning print work.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
