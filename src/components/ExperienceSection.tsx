import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  Calendar, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  BarChart3, 
  Sparkles,
  Layers
} from 'lucide-react';
import { MY_CASE_STUDIES } from '../portfolioConfig';
import { CaseStudy } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

export const ExperienceSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filters = ['All', 'Operations & Logistics', 'Crowd & Safety Operations', 'Community Leadership'];

  const filteredStudies = selectedFilter === 'All'
    ? MY_CASE_STUDIES
    : MY_CASE_STUDIES.filter(s => s.category === selectedFilter);

  const getOrgIcon = (orgId: string) => {
    switch (orgId) {
      case 'banjar-youth':
        return <Users className="w-5 h-5 text-white" />;
      case 'owl-fest':
        return <Shield className="w-5 h-5 text-zinc-300" />;
      case 'ceketer':
        return <Calendar className="w-5 h-5 text-white" />;
      default:
        return <Layers className="w-5 h-5 text-zinc-400" />;
    }
  };

  const handleOpenModal = (study: CaseStudy) => {
    playTapSound(550, 0.03);
    setActiveModalStudy(study);
  };

  const handleCloseModal = () => {
    playTapSound(450, 0.02);
    setActiveModalStudy(null);
  };

  return (
    <section id="experience" className="py-20 sm:py-28 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm shadow-white/60"></span>
            <span>Track Record &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Experience &amp; <span className="silver-text">Leadership</span><span className="text-white">.</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
            Real organizational and logistical command deployments across high-density campus festivals, community leadership, and traditional resource logistics.
          </p>
        </ScrollReveal>

        {/* Filter Tabs - Transparent Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                playTapSound(500, 0.02);
                setSelectedFilter(filter);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 backdrop-blur-md ${
                selectedFilter === filter
                  ? 'bg-white/20 text-white font-black shadow-sm border border-white/30'
                  : 'bg-white/5 text-zinc-300 hover:text-white border border-white/10 hover:bg-white/15'
              }`}
            >
              {filter === 'All' ? 'All Case Studies' : filter}
            </button>
          ))}
        </div>

        {/* Case Studies Grid - Transparent Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {filteredStudies.map((study, idx) => (
            <ScrollReveal key={study.id} delay={idx * 100} className="h-full flex">
              <TiltCard className="w-full h-full flex flex-col">
                <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-xl flex flex-col justify-between h-full space-y-6 transition-all duration-300">
                  
                  {/* Top info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                          {getOrgIcon(study.id)}
                        </div>
                        <div>
                          <h3 className="text-sm font-black font-display text-white">
                            {study.organization}
                          </h3>
                          <p className="text-[11px] text-zinc-400">
                            {study.location}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-zinc-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/10 tabular-nums">
                        {study.period}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono font-bold text-zinc-300 block mb-1">
                        {study.role}
                      </span>
                      <h4 className="text-base font-black font-display text-white leading-snug">
                        {study.title}
                      </h4>
                    </div>

                    {/* Problem */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 block font-mono">
                        Problem Statement:
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 block font-mono">
                        Strategy &amp; Solution:
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Metrics & Action */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    {/* Quantified Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="space-y-0.5">
                          <p className="text-xs font-black text-white font-mono tabular-nums">
                            {m.value}
                          </p>
                          <p className="text-[10px] text-zinc-400 leading-tight">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Stack tags */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {study.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.techStack.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-500">
                          +{study.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Modal Button - Transparent */}
                    <button
                      type="button"
                      onClick={() => handleOpenModal(study as CaseStudy)}
                      className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-white transition-colors" />
                    </button>
                  </div>

                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      {activeModalStudy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div 
            className="w-full max-w-2xl bg-[#080808]/95 border border-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                  <span>{activeModalStudy.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalStudy.period}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {activeModalStudy.title}
                </h3>
                <p className="text-xs text-zinc-400">
                  {activeModalStudy.organization} — {activeModalStudy.location} ({activeModalStudy.role})
                </p>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Showcase */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              {activeModalStudy.metrics.map((m) => (
                <div key={m.label} className="space-y-1">
                  <span className="text-base sm:text-lg font-bold text-white font-mono block">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-zinc-400 block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Full Story Narrative */}
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-1.5">
                  The Problem &amp; Operational Friction
                </h4>
                <p className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-zinc-300">
                  {activeModalStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-1.5">
                  Strategic Solution &amp; Deployment
                </h4>
                <p className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-zinc-300">
                  {activeModalStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-1.5">
                  In-Depth Operational Narrative
                </h4>
                <p className="text-zinc-300 whitespace-pre-line leading-relaxed">
                  {activeModalStudy.fullCase}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-1.5">
                  Tools, Systems &amp; Methodologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeModalStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-zinc-800 flex justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-white transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

