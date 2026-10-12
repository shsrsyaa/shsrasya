import React, { useState } from 'react';
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    playTapSound(600, 0.04);
    navigator.clipboard.writeText(MY_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28 relative">
      {/* Background ambient lighting in rich red */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-red-600/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <ScrollReveal className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-white shadow-sm shadow-white/60"></span>
            <span>Direct Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Connect &amp; <span className="silver-text">Initiate</span><span className="text-white">.</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
            Direct communication channels for web development architectures, rapid product prototyping, and venture collaborations.
          </p>
        </ScrollReveal>

        {/* Clean, Streamlined Direct Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* 1. Primary Email Card */}
          <ScrollReveal delay={50} className="h-full">
            <TiltCard className="h-full">
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-2xl space-y-5 h-full flex flex-col justify-between transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black font-display text-white">
                          Direct Email
                        </h3>
                        <p className="text-[11px] text-zinc-400 font-mono">
                          Primary inbox
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold px-2 py-0.5 rounded bg-white/10 border border-white/10">
                      Verified
                    </span>
                  </div>

                  <p className="text-xs text-white leading-relaxed font-mono font-bold break-all">
                    {MY_PROFILE.email}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Fast response for development projects, strategic inquiries, and venture discussions.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-300" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${MY_PROFILE.email}`}
                    className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition-all flex items-center justify-center cursor-pointer"
                    title="Send Email Directly"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* 2. Instagram & Direct Messages */}
          <ScrollReveal delay={100} className="h-full">
            <TiltCard className="h-full">
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-2xl space-y-5 h-full flex flex-col justify-between transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black font-display text-white">
                          Instagram Direct
                        </h3>
                        <p className="text-[11px] text-zinc-400 font-mono">
                          @shsrsyaa
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold px-2 py-0.5 rounded bg-white/10 border border-white/10">
                      Active
                    </span>
                  </div>

                  <p className="text-xs text-white leading-relaxed font-mono font-bold">
                    Personal &amp; Creative Portfolio
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Casual dialogues, creative media showcases, and rapid DMs regarding daily projects and ventures.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={MY_PROFILE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playTapSound(600, 0.03)}
                    className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5 text-white" />
                    <span>Follow &amp; Message</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* 3. LinkedIn Professional Network */}
          <ScrollReveal delay={150} className="h-full">
            <TiltCard className="h-full">
              <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-2xl space-y-5 h-full flex flex-col justify-between transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black font-display text-white">
                          LinkedIn Profile
                        </h3>
                        <p className="text-[11px] text-zinc-400 font-mono">
                          Professional Network
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold px-2 py-0.5 rounded bg-white/10 border border-white/10">
                      Network
                    </span>
                  </div>

                  <p className="text-xs text-white leading-relaxed font-mono font-bold">
                    {MY_PROFILE.fullName}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Formal enterprise networking, academic milestones, and official recommendations.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={MY_PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playTapSound(600, 0.03)}
                    className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white" />
                    <span>Connect Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

        </div>

        {/* Location & Studio Hub Banner */}
        <ScrollReveal delay={200}>
          <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-xl border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-white shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <span>Base of Operations &amp; Study</span>
                  <span className="text-zinc-500">·</span>
                  <span className="text-zinc-300 font-mono text-[11px] font-normal">Surabaya (ITS Sukolilo) / Bali</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Institut Teknologi Sepuluh Nopember, Surabaya · Origin: Semarapura, Bali, Indonesia. Available for remote collaboration worldwide.
                </p>
              </div>
            </div>

            <a
              href={`mailto:${MY_PROFILE.email}?subject=Collaboration%20Inquiry`}
              className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white backdrop-blur-md text-xs font-black transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <Send className="w-3.5 h-3.5 text-white" />
              <span>Send An Email</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
