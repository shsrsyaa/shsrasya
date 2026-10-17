import React from 'react';
import { X, GraduationCap, Briefcase, Award, Mail, Instagram, Linkedin, MapPin, Globe } from 'lucide-react';
import { MY_PROFILE, MY_EDUCATION, MY_ORGANIZATIONS } from '../portfolioConfig';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#080808]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-300 uppercase tracking-wider font-bold">
              Curriculum Vitae / Dossier
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white hover:bg-white/20 bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm bg-black/50">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h1 className="text-2xl font-extrabold font-display text-white">
                  {MY_PROFILE.fullName} <span className="silver-text">({MY_PROFILE.name})</span>
                </h1>
                <p className="text-xs text-zinc-300 mt-0.5 font-bold">
                  {MY_PROFILE.institution} · Department of Information Systems
                </p>
              </div>

              <div className="text-xs text-zinc-400 space-y-0.5 sm:text-right">
                <div>{MY_PROFILE.location}</div>
                <div>Instagram: @shsrsyaa</div>
                <div>{MY_PROFILE.email}</div>
              </div>
            </div>
            
            <p className="text-zinc-300 text-xs leading-relaxed pt-1">
              {MY_PROFILE.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-white/10 text-xs font-bold text-white uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-white" />
              <span>Education</span>
            </div>
            <div className="space-y-4">
              {MY_EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-extrabold text-white text-xs sm:text-sm">{edu.institution}</span>
                    <span className="text-zinc-400 text-xs">{edu.period}</span>
                  </div>
                  <div className="text-zinc-300 text-xs font-semibold">{edu.degree}</div>
                  <div className="text-zinc-400 text-[11px]">{edu.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Organizations */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-white/10 text-xs font-bold text-white uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-white" />
              <span>Leadership &amp; Field Experience</span>
            </div>
            <div className="space-y-4">
              {MY_ORGANIZATIONS.map((org, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-extrabold text-white text-xs sm:text-sm">{org.role}</span>
                    <span className="text-zinc-400 text-xs">{org.period}</span>
                  </div>
                  <div className="text-zinc-300 text-xs font-semibold">{org.organization} · {org.location}</div>
                  <div className="text-zinc-400 text-[11px] leading-relaxed">{org.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-white/10 text-xs font-bold text-white uppercase tracking-wider">
              <Award className="w-4 h-4 text-white" />
              <span>Core Disciplines</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-1">Frontend Engineering</div>
                <div className="text-zinc-400 text-[11px]">HTML5, CSS3, JavaScript, Tailwind CSS, Vite</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-1">Operations &amp; Security</div>
                <div className="text-zinc-400 text-[11px]">Crowd Flow Architecture, Festival Logistics</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex justify-between items-center text-xs">
          <span className="text-zinc-400 text-[11px]">
            Official Candidate Dossier · Verified Information
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-bold cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
