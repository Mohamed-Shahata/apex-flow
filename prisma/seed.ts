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

const testimonials = [
  {
    quote: "Add a real client or collaborator quote here.",
    name: "Client Name",
    role: "Role, Company",
    order: 1,
  },
  {
    quote: "Add a second quote here — GitHub feedback, a recommendation, etc.",
    name: "Name",
    role: "Role, Company",
    order: 2,
  },
  {
    quote: "Add a third quote here.",
    name: "Name",
    role: "Role, Company",
    order: 3,
  },
];

const services = [
  {
    title: "Web Development",
    items: ["Landing Pages", "SaaS Platforms", "Dashboards"],
    order: 1,
  },
  {
    title: "Backend Systems",
    items: ["APIs", "CRM / ERP", "Multi-Tenant Architecture"],
    order: 2,
  },
  {
    title: "Platform Engineering",
    items: ["Authentication", "Payments", "Admin Panels"],
    order: 3,
  },
  {
    title: "AI Integration",
    items: ["LLM Features", "Automation Pipelines", "AI Assistants"],
    order: 4,
  },
];

const faqs = [
  {
    question: "What's the typical timeline for a project?",
    answer:
      "Depends on scope — a landing page can ship in about a week, while a full SaaS platform with multi-tenant auth usually runs 4–8 weeks. You get a concrete estimate after the discovery phase, not before.",
    order: 1,
  },
  {
    question: "Do you work with existing codebases, or only greenfield builds?",
    answer:
      "Both. Joining an existing NestJS/Next.js/Prisma codebase to extend or fix it is common work, not an exception.",
    order: 2,
  },
  {
    question: "How is communication handled during a project?",
    answer:
      "Direct — you talk to the person writing the code, with regular, specific updates instead of vague status pings.",
    order: 3,
  },
  {
    question: "What happens after launch?",
    answer:
      "Support continues post-deploy: bug fixes, monitoring, and iteration as real usage surfaces new needs.",
    order: 4,
  },
  {
    question: "Can you handle both backend and frontend?",
    answer:
      "Yes — backend is the core focus, but the same person can own the Next.js frontend so nothing is lost in handoff.",
    order: 5,
  },
];

async function main() {
  console.log("Seed started");

  console.log("Projects before:", await prisma.project.count());

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  console.log("Projects after:", await prisma.project.count());

  console.log("Testimonials before:", await prisma.testimonial.count());

  if ((await prisma.testimonial.count()) === 0) {
    console.log("Creating testimonials...");
    await prisma.testimonial.createMany({ data: testimonials });
  }

  console.log("Testimonials after:", await prisma.testimonial.count());

  console.log("Services:", await prisma.service.count());
  console.log("FAQs:", await prisma.faq.count());

  console.log("Seed finished");
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
