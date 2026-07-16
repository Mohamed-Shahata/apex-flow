"use client";

import { useState } from "react";

type Faq = { id: string; question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="faq-list">
      {faqs.map((item) => {
        const isOpen = open === item.id;
        const answerId = `faq-answer-${item.id}`;
        return (
          <div className="faq-item" key={item.id}>
            <button
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpen(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span className={`faq-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            {isOpen && (
              <p className="faq-answer" id={answerId}>
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
