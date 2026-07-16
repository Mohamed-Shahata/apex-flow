import { getProjects } from "@/lib/actions/projects";
import Reveal from "./Reveal";
import ProjectFilter from "./ProjectFilter";

export default async function FeaturedProjects() {
  const all = await getProjects();
  const PROJECTS = all.filter((p) => p.featured);

  return (
    <section className="projects" id="projects">
      <div className="services-inner">
        <Reveal className="about-head">
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title">
            Systems built to run in production, not just to demo.
          </h2>
        </Reveal>

        <ProjectFilter projects={PROJECTS} />
      </div>
    </section>
  );
}
