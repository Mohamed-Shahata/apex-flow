// Replace href values with real contact links/handles.
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
        <div className="about-head">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">
            Have a project in mind? Let&rsquo;s talk about it.
          </h2>
        </div>

        <div className="contact-grid">
          {CHANNELS.map((c) => (
            <a className="contact-card" href={c.href} key={c.label}>
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </a>
          ))}
        </div>

        <a className="btn btn-primary contact-cv" href="/cv.pdf" download>
          Download CV
        </a>
      </div>
    </section>
  );
}
