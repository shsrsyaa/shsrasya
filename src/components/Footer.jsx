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
    <footer className="border-t border-white/10 bg-black/75 backdrop-blur-xl py-10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Top bar: Brand wordmark & Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Brand & Lead */}
          <div className="space-y-1">
            <span className="text-base font-bold font-display text-white tracking-tight">
              Sahasrasya Studio<span className="silver-text">.</span>
            </span>
            <p className="text-zinc-400 text-xs font-medium">
              Led by {MY_PROFILE.fullName} ({MY_PROFILE.callName}) · Dept. of Information Systems, {MY_PROFILE.institution}
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-all self-start sm:self-auto cursor-pointer font-bold text-xs active:scale-95"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

        {/* Bottom bar: Location note & Direct Social Channels */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            Surabaya (ITS Sukolilo) · Bali, Indonesia. All real rights and intellectual property reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={MY_PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Instagram className="w-3.5 h-3.5 text-white" />
              <span>@shsrsyaa</span>
            </a>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <a
              href={MY_PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Linkedin className="w-3.5 h-3.5 text-white" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <a
              href={`mailto:${MY_PROFILE.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>{MY_PROFILE.email}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
