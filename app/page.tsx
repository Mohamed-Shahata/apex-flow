import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
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
    </div>
  );
}
