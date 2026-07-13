import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import LetsBuild from '@/components/LetsBuild';

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <LetsBuild />
    </main>
  );
}
