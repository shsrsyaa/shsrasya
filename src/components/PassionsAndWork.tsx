import React from 'react';
import { 
  Code, 
  Layers, 
  Compass, 
  Video, 
  CheckCircle2, 
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Briefcase
} from 'lucide-react';
import { MY_SERVICES, MY_PROFILE } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
  onNavigateToTab?: (tabId: string) => void;
}

export const PassionsAndWork: React.FC<ServicesProps> = ({ onSelectService, onNavigateToTab }) => {
  const getServiceIcon = (id: string) => {
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

  const handleInquireService = (title: string) => {
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-white shadow-sm shadow-white/60"></span>
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Focus &amp; <span className="silver-text">Expertise</span><span className="text-white">.</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
            High-velocity digital execution tailored for web applications, rapid UI/UX prototyping, venture advisory, and creative media.
          </p>
        </ScrollReveal>

        {/* 4 Premium Service Cards Grid - Transparent Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {MY_SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 80}>
              <TiltCard className="h-full">
                <div className="p-6 sm:p-7 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-2xl transition-all duration-300 flex flex-col justify-between h-full space-y-6">
                  
                  {/* Card Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                        {service.badge || `Practice 0${idx + 1}`}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-black font-display text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5 font-semibold">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">
                        Core Deliverables:
                      </span>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Tech tags + Inquire Action */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                        >
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


