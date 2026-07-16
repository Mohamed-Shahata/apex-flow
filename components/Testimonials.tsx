// Replace these with real client quotes, GitHub feedback, or team notes as they come in.
const TESTIMONIALS = [
  {
    quote: "Add a real client or collaborator quote here.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote: "Add a second quote here — GitHub feedback, a recommendation, etc.",
    name: "Name",
    role: "Role, Company",
  },
  {
    quote: "Add a third quote here.",
    name: "Name",
    role: "Role, Company",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="services-inner">
        <div className="about-head">
          <span className="section-eyebrow">What People Say</span>
          <h2 className="section-title">
            Feedback from people who&rsquo;ve worked with the code directly.
          </h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure className="testimonial-card" key={i}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
