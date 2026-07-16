"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
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
        <a href="#main" className="text-lg font-bold bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent shrink-0">
          Apex Flow
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[#8b96a8] hover:text-[#ededed] transition-colors whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-block text-sm font-semibold text-[#ededed] px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all whitespace-nowrap">
          Start a Project
        </a>

        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 shrink-0">
          <span className={`block h-0.5 w-full bg-[#ededed] rounded transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-full bg-[#ededed] rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-[#ededed] rounded transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden grid overflow-hidden transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <nav aria-label="Mobile" className="min-h-0 flex flex-col gap-5 px-6 pt-6 pb-6">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base text-[#8b96a8] hover:text-[#ededed] transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-block self-start mt-2 text-sm font-semibold text-[#ededed] px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}