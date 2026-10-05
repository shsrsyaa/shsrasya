import React from 'react';
import { X, GraduationCap, Briefcase, Award, Mail, Instagram, Linkedin, MapPin, Globe } from 'lucide-react';
import { MY_PROFILE, MY_EDUCATION, MY_ORGANIZATIONS } from '../portfolioConfig';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0c0d11] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-zinc-800 bg-zinc-950/80">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Curriculum Vitae / Resume
          </span>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm bg-[#08090c]">
          
          {/* Header */}
          <div className="border-b border-zinc-800 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold font-display text-white">
                  {MY_PROFILE.fullName} ({MY_PROFILE.name})
                </h1>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {MY_PROFILE.institution} · Department of Information Systems
                </p>
              </div>

              <div className="text-xs text-zinc-400 font-mono space-y-0.5 sm:text-right">
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2 border-b border-zinc-800/80 pb-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span>EDUCATION</span>
            </h2>

            <div className="space-y-3">
              {MY_EDUCATION.map((edu) => (
                <div key={edu.institution} className="space-y-0.5">
                  <div className="flex justify-between font-bold text-white text-xs">
                    <span>{edu.institution} | {edu.location}</span>
                    <span className="text-zinc-500 font-mono text-[11px]">{edu.period}</span>
                  </div>
                  <div className="text-zinc-300 text-xs">{edu.degree}</div>
                  <div className="text-zinc-400 text-[11px]">{edu.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2 border-b border-zinc-800/80 pb-1.5">
              <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
              <span>ORGANIZATIONAL &amp; LEADERSHIP EXPERIENCE</span>
            </h2>

            <div className="space-y-3.5">
              {MY_ORGANIZATIONS.map((org) => (
                <div key={org.organization + org.period} className="space-y-1">
                  <div className="flex justify-between font-bold text-white text-xs">
                    <span>{org.organization} | {org.location}</span>
                    <span className="text-zinc-500 font-mono text-[11px]">{org.period}</span>
                  </div>
                  <div className="text-zinc-300 text-xs font-semibold">{org.role}</div>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">{org.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keahlian & Software */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-800/80 text-xs">
            <div className="space-y-2">
              <span className="font-bold text-white block">Engineering &amp; Creative Suites:</span>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Frontend (HTML5, CSS3, JavaScript Vanilla) · Adobe Premiere Pro, CapCut, Alight Motion, Canva
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-bold text-white block">Core Focus &amp; Competencies:</span>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Product Design, Wireframing, Rapid Prototyping, Startup Management, GTM Strategy &amp; Operational Coordination
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
