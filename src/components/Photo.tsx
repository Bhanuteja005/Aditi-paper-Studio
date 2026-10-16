import Image from "next/image";
import { images } from "@/content/images";
type Props = { slot: string; alt: string; className?: string; sizes?: string; eager?: boolean };
/** Slot manifest separates art direction from layout; all current assets are AI concepts. */
export default function Photo({ slot, alt, className = "", sizes = "100vw", eager }: Props) {
  const src = images[slot];
  if (!src) throw new Error(`Missing image slot: ${slot}`);
  return (
    <figure className={`photo ${className}`} data-slot={slot}>
      <Image src={src} alt={alt} fill sizes={sizes} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} />
    </figure>
  );
}
