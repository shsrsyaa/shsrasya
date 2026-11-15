import React from 'react';
import { 
  Workflow, 
  Rocket, 
  Compass, 
  Cpu, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { MY_SKILLS_CATEGORIES } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

export const SkillsSection = ({ onNavigateToTab }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web App Development & Frontend Engineering':
        return <Cpu className="w-5 h-5 text-white" />;
      case 'UI/UX & Hardware Prototyping':
        return <Workflow className="w-5 h-5 text-zinc-300" />;
      case 'Venture Strategy & Operations':
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
              <span>Core Capabilities &amp; Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Capabilities &amp; <span className="silver-text">Toolkit</span><span className="text-white">.</span>
            </h2>
            <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Direct disciplines, deliverables, technologies, and operational frameworks engineered for high performance digital products, prototypes, and ventures.
            </p>
          </div>
        </ScrollReveal>

        {/* Streamlined Unified Capabilities & Skills Grid */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {MY_SKILLS_CATEGORIES.map((cat, idx) => (
              <ScrollReveal key={cat.category} delay={idx * 80} className="h-full">
                <TiltCard className="h-full">
                  <div className="p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-2xl h-full flex flex-col justify-between space-y-6 transition-all duration-300 group">
                    
                    <div className="space-y-4">
                      {/* Header: Icon & Badge */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                          {getCategoryIcon(cat.category)}
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/15">
                          {cat.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-tight">
                          {cat.category}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-zinc-400 mt-1">
                          {cat.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Key Deliverables */}
                      {cat.deliverables && cat.deliverables.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-white/10">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                            Deliverables &amp; Focus:
                          </div>
                          <ul className="space-y-1.5 text-xs text-zinc-300">
                            {cat.deliverables.map((item, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Skills & Toolkit Tags */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                        {cat.items.length} Core Competencies
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
