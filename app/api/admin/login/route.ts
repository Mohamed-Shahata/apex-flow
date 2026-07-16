import { NextResponse } from "next/server";
import {
  createSessionToken,
  verifyPassword,
  verifyEmail,
  COOKIE_NAME,
  SESSION_MAX_AGE,
} from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !verifyEmail(email) ||
    !verifyPassword(password)
  ) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 },
    );
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return response;
}
