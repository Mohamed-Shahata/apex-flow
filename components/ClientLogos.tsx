import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const CLIENTS = [
  "Northwind", "Vertex Labs", "Orbital", "Lumen", "Cascade", "Halo Systems",
];

export default function ClientLogos() {
  const t = useTranslations("ClientLogos");
  return (
    <section className="px-6 py-14 border-y border-white/10 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8b96a8]">
            {t("eyebrow")}
          </span>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-[#8b96a8]/70 hover:text-[#ededed] transition-colors grayscale hover:grayscale-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}