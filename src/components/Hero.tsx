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
    <section id="about" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-white/10">
      {/* Background ambient lighting in rich red */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/25 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-red-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Institution Trust Tag (Clean metadata with white indicator) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-white shadow-sm shadow-white/60 animate-pulse"></span>
              <span>Department of Information Systems</span>
              <span aria-hidden="true" className="text-zinc-500">·</span>
              <span className="text-zinc-300">Institut Teknologi Sepuluh Nopember (ITS)</span>
            </div>

            {/* Display Headline - Bold, commanding, professional */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.02] text-balance max-w-2xl">
                Hi! I'm <span className="silver-text">Rasya</span><span className="text-white">.</span>
              </h1>
              <p className="text-sm sm:text-base font-bold text-zinc-300 font-mono tracking-tight">
                Information System - Digital Innovation
              </p>
            </div>

            {/* Identity & Real Bio */}
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              <p>
                Led by <span className="text-white font-bold">{MY_PROFILE.fullName}</span> ({MY_PROFILE.callName}). {MY_PROFILE.bio}
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {MY_PROFILE.extendedBio}
              </p>
            </div>

            {/* Geographic & Discipline Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-400 pt-1 font-mono">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{MY_PROFILE.location}</span>
                <span className="text-zinc-400">(Origin: {MY_PROFILE.origin})</span>
              </span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Web Applications</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Rapid Prototyping</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Agile Systems</span>
            </div>

            {/* Action Buttons - Transparent to reveal red background effect */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo('focus')}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-extrabold text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap group"
              >
                <Briefcase className="w-3.5 h-3.5 text-white" />
                <span>Explore Capabilities</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-white" />
              </button>
              
              <button
                type="button"
                onClick={() => handleScrollTo('experience')}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-200 hover:text-white border border-white/20 backdrop-blur-md font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Experience &amp; Leadership</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
              </button>
            </div>

          </div>

          {/* Right Column: Founder & Studio Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <TiltCard className="w-full max-w-md">
              <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 p-6 shadow-2xl space-y-5 transition-all duration-300">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/20 bg-black shrink-0">
                    <img
                      src={MY_PROFILE.avatar}
                      alt={MY_PROFILE.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm bg-zinc-900">
                      R
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase font-bold text-zinc-300 tracking-widest block">
                      Founder &amp; Principal
                    </span>
                    <h2 className="text-base font-black text-white font-display truncate">
                      {MY_PROFILE.fullName}
                    </h2>
                    <p className="text-xs text-zinc-400 font-mono">
                      Known as {MY_PROFILE.callName} · ITS Information Systems
                    </p>
                  </div>
                </div>

                {/* Studio Practice Pillars */}
                <div className="space-y-2.5 text-xs">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">
                    Core Disciplines:
                  </span>
                  
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-white/20 transition-colors">
                    <span className="text-zinc-200 font-semibold flex items-center gap-2">
                      <Code className="w-4 h-4 text-white shrink-0" />
                      <span>Web Engineering</span>
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">HTML5 / CSS / TS</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-white/20 transition-colors">
                    <span className="text-zinc-200 font-semibold flex items-center gap-2">
                      <Layers className="w-4 h-4 text-zinc-300 shrink-0" />
                      <span>Rapid Prototyping</span>
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">UX Wireframes</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-white/20 transition-colors">
                    <span className="text-zinc-200 font-semibold flex items-center gap-2">
                      <Video className="w-4 h-4 text-white shrink-0" />
                      <span>Creative Media</span>
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">Visual Editing</span>
                  </div>
                </div>

                {/* Footer Link in Card */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <a
                    href={MY_PROFILE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors font-mono"
                  >
                    <Instagram className="w-3.5 h-3.5 text-white" />
                    <span>@shsrsyaa</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      playTapSound(500, 0.03);
                      onOpenResume();
                    }}
                    className="text-white hover:text-zinc-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Credentials</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
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

