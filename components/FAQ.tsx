import FaqAccordion from "@/components/FaqAccordion";
import { getFaqs } from "@/lib/actions/faq";

export default async function FAQ() {
  const faqs = await getFaqs();

  return (
    <section className="faq" id="faq">
      <div className="services-inner">
        <div className="about-head">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Questions clients actually ask.</h2>
        </div>

        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
