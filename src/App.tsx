import { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsAndCapabilities } from './components/SkillsAndCapabilities';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const sections = ['home', 'about', 'expertise', 'work', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold/25 selection:text-gold-light font-sans antialiased">
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        {/* 01 — WHO I AM */}
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="border-t border-border/40">
          <AboutSection />
        </section>

        {/* 02 — WHAT I DO */}
        <section
          id="expertise"
          className="border-t border-border/40"
        >
          <SkillsAndCapabilities />
        </section>

        {/* 03 — PROOF */}
        <section
          id="work"
          className="border-t border-border/40"
        >
          <ProjectsSection />
        </section>

        {/* 04 — CONTACT */}
        <section
          id="contact"
          className="border-t border-border/40"
        >
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}