import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ExperienceEducation from "@/components/sections/ExperienceEducation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import StarsCanvas from "@/components/canvas/Stars";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Experience + Education + Certifications */}
      <ExperienceEducation />

      {/* Contact */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>

      <Footer />
    </main>
  );
}
