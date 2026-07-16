const STACK_GROUPS = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript"] },
  { label: "Backend", items: ["NestJS", "Node.js"] },
  { label: "Database", items: ["PostgreSQL", "Prisma"] },
  { label: "Cloud", items: ["Vercel", "AWS"] },
  { label: "DevOps", items: ["Docker", "GitHub Actions"] },
  { label: "Tools", items: ["Notion", "Figma"] },
];

import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function TechStack() {
  return (
    <section className="stack" id="stack">
      <div className="services-inner">
        <Reveal className="about-head">
          <span className="section-eyebrow">Tech Stack</span>
          <h2 className="section-title">The tools behind every build.</h2>
        </Reveal>

        <RevealGroup className="stack-grid">
          {STACK_GROUPS.map((group) => (
            <RevealItem className="stack-group" key={group.label}>
              <span className="stack-label">{group.label}</span>
              <div className="stack-pills">
                {group.items.map((item) => (
                  <span className="stack-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
