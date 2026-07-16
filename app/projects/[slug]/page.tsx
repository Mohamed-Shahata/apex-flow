import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/actions/projects";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getProjectBySlug(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.overview,
    openGraph: {
      title: study.title,
      description: study.overview,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getProjectBySlug(slug);

  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.overview,
    url: `https://apexflow.dev/projects/${study.slug}`,
    creator: {
      "@type": "Person",
      name: "Mohamed",
    },
    keywords: study.stack.join(", "),
    ...(study.images.length > 0 && { image: study.images }),
  };

  return (
    <article className="case">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="case-inner">
        <Link href="/#projects" className="case-back">
          &larr; Back to projects
        </Link>

        <h1 className="case-title">{study.title}</h1>

        {study.images.length > 0 && (
          <section className="case-block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.images.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={study.title}
                  className="w-full rounded-2xl border border-white/10"
                />
              ))}
            </div>
          </section>
        )}

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
