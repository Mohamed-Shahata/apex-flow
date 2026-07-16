const POINTS = [
  {
    title: "Fast",
    text: "Optimized builds and lean queries, not bloated defaults.",
  },
  {
    title: "Reliable",
    text: "Systems designed to hold up under real, sustained usage.",
  },
  {
    title: "Clean Code",
    text: "Readable, typed, and structured for someone else to maintain later.",
  },
  {
    title: "Scalable",
    text: "Multi-tenant and modular by default, not bolted on after launch.",
  },
  {
    title: "SEO",
    text: "Metadata, semantic markup, and performance handled from the start.",
  },
  {
    title: "Responsive",
    text: "Every screen works from mobile up, not just desktop-first.",
  },
  {
    title: "Security",
    text: "Auth, RBAC, and session handling treated as core, not an afterthought.",
  },
  {
    title: "Maintenance",
    text: "Documented and structured so future changes don't require a rewrite.",
  },
];

export default function WhyUs() {
  return (
    <section className="whyus" id="whyus">
      <div className="services-inner">
        <div className="about-head">
          <span className="section-eyebrow">Why Us</span>
          <h2 className="section-title">
            Eight things every project ships with, by default.
          </h2>
        </div>

        <div className="whyus-grid">
          {POINTS.map((p) => (
            <div className="whyus-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
