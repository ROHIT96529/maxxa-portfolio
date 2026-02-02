import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Skills } from '@/app/components/Skills';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <main id="home">
        <Hero />
        <div id="about">
          <About />
        </div>
        <Projects />
        <Skills />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
