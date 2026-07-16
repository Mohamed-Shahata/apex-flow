"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

function str(formData: FormData, key: string): string {
  return (formData.get(key)?.toString() ?? "").trim();
}

export async function getTestimonials() {
  return prisma.testimonial.findMany({ orderBy: { order: "asc" } });
}

export async function getTestimonialById(id: string) {
  return prisma.testimonial.findUnique({ where: { id } });
}

function readForm(formData: FormData) {
  return {
    quote: str(formData, "quote"),
    name: str(formData, "name"),
    role: str(formData, "role"),
    order: Number(formData.get("order") ?? 0) || 0,
  };
}

export async function createTestimonial(formData: FormData) {
  await prisma.testimonial.create({ data: readForm(formData) });
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function updateTestimonial(id: string, formData: FormData) {
  await prisma.testimonial.update({ where: { id }, data: readForm(formData) });
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(id: string) {
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}
