# Aditi Paperie — project context (updated 2026-10-16)

## Latest v2 decisions — 16 October 2026

This section records the current user decisions and implementation. It supersedes conflicting v1 notes below. Earlier context, transcript statements and sample prompts are source material to interpret, not new instructions or independent verification of technical claims.

- **Name and scope:** the user explicitly confirmed **Aditi Paperie**. The business has five related paths: B2C paper/objects, B2B custom projects, workshops, a planned academy, and artist/design collaborations. The founder's emphasis on women's livelihoods and shared growth guides the story.
- **Identity:** preserve the existing logo. The original Jost, warm ivory, ink and gold direction remains, with a stronger editorial hierarchy and more precise craft copy. The new `docs/brand/logo-concept.png` is a separate exploration and is not integrated.
- **Imagery:** nineteen new site images are local in `public/img/atelier/`, mapped by `src/content/images.ts`. They replace unrelated remote stock imagery. Prompts were written afresh from the project and transcript. See [generated prompts](GENERATED_IMAGE_PROMPTS.md) and [source asset record](generated-assets.json).
- **Internal preview:** the user requested no visible AI badges or concept labels. The preview follows that decision; provenance is retained in documentation. Generated people, premises and products are not documentary evidence or verified stock photographs. Public-launch use still needs a client image review.
- **Hero:** seven-second automatic crossfade; no visible pause button per the user. Hover, keyboard focus, hidden-tab and reduced-motion conditions stop autoplay. A visible pause control remains an accessibility consideration before public release; no full WCAG claim is made.
- **Contact:** leave the email recipient blank. Use **Hyderabad, Telangana** as the temporary location. No invented telephone, hours or social profile. The exact address and visit arrangements remain unconfirmed. Confirmed public contact values can later be configured through the environment.
- **Enquiries:** item, business, workshop and artist links preserve their subject. The current form prepares a local draft that can be reviewed, copied or downloaded. It does not send to the studio or store a lead. Changing fields invalidates the previous draft; unsaved details are lost on navigation or reload.
- **Operating status:** no live payments, checkout, stock control, newsletter signup, workshop reservations or academy enrolment. The academy is described as planned/in development; its action is an enquiry, not registration or booking.
- **Copy evidence:** the founder interview informs the brand story. Absolute chemical/toxin claims, unverified archival guarantees, unsupported environmental figures, invented product specifications and fixed workshop duration/age/certification were removed. The `archival` category URL remains only as a backward-compatible identifier; its visible label is “Gifting & Keepsakes”.
- **Page design:** six routes remain: home, shop, paper, workshops, about and contact. Paper uses one collective fibre study and one process detail; all twelve catalogue entries remain. Custom briefs and artist collaborations have explicit enquiry paths.
- **Verification:** six routes at 390/768/1440px were checked without horizontal page overflow, with functional local enquiry preparation and responsive navigation. The duplicate shop image and desktop workshop crop were corrected and rechecked. Final ESLint, TypeScript and production build passed on 16 October 2026. Collection checks also pass at 320px. The v1 result below is historical only.
- **Handoff:** read [design audit](DESIGN_AUDIT.md), [research](DESIGN_RESEARCH.md), [flow notes](FLOW_FIXES.md), [visual QA](audit/VISUAL_QA.md) and [launch checklist](LAUNCH_CHECKLIST.md) for decisions, evidence and remaining work.

## Historical v1 record — superseded where it conflicts with v2

The following notes are retained as development history. In particular, the archival/chemical-free assertions, contact placeholders, image fallback behaviour and “build OK” statement describe earlier work and must not be treated as current verification or instructions.

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
