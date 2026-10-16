// Founder interview informs the story, not a certified technical specification.
// Only publish client-confirmed contacts. Public variables are bundled at build time.
const configuredEmail = process.env.NEXT_PUBLIC_STUDIO_EMAIL?.trim() ?? "";
const configuredPhone = process.env.NEXT_PUBLIC_STUDIO_PHONE?.trim() ?? "";
const configuredInstagram = process.env.NEXT_PUBLIC_STUDIO_INSTAGRAM_URL?.trim() ?? "";

function instagramProfile(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && ["instagram.com", "www.instagram.com"].includes(url.hostname) && /^\/[A-Za-z0-9._]+\/?$/.test(url.pathname)
      ? url.toString()
      : "";
  } catch {
    return "";
  }
}

export const site = {
  name: "Aditi Paperie",
  legal: "Aditi Paperie LLP",
  location: process.env.NEXT_PUBLIC_STUDIO_ADDRESS?.trim() || "Hyderabad, Telangana",
  email: /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(configuredEmail) ? configuredEmail : "",
  phone: /^\+?[\d\s()-]{7,24}$/.test(configuredPhone) && /[1-9]/.test(configuredPhone) ? configuredPhone : "",
  instagram: instagramProfile(configuredInstagram),
  hours: process.env.NEXT_PUBLIC_STUDIO_HOURS?.trim() || "",
};

export const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/paper", label: "Our Paper" },
  { href: "/workshops", label: "Workshops" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const heroSlides = [
  { slot: "hero-1", eyebrow: "Handmade at Kanha", title: "Paper that remembers the earth", cta: { href: "/paper", label: "Discover our paper" } },
  { slot: "hero-2", eyebrow: "Tree-free stationery", title: "Write on something real", cta: { href: "/shop?c=stationery", label: "Explore stationery" } },
  { slot: "hero-3", eyebrow: "A material with possibility", title: "A little more care in every sheet", cta: { href: "/shop?c=paper", label: "Explore paper" } },
];

export const papers = [
  { slot: "paper-cotton", name: "Cotton Rag" },
  { slot: "paper-textile", name: "Textile Rag" },
  { slot: "paper-leaf", name: "Kanha Leaf" },
  { slot: "paper-deckle", name: "Deckle Edge" },
  { slot: "paper-colour", name: "Natural Dyed" },
];

export const purposes = [
  { slot: "purpose-write", title: "To Write", text: "Diaries, journals and letter sets", href: "/shop?c=stationery" },
  { slot: "purpose-keep", title: "To Keep", text: "Invitations, thoughtful gifts and keepsakes", href: "/shop?c=archival" },
  { slot: "purpose-live", title: "To Live With", text: "Lampshades, frames and décor", href: "/shop?c=decor" },
];

export type Category = "paper" | "stationery" | "archival" | "decor";
export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "paper", label: "Paper" },
  { id: "stationery", label: "Stationery" },
  { id: "archival", label: "Gifting & Keepsakes" },
  { id: "decor", label: "Home Décor" },
];

// Collection directions, not confirmed inventory. Dimensions, prices, stock and
// material specifications must be confirmed with the studio for each enquiry.
export const products: { slot: string; name: string; detail: string; category: Category }[] = [
  { slot: "prod-archival-sheets", name: "Cotton Rag Sheets", detail: "Ask about sizes and weights", category: "paper" },
  { slot: "prod-deckle-sheets", name: "Deckle Edge Sheets", detail: "A naturally uneven edge", category: "paper" },
  { slot: "prod-leaf-sheets", name: "Kanha Leaf Sheets", detail: "Embedded leaves & petals", category: "paper" },
  { slot: "prod-colour-sheets", name: "Natural Dyed Sheets", detail: "Earth tones", category: "paper" },
  { slot: "prod-diary", name: "Hand-bound Diary", detail: "Paper for everyday thoughts", category: "stationery" },
  { slot: "prod-journal", name: "Botanical Journal", detail: "Leaf-printed cover", category: "stationery" },
  { slot: "prod-notebook", name: "Writing Pad", detail: "For notes, lists and ideas", category: "stationery" },
  { slot: "prod-letter-set", name: "Letter Set", detail: "Sheets & envelopes", category: "stationery" },
  { slot: "prod-invitation", name: "Wedding Invitation Suite", detail: "Made to order", category: "archival" },
  { slot: "prod-frame", name: "Photo Folio", detail: "A place for family portraits", category: "archival" },
  { slot: "prod-lampshade", name: "Paper Pendant Lamp", detail: "Handmade shade", category: "decor" },
  { slot: "prod-lamp-folded", name: "Folded Table Lamp", detail: "Paper, folds and warm light", category: "decor" },
];

export const fibres = [
  { slot: "fibre-rags", name: "Textile rags", text: "Discarded fabric from Tirupur's textile mills, given another purpose." },
  { slot: "fibre-cotton", name: "Cotton", text: "Long, strong fibres for a soft, cloth-like sheet." },
  { slot: "fibre-banana", name: "Banana stem", text: "Silky strands from stems left behind after harvest." },
  { slot: "fibre-coconut", name: "Coconut", text: "Coir and husk for flecks, tooth and warm tones." },
  { slot: "fibre-hyacinth", name: "Water hyacinth", text: "An invasive lake weed, turned into texture." },
  { slot: "fibre-leaves", name: "Fallen leaves", text: "Gathered at Kanha and pressed whole into the sheet." },
];

export const steps = [
  { slot: "step-gather", title: "Gather", text: "We never cut a tree. Rags come from Tirupur's mills; leaves and plant fibres from around Kanha." },
  { slot: "step-beat", title: "Beat", text: "The fibres are chopped, then processed for eight to nine hours into a soft pulp." },
  { slot: "step-form", title: "Form", text: "Each sheet is lifted by hand from the vat on a mould and deckle, where the fibres interlock like cloth." },
  { slot: "step-dry", title: "Press & dry", text: "Water is pressed from the wet sheets before they are left to dry, revealing the character of the fibres." },
  { slot: "step-finish", title: "Finish", text: "Every sheet is checked and finished by hand. No two are ever alike." },
];

export const workshops = [
  { slot: "ws-studio", title: "Studio Experience", text: "Discover the studio, meet the craft and explore making your first sheet.", meta: "Enquire about a visit" },
  { slot: "ws-young", title: "Young Papermakers", text: "Hands-on learning for children and schools, with pulp, texture and leaves.", meta: "Schools & families" },
  { slot: "ws-academy", title: "Papermaking Academy", text: "A growing vision for sharing the craft openly, so more people can learn to make paper.", meta: "In development" },
];

export const faqs = [
  { q: "What does tree-free mean?", a: "No wood pulp at all. Our paper is made from textile rags and plant fibres like cotton, banana, coconut and water hyacinth, along with leaves gathered at Kanha." },
  { q: "Is it suitable for archival use?", a: "Long-lasting paper is part of the studio's vision. For photographs, valuable documents or conservation, ask for the specific paper's composition and tested specifications before choosing a sheet. Suitability depends on the material and how it will be used and stored." },
  { q: "Can I print on it?", a: "Printing depends on the sheet's weight, texture and your printing method. Share your intended use and request a sample test before planning a print run." },
  { q: "Can I discuss a custom or business order?", a: "Yes. The studio's vision includes gifting, stationery and paper art for businesses and hospitality. Tell us your idea, quantities and dates so materials, feasibility and pricing can be discussed." },
  { q: "What if I no longer need the paper?", a: "The studio is exploring ways to turn used handmade paper back into fresh sheets. Ask about suitable papers and current return arrangements before sending anything back." },
];
