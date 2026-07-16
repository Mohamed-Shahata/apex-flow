export type CaseStudy = {
  slug: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  stack: string[];
  role: string;
  result: string;
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "clinic-management-system": {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    overview:
      "A multi-tenant SaaS platform that lets multiple clinics run independently on one codebase, each with isolated data and role-based dashboards.",
    problem:
      "Clinics needed a system where a super admin, doctor admins, doctors, and receptionists each see only what's relevant to their role, without separate deployments per clinic.",
    solution:
      "Built a single multi-tenant NestJS backend with strict tenant scoping, and role-specific dashboards on the Next.js frontend driven by the same auth session.",
    architecture:
      "httpOnly cookie-based JWT auth with refresh token rotation; RBAC middleware gates every route by role and tenant.",
    features: [
      "Multi-step booking modal",
      "Doctor workspace with a prescription system",
      "Installment payments and staff salary management",
      "PDF report generation with multiple prescription templates",
      "Real-time WebSocket notifications",
      "Clinic deactivation with immediate session invalidation",
    ],
    stack: [
      "NestJS",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "AWS EC2",
      "PM2",
      "Vercel",
    ],
    role: "Full-stack developer — backend architecture, auth, and API design; frontend dashboards.",
    result:
      "A single deployable system serving multiple independent clinics, each with isolated data and role-appropriate access.",
  },
  "erp-inventory-system": {
    slug: "erp-inventory-system",
    title: "ERP / Inventory System",
    overview:
      "A full-featured ERP covering the day-to-day operations of a business that moves physical inventory: suppliers, orders, payments, and stock.",
    problem:
      "The business needed accurate, auditable stock movement tracking alongside purchase/sales order and invoice management, without piecing together spreadsheets.",
    solution:
      "Built a unified data model in Prisma/PostgreSQL connecting suppliers, orders, payments, and stock movements, with an audit log on every mutation.",
    architecture:
      "NestJS backend exposing a typed API to a Next.js frontend; admin-editable static pages via a rich text editor for non-technical updates.",
    features: [
      "Suppliers, purchase orders, and sales orders",
      "Payments, invoices, and full audit logs",
      "Per-chart period filters on reporting dashboards",
      "Full system export to PDF and Excel",
      "Print-ready invoice formatting",
    ],
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL"],
    role: "Full-stack developer — data modeling, API, reporting, and documentation.",
    result:
      "Generated Mermaid-based architecture documentation and split READMEs so the system is maintainable beyond the original build.",
  },
  "security-vulnerability-scanner": {
    slug: "security-vulnerability-scanner",
    title: "Security Vulnerability Scanner",
    overview:
      "A microservices-based scanner that queues and runs security scans asynchronously, surfacing results on a dedicated dashboard.",
    problem:
      "Scans can be long-running and resource-heavy; running them inline in a request/response cycle doesn't scale.",
    solution:
      "Split the system into a NestJS API service and a dedicated BullMQ-powered scanner-service, decoupled by a job queue.",
    architecture:
      "NestJS backend enqueues scan jobs; a separate scanner-service worker processes them and reports status back for the Next.js frontend to poll/display.",
    features: [
      "Queue-driven scan pipeline",
      "Scan status and results dashboard",
      "Service separation between API and scan execution",
    ],
    stack: ["NestJS", "BullMQ", "Next.js"],
    role: "Full-stack developer — microservice architecture and queue design.",
    result: "Actively in progress.",
  },
};
