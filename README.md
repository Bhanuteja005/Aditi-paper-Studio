# Aditi Paperie — website

Website for **Aditi Paperie**, a tree-free, chemical-free, archival handmade paper studio and social enterprise at
Kanha Shanti Vanam, Hyderabad.

Built with Next.js 16 (App Router, TypeScript), plain CSS, [Lenis](https://github.com/darkroomengineering/lenis)
for smooth scrolling and [Motion](https://motion.dev) for the hero and menu transitions. One typeface (Jost) and
the logo palette: paper `#FAF8F3`, ink `#1A1916`, mustard gold `#C8962E`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are static)
```

## Where things live

| Path | What |
|---|---|
| `src/app/` | Pages: Home, Shop, Our Paper, Workshops, About, Contact |
| `src/components/` | Header, Footer, HeroSlider, Photo, ShopGrid, ContactForm, PageHead |
| `src/content/site.ts` | **All copy** — products, papers, workshops, FAQs, contact details |
| `src/content/images.ts` | Image slot → photo map (v1 uses free Unsplash photos) |
| `public/brand/` | Logo SVGs (traced from `brief/logo.jpeg`) |
| `public/img/` | Drop final images here as `<slot>.jpg` — they replace the Unsplash photos automatically |
| `docs/IMAGE_PROMPTS.md` | ChatGPT prompts for every image slot |
| `docs/PROJECT_CONTEXT.md` | Brief, decisions and progress |
| `brief/` | Client inputs: interview audio, transcripts, logo and palette photos |
| `scripts/transcribe.py` | Whisper transcription / translation of the interview |

## Before launch (needs the client)

Search the code for `TODO` — studio address, email, phone, hours, prices, Instagram handle, newsletter and
contact-form backend (the form currently opens the visitor's email app), real photos, and the vector logo file.
