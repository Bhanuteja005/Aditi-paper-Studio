import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PageHead from "@/components/PageHead";
import Photo from "@/components/Photo";
import ShopGrid from "@/components/ShopGrid";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "Shop",
  description: "Handmade tree-free paper, diaries, letter sets, archival folios, invitations and paper lamps from Aditi Paperie.",
};

export default function ShopPage() {
  const items = products.map((p) => ({
    ...p,
    photo: <Photo slot={p.slot} alt={p.name} sizes="(max-width: 600px) 50vw, 25vw" />,
  }));
  return (
    <>
      <PageHead
        label="Shop"
        title="Handmade, tree-free, made to last"
        lead="Paper for writing, keeping and living with. Every piece is made by hand at Kanha. Write to us to order."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Suspense>
            <ShopGrid items={items} />
          </Suspense>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap split">
          <div data-reveal>
            <Photo slot="shop-custom" alt="Custom invitation suite on handmade paper" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="split-text" data-reveal data-delay={1}>
            <span className="label">Custom &amp; business orders</span>
            <h2 className="title">For weddings, gifting, hotels and brands</h2>
            <p className="muted">
              Invitations, certificates, branded diaries and corporate gifts, plus art on handmade paper for hotels and
              hospitality spaces, created with local artists. Tell us what you need and when.
            </p>
            <Link href="/contact" className="btn">Start an order</Link>
          </div>
        </div>
      </section>
    </>
  );
}
