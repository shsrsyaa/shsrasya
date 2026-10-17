import React from 'react';
import { 
  GraduationCap, 
  Globe, 
  Code, 
  Video, 
  Layers, 
  CheckCircle2, 
  Wrench, 
  MapPin, 
  Instagram, 
  Linkedin, 
  ArrowUpRight, 
  FileText 
} from 'lucide-react';
import { 
  MY_EDUCATION, 
  MY_LANGUAGES, 
  MY_SKILLS_CATEGORIES, 
  MY_PROFILE 
} from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

export const EducationSection = ({ onOpenResume }) => {
  const getToolkitIcon = (category) => {
    switch (category) {
      case 'Frontend Web Engineering':
        return <Code className="w-4 h-4 text-white" />;
      case 'Product Design & Prototyping':
        return <Layers className="w-4 h-4 text-zinc-300" />;
      case 'Venture Management & GTM':
        return <CheckCircle2 className="w-4 h-4 text-white" />;
      case 'Creative Video & Visual Media':
        return <Video className="w-4 h-4 text-zinc-300" />;
      default:
        return <Wrench className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Executive Profile Header Card */}
        <ScrollReveal>
          <div className="p-6 sm:p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/15 shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-t border-b border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/20 bg-black shrink-0">
                  <img
                    src={MY_PROFILE.avatar}
                    alt={MY_PROFILE.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-white font-bold text-base bg-zinc-900">
                    R
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
                      Academic &amp; Professional Profile
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {MY_PROFILE.fullName}
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {MY_PROFILE.institution} · Information Systems
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {onOpenResume && (
                  <button
                    type="button"
                    onClick={() => {
                      playTapSound(550, 0.04);
                      onOpenResume();
                    }}
                    className="px-4 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all cursor-pointer flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-white" />
                    <span>View Full CV</span>
                  </button>
                )}
              </div>
            </div>

            {/* Profile Overview Bio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-zinc-300">
              <div className="md:col-span-2 space-y-3 leading-relaxed">
                <p>{MY_PROFILE.bio}</p>
                <p className="text-zinc-400 text-xs">{MY_PROFILE.extendedBio}</p>
              </div>

              <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Contact &amp; Location
                </div>
                <div className="flex items-center gap-2 text-zinc-200">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{MY_PROFILE.location}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200">
                  <Instagram className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{MY_PROFILE.socials.instagramHandle}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200">
                  <Linkedin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>LinkedIn Profile Connected</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column: Education Milestones & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Academic Milestones */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                <span>Formal Education</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                Academic Institutions
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {MY_EDUCATION.map((edu, idx) => (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <TiltCard>
                    <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 transition-all space-y-3 shadow-xl">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-white border border-white/15">
                            {edu.period}
                          </span>
                          <h3 className="text-base sm:text-lg font-extrabold font-display text-white mt-1">
                            {edu.institution}
                          </h3>
                          <div className="text-xs font-semibold text-zinc-300">
                            {edu.degree}
                          </div>
                          <div className="text-xs text-zinc-500">
                            {edu.location}
                          </div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2 border-t border-white/10">
                        {edu.description}
                      </p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Column 2: Languages & Core Skills Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Languages Card */}
            <ScrollReveal>
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 space-y-5 shadow-xl">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-white" />
                  <h3 className="text-base font-extrabold font-display text-white">
                    Languages Proficiency
                  </h3>
                </div>

                <div className="space-y-4">
                  {MY_LANGUAGES.map((lang, lIdx) => (
                    <div key={lIdx} className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-white">{lang.language}</span>
                        <span className="text-zinc-400">{lang.proficiency}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-red-600 to-white/90 rounded-full"
                          style={{ width: `${lang.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Skills Matrix Summary */}
            <ScrollReveal delay={100}>
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold font-display text-white">
                    Capabilities Matrix
                  </h3>
                </div>

                <div className="space-y-4">
                  {MY_SKILLS_CATEGORIES.map((cat, cIdx) => (
                    <div key={cIdx} className="space-y-2 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        {getToolkitIcon(cat.category)}
                        <span>{cat.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map((item, iIdx) => (
                          <span 
                            key={iIdx} 
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-zinc-300 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </div>
  );
};
