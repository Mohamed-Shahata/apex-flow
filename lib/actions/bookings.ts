"use server";

import { prisma } from "@/lib/db";

function str(formData: FormData, key: string): string {
  return (formData.get(key)?.toString() ?? "").trim();
}

export async function submitBooking(
  _prevState: { ok: boolean; error?: string },
  formData: FormData,
) {
  const name = str(formData, "name");
  const email = str(formData, "email");
  const date = str(formData, "date");
  const time = str(formData, "time");
  const notes = str(formData, "notes");

  if (!name || !email || !date || !time) {
    return { ok: false, error: "من فضلك املأ كل الحقول المطلوبة." };
  }

  await prisma.booking.create({
    data: { name, email, date, time, notes: notes || null },
  });

  return { ok: true };
}
