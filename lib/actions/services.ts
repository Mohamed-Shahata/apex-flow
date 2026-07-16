"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

function str(formData: FormData, key: string): string {
  return (formData.get(key)?.toString() ?? "").trim();
}

function splitLines(value: FormDataEntryValue | null): string[] {
  return (value?.toString() ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export async function getServices() {
  return prisma.service.findMany({ orderBy: { order: "asc" } });
}

export async function getServiceById(id: string) {
  return prisma.service.findUnique({ where: { id } });
}

function readForm(formData: FormData) {
  return {
    title: str(formData, "title"),
    items: splitLines(formData.get("items")),
    order: Number(formData.get("order") ?? 0) || 0,
  };
}

export async function createService(formData: FormData) {
  await prisma.service.create({ data: readForm(formData) });
  revalidatePath("/admin/services");
  revalidatePath("/");
  redirect("/admin/services");
}

export async function updateService(id: string, formData: FormData) {
  await prisma.service.update({ where: { id }, data: readForm(formData) });
  revalidatePath("/admin/services");
  revalidatePath("/");
  redirect("/admin/services");
}

export async function deleteService(id: string) {
  await prisma.service.delete({ where: { id } });
  revalidatePath("/admin/services");
  revalidatePath("/");
}
