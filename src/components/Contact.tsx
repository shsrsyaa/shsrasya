import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    playTapSound(600, 0.04);
    navigator.clipboard.writeText(MY_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative border-t border-zinc-800/70">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-zinc-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <ScrollReveal className="max-w-xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">
            Let's Connect
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
            Contact &amp; Social Information
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Feel free to reach out, discuss web development and product ideas, or connect across socials.
          </p>
        </ScrollReveal>

        {/* Clean Contact Cards Grid (No message form) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          
          {/* Instagram Card */}
          <ScrollReveal delay={50}>
            <TiltCard className="p-5 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md flex flex-col justify-between space-y-4 h-full group hover:border-zinc-600 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-pink-500">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Primary</span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Instagram
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Best channel for creative stories, direct casual messaging, and everyday updates.
                </p>
              </div>

              <a
                href={MY_PROFILE.socials.instagram}
                target="_blank"
                rel="noreferrer"
                onClick={() => playTapSound(700, 0.04)}
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-zinc-200 text-xs font-bold text-zinc-950 flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
              >
                <span>Follow on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            </TiltCard>
          </ScrollReveal>

          {/* LinkedIn Card */}
          <ScrollReveal delay={100}>
            <TiltCard className="p-5 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md flex flex-col justify-between space-y-4 h-full group hover:border-zinc-600 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Professional</span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    LinkedIn
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Connect for software engineering, product design exploration, and professional networking.
                </p>
              </div>

              <a
                href={MY_PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playTapSound(600, 0.04)}
                className="w-full py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </TiltCard>
          </ScrollReveal>

          {/* Email Card */}
          <ScrollReveal delay={150}>
            <TiltCard className="p-5 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md flex flex-col justify-between space-y-4 h-full group hover:border-zinc-600 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Direct Email</span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Email Address
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Send project inquiries, product discussions, or direct messages anytime.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${MY_PROFILE.email}`}
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  title="Send Email"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </TiltCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
