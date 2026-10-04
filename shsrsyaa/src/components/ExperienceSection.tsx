import React from 'react';
import { Users, Shield, Calendar, CheckCircle2 } from 'lucide-react';
import { MY_ORGANIZATIONS } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative border-t border-zinc-800/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal className="max-w-xl mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">
            Leadership &amp; Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
            Organizational &amp; Leadership Experience
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Demonstrated track record in large-scale event logistics, crowd safety control, and community field coordination.
          </p>
        </ScrollReveal>

        {/* List */}
        <div className="space-y-5">
          {MY_ORGANIZATIONS.map((org, idx) => (
            <ScrollReveal key={org.organization + org.period} delay={idx * 100}>
              <TiltCard className="p-5 sm:p-6 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md space-y-3.5">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white">
                      {idx === 0 ? <Users className="w-4 h-4 text-zinc-300" /> : idx === 1 ? <Shield className="w-4 h-4 text-blue-400" /> : <Calendar className="w-4 h-4 text-zinc-300" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-white">
                        {org.role}
                      </h3>
                      <p className="text-xs text-zinc-400">
                        {org.organization} · {org.location}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-white tabular-nums self-start sm:self-auto">
                    {org.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  {org.description}
                </p>

              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
