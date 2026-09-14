import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsAndCapabilities } from './components/SkillsAndCapabilities';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Condensed down to 5 trackable main section IDs
    const sections = ['home', 'work', 'expertise', 'experience', 'about', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold/25 selection:text-gold-light font-sans antialiased">
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <section id="home">
          <Hero />
        </section>

        <section id="work" className="py-20 border-t border-border/40">
          <ProjectsSection />
        </section>

        <section id="expertise" className="py-20 bg-bg-secondary/50 border-t border-border/40">
          <SkillsAndCapabilities />
        </section>

        <section id="experience" className="py-20 border-t border-border/40">
          <ExperienceTimeline />
        </section>

        <section id="about" className="py-20 bg-bg-secondary/50 border-t border-border/40">
          <AboutSection />
        </section>

        <section id="contact" className="py-20 border-t border-border/40">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}