import { getTestimonials } from "@/lib/actions/testimonials";
import { getTranslations } from "next-intl/server";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default async function Testimonials() {
  const t = await getTranslations("Testimonials");
  const TESTIMONIALS = await getTestimonials();

  return (
    <section className="testimonials" id="testimonials">
      <div className="services-inner">
        <Reveal className="about-head flex flex-col items-center  text-center">
          <span className="section-eyebrow">
            {t("eyebrow")}
          </span>

          <h2 className="section-title">
            {t("title")}
          </h2>
        </Reveal>

        <RevealGroup className="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <RevealItem as="div" key={testimonial.id}>
              <figure className="testimonial-card">
                <blockquote>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption>
                  <span className="testimonial-name">
                    {testimonial.name}
                  </span>

                  <span className="testimonial-role">
                    {testimonial.role}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}