import React from 'react';
import { 
  Code, 
  Layers, 
  Compass, 
  Video, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { MY_SERVICES, MY_PROFILE } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

export const PassionsAndWork = ({ onSelectService, onNavigateToTab }) => {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'webapp-dev':
        return <Code className="w-5 h-5 text-white" />;
      case 'uiux-prototyping':
        return <Layers className="w-5 h-5 text-zinc-300" />;
      case 'startup-advisory':
        return <Compass className="w-5 h-5 text-white" />;
      case 'video-production':
        return <Video className="w-5 h-5 text-zinc-300" />;
      default:
        return <Code className="w-5 h-5 text-zinc-400" />;
    }
  };

  const handleInquireService = (title) => {
    playTapSound(500, 0.03);
    if (onSelectService) {
      onSelectService(title);
    }
    if (onNavigateToTab) {
      onNavigateToTab('connect');
    }
  };

  return (
    <section id="focus" className="py-20 sm:py-28 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Focus &amp; <span className="silver-text">Expertise</span><span className="text-white">.</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
            Direct disciplines in digital engineering, user validation, operational logistics, and creative video delivery.
          </p>
        </ScrollReveal>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {MY_SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 80} className="h-full">
              <TiltCard className="h-full">
                <div className="p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-2xl space-y-6 h-full flex flex-col justify-between transition-all duration-300 group">
                  
                  <div className="space-y-4">
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/15">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-400 mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                        Deliverables &amp; Focus:
                      </div>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack & action */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-zinc-300 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleInquireService(service.title)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 group"
                    >
                      <span>Inquire for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-white transition-colors" />
                    </button>
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

export const FocusSection = PassionsAndWork;
