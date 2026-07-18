import { useTranslations } from "next-intl";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Process() {
  const t = useTranslations("Process");

  const steps = t.raw("steps") as {
    title: string;
    text: string;
  }[];

  return (
    <section className="process" id="process">
      <div className="services-inner">
        <Reveal className="about-head flex flex-col items-center  text-center">
          <span className="section-eyebrow">{t("eyebrow")}</span>
          <h2 className="section-title">{t("title")}</h2>
        </Reveal>

        <div className="flex flex-col gap-2" >
          {steps.map((step, index) => (
            <RevealItem
              className="process-step"
              as="li"
              key={step.title}
            >
              <span className="process-n">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}