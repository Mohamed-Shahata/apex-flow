const PROJECTS = [
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    summary:
      "Multi-tenant SaaS platform with role-specific dashboards, prescription workflows, and installment billing.",
    stack: ["NestJS", "Next.js", "Prisma", "AWS EC2"],
  },
  {
    slug: "erp-inventory-system",
    title: "ERP / Inventory System",
    summary:
      "Full ERP covering suppliers, purchase/sales orders, invoices, and audited stock movements.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    slug: "security-vulnerability-scanner",
    title: "Security Vulnerability Scanner",
    summary:
      "Microservices-based scanner with a queue-driven scan pipeline and a dedicated dashboard.",
    stack: ["NestJS", "BullMQ", "Next.js"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="projects" id="projects">
      <div className="services-inner">
        <div className="about-head">
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title">
            Systems built to run in production, not just to demo.
          </h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <a
              className="project-card"
              href={`/projects/${p.slug}`}
              key={p.slug}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
