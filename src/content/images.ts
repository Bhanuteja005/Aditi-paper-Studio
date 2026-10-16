// Image slots used across the site.
// v1 uses free Unsplash photos (Unsplash licence). To replace one, save a file as
// public/img/<slot>.jpg — <Photo> picks it up automatically. Prompts: docs/IMAGE_PROMPTS.md.

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`;

export const images: Record<string, string> = {
  // home
  "hero-1": u("photo-1693592772086-e80960b134ed"), // fan of white handmade sheets
  "hero-2": u("photo-1603188389888-7b80bd0a7e3e"), // kraft diary with botanical print
  "hero-3": u("photo-1621719455762-2888b120f1e5"), // deckle edges on charcoal
  "paper-cotton": u("photo-1693592772086-e80960b134ed"),
  "paper-textile": u("photo-1524404886881-0beaa13c7b78"),
  "paper-deckle": u("photo-1621719455762-2888b120f1e5"),
  "paper-leaf": u("photo-1578320339911-5e7974b2720a"),
  "paper-colour": u("photo-1766083274393-e766c4b3d38a"),
  "purpose-write": u("photo-1603188389888-7b80bd0a7e3e"),
  "purpose-keep": u("photo-1739909198159-a834175bd911"),
  "purpose-live": u("photo-1781441012654-bb5dced68054"),
  "women-banner": u("photo-1663082075814-60439de1cf13"),
  "about-vat": u("photo-1694575255502-073e75d39826"),
  "ws-studio": u("photo-1606077089119-92075161bb60"),
  "ws-young": u("photo-1711840230288-2a6b42cce872"),
  "ws-academy": u("photo-1694575255502-073e75d39826"),

  // shop
  "prod-archival-sheets": u("photo-1693592772086-e80960b134ed"),
  "prod-deckle-sheets": u("photo-1621719455762-2888b120f1e5"),
  "prod-colour-sheets": u("photo-1766083274393-e766c4b3d38a"),
  "prod-leaf-sheets": u("photo-1578320339911-5e7974b2720a"),
  "prod-diary": u("photo-1603188389888-7b80bd0a7e3e"),
  "prod-journal": u("photo-1610089219534-80872697800a"),
  "prod-notebook": u("photo-1574330096374-a263e0a4b7f8"),
  "prod-letter-set": u("photo-1617177435596-1c9e30d6d608"),
  "prod-invitation": u("photo-1739909198159-a834175bd911"),
  "prod-lampshade": u("photo-1781441012654-bb5dced68054"),
  "prod-lamp-folded": u("photo-1597495227772-d48ecb5f2639"),
  "prod-frame": u("photo-1782900316375-afc11c655b60"),
  "shop-custom": u("photo-1739909198159-a834175bd911"),

  // our paper
  "paper-hero": u("photo-1694575255502-073e75d39826"),
  "fibre-rags": u("photo-1524404886881-0beaa13c7b78"),
  "fibre-cotton": u("photo-1534639077088-d702bcf685e7"),
  "fibre-banana": u("photo-1638294621924-be97f5f92413"),
  "fibre-coconut": u("photo-1766083274393-e766c4b3d38a"),
  "fibre-hyacinth": u("photo-1578320339911-5e7974b2720a"),
  "fibre-leaves": u("photo-1782900316375-afc11c655b60"),
  "step-gather": u("photo-1534639077088-d702bcf685e7"),
  "step-beat": u("photo-1606077089119-92075161bb60"),
  "step-form": u("photo-1694575255502-073e75d39826"),
  "step-dry": u("photo-1693592772086-e80960b134ed"),
  "step-finish": u("photo-1621719455762-2888b120f1e5"),

  // workshops / about
  "workshops-hero": u("photo-1606077088785-71498b4ea48c"),
  "academy": u("photo-1694575255502-073e75d39826"),
  "about-hero": u("photo-1727344513672-220f20bef9c8"),
  "about-founder": u("photo-1603188389888-7b80bd0a7e3e"),
  "about-women": u("photo-1663082075814-60439de1cf13"),
  "about-artists": u("photo-1781441012654-bb5dced68054"),
  "contact-hero": u("photo-1617177435596-1c9e30d6d608"),
};
