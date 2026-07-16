"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What's the typical timeline for a project?",
    a: "Depends on scope — a landing page can ship in about a week, while a full SaaS platform with multi-tenant auth usually runs 4–8 weeks. You get a concrete estimate after the discovery phase, not before.",
  },
  {
    q: "Do you work with existing codebases, or only greenfield builds?",
    a: "Both. Joining an existing NestJS/Next.js/Prisma codebase to extend or fix it is common work, not an exception.",
  },
  {
    q: "How is communication handled during a project?",
    a: "Direct — you talk to the person writing the code, with regular, specific updates instead of vague status pings.",
  },
  {
    q: "What happens after launch?",
    a: "Support continues post-deploy: bug fixes, monitoring, and iteration as real usage surfaces new needs.",
  },
  {
    q: "Can you handle both backend and frontend?",
    a: "Yes — backend is the core focus, but the same person can own the Next.js frontend so nothing is lost in handoff.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="services-inner">
        <div className="about-head">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Questions clients actually ask.</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const answerId = `faq-answer-${i}`;
            return (
              <div className="faq-item" key={item.q}>
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span
                    className={`faq-icon ${isOpen ? "is-open" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="faq-answer" id={answerId}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
