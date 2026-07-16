import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/components/FAQ"));

export default function Home() {
  return (
    <main id="main" className="flex flex-col flex-1">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <FeaturedProjects />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <WhyUs />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
