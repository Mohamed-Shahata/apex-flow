const SERVICES = [
  {
    title: "Web Development",
    items: ["Landing Pages", "SaaS Platforms", "Dashboards"],
  },
  {
    title: "Backend Systems",
    items: ["APIs", "CRM / ERP", "Multi-Tenant Architecture"],
  },
  {
    title: "Platform Engineering",
    items: ["Authentication", "Payments", "Admin Panels"],
  },
  {
    title: "AI Integration",
    items: ["LLM Features", "Automation Pipelines", "AI Assistants"],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="about-head">
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-title">
            Services scoped around real product needs, not a generic package.
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
