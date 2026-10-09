import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { playTapSound } from '../utils/sound';

interface FooterProps {
  onTabChange?: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  const scrollToTop = () => {
    playTapSound(600, 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tabId: string) => {
    playTapSound(500, 0.03);
    if (onTabChange) {
      onTabChange(tabId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#060709] py-12 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Brand & Lead */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold font-display text-white tracking-tight">
                Sahasrasya Studio · PT Digital Ventures
              </span>
            </div>
            <p className="text-zinc-500 text-[11px]">
              Led by {MY_PROFILE.fullName} ({MY_PROFILE.callName}) · Dept. of Information Systems, {MY_PROFILE.institution}
            </p>
          </div>

          {/* 6 Structured Active Tabs mirror */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-zinc-400 font-medium text-xs">
            <a href="/about.html" onClick={(e) => { e.preventDefault(); handleTabClick('about'); }} className="hover:text-white transition-colors cursor-pointer">About</a>
            <a href="/focus.html" onClick={(e) => { e.preventDefault(); handleTabClick('focus'); }} className="hover:text-white transition-colors cursor-pointer">Focus &amp; Expertise</a>
            <a href="/education.html" onClick={(e) => { e.preventDefault(); handleTabClick('education'); }} className="hover:text-white transition-colors cursor-pointer">Education &amp; Languages</a>
            <a href="/experience.html" onClick={(e) => { e.preventDefault(); handleTabClick('experience'); }} className="hover:text-white transition-colors cursor-pointer">Experience &amp; Leadership</a>
            <a href="/skills.html" onClick={(e) => { e.preventDefault(); handleTabClick('skills'); }} className="hover:text-white transition-colors cursor-pointer">Skills &amp; Toolkit</a>
            <a href="/connect.html" onClick={(e) => { e.preventDefault(); handleTabClick('connect'); }} className="hover:text-white transition-colors cursor-pointer">Connect</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-zinc-400" />
          </button>

        </div>

        {/* Bottom Socials & Rights */}
        <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            Surabaya (ITS Sukolilo) · Bali, Indonesia. All real rights and intellectual property reserved.
          </div>

          <div className="flex items-center gap-5">
            <a
              href={MY_PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@shsrsyaa</span>
            </a>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <a
              href={MY_PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true" className="text-zinc-800">·</span>
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

