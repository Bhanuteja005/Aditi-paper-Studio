# Final visual QA

Reviewed 16 October 2026: the twelve supplied `768-{home,shop,paper,workshops,about,contact}.png` and `1440-{home,shop,paper,workshops,about,contact}.png` screenshots.

These are viewport screenshots, not full-page captures. Findings apply to the visible areas. Interactions, content below the viewport and carousel timing were outside this review.

## Two findings — fixed and rechecked

1. **Workshop banner face crop — fixed.** The initial `1440-workshops.png` crop cut into the upper heads of all three people; the man on the right lost his eyes and upper face. The tablet crop was already well framed. The desktop-only `workshops-hero` image now uses `object-position: center 10%` above 900px. The coordinating task rechecked the resulting desktop screenshot; the tablet crop remains unchanged.

2. **Duplicate shop image — fixed.** The initial desktop and tablet shop screenshots showed the same paper-stack photograph in the first two cards. A separate `deckle-detail.webp` image was generated and assigned to the deckle-edge sheet product. Its close view of feathered edges on dark stone distinguishes it from the cotton-sheet stack. The coordinating task rechecked the revised result.

## What reads correctly in the supplied views

- The existing logo is intact at both widths. Desktop navigation and the tablet menu control fit without crowding or clipping.
- Headings, supporting copy and page margins follow a consistent hierarchy. No visible horizontal overflow, overlapping text or truncated controls appears in the screenshots.
- The home hero retains a readable left-hand text area and a clear main action. Carousel selectors are visible; no pause control is visible.
- Paper and About banner crops retain their principal subjects at both widths. The About image preserves the relationship between drying sheets and the distant maker.
- Shop filters remain on one row at 768px, with the business enquiry link separated from category selection.
- The contact page visibly uses **Hyderabad, Telangana**, explains that visit details are forthcoming, and says the form prepares and saves an enquiry. No fabricated contact address is visible.
- No visible AI labels or image-caption badges appear in these screenshots.

## Subsequent coordinated checks

The full six-route set was also checked at 390, 768 and 1440 pixels. The coordinating task reported no horizontal page overflow and verified the local enquiry-draft flow. The saved [responsive results](responsive-checks.json) record one main heading, no email links, no unwanted visible labels and no visible broken images for all eighteen route/width combinations. These checks do not constitute a complete accessibility audit or confirm a production build.

No application files were edited by this reviewer. The coordinating task implemented and rechecked the two visual fixes above.
