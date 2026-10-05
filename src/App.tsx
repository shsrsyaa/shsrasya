import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EducationSection } from './components/EducationSection';
import { PassionsAndWork } from './components/PassionsAndWork';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { TouchEffects } from './components/TouchEffects';
import { ScrollBlurShield } from './components/ScrollBlurShield';
import { InteractiveBackground } from './components/InteractiveBackground';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060709] text-[#e4e4e7] relative selection:bg-zinc-200 selection:text-zinc-900 font-sans">
      
      {/* Interactive ITS Campus Background with Cinematic Blur & Shadow Vignette */}
      <InteractiveBackground />

      {/* Top & Bottom Progressive Frosted Scroll Blur Shields */}
      <ScrollBlurShield />

      {/* Interactive Touch & Cursor Ripples in Silver & Subtle Blue */}
      <TouchEffects />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections - General, Short, & Professional */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <EducationSection />
        <PassionsAndWork />
        <ExperienceSection />
        <SkillsSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Digital CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      
    </div>
  );
}
