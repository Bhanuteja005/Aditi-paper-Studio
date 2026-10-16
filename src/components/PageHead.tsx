import Photo from "./Photo";

/** Centred page title with an optional wide banner photo underneath. */
export default function PageHead({ label, title, lead, slot, alt, compact = false }: { label: string; title: string; lead?: string; slot?: string; alt?: string; compact?: boolean }) {
  return (
    <>
      <section className={`page-head${compact ? " compact" : ""}`}>
        <div className="wrap" data-reveal>
          <span className="label">{label}</span>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </section>
      {slot && (
        <div className="page-banner wrap" data-reveal>
          <Photo slot={slot} alt={alt ?? ""} eager />
        </div>
      )}
    </>
  );
}
