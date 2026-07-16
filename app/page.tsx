import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Process />
      <FeaturedProjects />
    </div>
  );
}
