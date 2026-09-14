import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { ProjectsSection } from './components/ProjectsSection';
import { BeyondCode } from './components/BeyondCode';
import { HowIWork } from './components/HowIWork';
import { PracticalAI } from './components/PracticalAI';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { LeadershipSection } from './components/LeadershipSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      'home',
      'work',
      'capabilities',
      'beyond-code',
      'how-i-work',
      'ai-research',
      'experience',
      'leadership',
      'skills',
      'education',
      'about',
      'contact',
    ];

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
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-amber-500/25 selection:text-amber-200">
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <Capabilities />
        <BeyondCode />
        <HowIWork />
        <PracticalAI />
        <ExperienceTimeline />
        <LeadershipSection />
        <SkillsSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
