"use client";

import { useTranslations } from "next-intl";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

type WhyUsPoint = {
  title: string;
  text: string;
};

export default function WhyUs() {
  const t = useTranslations("WhyUs");

  const points = t.raw("points") as WhyUsPoint[];

  return (
    <section className="whyus" id="whyus">
      <div className="services-inner">
        <Reveal className="about-head flex flex-col items-center  text-center">
          <span className="section-eyebrow">{t("eyebrow")}</span>

          <h2 className="section-title">{t("title")}</h2>
        </Reveal>

        <RevealGroup className="whyus-grid">
          {points.map((point) => (
            <RevealItem className="whyus-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}