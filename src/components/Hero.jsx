import React from 'react';
import { MapPin } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { TiltCard } from './TiltCard';

export const Hero = () => {

  return (
    <section id="about" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-white/10">
      {/* Background ambient lighting in rich red */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/25 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-red-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Institution Trust Tag (Clean typography, no fake pulsing dots) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-zinc-200">
              <span>Department of Information Systems</span>
              <span aria-hidden="true" className="text-zinc-500">·</span>
              <span className="text-zinc-300 font-medium">Institut Teknologi Sepuluh Nopember (ITS)</span>
            </div>

            {/* Display Headline - Bold, commanding, professional */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.05] text-balance max-w-2xl">
                Hi! I'm <span className="silver-text">Rasya</span><span className="text-white">.</span>
              </h1>
              <p className="text-sm sm:text-base font-bold text-zinc-300 tracking-tight">
                Information Systems | Digital Innovation
              </p>
            </div>

            {/* Identity & Real Bio */}
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              <p>
                I am <span className="text-white font-bold">{MY_PROFILE.fullName}</span> ({MY_PROFILE.callName}). {MY_PROFILE.bio}
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {MY_PROFILE.extendedBio}
              </p>
            </div>

            {/* Geographic & Discipline Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{MY_PROFILE.location}</span>
                <span className="text-zinc-400">(Origin: {MY_PROFILE.origin})</span>
              </span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Web Applications</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Frontend Development</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Information Systems</span>
            </div>

          </div>

          {/* Right Column: Founder Profile Card */}
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
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm bg-zinc-900">
                      R
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                      Founder &amp; Principal
                    </span>
                    <h2 className="text-base font-extrabold text-white font-display truncate">
                      {MY_PROFILE.fullName}
                    </h2>
                    <p className="text-xs text-zinc-400 font-medium">
                      Known as {MY_PROFILE.callName} ITS Information Systems
                    </p>
                  </div>
                </div>

                {/* Key Metrics / Snapshot */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-lg font-extrabold text-white tracking-tight tabular-nums">2+ Terms</div>
                    <div className="text-[11px] text-zinc-400 font-medium">Field Operations Staff</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-lg font-extrabold text-white tracking-tight tabular-nums">900+</div>
                    <div className="text-[11px] text-zinc-400 font-medium">Campus Crowd Managed</div>
                  </div>
                </div>

                {/* Focus Badges */}
                <div className="pt-1 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium">
                    Web App Development
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium">
                    UI/UX Prototyping
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium">
                    Field Logistics
                  </span>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
