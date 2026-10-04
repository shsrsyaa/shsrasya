import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { playTapSound } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playTapSound(600, 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    playTapSound(500, 0.03);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#060709] py-10 text-zinc-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Brand */}
          <div>
            <span className="text-sm font-bold font-display text-white tracking-tight">
              {MY_PROFILE.callName}
            </span>
            <p className="text-zinc-500 text-[11px] mt-0.5">
              Department of Information Systems · {MY_PROFILE.institution}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-5 text-zinc-400 font-medium text-xs">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('passions')} className="hover:text-white transition-colors cursor-pointer">Focus</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-white transition-colors cursor-pointer">Education</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors cursor-pointer">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors cursor-pointer">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">Connect</button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-zinc-400" />
          </button>

        </div>

        {/* Bottom */}
        <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-end gap-3 text-[11px] text-zinc-600">
          <div className="flex items-center gap-4">
            <a
              href={MY_PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@shsrsyaa</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={MY_PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${MY_PROFILE.email}`}
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{MY_PROFILE.email}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
