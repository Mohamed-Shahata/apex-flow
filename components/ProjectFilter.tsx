"use client";

import { useMemo, useState } from "react";
import { RevealGroup, RevealItem } from "./Reveal";

type Project = {
  slug: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  stack: string[];
};

export default function ProjectFilter({
  projects,
  locale,
}: {
  projects: Project[];
  locale: "en" | "ar";
}) {
  const [active, setActive] = useState<string>("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.stack.includes(active));
  }, [projects, active]);

  return (
    <>
      <div
        className="project-filter"
        role="tablist"
        aria-label="Filter projects by technology"
      >
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            role="tab"
            aria-selected={active === tag}
            className={`project-filter-btn${active === tag ? " active" : ""}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <RevealGroup className="projects-grid">
        {filtered.map((p) => (
          <RevealItem as="div" key={p.slug}>
            <a className="project-card" href={`/projects/${p.slug}`}>
              <div className="project-thumb" aria-hidden="true" />
              <div className="project-body">
                <h3>{locale === "ar" ? p.titleAr : p.titleEn}</h3>
                <p>{locale === "ar" ? p.summaryAr : p.summaryEn}</p>
                <div className="project-tags">
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>

      {filtered.length === 0 && (
        <p className="project-filter-empty">
          {locale === "ar"
            ? "لا توجد مشاريع تطابق هذا الفلتر."
            : "No projects match this filter."}
        </p>
      )}
    </>
  );
}
