import { getServices } from "@/lib/actions/services";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default async function Services() {
  const SERVICES = await getServices();

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <Reveal className="about-head">
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-title">
            Services scoped around real product needs, not a generic package.
          </h2>
        </Reveal>

        <RevealGroup className="services-grid">
          {SERVICES.map((s) => (
            <RevealItem className="service-card" key={s.id}>
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
