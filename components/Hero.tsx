"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const STACK = ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-inner" variants={container} initial="hidden" animate="show">
        <motion.span variants={item} className="hero-eyebrow">{t("eyebrow")}</motion.span>
        <motion.h1 variants={item} className="hero-title">
          {t("title")}
          <span className="hero-title-sub">{t("subtitle")}</span>
        </motion.h1>
        <motion.p variants={item} className="hero-sub">{t("description")}</motion.p>
        <motion.div variants={item} className="hero-cta">
          <a href="/#projects" className="btn btn-primary">{t("viewProjects")}</a>
          <a href="/#contact" className="btn btn-ghost">{t("startProject")}</a>
        </motion.div>
        <motion.ul variants={item} className="hero-stack" aria-label="Core technologies">
          {STACK.map((tech) => (<li key={tech}>{tech}</li>))}
        </motion.ul>
      </motion.div>
    </section>
  );
}