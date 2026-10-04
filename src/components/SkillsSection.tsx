import React from 'react';
import { Code, Video, Layers, Wrench, CheckCircle2 } from 'lucide-react';
import { MY_SKILLS_CATEGORIES } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';

export const SkillsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Frontend Web Development':
      case 'Frontend Development':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'Product Design & Prototyping':
      case 'Product & Startup Skills':
        return <Layers className="w-4 h-4 text-zinc-300" />;
      case 'Startup & Management':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'Creative & Video Editing':
        return <Video className="w-4 h-4 text-pink-400" />;
      default:
        return <Wrench className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative border-t border-zinc-800/70 bg-[#07080a]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal className="max-w-xl mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">
            Skills &amp; Toolkit
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
            Tools, Technologies &amp; Capabilities
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Frontend essentials, video editing suites, product discovery frameworks, and venture management.
          </p>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {MY_SKILLS_CATEGORIES.map((cat, idx) => (
            <ScrollReveal key={cat.category} delay={idx * 80}>
              <TiltCard className="p-5 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md space-y-3.5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-zinc-800">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      {getIcon(cat.category)}
                    </div>
                    <h3 className="text-sm font-bold font-display text-white">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-3">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800/90 text-xs text-zinc-200 font-medium"
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

      </div>
    </section>
  );
};
