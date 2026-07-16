"use client";

import { useActionState } from "react";
import { submitContactMessage } from "@/lib/actions/messages";

const initialState = { ok: false, error: undefined as string | undefined };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactMessage,
    initialState
  );

  if (state.ok) {
    return <p className="contact-success text-right w-full" dir="rtl">تم استلام رسالتك، هرد عليك قريب.</p>;
  }

  return (
    <form action={formAction} className="contact-form" dir="rtl">
      <label className="text-right">
        الاسم
        <input name="name" required className="w-full text-right" />
      </label>
      <label className="text-right">
        الإيميل
        <input type="email" name="email" required className="w-full text-right" />
      </label>
      <label className="text-right">
        الرسالة
        <textarea name="message" required rows={4} className="w-full text-right" />
      </label>
      {state.error && <p className="admin-error text-right">{state.error}</p>}
      <button type="submit" className="btn btn-primary self-start" disabled={pending}>
        {pending ? "بيتبعت..." : "ابعت الرسالة"}
      </button>
    </form>
  );
}
