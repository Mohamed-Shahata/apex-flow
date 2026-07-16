import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const projects = [
  {
    slug: "clinic-management-system",
    titleEn: "Clinic Management System",
    titleAr: "نظام إدارة العيادات",
    summaryEn:
      "Multi-tenant SaaS platform with role-specific dashboards, prescription workflows, and installment billing.",
    summaryAr:
      "منصة SaaS متعددة العيادات بلوحات تحكم مختلفة لكل دور، ونظام روشتات، وفوترة بالتقسيط.",
    overviewEn:
      "A multi-tenant SaaS platform that lets multiple clinics run independently on one codebase, each with isolated data and role-based dashboards.",
    overviewAr:
      "منصة SaaS متعددة العيادات (Multi-tenant) بتشغّل كل عيادة بشكل مستقل على نفس الكود، وكل عيادة ليها بياناتها المعزولة ولوحات تحكم حسب الدور.",
    problemEn:
      "Clinics needed a system where a super admin, doctor admins, doctors, and receptionists each see only what's relevant to their role, without separate deployments per clinic.",
    problemAr:
      "العيادات محتاجة نظام يخلي كل من الأدمن العام، وأدمن الدكاترة، والدكاترة، والريسبشن، كل واحد يشوف اللي يخصه بس، من غير ما نعمل نسخة منفصلة لكل عيادة.",
    solutionEn:
      "Built a single multi-tenant NestJS backend with strict tenant scoping, and role-specific dashboards on the Next.js frontend driven by the same auth session.",
    solutionAr:
      "اتبنى backend واحد بـ NestJS بيعزل بيانات كل عيادة عن التانية، ولوحات تحكم مختلفة على فرونت Next.js حسب الدور، كله شغال على نفس جلسة الدخول.",
    architectureEn:
      "httpOnly cookie-based JWT auth with refresh token rotation; RBAC middleware gates every route by role and tenant.",
    architectureAr:
      "تسجيل الدخول بـ JWT عبر httpOnly cookie مع تدوير refresh token، وRBAC middleware بيتحكم في كل route حسب الدور والعيادة.",
    featuresEn: [
      "Multi-step booking modal",
      "Doctor workspace with a prescription system",
      "Installment payments and staff salary management",
      "PDF report generation with multiple prescription templates",
      "Real-time WebSocket notifications",
      "Clinic deactivation with immediate session invalidation",
    ],
    featuresAr: [
      "نافذة حجز متعددة الخطوات",
      "مساحة عمل للدكتور مع نظام روشتات",
      "دفع بالتقسيط وإدارة مرتبات الموظفين",
      "تصدير تقارير PDF بقوالب روشتات متعددة",
      "إشعارات لحظية عبر WebSocket",
      "تعطيل العيادة مع إنهاء الجلسات فوراً",
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
    roleEn:
      "Full-stack developer — backend architecture, auth, and API design; frontend dashboards.",
    roleAr:
      "مطور Full-stack — بنيت الـ backend والـ auth وتصميم الـ API، وكمان لوحات التحكم بالفرونت.",
    resultEn:
      "A single deployable system serving multiple independent clinics, each with isolated data and role-appropriate access.",
    resultAr:
      "نظام واحد قابل للنشر بيخدم عدة عيادات مستقلة، كل عيادة ببياناتها المعزولة وصلاحيات تناسب دور كل مستخدم.",
    featured: true,
    order: 1,
  },
  {
    slug: "erp-inventory-system",
    titleEn: "ERP / Inventory System",
    titleAr: "نظام ERP لإدارة المخزون",
    summaryEn:
      "Full ERP covering suppliers, purchase/sales orders, invoices, and audited stock movements.",
    summaryAr:
      "نظام ERP متكامل بيغطي الموردين وأوامر الشراء والبيع والفواتير وحركة المخزون بسجل تدقيق كامل.",
    overviewEn:
      "A full-featured ERP covering the day-to-day operations of a business that moves physical inventory: suppliers, orders, payments, and stock.",
    overviewAr:
      "نظام ERP شامل بيغطي العمليات اليومية لأي بيزنس بيتعامل مع مخزون فعلي: الموردين، الأوردرات، المدفوعات، والمخزون.",
    problemEn:
      "The business needed accurate, auditable stock movement tracking alongside purchase/sales order and invoice management, without piecing together spreadsheets.",
    problemAr:
      "البيزنس محتاج تتبع دقيق وقابل للتدقيق لحركة المخزون، جنب إدارة أوامر الشراء والبيع والفواتير، من غير الاعتماد على شيتات إكسل متفرقة.",
    solutionEn:
      "Built a unified data model in Prisma/PostgreSQL connecting suppliers, orders, payments, and stock movements, with an audit log on every mutation.",
    solutionAr:
      "اتبنى موديل بيانات موحّد بـ Prisma/PostgreSQL بيربط الموردين والأوردرات والمدفوعات وحركة المخزون، مع سجل تدقيق على كل عملية تعديل.",
    architectureEn:
      "NestJS backend exposing a typed API to a Next.js frontend; admin-editable static pages via a rich text editor for non-technical updates.",
    architectureAr:
      "backend بـ NestJS بيوفر API متطابق الأنواع لفرونت Next.js، مع صفحات ثابتة قابلة للتعديل من الأدمن عبر محرر نصوص غني.",
    featuresEn: [
      "Suppliers, purchase orders, and sales orders",
      "Payments, invoices, and full audit logs",
      "Per-chart period filters on reporting dashboards",
      "Full system export to PDF and Excel",
      "Print-ready invoice formatting",
    ],
    featuresAr: [
      "إدارة الموردين وأوامر الشراء والبيع",
      "المدفوعات والفواتير وسجلات تدقيق كاملة",
      "فلاتر فترات زمنية لكل رسم بياني في التقارير",
      "تصدير كامل للنظام بصيغة PDF وExcel",
      "تنسيق فواتير جاهز للطباعة",
    ],
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL"],
    roleEn:
      "Full-stack developer — data modeling, API, reporting, and documentation.",
    roleAr: "مطور Full-stack — تصميم البيانات والـ API والتقارير والتوثيق.",
    resultEn:
      "Generated Mermaid-based architecture documentation and split READMEs so the system is maintainable beyond the original build.",
    resultAr:
      "اتعمل توثيق معماري بـ Mermaid وملفات README منفصلة عشان النظام يفضل قابل للصيانة بعد أي حد غير اللي بناه.",
    featured: true,
    order: 2,
  },
  {
    slug: "security-vulnerability-scanner",
    titleEn: "Security Vulnerability Scanner",
    titleAr: "أداة فحص الثغرات الأمنية",
    summaryEn:
      "Microservices-based scanner with a queue-driven scan pipeline and a dedicated dashboard.",
    summaryAr:
      "أداة فحص أمني بمعمارية microservices، مع خط فحص مبني على طوابير مهام ولوحة تحكم مخصصة.",
    overviewEn:
      "A microservices-based scanner that queues and runs security scans asynchronously, surfacing results on a dedicated dashboard.",
    overviewAr:
      "أداة فحص أمني بمعمارية microservices بتضيف الفحوصات لطابور مهام وتشغّلها بشكل غير متزامن، وتعرض النتائج على لوحة تحكم مخصصة.",
    problemEn:
      "Scans can be long-running and resource-heavy; running them inline in a request/response cycle doesn't scale.",
    problemAr:
      "الفحوصات ممكن تاخد وقت طويل وتستهلك موارد كتير؛ تشغيلها مباشرة جوه دورة request/response مش قابل للتوسع.",
    solutionEn:
      "Split the system into a NestJS API service and a dedicated BullMQ-powered scanner-service, decoupled by a job queue.",
    solutionAr:
      "اتقسم النظام لخدمة API بـ NestJS، وخدمة فحص منفصلة شغالة بـ BullMQ، والاتنين منفصلين عن بعض عبر طابور مهام.",
    architectureEn:
      "NestJS backend enqueues scan jobs; a separate scanner-service worker processes them and reports status back for the Next.js frontend to poll/display.",
    architectureAr:
      "الـ backend بـ NestJS بيحط مهام الفحص في الطابور، وworker منفصل في scanner-service بيعالجها ويرجّع الحالة عشان فرونت Next.js يعرضها.",
    featuresEn: [
      "Queue-driven scan pipeline",
      "Scan status and results dashboard",
      "Service separation between API and scan execution",
    ],
    featuresAr: [
      "خط فحص مبني على طوابير المهام",
      "لوحة تحكم لحالة الفحص والنتائج",
      "فصل كامل بين خدمة الـ API وتنفيذ الفحص",
    ],
    stack: ["NestJS", "BullMQ", "Next.js"],
    roleEn:
      "Full-stack developer — microservice architecture and queue design.",
    roleAr: "مطور Full-stack — معمارية microservices وتصميم طوابير المهام.",
    resultEn: "Actively in progress.",
    resultAr: "شغال عليه حالياً.",
    featured: true,
    order: 3,
  },
];

const posts = [
  {
    slug: "why-multi-tenant-auth-is-hard",
    title: "Why Multi-Tenant Auth Is Harder Than It Looks",
    excerpt:
      "Tenant scoping isn't just a WHERE clause — notes from building the clinic platform.",
    content:
      "Placeholder post body for local testing. Replace with real content before publishing.",
    published: true,
  },
  {
    slug: "queue-driven-scanning-with-bullmq",
    title: "Queue-Driven Scanning With BullMQ",
    excerpt:
      "Splitting scan execution from the API so long jobs don't block requests.",
    content:
      "Placeholder post body for local testing. Replace with real content before publishing.",
    published: false,
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

const contactMessages = [
  {
    name: "Ahmed Test",
    email: "ahmed@example.com",
    message: "مهتم بمشروع SaaS، ممكن نتكلم؟",
    read: false,
  },
  {
    name: "Sara Ali",
    email: "sara@example.com",
    message: "عايزة عرض سعر لتطبيق حجوزات.",
    read: true,
  },
];

const bookings = [
  {
    name: "Omar Test",
    email: "omar@example.com",
    date: "2026-07-20",
    time: "14:00",
    notes: "مناقشة مشروع لوحة تحكم",
  },
  {
    name: "Nour Test",
    email: "nour@example.com",
    date: "2026-07-22",
    time: "10:30",
    notes: null,
  },
];

const pageVisitPaths = [
  "/",
  "/",
  "/",
  "/projects/clinic-management-system",
  "/blog",
  "/#contact",
];

async function main() {
  console.log("Seed started");

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }
  console.log("Projects:", await prisma.project.count());

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }
  console.log("Posts:", await prisma.post.count());

  if ((await prisma.testimonial.count()) === 0) {
    await prisma.testimonial.createMany({ data: testimonials });
  }
  console.log("Testimonials:", await prisma.testimonial.count());

  if ((await prisma.service.count()) === 0) {
    await prisma.service.createMany({ data: services });
  }
  console.log("Services:", await prisma.service.count());

  if ((await prisma.faq.count()) === 0) {
    await prisma.faq.createMany({ data: faqs });
  }
  console.log("FAQs:", await prisma.faq.count());

  if ((await prisma.contactMessage.count()) === 0) {
    await prisma.contactMessage.createMany({ data: contactMessages });
  }
  console.log("Contact messages:", await prisma.contactMessage.count());

  if ((await prisma.booking.count()) === 0) {
    await prisma.booking.createMany({ data: bookings });
  }
  console.log("Bookings:", await prisma.booking.count());

  if ((await prisma.pageVisit.count()) === 0) {
    await prisma.pageVisit.createMany({
      data: pageVisitPaths.map((path) => ({ path })),
    });
  }
  console.log("Page visits:", await prisma.pageVisit.count());

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
