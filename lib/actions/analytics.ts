"use server";

import { prisma } from "@/lib/db";

export async function recordVisit(path: string) {
  await prisma.pageVisit.create({ data: { path } });
}

export async function getVisitCount() {
  return prisma.pageVisit.count();
}

export async function getUnreadMessageCount() {
  return prisma.contactMessage.count({ where: { read: false } });
}
