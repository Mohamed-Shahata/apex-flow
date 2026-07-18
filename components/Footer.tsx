"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 px-6 pb-12 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <Reveal className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-xs flex-col gap-3">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-xl font-bold text-transparent">
              Apex Flow
            </span>

            <p className="text-sm leading-relaxed text-[#8b96a8]">
              {t("description")}
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ededed]">
                {t("navigationHeading")}
              </span>

              <a
                href="/#services"
                className="text-sm text-[#8b96a8] transition-all hover:translate-x-0.5 hover:text-[#06b6d4]"
              >
                {t("services")}
              </a>

              <a
                href="/#stack"
                className="text-sm text-[#8b96a8] transition-all hover:translate-x-0.5 hover:text-[#06b6d4]"
              >
                {t("stack")}
              </a>

              <a
                href="/#process"
                className="text-sm text-[#8b96a8] transition-all hover:translate-x-0.5 hover:text-[#06b6d4]"
              >
                {t("process")}
              </a>

              <a
                href="/#projects"
                className="text-sm text-[#8b96a8] transition-all hover:translate-x-0.5 hover:text-[#06b6d4]"
              >
                {t("work")}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ededed]">
                {t("connectHeading")}
              </span>

              <a
                href="mailto:hello@example.com"
                className="text-sm text-[#8b96a8] transition-all hover:translate-x-0.5 hover:text-[#06b6d4]"
              >
                {t("email")}
              </a>

              <a
                href="https://github.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8b96a8] transition-all hover:translate-x-0.5 hover:text-[#06b6d4]"
              >
                {t("github")}
              </a>

              <a
                href="https://linkedin.com/in/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8b96a8] transition-all hover:translate-x-0.5 hover:text-[#06b6d4]"
              >
                {t("linkedin")}
              </a>

              <a
                href="https://wa.me/000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8b96a8] transition-all hover:translate-x-0.5 hover:text-[#06b6d4]"
              >
                {t("whatsapp")}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#8b96a8] md:flex-row md:justify-between">
          <p>
            &copy; {currentYear} Apex Flow. {t("rights")}
          </p>

          <p className="italic">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}