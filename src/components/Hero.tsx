import React from 'react';
import { ArrowUpRight, MapPin, Instagram, Code, Layers, Video, Briefcase, ChevronRight } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
  onNavigateToTab?: (tabId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigateToTab }) => {
  const handleScrollTo = (sectionId: string) => {
    playTapSound(500, 0.03);
    if (onNavigateToTab) {
      onNavigateToTab(sectionId);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-zinc-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[320px] h-[320px] bg-zinc-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            
            {/* Institution Trust Tag (Unboxed clean metadata with dot) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Department of Information Systems</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Institut Teknologi Sepuluh Nopember (ITS)</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-400 font-mono">
                Digital Innovation &amp; Tech Ventures
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-[1.15] text-balance max-w-2xl">
                Engineering High-Performance Web &amp; Venture Solutions
              </h1>
            </div>

            {/* Identity & Real Bio */}
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              <p>
                Led by <span className="text-white font-semibold">{MY_PROFILE.fullName}</span> ({MY_PROFILE.callName}). {MY_PROFILE.bio}
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {MY_PROFILE.extendedBio}
              </p>
            </div>

            {/* Geographic & Discipline Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{MY_PROFILE.location}</span>
                <span className="text-zinc-500">(Origin: {MY_PROFILE.origin})</span>
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Web Applications</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Rapid UX Prototyping</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Agile Logistics &amp; GTM</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo('focus')}
                className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>Explore Focus &amp; Capabilities</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </button>
              
              <button
                type="button"
                onClick={() => handleScrollTo('experience')}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 font-medium text-xs transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>View Experience &amp; Leadership</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            </div>

          </div>

          {/* Right Column: Founder & Studio Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <TiltCard className="w-full max-w-md">
              <div className="rounded-2xl bg-[#0c0e12]/95 backdrop-blur-xl border border-zinc-800 p-6 shadow-2xl space-y-5">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-zinc-800/80">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900 shrink-0">
                    <img
                      src={MY_PROFILE.avatar}
                      alt={MY_PROFILE.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm bg-zinc-800">
                      R
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-blue-400 tracking-wider block">
                      Founder &amp; Principal
                    </span>
                    <h2 className="text-base font-bold text-white font-display truncate">
                      {MY_PROFILE.fullName}
                    </h2>
                    <p className="text-xs text-zinc-400 font-mono">
                      Known as {MY_PROFILE.callName} · ITS Information Systems
                    </p>
                  </div>
                </div>

                {/* Studio Practice Pillars */}
                <div className="space-y-2.5 text-xs">
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                    Core Studio Practice Areas:
                  </span>
                  
                  <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/90 flex items-center justify-between">
                    <span className="text-zinc-200 font-medium flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Web Engineering</span>
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">HTML5 / CSS3 / JS</span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/90 flex items-center justify-between">
                    <span className="text-zinc-200 font-medium flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Rapid Prototyping</span>
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">UX Wireframes</span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/90 flex items-center justify-between">
                    <span className="text-zinc-200 font-medium flex items-center gap-2">
                      <Video className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>Creative Media</span>
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">Premiere / CapCut</span>
                  </div>
                </div>

                {/* Footer Link in Card */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <a
                    href={MY_PROFILE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>@shsrsyaa</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      playTapSound(500, 0.03);
                      onOpenResume();
                    }}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Credentials</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};

