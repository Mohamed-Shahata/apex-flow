// Replace href values with real contact links/handles.
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const CHANNELS = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    value: "hello@example.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/000000000000",
    value: "Chat on WhatsApp",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-handle",
    value: "linkedin.com/in/your-handle",
  },
  {
    label: "GitHub",
    href: "https://github.com/your-handle",
    value: "github.com/your-handle",
  },
  {
    label: "Calendly",
    href: "https://calendly.com/your-handle",
    value: "Book a call",
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="services-inner">
        <Reveal className="about-head">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">
            Have a project in mind? Let&rsquo;s talk about it.
          </h2>
        </Reveal>

        <RevealGroup className="contact-grid">
          {CHANNELS.map((c) => (
            <RevealItem as="div" key={c.label}>
              <a className="contact-card" href={c.href}>
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">{c.value}</span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="flex flex-col gap-6 mt-8">
          <div className="flex gap-4 flex-wrap">
            <BookingWidget />
          </div>
          <div className="flex items-stretch gap-5">
            <div className="w-1/2">
              <ContactForm />
            </div>

            <div className="w-1/2 rounded-2xl p-8 flex flex-col justify-center">
              <span className="text-sm uppercase tracking-[0.25em] text-primary">
                Let&apos;s Connect
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Let&apos;s build something amazing together.
              </h3>

              <p className="mt-4 text-muted-foreground leading-7">
                Have a project, an idea, or just want to say hello? I&apos;d
                love to hear from you. Fill out the form or schedule a call, and
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
