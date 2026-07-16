import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const projects = [
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    summary:
      "Multi-tenant SaaS platform with role-specific dashboards, prescription workflows, and installment billing.",
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
    featured: true,
    order: 1,
  },
  {
    slug: "erp-inventory-system",
    title: "ERP / Inventory System",
    summary:
      "Full ERP covering suppliers, purchase/sales orders, invoices, and audited stock movements.",
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
    featured: true,
    order: 2,
  },
  {
    slug: "security-vulnerability-scanner",
    title: "Security Vulnerability Scanner",
    summary:
      "Microservices-based scanner with a queue-driven scan pipeline and a dedicated dashboard.",
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
    featured: true,
    order: 3,
  },
];

async function main() {
  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
