import React from 'react';
import { ArrowUpRight, MapPin, Instagram, Code, Layers, Video } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { TiltCard } from './TiltCard';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-zinc-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[280px] h-[280px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Institut Teknologi Sepuluh Nopember (ITS)</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Hey! I'm Rasya
              </h1>
            </div>

            {/* User's Exact Bio Paragraphs */}
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              <p>
                {MY_PROFILE.bio}
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {MY_PROFILE.extendedBio}
              </p>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 pt-0.5">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{MY_PROFILE.location}</span>
                <span className="text-zinc-600">(Origin: Bali)</span>
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Web Development</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Product Prototyping</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Startup Management</span>
            </div>

          </div>

          {/* Right Card: Profile & Passion Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <TiltCard className="w-full max-w-sm">
              <div className="rounded-2xl bg-[#0e0f13]/90 backdrop-blur-xl border border-zinc-800/90 p-5 shadow-xl space-y-4">
                
                {/* Header */}
                <div className="flex items-center gap-3.5 pb-3 border-b border-zinc-800">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900 shrink-0">
                    <img
                      src={MY_PROFILE.avatar}
                      alt={MY_PROFILE.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm bg-zinc-800">
                      R
                    </div>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white font-display">
                      {MY_PROFILE.name}
                    </h2>
                    <p className="text-xs text-zinc-400 font-mono">
                      {MY_PROFILE.fullName}
                    </p>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="space-y-2 text-xs">
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                    Core Focus &amp; Interests:
                  </span>
                  
                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-blue-400" />
                      Web Development &amp; Frontend
                    </span>
                    <span className="text-blue-400 font-mono text-[11px]">Web / Code</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-zinc-300" />
                      Product Prototyping &amp; Startup
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">UX / Venture</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-center justify-between">
                    <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-pink-400" />
                      Creative Video &amp; Visual Editing
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">Premiere / CapCut</span>
                  </div>
                </div>

                {/* Footer link in card */}
                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs">
                  <a
                    href={MY_PROFILE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={MY_PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors font-medium"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
