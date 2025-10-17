import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/projects/ProjectsSection";
import CertificatesSection from "@/components/certificates/CertificatesSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <About />
      <Experience />
      <ProjectsSection />
      <CertificatesSection />
      <Contact />
    </main>
  );
}
