const STACK_GROUPS = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript"] },
  { label: "Backend", items: ["NestJS", "Node.js"] },
  { label: "Database", items: ["PostgreSQL", "Prisma"] },
  { label: "Cloud", items: ["Vercel", "AWS"] },
  { label: "DevOps", items: ["Docker", "GitHub Actions"] },
  { label: "Tools", items: ["Notion", "Figma"] },
];

import { useTranslations } from "next-intl";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function TechStack() {
  const t = useTranslations("TechStack");

  const STACK_GROUPS = [
    {
      key: "frontend",
      items: ["Next.js", "React", "TypeScript"],
    },
    {
      key: "backend",
      items: ["NestJS", "Node.js"],
    },
    {
      key: "database",
      items: ["PostgreSQL", "Prisma"],
    },
    {
      key: "cloud",
      items: ["Vercel", "AWS"],
    },
    {
      key: "devops",
      items: ["Docker", "GitHub Actions"],
    },
    {
      key: "tools",
      items: ["Notion", "Figma"],
    },
  ] as const;

  return (
    <section className="stack" id="stack">
      <div className="services-inner">
        <Reveal className="about-head flex flex-col items-center  text-center" >
          <span className="section-eyebrow">{t("eyebrow")}</span>
          <h2 className="section-title">{t("title")}</h2>
        </Reveal>

        <RevealGroup className="stack-grid">
          {STACK_GROUPS.map((group) => (
            <RevealItem className="stack-group" key={group.key}>
              <span className="stack-label">{t(`groups.${group.key}`)}</span>

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
