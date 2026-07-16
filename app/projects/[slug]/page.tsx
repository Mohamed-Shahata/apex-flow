import { notFound } from "next/navigation";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/case-studies";

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) notFound();

  return (
    <article className="case">
      <div className="case-inner">
        <Link href="/#projects" className="case-back">
          &larr; Back to projects
        </Link>

        <h1 className="case-title">{study.title}</h1>

        <section className="case-block">
          <h2>Overview</h2>
          <p>{study.overview}</p>
        </section>

        <section className="case-block">
          <h2>Problem</h2>
          <p>{study.problem}</p>
        </section>

        <section className="case-block">
          <h2>Solution</h2>
          <p>{study.solution}</p>
        </section>

        <section className="case-block">
          <h2>Architecture</h2>
          <p>{study.architecture}</p>
        </section>

        <section className="case-block">
          <h2>Features</h2>
          <ul className="case-list">
            {study.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="case-block">
          <h2>Tech Stack</h2>
          <div className="project-tags">
            {study.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </section>

        <section className="case-block">
          <h2>Role</h2>
          <p>{study.role}</p>
        </section>

        <section className="case-block">
          <h2>Result</h2>
          <p>{study.result}</p>
        </section>
      </div>
    </article>
  );
}
