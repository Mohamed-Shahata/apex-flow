import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/actions/projects";
import { localizeProject } from "@/lib/localize-project";
import { getLocale } from "next-intl/server";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const raw = await getProjectBySlug(slug);
  if (!raw) return {};
  const locale = await getLocale();
  const study = localizeProject(raw, locale);

  return {
    title: study.title,
    description: study.overview,
    openGraph: {
      title: study.title,
      description: study.overview,
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
  const raw = await getProjectBySlug(slug);

  if (!raw) notFound();

  const locale = await getLocale();
  const study = localizeProject(raw, locale);

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
    ...(study.heroImage && { image: [study.heroImage, ...study.images] }),
    ...(!study.heroImage && study.images.length > 0 && { image: study.images }),
  };

  const t =
    locale === "ar"
      ? {
          overview: "نظرة عامة",
          demo: "عرض",
          problem: "المشكلة",
          solution: "الحل",
          architecture: "المعمارية",
          result: "النتيجة",
          gallery: "معرض الصور",
          features: "المزايا",
          role: "الدور",
          back: "العودة للمشاريع",
        }
      : {
          overview: "Overview",
          demo: "Demo",
          problem: "The Problem",
          solution: "The Solution",
          architecture: "Architecture",
          result: "The Result",
          gallery: "Gallery",
          features: "Features",
          role: "Role",
          back: "Back to projects",
        };

  const storyBlocks = [
    { key: "problem", heading: t.problem, text: study.problem },
    { key: "solution", heading: t.solution, text: study.solution },
    { key: "architecture", heading: t.architecture, text: study.architecture },
    { key: "result", heading: t.result, text: study.result },
  ];

  return (
    <article className="case" dir={locale === "ar" ? "rtl" : "ltr"}>
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
            alt={study.title}
            className="case-hero-img"
          />
        ) : (
          <div className="case-hero-fallback" aria-hidden="true" />
        )}
        <div className="case-hero-overlay" />

        <div className="case-hero-content">
          <Link href="/#projects" className="case-back">
            &larr; {t.back}
          </Link>
          <Reveal>
            <h1 className="case-title">{study.title}</h1>
            <p className="case-summary">{study.summary}</p>
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
          <h2>{t.overview}</h2>
          <p>{study.overview}</p>
        </Reveal>

        {/* ---------- Video (only if present) ---------- */}
        {study.videoUrl && (
          <Reveal className="case-block case-video-block">
            <h2>{t.demo}</h2>
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
            <h2>{t.gallery}</h2>
            <RevealGroup className="case-gallery" stagger={0.08}>
              {study.images.map((src) => (
                <RevealItem as="div" key={src} className="case-gallery-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={study.title} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        )}

        {/* ---------- Features ---------- */}
        <Reveal className="case-block">
          <h2>{t.features}</h2>
          <ul className="case-list">
            {study.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>

        {/* ---------- Role ---------- */}
        <Reveal className="case-block">
          <h2>{t.role}</h2>
          <p>{study.role}</p>
        </Reveal>
      </div>
    </article>
  );
}
