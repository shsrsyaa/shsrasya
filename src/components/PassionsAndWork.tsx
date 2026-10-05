import React from 'react';
import { Layers, Compass, GraduationCap, Code, Video } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';

export const PassionsAndWork: React.FC = () => {
  return (
    <section id="passions" className="py-16 sm:py-24 relative border-t border-zinc-800/70 bg-[#07080a]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal className="max-w-xl mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">
            Focus &amp; Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
            Frontend, Product Prototyping &amp; Startup Management
          </h2>
          <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
            Building responsive web interfaces, designing user-centered digital products, and managing startup execution.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Frontend & Product Design */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Card 1: Frontend Web Development */}
            <ScrollReveal delay={50}>
              <TiltCard className="p-5 sm:p-6 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white">
                      Frontend Web Development
                    </h3>
                    <p className="text-xs text-zinc-400">
                      HTML5, CSS3, JavaScript (Vanilla) &amp; Responsive UI
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  Crafting clean, accessible, and fast-loading web applications with semantic HTML5, modern CSS3 layouts, and interactive client-side JavaScript. Dedicated to crisp design execution and performance.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400 font-mono">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-blue-400">HTML5</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-blue-400">CSS3</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-blue-400">JavaScript</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Responsive Layouts</span>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Card 2: Product Design & Rapid Prototyping */}
            <ScrollReveal delay={120}>
              <TiltCard className="p-5 sm:p-6 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-md space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white">
                      Product Design &amp; Rapid Prototyping
                    </h3>
                    <p className="text-xs text-zinc-400">
                      User Research, Wireframing &amp; UX Validation
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  Handling end-to-end product discovery from understanding customer pain points and conducting qualitative interviews to wireframing and clickable rapid prototyping to validate product-market fit.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400 font-mono">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">User Research</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Wireframing</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Rapid Prototyping</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Design Systems</span>
                </div>
              </TiltCard>
            </ScrollReveal>

          </div>

          {/* Right Column: Startup Management, Creative Editing & Campus Showcase */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Startup Management */}
            <ScrollReveal delay={150}>
              <TiltCard className="p-5 sm:p-6 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-xl space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-display text-white">
                        Startup Management &amp; GTM
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        Venture Operations &amp; Strategy
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-blue-400 border border-zinc-800">
                    Strategy
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Focusing on product roadmapping, go-to-market strategies, and agile operational execution to help early-stage ventures build scalable solutions.
                </p>

                <div className="space-y-1.5 pt-1 text-xs">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-zinc-300">
                    <span className="text-[11px]">Product Management</span>
                    <span className="text-blue-400 font-mono text-[10px]">Agile &amp; GTM</span>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-zinc-300">
                    <span className="text-[11px]">Venture Operations</span>
                    <span className="text-zinc-400 font-mono text-[10px]">Scalability</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Creative Video Editing */}
            <ScrollReveal delay={180}>
              <TiltCard className="p-5 rounded-2xl bg-[#0e0f13] border border-zinc-800/90 shadow-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-pink-400">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-display text-white">
                        Creative Video Editing
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        Visual Content &amp; Media Production
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-pink-400 border border-zinc-800">
                    Media
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Proficient in Adobe Premiere Pro, CapCut, Alight Motion, and Canva for high-engagement social media reels, promotional trailers, and event visual documentation.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">Premiere Pro</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">CapCut</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">Alight Motion</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">Canva</span>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Photo in front of ITS Monument */}
            <ScrollReveal delay={210}>
              <TiltCard className="rounded-2xl bg-[#0e0f13] border border-zinc-800/90 overflow-hidden shadow-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
                  <img
                    src={MY_PROFILE.itsPhoto}
                    alt="Rasya at Institut Teknologi Sepuluh Nopember (ITS)"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[10px] font-mono text-white flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-blue-400" />
                    <span>ITS Surabaya</span>
                  </div>
                </div>

                <div className="p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-white text-xs">
                      Institut Teknologi Sepuluh Nopember
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    2026 – Present
                  </span>
                </div>
              </TiltCard>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
