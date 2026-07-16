import Reveal from "./Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <Reveal className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">Apex Flow</span>
            <p className="footer-desc">
              Engineering Digital Momentum. Scoped full-stack SaaS, APIs, and dashboards built for production.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-col">
              <span className="footer-col-title">Navigation</span>
              <a href="#services">Services</a>
              <a href="#stack">Tech Stack</a>
              <a href="#process">Process</a>
              <a href="#projects">Work</a>
            </div>

            <div className="footer-links-col">
              <span className="footer-col-title">Connect</span>
              <a href="mailto:hello@example.com">Email</a>
              <a href="https://github.com/your-handle" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/your-handle" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://wa.me/000000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} Apex Flow. All rights reserved.
          </p>
          <p className="footer-tagline">Built for performance.</p>
        </div>
      </div>
    </footer>
  );
}
