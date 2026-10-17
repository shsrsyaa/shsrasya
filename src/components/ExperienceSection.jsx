import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  Calendar, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { MY_CASE_STUDIES, MY_ORGANIZATIONS } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

export const ExperienceSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalStudy, setActiveModalStudy] = useState(null);

  const filters = ['All', 'Operations & Logistics', 'Crowd & Safety Operations', 'Community Leadership'];

  const filteredStudies = selectedFilter === 'All'
    ? MY_CASE_STUDIES
    : MY_CASE_STUDIES.filter(s => s.category === selectedFilter);

  const getOrgIcon = (orgId) => {
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

  const handleOpenModal = (study) => {
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
            <span>Track Record &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Field Operations &amp; <span className="silver-text">Leadership</span><span className="text-white">.</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
            Real-world execution track records in festival perimeter security, multi-day traditional logistics, and community leadership.
          </p>
        </ScrollReveal>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                playTapSound(500, 0.02);
                setSelectedFilter(category);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === category
                  ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-16">
          {filteredStudies.map((study, idx) => (
            <ScrollReveal key={study.id} delay={idx * 80} className="h-full">
              <TiltCard className="h-full">
                <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-2xl space-y-5 h-full flex flex-col justify-between transition-all duration-300 group">
                  
                  <div className="space-y-4">
                    {/* Card Top: Org Icon & Period */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                        {getOrgIcon(study.id)}
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-white border border-white/15">
                        {study.period}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <div>
                      <h3 className="text-lg font-extrabold font-display text-white tracking-tight leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-xs font-semibold text-zinc-400 mt-1">
                        {study.role} · {study.organization}
                      </p>
                    </div>

                    {/* Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10">
                      {study.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className="text-sm font-extrabold text-white tracking-tight tabular-nums">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-zinc-400 font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Brief Problem / Impact Summary */}
                    <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                      {study.impact}
                    </p>
                  </div>

                  {/* Read Case Study Action Button */}
                  <button
                    type="button"
                    onClick={() => handleOpenModal(study)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Read Full Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-white" />
                  </button>

                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Organizational Experience Timeline */}
        <div className="border-t border-white/10 pt-12 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
            <span>Leadership History</span>
          </div>
          <h3 className="text-2xl font-extrabold font-display text-white tracking-tight">
            Institutional Experience &amp; Impact
          </h3>

          <div className="space-y-4">
            {MY_ORGANIZATIONS.map((org, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-extrabold text-white">
                      {org.role}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-400">
                      {org.organization} · {org.location}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/10 text-white border border-white/15 self-start sm:self-auto">
                    {org.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2 border-t border-white/10">
                  {org.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Detail Lightbox Modal */}
      {activeModalStudy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] bg-[#080808]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Case Study Dossier
                </span>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-white hover:bg-white/20 bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-white border border-white/15">
                  {activeModalStudy.category} · {activeModalStudy.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mt-2">
                  {activeModalStudy.title}
                </h3>
                <p className="text-xs font-semibold text-zinc-400">
                  {activeModalStudy.role} · {activeModalStudy.organization} ({activeModalStudy.location})
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                {activeModalStudy.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-base font-extrabold text-white tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Operational Challenge:
                </h4>
                <p className="text-zinc-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                  {activeModalStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Architectural Solution:
                </h4>
                <p className="text-zinc-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                  {activeModalStudy.solution}
                </p>
              </div>

              {/* Full Case Narrative */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Detailed Narrative:
                </h4>
                <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
                  {activeModalStudy.fullCase}
                </p>
              </div>

              {/* Tech stack */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Core Competencies &amp; Protocols:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalStudy.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-white/10 bg-black/40 flex justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
