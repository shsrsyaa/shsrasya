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
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'uiux-prototyping':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'startup-advisory':
        return <Compass className="w-5 h-5 text-emerald-400" />;
      case 'video-production':
        return <Video className="w-5 h-5 text-pink-400" />;
      default:
        return <Code className="w-5 h-5 text-zinc-300" />;
    }
  };

  const handleInquireService = (title: string) => {
    playTapSound(500, 0.03);
    if (onSelectService) {
      onSelectService(title);
    }
  };

  return (
    <section id="focus" className="py-20 sm:py-28 relative border-b border-zinc-800/70 bg-[#08090d]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono mb-2">
            <span>01. Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
            Focus &amp; Expertise
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm leading-relaxed">
            High-velocity digital execution tailored for web applications, rapid UI/UX prototyping, startup advisory, and creative media.
          </p>
        </ScrollReveal>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {MY_SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 80}>
              <TiltCard className="h-full">
                <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0e12] border border-zinc-800 hover:border-zinc-700/80 shadow-xl transition-all duration-300 flex flex-col justify-between h-full space-y-6">
                  
                  {/* Card Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                        {service.badge || `Practice 0${idx + 1}`}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-blue-400/90 font-mono mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                        Core Deliverables:
                      </span>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Tech tags + Inquire Action */}
                  <div className="pt-4 border-t border-zinc-800/80 space-y-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleInquireService(service.title)}
                      className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-600 text-xs font-semibold text-zinc-200 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <span>Inquire for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
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


