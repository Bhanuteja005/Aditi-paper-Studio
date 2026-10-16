"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { site } from "@/content/site";

type EnquiryDraft = { subject: string; body: string };
const subscribeToHydration = () => () => {};

/** Enquiries stay local until the visitor chooses to send them in their email app. */
export default function ContactForm({
  kind = "general",
  about = "",
}: {
  kind?: "general" | "workshop";
  about?: string;
}) {
  const id = useId();
  // Keep native submission unavailable until React can keep the draft local.
  const hydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const [draft, setDraft] = useState<EnquiryDraft | null>(null);
  const [notice, setNotice] = useState("");
  const draftHeading = useRef<HTMLHeadingElement>(null);
  const initialTopic = /workshop|academy|papermak|studio experience|teams.*retreat/i.test(about)
    ? "Workshops or academy"
    : /visit/i.test(about)
      ? "Visiting the studio"
      : /custom|wedding|corporate|business|hospitality/i.test(about)
        ? "Custom / wedding / corporate order"
        : "Buying paper or products";

  const prepare = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = kind === "workshop"
      ? `Workshop enquiry: ${data.get("Session")}`
      : `Enquiry: ${data.get("Product or project") || data.get("Topic")}`;
    const body = [...data.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${String(value).trim()}`)
      .join("\n\n");

    setDraft({ subject, body });
    setNotice("");
    requestAnimationFrame(() => draftHeading.current?.focus());
  };

  const copy = async () => {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(`${draft.subject}\n\n${draft.body}`);
      setNotice("Enquiry copied. Paste it into a message whenever you are ready.");
    } catch {
      setNotice("Copy is unavailable in this browser. Select the draft text below, or download it instead.");
    }
  };

  const download = () => {
    if (!draft) return;
    const file = new Blob([`${site.name}\n${draft.subject}\n\n${draft.body}\n`], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "aditi-paperie-enquiry.txt";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice("Your enquiry download has started. It has not been sent to the studio.");
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={prepare}
        onChange={() => { setDraft(null); setNotice(""); }}
        aria-describedby={`${id}-note`}
      >
        <div className="field">
          <label htmlFor={`${id}-name`}>Name</label>
          <input id={`${id}-name`} name="Name" required pattern=".*\S.*" maxLength={100} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor={`${id}-email`}>Email</label>
          <input id={`${id}-email`} name="Email" type="email" required maxLength={254} autoComplete="email" />
        </div>
        {kind === "workshop" ? (
          <>
            <div className="field">
              <label htmlFor={`${id}-session`}>I&apos;m interested in</label>
              <select id={`${id}-session`} name="Session">
                <option>Studio experience</option>
                <option>Young papermakers</option>
                <option>Teams &amp; retreats</option>
                <option>Papermaking academy</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor={`${id}-people`}>How many people</label>
              <input id={`${id}-people`} name="People" type="number" min={1} max={1000} step={1} defaultValue={2} />
            </div>
            <div className="field full">
              <label htmlFor={`${id}-date`}>Preferred dates</label>
              <input id={`${id}-date`} name="Preferred dates" maxLength={150} placeholder="A date or a flexible time of year" />
            </div>
          </>
        ) : (
          <>
            <div className="field full">
              <label htmlFor={`${id}-topic`}>I&apos;m writing about</label>
              <select id={`${id}-topic`} name="Topic" defaultValue={initialTopic}>
                <option>Buying paper or products</option>
                <option>Custom / wedding / corporate order</option>
                <option>Visiting the studio</option>
                <option>Workshops or academy</option>
                <option>Partnerships &amp; press</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor={`${id}-product`}>Product or project <span>(optional)</span></label>
              <input id={`${id}-product`} name="Product or project" defaultValue={about} maxLength={200} placeholder="A paper, an object, an idea" />
            </div>
          </>
        )}
        <div className="field full">
          <label htmlFor={`${id}-message`}>Message</label>
          <textarea
            id={`${id}-message`}
            name="Message"
            required
            maxLength={4000}
            placeholder={kind === "workshop" ? "Tell us about your group and what you would like to learn." : "Tell us about your idea, quantities and timing."}
          />
        </div>
        <div className="full enquiry-actions" style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <button className="btn" type="submit" disabled={!hydrated}>Prepare enquiry</button>
          <p className="form-note" id={`${id}-note`} style={{ margin: 0 }}>
            {site.email
              ? "Review your draft, then send it from your email app."
              : "Studio contact details are being confirmed. Save a draft for now."}
          </p>
        </div>
        <p className="form-note full" style={{ margin: 0 }}>Your details stay on this page until you copy, download or email your enquiry.</p>
        <noscript>
          <p className="form-note full">Enable JavaScript to prepare, copy or download an enquiry. This form cannot submit while JavaScript is unavailable, so your details stay on this page.</p>
        </noscript>
      </form>

      {draft && (
        <section className="enquiry-draft" aria-labelledby={`${id}-draft-heading`} style={{ marginTop: 32 }}>
          <h3 id={`${id}-draft-heading`} ref={draftHeading} tabIndex={-1} className="title">Your enquiry is ready to review.</h3>
          <p className="form-note" style={{ marginTop: 12 }}>
            {site.email ? "Nothing has been sent yet. You can open your email app, copy the draft or save it for later." : "Nothing has been sent. Copy or download your enquiry to keep it until the studio contact details are available."}
          </p>
          <div className="field">
            <label htmlFor={`${id}-draft`}>Your draft</label>
            <textarea id={`${id}-draft`} readOnly rows={10} value={`${draft.subject}\n\n${draft.body}`} />
          </div>
          <div className="enquiry-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            {site.email && (
              <a
                className="btn"
                href={`mailto:${site.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}
                onClick={() => setNotice("If your email app opened, review the draft and press Send there. This site cannot confirm delivery.")}
              >Open email app</a>
            )}
            <button className="btn line" type="button" onClick={copy}>Copy draft</button>
            <button className="btn line" type="button" onClick={download}>Download draft</button>
          </div>
        </section>
      )}
      <p className="form-note" role="status" aria-live="polite" style={{ marginTop: notice ? 16 : 0 }}>{notice}</p>
    </div>
  );
}
