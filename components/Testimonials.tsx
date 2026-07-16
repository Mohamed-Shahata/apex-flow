import { getTestimonials } from "@/lib/actions/testimonials";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default async function Testimonials() {
  const TESTIMONIALS = await getTestimonials();

  return (
    <section className="testimonials" id="testimonials">
      <div className="services-inner">
        <Reveal className="about-head">
          <span className="section-eyebrow">What People Say</span>
          <h2 className="section-title">
            Feedback from people who&rsquo;ve worked with the code directly.
          </h2>
        </Reveal>

        <RevealGroup className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <RevealItem as="div" key={t.id}>
              <figure className="testimonial-card">
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
