import React from 'react';
import { 
  Workflow, 
  Rocket, 
  Compass, 
  GraduationCap, 
  Cpu, 
  Sparkles
} from 'lucide-react';
import { MY_PROCESS_STEPS, MY_VENTURES, MY_PROFILE, MY_SKILLS_CATEGORIES } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

export const SkillsSection = ({ onNavigateToTab }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend Web Engineering':
        return <Cpu className="w-5 h-5 text-white" />;
      case 'Product Design & Prototyping':
        return <Workflow className="w-5 h-5 text-zinc-300" />;
      case 'Venture Management & GTM':
        return <Rocket className="w-5 h-5 text-white" />;
      case 'Creative Video & Visual Media':
        return <Sparkles className="w-5 h-5 text-zinc-300" />;
      default:
        return <Compass className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Skills &amp; <span className="silver-text">Toolkit</span><span className="text-white">.</span>
            </h2>
            <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Core technologies, design frameworks, and operational disciplines engineered for high performance digital products and ventures.
            </p>
          </div>
        </ScrollReveal>

        {/* Streamlined Skills Grid */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MY_SKILLS_CATEGORIES.map((cat, idx) => (
              <ScrollReveal key={cat.category} delay={idx * 80}>
                <TiltCard className="h-full">
                  <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-xl h-full space-y-5 transition-all duration-300">
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                        {getCategoryIcon(cat.category)}
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold font-display text-white">
                          {cat.category}
                        </h3>
                        <span className="text-[11px] font-semibold text-zinc-400">
                          {cat.items.length} Core Competencies
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:border-white/30 hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Quick summary banner with CTA */}
          <ScrollReveal className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 text-xs">
              <p className="font-extrabold text-white text-sm">Full-Stack Digital Execution Capabilities</p>
              <p className="text-zinc-400">Available for web app development contracts, rapid design prototyping sprints, and venture advisory.</p>
            </div>
            {onNavigateToTab && (
              <button
                type="button"
                onClick={() => {
                  playTapSound(500, 0.03);
                  onNavigateToTab('connect');
                }}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-xs transition-all shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto active:scale-95"
              >
                Discuss a Project
              </button>
            )}
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
