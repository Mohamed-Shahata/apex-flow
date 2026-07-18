import { getServices } from "@/lib/actions/services";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Services() {
  const t = await getTranslations("Services");
  const SERVICES = await getServices();
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <Reveal className="about-head flex flex-col items-center  text-center">
          <span className="section-eyebrow">{t("eyebrow")}</span>
          <h2 className="section-title">{t("title")}</h2>
        </Reveal>

        <RevealGroup className="services-grid">
          {SERVICES.map((s) => (
            <RevealItem className={`service-card ${locale === "ar" && "text-end"}`} key={s.id}>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
