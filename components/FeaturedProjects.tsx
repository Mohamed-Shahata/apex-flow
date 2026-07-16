import { getProjects } from "@/lib/actions/projects";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

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

        <RevealGroup className="projects-grid">
          {PROJECTS.map((p) => (
            <RevealItem as="div" key={p.slug}>
              <a className="project-card" href={`/projects/${p.slug}`}>
                <div className="project-thumb" aria-hidden="true" />
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
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
      </div>
    </section>
  );
}
