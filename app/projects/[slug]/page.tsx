import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/actions/projects";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

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
      ...(study.heroImage && { images: [study.heroImage] }),
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
    ...(study.heroImage && { image: [study.heroImage, ...study.images] }),
    ...(!study.heroImage && study.images.length > 0 && { image: study.images }),
  };

  const storyBlocks = [
    { key: "problem", heading: "The Problem", text: study.problemEn },
    { key: "solution", heading: "The Solution", text: study.solutionEn },
    {
      key: "architecture",
      heading: "Architecture",
      text: study.architectureEn,
    },
    { key: "result", heading: "The Result", text: study.resultEn },
  ];

  return (
    <article className="case">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------- Hero ---------- */}
      <div className="case-hero">
        {study.heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={study.heroImage}
            alt={study.titleEn}
            className="case-hero-img"
          />
        ) : (
          <div className="case-hero-fallback" aria-hidden="true" />
        )}
        <div className="case-hero-overlay" />

        <div className="case-hero-content">
          <Link href="/#projects" className="case-back">
            &larr; Back to projects
          </Link>
          <Reveal>
            <h1 className="case-title">{study.titleEn}</h1>
            <p className="case-summary">{study.summaryEn}</p>
          </Reveal>
          <RevealGroup className="project-tags" stagger={0.05}>
            {study.stack.map((t) => (
              <RevealItem as="div" key={t} className="project-tag-pill">
                {t}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      <div className="case-inner">
        {/* ---------- Overview ---------- */}
        <Reveal className="case-block">
          <h2>Overview</h2>
          <p>{study.overviewEn}</p>
        </Reveal>

        {/* ---------- Video (only if present) ---------- */}
        {study.videoUrl && (
          <Reveal className="case-block case-video-block">
            <h2>Demo</h2>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src={study.videoUrl}
              controls
              className="case-video"
              preload="metadata"
            />
          </Reveal>
        )}

        {/* ---------- Story: problem -> solution -> architecture -> result ---------- */}
        {storyBlocks.map((block, i) => (
          <Reveal key={block.key} className="case-block" delay={i * 60}>
            <h2>{block.heading}</h2>
            <p>{block.text}</p>
          </Reveal>
        ))}

        {/* ---------- Gallery ---------- */}
        {study.images.length > 0 && (
          <Reveal className="case-block">
            <h2>Gallery</h2>
            <RevealGroup className="case-gallery" stagger={0.08}>
              {study.images.map((src) => (
                <RevealItem as="div" key={src} className="case-gallery-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={study.titleEn} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        )}

        {/* ---------- Features ---------- */}
        <Reveal className="case-block">
          <h2>Features</h2>
          <ul className="case-list">
            {study.featuresEn.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>

        {/* ---------- Role ---------- */}
        <Reveal className="case-block">
          <h2>Role</h2>
          <p>{study.roleEn}</p>
        </Reveal>
      </div>
    </article>
  );
}
