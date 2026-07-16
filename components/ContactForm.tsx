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
    return <p className="contact-success">تم استلام رسالتك، هرد عليك قريب.</p>;
  }

  return (
    <form action={formAction} className="contact-form">
      <label>
        الاسم
        <input name="name" required />
      </label>
      <label>
        الإيميل
        <input type="email" name="email" required />
      </label>
      <label>
        الرسالة
        <textarea name="message" required rows={4} />
      </label>
      {state.error && <p className="admin-error">{state.error}</p>}
      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? "بيتبعت..." : "ابعت الرسالة"}
      </button>
    </form>
  );
}
