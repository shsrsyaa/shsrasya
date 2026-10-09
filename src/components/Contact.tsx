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
  Building2,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { MY_PROFILE, MY_SERVICES } from '../portfolioConfig';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';
import { playTapSound } from '../utils/sound';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'Web App Development',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleCopyEmail = () => {
    playTapSound(600, 0.04);
    navigator.clipboard.writeText(MY_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    playTapSound(650, 0.04);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    playTapSound(450, 0.02);
    setFormData({
      name: '',
      email: '',
      service: 'Web App Development',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <ScrollReveal className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono mb-2">
            <span>06. Direct Engagement</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
            Connect &amp; Initiate Consultation
          </h2>
          <p className="mt-3 text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Discuss web development architectures, rapid product prototyping, startup advisory, or explore venture collaborations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <ScrollReveal delay={50}>
              <TiltCard className="p-6 rounded-2xl bg-[#0c0e12] border border-zinc-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-display text-white">
                        Direct Email Channel
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        Primary communication inbox
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">Direct</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  {MY_PROFILE.email}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${MY_PROFILE.email}`}
                    className="p-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 transition-colors flex items-center justify-center"
                    title="Send Email Directly"
                  >
                    <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                  </a>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Social Channels: Instagram & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Instagram */}
              <ScrollReveal delay={100}>
                <TiltCard className="p-5 rounded-2xl bg-[#0c0e12] border border-zinc-800 shadow-md space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-pink-400">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">Social</span>
                    </div>
                    <h4 className="text-xs font-bold font-display text-white">
                      Instagram
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      @shsrsyaa
                    </p>
                  </div>

                  <a
                    href={MY_PROFILE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playTapSound(600, 0.03)}
                    className="w-full py-1.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-[11px] font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-1 transition-all"
                  >
                    <span>Follow / DM</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>
                </TiltCard>
              </ScrollReveal>

              {/* LinkedIn */}
              <ScrollReveal delay={150}>
                <TiltCard className="p-5 rounded-2xl bg-[#0c0e12] border border-zinc-800 shadow-md space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">Professional</span>
                    </div>
                    <h4 className="text-xs font-bold font-display text-white">
                      LinkedIn
                    </h4>
                    <p className="text-[11px] text-zinc-400 truncate">
                      I P. G. Divy Sahasrasya
                    </p>
                  </div>

                  <a
                    href={MY_PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playTapSound(600, 0.03)}
                    className="w-full py-1.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-[11px] font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-1 transition-all"
                  >
                    <span>Connect Profile</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>
                </TiltCard>
              </ScrollReveal>

            </div>

            {/* Studio Headquarters Trust Box */}
            <ScrollReveal delay={200}>
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400 space-y-2">
                <div className="flex items-center gap-2 text-zinc-200 font-medium">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Base of Operations &amp; Study</span>
                </div>
                <p className="text-[11px] leading-relaxed text-zinc-400">
                  Surabaya, East Java (Campus: ITS Sukolilo) · Origin: Semarapura, Bali, Indonesia. Available for remote and hybrid collaboration globally.
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <TiltCard>
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0e12] border border-zinc-800 shadow-2xl space-y-6">
                  
                  <div className="border-b border-zinc-800/80 pb-4">
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">
                      Consultation Brief
                    </span>
                    <h3 className="text-lg font-bold font-display text-white mt-1">
                      Start a Project or Venture Dialogue
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Fill out your requirements below for prompt technical and strategic review.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="p-6 rounded-xl bg-zinc-950 border border-blue-900/60 text-center space-y-4 animate-in fade-in duration-300">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold font-display text-white">
                          Inquiry Dispatched Successfully
                        </h4>
                        <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                          Thank you, <span className="text-white font-semibold">{formData.name}</span>! Your brief for <span className="text-blue-400 font-mono">{formData.service}</span> has been logged. You may also contact directly via <a href={`mailto:${MY_PROFILE.email}`} className="text-blue-400 underline">{MY_PROFILE.email}</a>.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-zinc-300 block">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alex Pratama"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-zinc-300 block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. alex@venture.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-300 block">
                          Primary Service Area of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                        >
                          {MY_SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title} ({s.subtitle})
                            </option>
                          ))}
                          <option value="Startup Venture Advisory">Startup MVP &amp; Venture Advisory</option>
                          <option value="General Collaboration / Other">General Collaboration / Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-300 block">
                          Project Brief &amp; Context
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Outline your timeline, current stage, objectives, and any relevant links..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 text-blue-600" />
                            <span>Dispatch Consultation Request</span>
                          </>
                        )}
                      </button>

                    </form>
                  )}

                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </div>
  );
};

