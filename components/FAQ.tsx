import FaqAccordion from "@/components/FaqAccordion";
import { getFaqs } from "@/lib/actions/faq";
import Reveal from "@/components/Reveal";

export default async function FAQ() {
  const faqs = await getFaqs();

  return (
    <section className="faq" id="faq">
      <div className="services-inner">
        <Reveal className="about-head">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Questions clients actually ask.</h2>
        </Reveal>

        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
