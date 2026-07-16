import Reveal from "./Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 px-6 pt-16 pb-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <div className="max-w-xs flex flex-col gap-3">
            <span className="text-xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
              Apex Flow
            </span>
            <p className="text-sm leading-relaxed text-[#8b96a8]">
              Engineering Digital Momentum. Scoped full-stack SaaS, APIs, and dashboards built for production.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ededed]">Navigation</span>
              <a href="#services" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] hover:translate-x-0.5 transition-all">Services</a>
              <a href="#stack" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] hover:translate-x-0.5 transition-all">Tech Stack</a>
              <a href="#process" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] hover:translate-x-0.5 transition-all">Process</a>
              <a href="#projects" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] hover:translate-x-0.5 transition-all">Work</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ededed]">Connect</span>
              <a href="mailto:hello@example.com" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] hover:translate-x-0.5 transition-all">Email</a>
              <a href="https://github.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] hover:translate-x-0.5 transition-all">GitHub</a>
              <a href="https://linkedin.com/in/your-handle" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] hover:translate-x-0.5 transition-all">LinkedIn</a>
              <a href="https://wa.me/000000000000" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] hover:translate-x-0.5 transition-all">WhatsApp</a>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row md:justify-between gap-3 border-t border-white/10 pt-6 text-sm text-[#8b96a8]">
          <p>&copy; {currentYear} Apex Flow. All rights reserved.</p>
          <p className="italic">Built for performance.</p>
        </div>
      </div>
    </footer>
  );
}