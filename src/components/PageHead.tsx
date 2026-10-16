import Photo from "./Photo";

/** Centred page title with an optional wide banner photo underneath. */
export default function PageHead({ label, title, lead, slot, alt }: { label: string; title: string; lead?: string; slot?: string; alt?: string }) {
  return (
    <>
      <section className="page-head">
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
