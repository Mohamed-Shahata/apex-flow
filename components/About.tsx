import CountUp from "@/components/CountUp";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { useTranslations } from "next-intl";

const REASONS = [
  {
    title: "Full ownership",
    text: "One team handles schema, API, and UI — no handoffs, no gaps between backend logic and what ships.",
  },
  {
    title: "Backend-first mindset",
    text: "Systems are designed to hold real data and real traffic, not just to demo well.",
  },
  {
    title: "Direct communication",
    text: "You talk to the person writing the code. Updates are frequent and specific, not vague status pings.",
  },
  {
    title: "Process, not guesswork",
    text: "Discovery, planning, and testing happen before a single deploy — so scope stays predictable.",
  },
];

export default function About() {
  const t = useTranslations("About");

  const reasons = t.raw("reasons") as {
    title: string;
    text: string;
  }[];

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <Reveal className="about-head flex flex-col items-center  text-center">
          <span className="section-eyebrow">{t("eyebrow")}</span>
          <h2 className="section-title">{t("title")}</h2>
        </Reveal>

        <RevealGroup className="about-grid">
          {reasons.map((reason) => (
            <RevealItem className="about-card" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
            <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              <CountUp to={99.9} decimals={1} suffix="%" />
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">
              {t("stats.uptime")}
            </span>
          </div>
          <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
            <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              <CountUp to={30} suffix="+" />
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">
              {t("stats.projects")}
            </span>
          </div>
          <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
            <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              <CountUp to={20} suffix="+" />
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">
              {t("stats.clients")}
            </span>
          </div>
          <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
            <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              <CountUp to={100} suffix="M+" />
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">
              {t("stats.requests")}
            </span>
          </div>
          <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
            <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              <CountUp to={8} suffix="+" />
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">
              {t("stats.years")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
