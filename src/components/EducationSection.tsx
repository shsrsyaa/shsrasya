import React from 'react';
import { GraduationCap, BookOpen, Globe, CheckCircle2 } from 'lucide-react';
import { MY_EDUCATION, MY_LANGUAGES } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 relative border-t border-zinc-800/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal className="max-w-xl mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">
            Academic Background
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
            Education &amp; Languages
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Education list */}
          <div className="md:col-span-8 space-y-4">
            {MY_EDUCATION.map((edu, idx) => (
              <ScrollReveal key={edu.institution} delay={idx * 100}>
                <TiltCard className="p-5 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-zinc-800/80 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold font-display text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-xs text-zinc-400">
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-medium text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800/80 self-start sm:self-auto">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-zinc-200">
                    {edu.degree}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {edu.description}
                  </p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Languages */}
          <div className="md:col-span-4">
            <ScrollReveal delay={200}>
              <div className="p-5 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md space-y-4">
                <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-800">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-white font-display">Language Proficiency</h3>
                </div>

                <div className="space-y-4">
                  {MY_LANGUAGES.map((lang) => (
                    <div key={lang.language} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-zinc-200">{lang.language}</span>
                        <span className="text-zinc-400 font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                          {lang.proficiency}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/80">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400 transition-all duration-500"
                          style={{ width: `${lang.level ?? (lang.language === 'Indonesian' ? 100 : 75)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
