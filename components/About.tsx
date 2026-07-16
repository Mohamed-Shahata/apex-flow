import CountUp from "@/components/CountUp";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

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
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <Reveal className="about-head">
          <span className="section-eyebrow">Why Apex Flow</span>
          <h2 className="section-title">
            Not just &ldquo;who we are&rdquo; &mdash; why teams choose to build
            with us.
          </h2>
        </Reveal>

        <RevealGroup className="about-grid">
          {REASONS.map((r) => (
            <RevealItem className="about-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="about-stats-container mt-12 pt-12 border-t border-[var(--glass-border)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                <CountUp to={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">Uptime SLA</span>
            </div>
            <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                <CountUp to={30} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">Projects Shipped</span>
            </div>
            <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                <CountUp to={100} suffix="M+" />
              </span>
              <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">API Requests</span>
            </div>
            <div className="about-stat-card flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                <CountUp to={8} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-widest text-[var(--slate)] mt-2">Years Exp</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
