// All site copy. Facts come from the founder interview (transcript_english.txt).
// Anything marked TODO is a placeholder the client must confirm before launch.

export const site = {
  name: "Aditi Paperie",
  legal: "Aditi Paperie LLP",
  location: "Kanha Shanti Vanam, Hyderabad, Telangana", // TODO exact address
  email: "hello@aditipaperie.com", // TODO real address
  phone: "+91 00000 00000", // TODO real number
  instagram: "https://instagram.com/", // TODO handle
  hours: "Tuesday to Sunday, 10 am to 5 pm", // TODO confirm
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
  { slot: "hero-2", eyebrow: "Tree-free stationery", title: "Write on something real", cta: { href: "/shop", label: "Shop diaries" } },
  { slot: "hero-3", eyebrow: "Archival quality", title: "Made to last for generations", cta: { href: "/shop", label: "Shop paper" } },
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
  { slot: "purpose-keep", title: "To Keep", text: "Archival sheets, invitations and heirlooms", href: "/shop?c=archival" },
  { slot: "purpose-live", title: "To Live With", text: "Lampshades, frames and décor", href: "/shop?c=decor" },
];

export type Category = "paper" | "stationery" | "archival" | "decor";
export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "paper", label: "Paper" },
  { id: "stationery", label: "Stationery" },
  { id: "archival", label: "Archival & Gifting" },
  { id: "decor", label: "Home Décor" },
];

// TODO prices from client — shown as "Enquire" until then
export const products: { slot: string; name: string; detail: string; category: Category }[] = [
  { slot: "prod-archival-sheets", name: "Archival Cotton Rag Sheets", detail: "A4 · A3 · Full sheet", category: "paper" },
  { slot: "prod-deckle-sheets", name: "Deckle Edge Sheets", detail: "Hand-torn edges", category: "paper" },
  { slot: "prod-leaf-sheets", name: "Kanha Leaf Sheets", detail: "Embedded leaves & petals", category: "paper" },
  { slot: "prod-colour-sheets", name: "Natural Dyed Sheets", detail: "Earth tones", category: "paper" },
  { slot: "prod-diary", name: "Hand-bound Diary", detail: "120 pages · Deckle edge", category: "stationery" },
  { slot: "prod-journal", name: "Botanical Journal", detail: "Leaf-printed cover", category: "stationery" },
  { slot: "prod-notebook", name: "Writing Pad", detail: "50 sheets", category: "stationery" },
  { slot: "prod-letter-set", name: "Letter Set", detail: "Sheets & envelopes", category: "stationery" },
  { slot: "prod-invitation", name: "Wedding Invitation Suite", detail: "Made to order", category: "archival" },
  { slot: "prod-frame", name: "Heirloom Photo Folio", detail: "Archival · for family portraits", category: "archival" },
  { slot: "prod-lampshade", name: "Paper Pendant Lamp", detail: "Handmade shade", category: "decor" },
  { slot: "prod-lamp-folded", name: "Folded Table Lamp", detail: "Warm, plastic-free glow", category: "decor" },
];

export const fibres = [
  { slot: "fibre-rags", name: "Textile rags", text: "Off-cuts from the garment mills of Tirupur, rescued from landfill." },
  { slot: "fibre-cotton", name: "Cotton", text: "Long, strong fibres for a soft, cloth-like sheet." },
  { slot: "fibre-banana", name: "Banana stem", text: "Silky strands from stems left behind after harvest." },
  { slot: "fibre-coconut", name: "Coconut", text: "Coir and husk for flecks, tooth and warm tones." },
  { slot: "fibre-hyacinth", name: "Water hyacinth", text: "An invasive lake weed, turned into texture." },
  { slot: "fibre-leaves", name: "Fallen leaves", text: "Gathered at Kanha and pressed whole into the sheet." },
];

export const steps = [
  { slot: "step-gather", title: "Gather", text: "We never cut a tree. Rags come from Tirupur's mills; leaves and plant fibres from around Kanha." },
  { slot: "step-beat", title: "Beat", text: "Everything is cut by hand, then turned in the rag beater for eight to nine hours into a soft pulp." },
  { slot: "step-form", title: "Form", text: "Each sheet is lifted by hand from the vat on a mould and deckle, where the fibres interlock like cloth." },
  { slot: "step-dry", title: "Press & dry", text: "Sheets are pressed and air-dried. No bleach, no chlorine, no toxic sizing." },
  { slot: "step-finish", title: "Finish", text: "Every sheet is checked and finished by hand. No two are ever alike." },
];

export const workshops = [
  { slot: "ws-studio", title: "Studio Experience", text: "Walk the studio, meet the makers and pull your own first sheet.", meta: "2 hours · All ages" },
  { slot: "ws-young", title: "Young Papermakers", text: "A hands-on session for children and schools, with pulp, colour and leaves.", meta: "90 minutes · Ages 6+" },
  { slot: "ws-academy", title: "Papermaking Academy", text: "Multi-day training in the full craft. We share everything we know.", meta: "Multi-day · Certificate" },
];

export const faqs = [
  { q: "What does tree-free mean?", a: "No wood pulp at all. Our paper is made from textile rags and plant fibres like cotton, banana, coconut and water hyacinth, along with leaves gathered at Kanha." },
  { q: "What makes it archival?", a: "Nothing in our process is acidic or toxic. That's why handmade rag paper doesn't yellow or crumble like ordinary notebook paper. It's also why the Constitution of India was written on handmade paper." },
  { q: "Can I print on it?", a: "Yes. Customers print photographs, certificates and invitations on our sheets. Tell us your printer and we'll suggest the right weight." },
  { q: "Do you take custom, wedding and corporate orders?", a: "Yes. We make invitations, certificates, branded diaries and gift sets, for businesses and hospitality too. Write to us with quantities and dates." },
  { q: "What if I no longer need the paper?", a: "It's biodegradable, but you can also bring it back to the studio and we'll upcycle it into fresh sheets." },
];
