# Aditi Paperie launch and scaling

Updated 16 October 2026.

## What works in the current setup

The responsive site presents the studio, paper collection, process, makers and learning vision. Collection filters work, and product/workshop links carry their context into the enquiry form. Visitors can prepare, review, copy and download an enquiry. If a verified studio email is configured, they can open a prefilled email draft and send it from their own email app.

**The website does not currently deliver enquiries to an inbox or store leads.** It does not sell stock, take payments, reserve workshop places, or subscribe visitors to a newsletter. A locally prepared draft is never described as sent or booked. Refreshing or leaving the page clears an unsaved draft.

## Before the first public launch

- [ ] Confirm the final studio name, legal details and chosen logo treatment with the client.
- [ ] Set verified contact details using the blank `.env.example` template: `NEXT_PUBLIC_STUDIO_EMAIL`, `NEXT_PUBLIC_STUDIO_PHONE`, `NEXT_PUBLIC_STUDIO_ADDRESS`, `NEXT_PUBLIC_STUDIO_HOURS`, `NEXT_PUBLIC_STUDIO_INSTAGRAM_URL`. Rebuild after changing them. Leave unknown fields blank.
- [ ] Confirm an operational enquiry recipient, send a real test enquiry through the visitor's email app, and agree who handles replies. Without it, keep the explicit draft-only fallback.
- [ ] Review generated visuals as art direction. Replace representations of actual people, products and premises with client-approved photography before presenting them as documentary evidence. Keep concept imagery clearly identified.
- [ ] Confirm real product availability, photographs, composition, sizes, weights, sample process, quantities, lead times and prices. Support archival or conservation claims with relevant specifications and testing.
- [ ] Confirm which visits and learning formats are available now. Publish dates, prices, capacity, age requirements and access arrangements only after confirmation.
- [ ] Check the final site at narrow phone, wide phone, tablet and desktop widths. Verify no horizontal scrolling, legible image crops, usable touch targets and clear focus indicators.
- [ ] Test product enquiry context, invalid filters, draft copy/download, required fields, keyboard navigation, Escape and menu closure when resizing from tablet to desktop. Check reduced-motion behavior.
- [ ] Run the final lint, type check and production build; review the deployed domain, metadata, image delivery and all navigation links.

## Build the system in phases

| Phase | Visitor outcome | Operational work required |
| --- | --- | --- |
| 1. Catalogue and sample enquiries | Explore paper and objects, learn the process, request samples or discuss a project. | Current frontend plus verified contact details, real product photography/specifications and an owner for enquiry replies. Track sample requests and frequently asked questions. |
| 2. Reliable enquiry delivery | Send an enquiry on the site and receive a truthful confirmation. | Connect an approved delivery service, validate on the server, handle failures, protect against spam and record consent/privacy choices. Add delivery monitoring before saying “sent”. |
| 3. Retail commerce | Buy available products with clear delivery expectations. | Approve the commerce platform and connect SKUs, inventory, product variants, prices/tax handling, shipping zones/rates, payments, order emails and returns/refunds. Test the full payment and fulfilment path before enabling checkout. |
| 4. Workshop reservations | Choose an available session and reserve the correct number of places. | Confirm calendar, instructors, location, accessibility, participant capacity, pricing, cancellation terms and payment rules. Add confirmations, capacity controls and reminders. |
| 5. Academy and shared learning | Register interest, understand the curriculum and apply for training. | Confirm programme ownership, curriculum, eligibility, dates, fees and teaching capacity. Route academy leads separately; describe certification only if a real award is established. |
| 6. Relationships and business growth | Receive relevant follow-up for a personal order, business project or creative partnership. | Use a CRM with distinct B2C, B2B and artist/design collaboration pathways, plus workshop and academy interests. Record enquiry source, intended use, quantity, timeline, owner, next action and consent. Keep repeat buyers and business accounts identifiable without mixing their needs. |

## Measures to guide the next investment

Start with catalogue-to-enquiry clicks, sample requests, qualified business enquiries and response time. Once delivery is connected, measure received enquiries and outcomes. Add checkout conversion, repeat purchase and fulfilment measures only when commerce is live; add workshop occupancy and academy applications when those programmes are operating.

The immediate site can be polished and usable with the current setup. Transactional services require the studio's confirmed operating details and approved service connections; visual polish alone cannot supply them.
