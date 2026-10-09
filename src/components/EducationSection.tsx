import React from 'react';
import { 
  GraduationCap, 
  Globe, 
  Code, 
  Video, 
  Layers, 
  CheckCircle2, 
  Wrench, 
  UserCheck,
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

interface ProfileSectionProps {
  onOpenResume?: () => void;
}

export const EducationSection: React.FC<ProfileSectionProps> = ({ onOpenResume }) => {
  const getToolkitIcon = (category: string) => {
    switch (category) {
      case 'Frontend Web Engineering':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'Product Design & Prototyping':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'Venture Management & GTM':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'Creative Video & Visual Media':
        return <Video className="w-4 h-4 text-pink-400" />;
      default:
        return <Wrench className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Executive Profile Header Card */}
        <ScrollReveal>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0e12] border border-zinc-800 shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shrink-0">
                  <img
                    src={MY_PROFILE.avatar}
                    alt={MY_PROFILE.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg bg-zinc-800">
                    R
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
                    <span>Founder &amp; Principal</span>
                    <span aria-hidden="true">·</span>
                    <span>Department of Information Systems, ITS</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {MY_PROFILE.fullName}
                  </h1>
                  <p className="text-xs text-zinc-400 font-mono">
                    Call name: <span className="text-white">{MY_PROFILE.callName}</span> · {MY_PROFILE.role}
                  </p>
                </div>
              </div>

              {onOpenResume && (
                <button
                  type="button"
                  onClick={() => {
                    playTapSound(550, 0.04);
                    onOpenResume();
                  }}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer shadow-sm active:scale-95"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>View Full CV &amp; Dossier</span>
                </button>
              )}
            </div>

            {/* Bio Prose & Location */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>{MY_PROFILE.bio}</p>
                <p className="text-zinc-400 text-xs leading-relaxed">{MY_PROFILE.extendedBio}</p>
              </div>

              <div className="md:col-span-4 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-2.5 text-xs text-zinc-400">
                <div className="flex items-center gap-2 text-zinc-200 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{MY_PROFILE.location}</span>
                </div>
                <div className="text-[11px] text-zinc-500 font-mono">
                  Origin: {MY_PROFILE.origin}
                </div>
                <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-3 text-xs">
                  <a
                    href={MY_PROFILE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink-400 hover:text-pink-300 flex items-center gap-1"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <span aria-hidden="true" className="text-zinc-700">·</span>
                  <a
                    href={MY_PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Split: Education & Languages on Left, Technical Toolkit on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Credentials & Languages */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Cards */}
            <div className="space-y-4">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block font-mono">
                Academic Background:
              </span>
              
              {MY_EDUCATION.map((edu, idx) => (
                <ScrollReveal key={edu.institution} delay={idx * 100}>
                  <TiltCard className="p-5 rounded-2xl bg-[#0c0e12] border border-zinc-800 shadow-md space-y-3">
                    <div className="flex items-start justify-between gap-2 border-b border-zinc-800/80 pb-3">
                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400 mt-0.5">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold font-display text-white">
                            {edu.institution}
                          </h3>
                          <p className="text-[11px] text-zinc-400">
                            {edu.location}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded-md border border-zinc-800 tabular-nums shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-blue-400 font-mono">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-zinc-300 leading-relaxed mt-1">
                        {edu.description}
                      </p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Languages Card */}
            <ScrollReveal delay={200}>
              <div className="p-5 rounded-2xl bg-[#0c0e12] border border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-white font-display">
                    Language Fluency &amp; Communication
                  </h3>
                </div>

                <div className="space-y-4">
                  {MY_LANGUAGES.map((lang) => (
                    <div key={lang.language} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-zinc-200">{lang.language}</span>
                        <span className="text-zinc-400 font-mono text-[11px]">
                          {lang.proficiency}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                          style={{ width: `${lang.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Technical & Creative Toolkit */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block font-mono">
              Technical Arsenal &amp; Capabilities:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MY_SKILLS_CATEGORIES.map((cat, idx) => (
                <ScrollReveal key={cat.category} delay={idx * 80}>
                  <TiltCard className="p-5 rounded-2xl bg-[#0c0e12] border border-zinc-800 shadow-md space-y-3.5 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 pb-2.5 border-b border-zinc-800/80">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                          {getToolkitIcon(cat.category)}
                        </div>
                        <h3 className="text-xs font-bold font-display text-white">
                          {cat.category}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 pt-3">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300"
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

            {/* Disciplined Methodology Callout */}
            <ScrollReveal delay={250}>
              <div className="p-5 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 text-xs text-zinc-400 leading-relaxed flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-200 block mb-0.5">
                    Engineering Principles &amp; Delivery Standards
                  </span>
                  Strict commitment to clean code semantics, WCAG accessibility benchmarks, modular design tokens, and data-driven usability testing across all studio outputs.
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </div>
  );
};


