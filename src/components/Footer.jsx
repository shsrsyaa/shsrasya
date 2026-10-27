import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { playTapSound } from '../utils/sound';

export const Footer = () => {
  const scrollToTop = () => {
    playTapSound(600, 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black/75 backdrop-blur-xl py-8 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Academic & Personal Identity */}
        <div className="flex flex-wrap items-center gap-2 text-center sm:text-left text-xs">
          <span className="text-zinc-300 font-semibold">{MY_PROFILE.fullName}</span>
          <span className="text-zinc-600">·</span>
          <span>Dept. of Information Systems, {MY_PROFILE.institution}</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-500">Surabaya / Bali</span>
        </div>

        {/* Social channels & Back to Top */}
        <div className="flex items-center gap-3.5 text-xs">
          <a
            href={MY_PROFILE.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Instagram className="w-3.5 h-3.5 text-white" />
            <span>@shsrsyaa</span>
          </a>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <a
            href={MY_PROFILE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-white" />
            <span>LinkedIn</span>
          </a>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <a
            href={`mailto:${MY_PROFILE.email}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>Email</span>
          </a>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all cursor-pointer font-medium active:scale-95 ml-1"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
};
