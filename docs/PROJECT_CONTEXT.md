# Aditi Paperie — project context (updated 2026-10-16)

## What the client is (from audio-transcribe.mp4 → transcript_english.txt)
- **Aditi Paperie LLP** — a 100% tree-free, chemical-free, *archival* handmade paper studio at **Kanha Shanti Vanam** (Hyderabad), inspired by "Daaji's vision" (Heartfulness) of education & training. Meditating-figure logo fits this.
- Raw material: textile rag waste (from Tirupur mills), cotton, banana, coconut, water hyacinth, fallen leaves at Kanha. Rag chopper runs 8–9 hrs, sheets formed by hand. 11th-century technique.
- Pitch: archival (doesn't yellow/crumble; Constitution of India written on handmade paper), non-toxic, biodegradable, upcycle-back loop, every sheet unique ("like pottery").
- Uses: documents/deeds, heirloom photos, manuscripts, time capsules, diaries, writing pads, book covers, lampshades, vases, flowers, frames, gifting.
- Social enterprise: livelihood for village women around Kanha (identity, creativity, preserving the future).
- Wants: experiential studio (visitors make paper), workshops, **training academy** that shares the craft openly (others keep it secret), direct paper sales.
- Unknown / TODO from client: founder name, address, email, phone, hours, prices, real photos, vector logo.

## Assets done
- Logo vectorised from brief/logo.jpeg via OpenCV trace (scratchpad trace2.py): `public/brand/logo-{full,mark,wordmark}[-light].svg` — clean, real letterforms.
- Skill written: `~/.claude/skills/aesthetic-craft-web/SKILL.md` (research patterns, restraint rules, image-prompt method).
- Transcription script `scripts/transcribe.py` (ffmpeg decode → faster-whisper medium, hi→en translate, condition_on_previous_text=False).

## Build (v1, 2026-10-16)
- Direction chosen by user: **jaipurrugs.com grammar, but simpler/cleaner**, logo palette only (paper #FAF8F3 / ink #1A1916 / gold #C8962E), **one font: Jost**, square buttons, calm motion (Lenis + fade-ins + crossfade hero). User rejected the earlier busy serif/marquee/pinned version.
- Next.js 16.4 at the project root (App Router, TS, plain CSS in globals.css). Libs: lenis, motion. Pages: / , /shop (?c= filter), /paper, /workshops, /about, /contact. `npm run build` OK, lint clean. Dev: `npm run dev` (or `npx next dev -p 3210`).
- Layout: Next app in root; `brief/` = client inputs (audio, logo, palette, transcripts); `docs/` = context + image prompts; `scripts/` = transcribe.py.
- Images: slot map `src/content/images.ts` (v1 = free Unsplash). `<Photo slot>` (server) prefers `public/img/<slot>.jpg` if present. ChatGPT prompts: `docs/IMAGE_PROMPTS.md`.
- Founder facts (transcript end): Aditi = CS engineer, Heartfulness trainer; Daaji asked her to start it; learnt at Auroville; started March 2026; 11+ paper types; B2B+B2C; platform for local artists (hotel/hospitality art).
- Reveal observer in app/template.tsx (post-hydration), `data-shown` attr; `data-js` on <html>.
- TODO client: address, email, phone, hours, prices, real photos, vector logo, newsletter + form backend (form currently opens mailto).
