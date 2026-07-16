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
    title: study.titleEn,
    description: study.overviewEn,
    openGraph: {
      title: study.titleEn,
      description: study.overviewEn,
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
    name: study.titleEn,
    description: study.overviewEn,
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

        <h1 className="case-title">{study.titleEn}</h1>

        {study.images.length > 0 && (
          <section className="case-block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.images.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={study.titleEn}
                  className="w-full rounded-2xl border border-white/10"
                />
              ))}
            </div>
          </section>
        )}

        <section className="case-block">
          <h2>Overview</h2>
          <p>{study.overviewEn}</p>
        </section>

        <section className="case-block">
          <h2>Problem</h2>
          <p>{study.problemEn}</p>
        </section>

        <section className="case-block">
          <h2>Solution</h2>
          <p>{study.solutionEn}</p>
        </section>

        <section className="case-block">
          <h2>Architecture</h2>
          <p>{study.architectureEn}</p>
        </section>

        <section className="case-block">
          <h2>Features</h2>
          <ul className="case-list">
            {study.featuresEn.map((f) => (
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
          <p>{study.roleEn}</p>
        </section>

        <section className="case-block">
          <h2>Result</h2>
          <p>{study.resultEn}</p>
        </section>
      </div>
    </article>
  );
}
