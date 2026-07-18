import { getProjects } from "@/lib/actions/projects";
import { getTranslations, getLocale } from "next-intl/server";
import Reveal from "./Reveal";
import ProjectFilter from "./ProjectFilter";

export default async function FeaturedProjects() {
  const t = await getTranslations("FeaturedProjects");
  const locale = await getLocale();

  const all = await getProjects();
  const PROJECTS = all.filter((p) => p.featured);

  return (
    <section className="projects" id="projects">
      <div className="services-inner">
        <Reveal className="about-head flex flex-col items-center  text-center">
          <span className="section-eyebrow">
            {t("eyebrow")}
          </span>

          <h2 className="section-title">
            {t("title")}
          </h2>
        </Reveal>

        <ProjectFilter
          projects={PROJECTS}
          locale={locale as "en" | "ar"}
        />
      </div>
    </section>
  );
}