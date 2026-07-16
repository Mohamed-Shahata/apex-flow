"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Nav");
  const NAV_LINKS = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#stack", label: t("stack") },
    { href: "#process", label: t("process") },
    { href: "#projects", label: t("work") },
    { href: "/blog", label: t("blog") },
    { href: "#contact", label: t("contact") },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-100 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e17]/70 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-6">
        <a
          href="#main"
          className="text-lg font-bold bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent shrink-0"
        >
          Apex Flow
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8b96a8] hover:text-[#ededed] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="/cv.pdf"
            download
            className="text-sm font-medium text-[#8b96a8] hover:text-[#ededed] transition-colors whitespace-nowrap"
          >
            {t("downloadCv")}
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-[#ededed] px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            {t("startProject")}
          </a>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 shrink-0"
        >
          <span
            className={`block h-0.5 w-full bg-[#ededed] rounded transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-full bg-[#ededed] rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-full bg-[#ededed] rounded transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden grid overflow-hidden transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <nav
          aria-label="Mobile"
          className="min-h-0 flex flex-col gap-5 px-6 pt-6 pb-6"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-[#8b96a8] hover:text-[#ededed] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block self-start mt-2 text-sm font-semibold text-[#ededed] px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
          >
            {t("startProject")}
          </a>
          <a
            href="/cv.pdf"
            download
            onClick={() => setOpen(false)}
            className="text-sm text-[#8b96a8] hover:text-[#ededed] transition-colors"
          >
            {t("downloadCv")}
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
