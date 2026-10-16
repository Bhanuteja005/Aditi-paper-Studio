# Enquiry and navigation fixes

Updated 16 October 2026. These changes use the founder transcript as project evidence. Unverified claims and contact details are not treated as launch-ready facts.

## What changed

- Product enquiries retain the product name from `?about=` in a visible, editable field and in the generated subject and message. Workshop, visit and business enquiry links also select the relevant topic. URL text is limited to 200 characters and rendered as text.
- The form prepares a reviewable draft. It never claims a message has been sent. A visitor can copy the draft or download a plain text file. When a confirmed email is configured, they can open their email application and send it there. A mail application handoff cannot confirm delivery.
- Editing the form clears its prepared draft so visitors cannot accidentally copy or email an earlier version. Native labels, input validation, unique field IDs, focus on the prepared draft, and live status messages support keyboard and assistive technology use.
- Placeholder email, telephone, hours and Instagram destination are removed. Missing details produce a calm, explicit fallback. The newsletter form that posted to `#` is replaced by a working workshops link.
- Unknown shop categories show the full collection with an explanation. Category changes preserve other query parameters and browser history. Result counts are announced and empty collections have a recovery action.
- Mobile navigation is a labelled modal dialog with an internal close button. It keeps focus inside, closes with Escape, restores focus after dismissal, marks background content inert, locks browser scrolling independently of Lenis, respects reduced motion, and closes when returning to desktop width or navigating.
- Header actions say “Explore workshops” instead of implying a confirmed booking flow.
- Content arrays preserve their shapes and image slots. Unverified page counts, sheet formats, workshop durations, ages, certification, and unconditional archival performance claims are removed. The gifting category retains its existing `archival` URL ID for compatibility, but its visible label is “Gifting & Keepsakes”.

## Contact configuration

Set only client-confirmed values in the deployment environment (or a local `.env.local` while testing):

```dotenv
NEXT_PUBLIC_STUDIO_EMAIL=
NEXT_PUBLIC_STUDIO_PHONE=
NEXT_PUBLIC_STUDIO_ADDRESS=
NEXT_PUBLIC_STUDIO_HOURS=
NEXT_PUBLIC_STUDIO_INSTAGRAM_URL=
```

Email and telephone are format-checked. Instagram accepts HTTPS profile URLs on instagram.com or www.instagram.com, never the generic homepage. Invalid or blank contact values remain hidden. The general studio location comes from the interview; the precise address and visiting arrangements still need confirmation.

These are public values, not secrets. Next.js bundles public environment values at build time: rebuild after changing them. There is no invented recipient or delivery service.

## Remaining launch dependencies

- A confirmed studio email or an approved form delivery service is needed for direct enquiries. Until then, the site offers a useful local draft but cannot transmit it to the studio.
- No checkout, inventory, payment, newsletter subscription, booking calendar or reservation confirmation is implemented or implied.
- Workshop capacity, schedule, dates, prices and availability must come from the studio. Collection images/directions are not proof of stock; final product specifications and archival claims need confirmation or appropriate test evidence.
- Contact drafts exist in page memory only. Reloading or leaving the page discards them unless the visitor copies or downloads them. No form details are sent to a server by these components.
- A production form backend will need proper delivery handling, consent/privacy information and spam protection when it is introduced.

## Verification

- TypeScript check passed after these changes.
- Focus, keyboard, query-context, draft preparation and invalid-category checks should be exercised in the browser alongside the final visual review.
- Final combined ESLint, TypeScript and production build passed on 16 October 2026 after all page/image changes were integrated. The no-JavaScript form safeguard was checked in server HTML, and the hydrated enquiry flow was verified in the browser.

## Styling coordination

The header uses `.mobile-menu` (dialog), `.mobile-menu-close` and `.mobile-nav`. The dialog needs a viewport-based height, vertical overflow, and contained overscroll; `.mobile-nav` is a column. The shared stylesheet owns these rules. Enquiries use the existing field/button styles and `.enquiry-draft` / `.enquiry-actions` for optional refinement.
