import { getProjects } from "@/lib/actions/projects";
import { getLocale } from "next-intl/server";
import Reveal from "./Reveal";
import ProjectFilter from "./ProjectFilter";

export default async function FeaturedProjects() {
  const all = await getProjects();
  const PROJECTS = all.filter((p) => p.featured);
  const locale = await getLocale();
  const isAr = locale === "ar";

  return (
    <section className="projects" id="projects">
      <div className="services-inner">
        <Reveal className="about-head">
          <span className="section-eyebrow">
            {isAr ? "أعمال مميزة" : "Featured Work"}
          </span>
          <h2 className="section-title">
            {isAr
              ? "أنظمة مبنية لتشتغل في الإنتاج، مش بس للعرض."
              : "Systems built to run in production, not just to demo."}
          </h2>
        </Reveal>

        <ProjectFilter projects={PROJECTS} locale={locale as "en" | "ar"} />
      </div>
    </section>
  );
}
