"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

function str(formData: FormData, key: string): string {
  return (formData.get(key)?.toString() ?? "").trim();
}

export async function getFaqs() {
  return prisma.faq.findMany({ orderBy: { order: "asc" } });
}

export async function getFaqById(id: string) {
  return prisma.faq.findUnique({ where: { id } });
}

function readForm(formData: FormData) {
  return {
    question: str(formData, "question"),
    answer: str(formData, "answer"),
    order: Number(formData.get("order") ?? 0) || 0,
  };
}

export async function createFaq(formData: FormData) {
  await prisma.faq.create({ data: readForm(formData) });
  revalidatePath("/admin/faq");
  revalidatePath("/");
  redirect("/admin/faq");
}

export async function updateFaq(id: string, formData: FormData) {
  await prisma.faq.update({ where: { id }, data: readForm(formData) });
  revalidatePath("/admin/faq");
  revalidatePath("/");
  redirect("/admin/faq");
}

export async function deleteFaq(id: string) {
  await prisma.faq.delete({ where: { id } });
  revalidatePath("/admin/faq");
  revalidatePath("/");
}
