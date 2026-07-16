import { getTestimonials } from "@/lib/actions/testimonials";

export default async function Testimonials() {
  const TESTIMONIALS = await getTestimonials();

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
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial-card" key={t.id}>
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
