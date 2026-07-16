"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    document.cookie = `locale=${next}; path=/; max-age=31536000`;
    startTransition(() => {
      window.location.reload();
    });
  }

  return (
    <div className="lang-switch" aria-label="Language switcher">
      <button
        type="button"
        onClick={() => switchTo("en")}
        disabled={isPending}
        className={`lang-switch-btn${locale === "en" ? " active" : ""}`}
      >
        EN
      </button>
      <span className="lang-switch-sep">/</span>
      <button
        type="button"
        onClick={() => switchTo("ar")}
        disabled={isPending}
        className={`lang-switch-btn${locale === "ar" ? " active" : ""}`}
      >
        AR
      </button>
    </div>
  );
}
