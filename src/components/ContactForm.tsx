"use client";

import { useState } from "react";
import { site } from "@/content/site";

/**
 * No backend yet: on submit this opens the visitor's mail app with the enquiry filled in.
 * TODO swap for a server action / form service once the client picks one.
 */
export default function ContactForm({ kind = "general" }: { kind?: "general" | "workshop" }) {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
    const subject = kind === "workshop" ? "Workshop booking" : `Enquiry: ${data.get("Topic") ?? ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent)
    return (
      <div className="thanks">
        <h3 className="title">Thank you, your note is on its way.</h3>
        <p className="muted" style={{ marginTop: 12 }}>Your mail app should have opened with your message. We usually reply within two working days.</p>
      </div>
    );

  return (
    <form className="form" onSubmit={submit} data-reveal>
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input id="f-name" name="Name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="Email" type="email" required autoComplete="email" />
      </div>
      {kind === "workshop" ? (
        <>
          <div className="field">
            <label htmlFor="f-session">Session</label>
            <select id="f-session" name="Session">
              <option>Studio experience</option>
              <option>Young papermakers</option>
              <option>Teams &amp; retreats</option>
              <option>Papermaking academy</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-people">How many people</label>
            <input id="f-people" name="People" type="number" min={1} defaultValue={2} />
          </div>
          <div className="field full">
            <label htmlFor="f-date">Preferred dates</label>
            <input id="f-date" name="Dates" placeholder="e.g. any weekend in December" />
          </div>
        </>
      ) : (
        <div className="field full">
          <label htmlFor="f-topic">I&apos;m writing about</label>
          <select id="f-topic" name="Topic">
            <option>Buying paper or products</option>
            <option>Custom / wedding / corporate order</option>
            <option>Visiting the studio</option>
            <option>Workshops or academy</option>
            <option>Partnerships &amp; press</option>
          </select>
        </div>
      )}
      <div className="field full">
        <label htmlFor="f-msg">Message</label>
        <textarea id="f-msg" name="Message" />
      </div>
      <div className="full" style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
        <button className="btn" type="submit">Send</button>
        <span className="form-note">Opens your email app. Nothing is stored on this site.</span>
      </div>
    </form>
  );
}
