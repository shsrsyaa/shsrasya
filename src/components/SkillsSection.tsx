import React from 'react';
import { 
  Workflow, 
  Rocket, 
  Compass, 
  GraduationCap, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MY_PROCESS_STEPS, MY_VENTURES, MY_PROFILE, MY_SKILLS_CATEGORIES } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

interface ProcessSectionProps {
  onNavigateToTab?: (tabId: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigateToTab }) => {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono mb-2">
            <span>03. Methodology &amp; Execution</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Our 4-Step Venture Process
          </h1>
          <p className="mt-3 text-zinc-400 text-xs sm:text-sm leading-relaxed">
            From initial stakeholder discovery to high-performance semantic code and go-to-market rollout. A structured, transparent pipeline for digital ventures.
          </p>
        </ScrollReveal>

        {/* 4-Step Process Visual Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {MY_PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={step.number} delay={idx * 90}>
              <TiltCard className="h-full">
                <div className="p-6 rounded-2xl bg-[#0c0e12] border border-zinc-800 hover:border-zinc-700 shadow-xl transition-all h-full flex flex-col justify-between space-y-6 relative group">
                  
                  {/* Step Number & Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                      <span className="text-2xl font-bold font-mono text-blue-400 tracking-tight">
                        {step.number}
                      </span>
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {idx === 0 ? <Compass className="w-4 h-4 text-blue-400" /> :
                         idx === 1 ? <Workflow className="w-4 h-4 text-indigo-400" /> :
                         idx === 2 ? <Cpu className="w-4 h-4 text-emerald-400" /> :
                         <Rocket className="w-4 h-4 text-pink-400" />}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold font-display text-white">
                        {step.step}
                      </h3>
                      <p className="text-xs text-blue-400/90 font-mono mt-0.5">
                        {step.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Key Outputs */}
                  <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 block font-mono">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1">
                      {step.outputs.map((out) => (
                        <li key={out} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                          <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA to start project */}
        {onNavigateToTab && (
          <ScrollReveal delay={200} className="mt-12 text-center">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 max-w-xl mx-auto space-y-3">
              <h3 className="text-sm font-bold text-white font-display">
                Ready to run this process for your venture?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We apply this exact workflow to de-risk and engineer digital products within rapid 2 to 4-week milestones.
              </p>
              <button
                type="button"
                onClick={() => {
                  playTapSound(500, 0.03);
                  onNavigateToTab('connect');
                }}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                Initiate Project Brief
              </button>
            </div>
          </ScrollReveal>
        )}

      </div>
    </div>
  );
};

interface VenturesSectionProps {
  onNavigateToTab?: (tabId: string) => void;
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({ onNavigateToTab }) => {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono mb-2">
            <span>04. Startup Ecosystem &amp; Products</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Ventures &amp; Products
          </h1>
          <p className="mt-3 text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Proprietary startup initiatives and tech platforms being incubated and developed in collaboration with Institut Teknologi Sepuluh Nopember (ITS).
          </p>
        </ScrollReveal>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {MY_VENTURES.map((venture, idx) => (
            <ScrollReveal key={venture.id} delay={idx * 100} className="h-full flex">
              <TiltCard className="w-full h-full flex flex-col">
                <div className="p-6 rounded-2xl bg-[#0c0e12] border border-zinc-800 hover:border-zinc-700 shadow-xl flex flex-col justify-between h-full space-y-6">
                  
                  <div className="space-y-4">
                    {/* Venture Status Tag */}
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                      <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                        <Rocket className="w-3.5 h-3.5 text-blue-400" />
                        <span>{venture.institution}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/60 text-blue-300">
                        {venture.stage}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-display text-white">
                        {venture.title}
                      </h3>
                      <p className="text-xs text-blue-400 font-mono mt-0.5">
                        {venture.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {venture.description}
                    </p>

                    <div className="text-[11px] text-zinc-400 font-mono">
                      <span className="text-zinc-500">Domain: </span>
                      <span>{venture.domain}</span>
                    </div>
                  </div>

                  {/* Tags & Status */}
                  <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {venture.focusTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500 text-[11px]">Lifecycle Status:</span>
                      <span className="text-white font-semibold text-[11px]">{venture.status}</span>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* ITS Campus Innovation Highlight Banner */}
        <ScrollReveal delay={250} className="mt-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0e12] border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 shrink-0">
              <img
                src={MY_PROFILE.itsPhoto}
                alt="Institut Teknologi Sepuluh Nopember Campus"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <GraduationCap className="w-4 h-4" />
                <span>ITS Academic &amp; Entrepreneurship Hub</span>
                <span aria-hidden="true">·</span>
                <span>Surabaya, Indonesia</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Incubating Digital Products in Surabaya
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Leveraging ITS Surabaya's rigorous technological and engineering environment to validate and engineer scalable web architectures, automotive mobility tools, and agile digital operational platforms.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

interface SkillsSectionProps {
  onNavigateToTab?: (tabId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onNavigateToTab }) => {
  const [subView, setSubView] = React.useState<'toolkit' | 'process' | 'ventures'>('toolkit');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Web Engineering':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Product Design & Prototyping':
        return <Workflow className="w-5 h-5 text-indigo-400" />;
      case 'Venture Management & GTM':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      case 'Creative Video & Visual Media':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      default:
        return <Compass className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-b border-zinc-800/70 bg-[#08090d]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono mb-2">
              <span>05. Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
              Skills &amp; Toolkit
            </h2>
            <p className="mt-2 text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Technical stack, development methodology, and venture products engineered across web engineering, UI/UX prototyping, and media production.
            </p>
          </div>

          {/* Sub-navigation pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-zinc-950/80 rounded-xl border border-zinc-800 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => {
                playTapSound(500, 0.03);
                setSubView('toolkit');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                subView === 'toolkit'
                  ? 'bg-zinc-800 text-white font-semibold border border-zinc-700/80 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Technical Stack
            </button>
            <button
              type="button"
              onClick={() => {
                playTapSound(500, 0.03);
                setSubView('process');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                subView === 'process'
                  ? 'bg-zinc-800 text-white font-semibold border border-zinc-700/80 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Our Process
            </button>
            <button
              type="button"
              onClick={() => {
                playTapSound(500, 0.03);
                setSubView('ventures');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                subView === 'ventures'
                  ? 'bg-zinc-800 text-white font-semibold border border-zinc-700/80 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ITS Ventures
            </button>
          </div>
        </ScrollReveal>

        {/* Sub-view 1: Technical Stack & Toolkit */}
        {subView === 'toolkit' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MY_SKILLS_CATEGORIES.map((cat, idx) => (
                <ScrollReveal key={cat.category} delay={idx * 80}>
                  <TiltCard className="h-full">
                    <div className="p-6 rounded-2xl bg-[#0c0e12] border border-zinc-800 hover:border-zinc-700/80 shadow-xl h-full space-y-5">
                      <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
                        <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                          {getCategoryIcon(cat.category)}
                        </div>
                        <div>
                          <h3 className="text-base font-bold font-display text-white">
                            {cat.category}
                          </h3>
                          <span className="text-[11px] font-mono text-zinc-500">
                            {cat.items.length} Core Competencies
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800/90 text-xs font-mono text-zinc-300 hover:border-blue-500/50 hover:text-white transition-colors"
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
            <ScrollReveal className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 text-xs">
                <p className="font-semibold text-white">Full-Stack Digital Execution Capabilities</p>
                <p className="text-zinc-400">Available for web app development contracts, design prototyping sprints, and startup advisory.</p>
              </div>
              {onNavigateToTab && (
                <button
                  type="button"
                  onClick={() => {
                    playTapSound(500, 0.03);
                    onNavigateToTab('connect');
                  }}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs transition-all shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto"
                >
                  Discuss a Project
                </button>
              )}
            </ScrollReveal>
          </div>
        )}

        {/* Sub-view 2: Our 4-Step Process */}
        {subView === 'process' && (
          <div className="animate-in fade-in duration-300">
            <ProcessSection onNavigateToTab={onNavigateToTab} />
          </div>
        )}

        {/* Sub-view 3: Ventures & Products */}
        {subView === 'ventures' && (
          <div className="animate-in fade-in duration-300">
            <VenturesSection onNavigateToTab={onNavigateToTab} />
          </div>
        )}

      </div>
    </section>
  );
};


