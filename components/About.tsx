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
        <div className="about-head">
          <span className="section-eyebrow">Why Apex Flow</span>
          <h2 className="section-title">
            Not just &ldquo;who we are&rdquo; &mdash; why teams choose to build
            with us.
          </h2>
        </div>

        <div className="about-grid">
          {REASONS.map((r) => (
            <div className="about-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
