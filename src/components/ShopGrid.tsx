"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import { categories } from "@/content/site";

type Item = { slot: string; name: string; detail: string; category: string; photo: ReactNode };

/** Category filter kept in the URL (?c=…) so "Shop by Purpose" links land pre-filtered. */
export default function ShopGrid({ items }: { items: Item[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const requested = params.get("c") ?? "all";
  const validCategory = categories.some((category) => category.id === requested);
  const active = validCategory ? requested : "all";
  const shown = active === "all" ? items : items.filter((p) => p.category === active);

  const changeCategory = (category: string) => {
    const next = new URLSearchParams(params.toString());
    if (category === "all") next.delete("c");
    else next.set("c", category);
    const query = next.toString();
    router.push(query ? `/shop?${query}` : "/shop", { scroll: false });
  };

  return (
    <>
      <div className="filters" role="group" aria-label="Filter products">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={active === c.id}
            aria-controls="product-results"
            onClick={() => changeCategory(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <p className="form-note" role="status" aria-live="polite" style={{ marginBottom: 24 }}>
        {!validCategory && "That collection was not found. Showing all pieces. "}
        {shown.length} {shown.length === 1 ? "piece" : "pieces"} to explore. Enquire about availability, sizes and pricing.
      </p>
      <div className="row-4" id="product-results">
        {shown.map((p) => (
          <Link href={`/contact?about=${encodeURIComponent(p.name)}`} className="product" key={p.slot}>
            {p.photo}
            <h3>{p.name}</h3>
            <p>{p.detail}</p>
            <span className="enq">Enquire about this piece</span>
          </Link>
        ))}
      </div>
      {shown.length === 0 && (
        <div className="center">
          <p>New pieces are taking shape. Explore the full collection or tell us what you have in mind.</p>
          <button className="btn line" type="button" onClick={() => changeCategory("all")}>View all pieces</button>
        </div>
      )}
    </>
  );
}
