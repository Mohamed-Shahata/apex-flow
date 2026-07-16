"use client";

import { useActionState } from "react";
import { submitContactMessage } from "@/lib/actions/messages";

const initialState = { ok: false, error: undefined as string | undefined };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactMessage,
    initialState,
  );

  if (state.ok) {
    return (
      <p className="contact-success w-full">
        Your message has been received. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form action={formAction} className="contact-form">
      <label>
        Name
        <input name="name" required className="w-full" />
      </label>

      <label>
        Email
        <input type="email" name="email" required className="w-full" />
      </label>

      <label>
        Message
        <textarea name="message" required rows={4} className="w-full" />
      </label>

      {state.error && <p className="admin-error">{state.error}</p>}

      <button
        type="submit"
        className="btn btn-primary self-start"
        disabled={pending}
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
