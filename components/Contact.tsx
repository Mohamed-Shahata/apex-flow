"use client";

import { useTranslations } from "next-intl";
import {
  EmailIcon,
  WhatsAppIcon,
  LinkedInIcon,
  GitHubIcon,
  CalendlyIcon,
} from "./icons/ContactIcons";
import BookingWidget from "@/components/BookingWidget";
import ContactForm from "@/components/ContactForm";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const CHANNELS = [
  { key: "email", icon: EmailIcon, href: "mailto:hello@example.com" },
  { key: "whatsapp", icon: WhatsAppIcon, href: "https://wa.me/000000000000" },
  { key: "linkedin", icon: LinkedInIcon, href: "https://linkedin.com/in/your-handle" },
  { key: "github", icon: GitHubIcon, href: "https://github.com/your-handle" },
  { key: "calendly", icon: CalendlyIcon, href: "https://calendly.com/your-handle" },
] as const;

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="contact" id="contact">
      <div className="services-inner">
        <Reveal className="about-head flex flex-col items-center  text-center">
          <span className="section-eyebrow">{t("eyebrow")}</span>
          <h2 className="section-title">{t("title")}</h2>
        </Reveal>

        <RevealGroup className="mb-12 flex flex-wrap justify-center gap-4">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <RevealItem as="div" key={channel.key}>
                  <a href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`channels.${channel.key}`)}
                  title={t(`channels.${channel.key}`)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary">
                  <Icon className="h-6 w-6" />
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-8 flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <BookingWidget />
          </div>

          <div className="flex  gap-5 flex-col lg:flex-row items-center text-center lg:text-start">
            <div className="lg:w-1/2 w-full flex justify-center">
              <ContactForm />
            </div>

            <div className="flex lg:w-1/2 w-full flex-col justify-center rounded-2xl bg-card p-8 max-lg:w-full">
              <span className="text-primary text-sm uppercase tracking-[0.25em]">
                {t("sideEyebrow")}
              </span>
              <h3 className="mt-4 text-3xl font-bold">{t("sideTitle")}</h3>
              <p className="text-muted-foreground mt-4 leading-7">{t("sideText")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}