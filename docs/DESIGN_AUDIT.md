# Aditi Paperie — design and experience audit

Updated 16 October 2026. This report covers the redesigned **internal preview**. It records the work completed and the operating services still needed before launch; it does not certify a finished commerce system.

## What the business needs to communicate

The founder's transcript describes a paper studio where material research, skilled making and shared learning support one another. Textile offcuts and plant fibres are the starting point. Paper, objects and teaching are ways to bring that work to people. Livelihoods for women around Kanha and opportunities for artists are central to the purpose.

The website now makes room for five connected paths:

| Path | Visitor need | Current route |
| --- | --- | --- |
| B2C | Find paper, stationery, gifts or home objects | Collection filters → item-specific enquiry draft |
| B2B | Discuss quantities, specifications, samples or a hospitality project | Business brief links → project enquiry draft |
| Workshops | Understand the experience and discuss a visit | Learning formats → relevant workshop enquiry |
| Planned academy | Explore future training | Clearly marked programme in development → academy enquiry |
| Artist collaborations | Introduce a practice or proposal | Studio story → collaboration enquiry |

The transcript is project evidence, not a product certification. The revised copy removes unsupported archival guarantees, absolute chemical/toxin claims, invented specifications and competitor disparagement. It retains the founder's exact statement about helping associated people grow. See the [research and positioning report](DESIGN_RESEARCH.md) for source distinctions and seven official references.

## Six-page journey: findings and changes

1. **Home — clearer first impression.** The earlier stock-image treatment did not communicate one recognisable Indian paper studio. The new material, artisan and drying-room imagery creates a coherent setting. A stable headline and two clear actions introduce the collection and learning; the page connects materials, objects, makers and the studio's purpose. The existing logo, Jost typography, warm paper colour and gold accents remain.

2. **Shop — a usable catalogue rather than an implied checkout.** All twelve product entries remain. Categories, result counts and enquiry links support browsing; the chosen item follows the visitor into the form. Invalid category URLs recover to the full collection. Custom and business enquiries have a visible route, and copy asks for the specifications a studio needs. A newly generated deckle-detail image resolves the duplicated first two product images. Prices, stock and payment are not invented.

3. **Our Paper — material clarity replaces broad promises.** Six fibres are explained beside one collective material study. Five process stages sit beside one process detail, replacing repetitive image cards. Uses connect the material to writing, gifting and interiors. Questions and sample enquiries help visitors choose paper without promising untested archival performance.

4. **Workshops — enquiry and training status are explicit.** The old fixed durations, ages, certification and “reserve” wording were unsupported. The page now distinguishes studio/group interests from the planned academy, explains what information to include, and preserves the selected topic in the contact route. Academy actions say “Enquire about the academy.” The desktop banner crop was moved upward to retain the instructor's and learners' faces.

5. **About — people have a purpose and agency.** The story now follows Aditi's move from engineering to papermaking, her learning in Auroville and her intention to combine livelihoods, education and artistic opportunity. The journal still life is not described as her actual first gift. Generated people are not named as real staff. Artists and hospitality teams receive a concrete collaboration path.

6. **Contact — a truthful, functional local draft.** The previous placeholder recipient and mail handoff could imply an enquiry had been received. No email recipient is currently configured. The page uses the user-approved temporary location **Hyderabad, Telangana** and explains that precise visit details are forthcoming. Visitors can prepare, review, copy and download a draft; editing clears the earlier draft. No “sent” or “booked” confirmation is fabricated. Mobile navigation and form labels, focus handling and status feedback were also improved.

## Images and identity

**Nineteen new site images** were generated for this direction, covering the material, process, makers, learning, studio and product concepts. They are stored locally as optimised assets with a central slot map. The [generation prompts](GENERATED_IMAGE_PROMPTS.md) are newly written from the transcript and project, rather than reused from the sample prompt file. The [asset provenance record](generated-assets.json) retains the source outputs.

A [separate logo exploration](brand/logo-concept.png) was also created. It is **not implemented**: the user's existing logo remains in the website. Per the user's internal-preview instruction, there are **no visible AI image badges or concept labels**. Provenance remains documented here and in the prompt record. The images do not establish the appearance of real staff, actual premises, available stock or final product specifications; the public-launch image review remains necessary.

## Checks completed and their limits

- All six routes were checked at **390, 768 and 1440 pixels**: eighteen route/width combinations. The checks found no horizontal page overflow, one main heading per page, no visible broken images, no unwanted visible AI labels and no email links with the current blank recipient. See [responsive results](audit/responsive-checks.json).
- Desktop/tablet screenshots were reviewed for hierarchy, spacing and crop. Both concrete visual findings were fixed and rechecked by the coordinating task: the new deckle-detail asset and the desktop workshop crop at `center 10%`. See [visual QA](audit/VISUAL_QA.md).
- Browser interaction checks covered collection filtering, retained enquiry context, preparing/copying/downloading a draft and mobile-menu behaviour. A draft is a local document, not a delivered lead. See [flow implementation notes](FLOW_FIXES.md).
- The hero advances every **seven seconds**, with no visible pause button, as requested. Autoplay stops on hover, keyboard focus, hidden tabs and reduced-motion preference. The absence of an explicit pause control remains an accessibility limitation for a public release; this review makes no full WCAG conformance claim.
- **Final verification passed on 16 October 2026:** ESLint, the production build and its TypeScript check. All six application routes compiled successfully. The final diff also passes the whitespace check.
- Additional browser checks verified invalid-category recovery and browser back navigation, menu closure and restored page scrolling when resizing tablet to desktop, the academy fragment destination, and form readiness after hydration. Server-rendered form submission remains disabled until the local draft handler is ready, preventing accidental native GET submission without JavaScript.
- The revised collection was also checked at 320px. Products now enter the first phone viewport, filters scroll within their own row, and the page has no horizontal overflow. See [final collection checks](audit/final-shop-checks.json).
- Browser logs showed image-loading performance recommendations during development, but no captured runtime errors. Image load scheduling and real-device performance remain part of deployment review; no Lighthouse or cross-browser score is claimed.

## What remains outside the current system

Live enquiry delivery and lead storage are off. Checkout, payments, stock management, workshop booking and newsletter subscription are not connected. Academy enrolment is not open. Unsaved form details disappear when the page is reloaded or left.

Before a public launch, the studio needs confirmed contact and visit details, actual product specifications and availability, approved images, prices and policies, plus an operational enquiry destination. Commerce and reservations need their own tested services. The sequence and responsibilities are set out in the [launch and scaling checklist](LAUNCH_CHECKLIST.md).
