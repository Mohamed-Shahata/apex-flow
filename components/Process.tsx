const STEPS = [
  {
    n: "01",
    title: "Discovery",
    text: "Understand the business goal, users, and constraints before writing scope.",
  },
  {
    n: "02",
    title: "Planning",
    text: "Break the goal into a scoped roadmap: data model, API surface, milestones.",
  },
  {
    n: "03",
    title: "UI",
    text: "Design screens around the real content and flows, not generic templates.",
  },
  {
    n: "04",
    title: "Development",
    text: "Build backend and frontend in parallel, with the schema as the source of truth.",
  },
  {
    n: "05",
    title: "Testing",
    text: "Verify edge cases, load behavior, and auth boundaries before deploy.",
  },
  {
    n: "06",
    title: "Deployment",
    text: "Ship to production with monitoring and rollback in place from day one.",
  },
  {
    n: "07",
    title: "Support",
    text: "Stay available post-launch for fixes, iteration, and scaling needs.",
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="services-inner">
        <div className="about-head">
          <span className="section-eyebrow">How We Work</span>
          <h2 className="section-title">
            A real sequence, not a slide &mdash; each step gates the next.
          </h2>
        </div>

        <ol className="process-list">
          {STEPS.map((step) => (
            <li className="process-step" key={step.n}>
              <span className="process-n">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
