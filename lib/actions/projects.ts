"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

function splitLines(value: FormDataEntryValue | null): string[] {
  return (value?.toString() ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function str(formData: FormData, key: string): string {
  return (formData.get(key)?.toString() ?? "").trim();
}

export async function getProjects() {
  return prisma.project.findMany({ orderBy: { order: "asc" } });
}

export async function getProjectBySlug(slug: string) {
  return prisma.project.findUnique({ where: { slug } });
}

export async function getProjectById(id: string) {
  return prisma.project.findUnique({ where: { id } });
}

function readProjectForm(formData: FormData) {
  return {
    slug: str(formData, "slug"),
    titleEn: str(formData, "titleEn"),
    titleAr: str(formData, "titleAr"),
    summaryEn: str(formData, "summaryEn"),
    summaryAr: str(formData, "summaryAr"),
    overviewEn: str(formData, "overviewEn"),
    overviewAr: str(formData, "overviewAr"),
    problemEn: str(formData, "problemEn"),
    problemAr: str(formData, "problemAr"),
    solutionEn: str(formData, "solutionEn"),
    solutionAr: str(formData, "solutionAr"),
    architectureEn: str(formData, "architectureEn"),
    architectureAr: str(formData, "architectureAr"),
    featuresEn: splitLines(formData.get("featuresEn")),
    featuresAr: splitLines(formData.get("featuresAr")),
    stack: splitLines(formData.get("stack")),
    roleEn: str(formData, "roleEn"),
    roleAr: str(formData, "roleAr"),
    resultEn: str(formData, "resultEn"),
    resultAr: str(formData, "resultAr"),
    heroImage: str(formData, "heroImage") || null,
    images: splitLines(formData.get("images")),
    videoUrl: str(formData, "videoUrl") || null,
    featured: formData.get("featured") === "on",
    order: Number(formData.get("order") ?? 0) || 0,
  };
}

export async function createProject(formData: FormData) {
  const data = readProjectForm(formData);
  await prisma.project.create({ data });
  revalidatePath("/admin/projects");
  revalidatePath("/");
  redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
  const data = readProjectForm(formData);
  await prisma.project.update({ where: { id }, data });
  revalidatePath("/admin/projects");
  revalidatePath("/");
  revalidatePath(`/projects/${data.slug}`);
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin/projects");
  revalidatePath("/");
}
