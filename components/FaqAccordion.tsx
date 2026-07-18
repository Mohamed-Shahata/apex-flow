"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealGroup, RevealItem } from "./Reveal";

type Faq = { id: string; question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <RevealGroup className="faq-list mx-auto">
      {faqs.map((item) => {
        const isOpen = open === item.id;
        const answerId = `faq-answer-${item.id}`;
        return (
          <RevealItem className="faq-item" key={item.id}>
            <button
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpen(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <motion.span
                className="faq-icon"
                aria-hidden="true"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="faq-answer">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
