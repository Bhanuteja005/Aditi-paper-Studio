import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { images } from "@/content/images";

type Props = {
  /** Slot name — see src/content/images.ts and IMAGE_PROMPTS.md */
  slot: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
};

/** A local public/img/<slot>.jpg (e.g. your ChatGPT image) wins; otherwise the v1 Unsplash photo. */
function srcFor(slot: string) {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "img", `${slot}.${ext}`))) return `/img/${slot}.${ext}`;
  }
  return images[slot];
}

export default function Photo({ slot, alt, className = "", sizes = "100vw", eager }: Props) {
  const src = srcFor(slot);
  return (
    <figure className={`photo ${className}`} data-slot={slot}>
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
        />
      )}
    </figure>
  );
}
