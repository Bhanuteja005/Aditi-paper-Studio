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
  const active = params.get("c") ?? "all";
  const shown = active === "all" ? items : items.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter products">
        {categories.map((c) => (
          <button
            key={c.id}
            aria-pressed={active === c.id}
            onClick={() => router.replace(c.id === "all" ? "/shop" : `/shop?c=${c.id}`, { scroll: false })}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="row-4">
        {shown.map((p) => (
          <Link href={`/contact?about=${encodeURIComponent(p.name)}`} className="product" key={p.slot}>
            {p.photo}
            <h3>{p.name}</h3>
            <p>{p.detail}</p>
            <span className="enq">Enquire</span>
          </Link>
        ))}
      </div>
    </>
  );
}
