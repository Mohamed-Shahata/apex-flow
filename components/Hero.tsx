"use client";

import { useEffect, useRef, useState } from "react";

const STACK = ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    const onMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="hero">
      <div ref={glowRef} className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className={`hero-inner ${mounted ? "is-in" : ""}`}>
        <span className="hero-eyebrow">
          Full-Stack &middot; Backend-Focused
        </span>

        <h1 className="hero-title">
          Apex Flow
          <span className="hero-title-sub">Engineering digital momentum.</span>
        </h1>

        <p className="hero-sub">
          We design and ship production-ready SaaS platforms, dashboards, and
          APIs &mdash; not prototypes. From database schema to deployed system,
          one team owns the whole flow.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Start a Project
          </a>
        </div>

        <ul className="hero-stack" aria-label="Core technologies">
          {STACK.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
