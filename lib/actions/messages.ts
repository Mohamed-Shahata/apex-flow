"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

function str(formData: FormData, key: string): string {
  return (formData.get(key)?.toString() ?? "").trim();
}

export async function submitContactMessage(
  _prevState: { ok: boolean; error?: string },
  formData: FormData
) {
  const name = str(formData, "name");
  const email = str(formData, "email");
  const message = str(formData, "message");

  if (!name || !email || !message) {
    return { ok: false, error: "من فضلك املأ كل الحقول." };
  }

  await prisma.contactMessage.create({ data: { name, email, message } });
  revalidatePath("/admin/messages");
  return { ok: true };
}

export async function getMessages() {
  return prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });
}

export async function markMessageRead(id: string, read: boolean) {
  await prisma.contactMessage.update({ where: { id }, data: { read } });
  revalidatePath("/admin/messages");
}

export async function deleteMessage(id: string) {
  await prisma.contactMessage.delete({ where: { id } });
  revalidatePath("/admin/messages");
}
