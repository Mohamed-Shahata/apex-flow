"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContactMessage } from "@/lib/actions/messages";

const initialState = {
  ok: false,
  error: undefined as string | undefined,
};

export default function ContactForm() {
  const t = useTranslations("ContactForm");

  const [state, formAction, pending] = useActionState(
    submitContactMessage,
    initialState
  );

  if (state.ok) {
    return (
      <p className="contact-success w-full">
        {t("successMessage")}
      </p>
    );
  }

  return (
    <form action={formAction} className="contact-form w-full">
      <label>
        {t("nameLabel")}
        <input
          name="name"
          required
          className="w-full"
        />
      </label>

      <label>
        {t("emailLabel")}
        <input
          type="email"
          name="email"
          required
          className="w-full"
        />
      </label>

      <label>
        {t("messageLabel")}
        <textarea
          name="message"
          required
          rows={4}
          className="w-full"
        />
      </label>

      {state.error && (
        <p className="admin-error">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary self-start w-full"
        disabled={pending}
      >
        {pending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}