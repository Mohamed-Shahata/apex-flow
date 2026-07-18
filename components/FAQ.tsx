import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { getFaqs } from "@/lib/actions/faq";
import { getTranslations } from "next-intl/server";

export default async function FAQ() {
  const t = await getTranslations("FAQ");
  const faqs = await getFaqs();

  return (
    <section className="faq flex flex-col items-center justify-center" id="faq">
      <div className="services-inner w-full">
        <Reveal className="about-head flex flex-col items-center  text-center">
          <span className="section-eyebrow">{t("eyebrow")}</span>

          <h2 className="section-title">{t("title")}</h2>
        </Reveal>

        <FaqAccordion  faqs={faqs} />
      </div>
    </section>
  );
}
