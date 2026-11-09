import Nav from "@/components/Nav";
import Animations from "@/components/Animations";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <Animations />
      <main>
        <Hero />
        <section id="sobre-mi" className="border-t border-line">
          <About />
          <Experience />
        </section>
        <section id="stack" className="border-t border-line">
          <Stack />
        </section>
        <section id="proyectos" className="border-t border-line">
          <Projects />
        </section>
        <section id="contacto" className="border-t border-line">
          <Contact />
        </section>
      </main>
    </>
  );
}
