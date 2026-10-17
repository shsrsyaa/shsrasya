import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Instagram, 
  Sparkles,
  Briefcase, 
  GraduationCap,
  FolderKanban, 
  Wrench,
  Send,
  ArrowUpRight
} from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { playTapSound } from '../utils/sound';

export const NAV_TABS = [
  { id: 'about', label: 'About', shortLabel: 'About', icon: Sparkles, href: '/about.html' },
  { id: 'focus', label: 'Focus & Expertise', shortLabel: 'Focus', icon: FolderKanban, href: '/focus.html' },
  { id: 'education', label: 'Education', shortLabel: 'Education', icon: GraduationCap, href: '/education.html' },
  { id: 'experience', label: 'Experience', shortLabel: 'Experience', icon: Briefcase, href: '/experience.html' },
  { id: 'skills', label: 'Skills & Toolkit', shortLabel: 'Skills', icon: Wrench, href: '/skills.html' },
  { id: 'connect', label: 'Connect', shortLabel: 'Connect', icon: Send, href: '/connect.html' },
];

export const Navbar = ({ activeTab, onTabChange, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId) => {
    playTapSound(500, 0.03);
    onTabChange(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/80'
          : 'bg-[#050505]/50 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-6">
        
        {/* Zone 1: Wordmark Brand Title (Clean typography without fake status dots) */}
        <a 
          href="/about.html"
          onClick={(e) => {
            e.preventDefault();
            playTapSound(480, 0.03);
            handleTabClick('about');
          }}
          className="text-lg sm:text-xl font-extrabold font-display tracking-tight text-white whitespace-nowrap shrink-0 hover:text-zinc-200 transition-colors"
        >
          <span>Sahasrasya<span className="silver-text">.</span></span>
        </a>

        {/* Zone 2: Clean Single-Line Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md p-1 rounded-xl border border-white/15">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab.id);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white/20 text-white shadow-sm border border-white/30 backdrop-blur-sm'
                    : 'text-zinc-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (CV / Dossier) & Mobile Drawer Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => {
              playTapSound(550, 0.04);
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>CV &amp; Dossier</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => {
              playTapSound(500, 0.03);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-lg cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-white/15 px-5 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-2 font-mono">
            Navigation Menu
          </div>
          
          <div className="flex flex-col space-y-1">
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab.id);
                  }}
                  className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                      : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={MY_PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-white/5 rounded-xl border border-white/15 hover:bg-white/15 transition-all"
            >
              <Instagram className="w-3.5 h-3.5 text-white" />
              <span>Instagram: @shsrsyaa</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-white bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md rounded-xl cursor-pointer transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>View Full CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
