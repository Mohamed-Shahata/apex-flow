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
    title: str(formData, "title"),
    summary: str(formData, "summary"),
    overview: str(formData, "overview"),
    problem: str(formData, "problem"),
    solution: str(formData, "solution"),
    architecture: str(formData, "architecture"),
    features: splitLines(formData.get("features")),
    stack: splitLines(formData.get("stack")),
    role: str(formData, "role"),
    result: str(formData, "result"),
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
