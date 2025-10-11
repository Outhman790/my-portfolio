import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
