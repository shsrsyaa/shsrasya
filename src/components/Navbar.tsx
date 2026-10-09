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

export interface TabItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
  href: string;
}

export const NAV_TABS: TabItem[] = [
  { id: 'about', label: 'About / Hero', shortLabel: 'About', icon: Sparkles, href: '/about.html' },
  { id: 'focus', label: 'Focus & Expertise', shortLabel: 'Focus', icon: Briefcase, href: '/focus.html' },
  { id: 'education', label: 'Education & Languages', shortLabel: 'Education', icon: GraduationCap, href: '/education.html' },
  { id: 'experience', label: 'Experience & Leadership', shortLabel: 'Experience', icon: FolderKanban, href: '/experience.html' },
  { id: 'skills', label: 'Skills & Toolkit', shortLabel: 'Skills', icon: Wrench, href: '/skills.html' },
  { id: 'connect', label: 'Connect', shortLabel: 'Connect', icon: Send, href: '/connect.html' }
];

interface NavbarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: string) => {
    playTapSound(500, 0.03);
    onTabChange(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060709]/90 backdrop-blur-xl border-b border-zinc-800 shadow-xl shadow-black/50'
          : 'bg-[#060709]/60 backdrop-blur-md border-b border-zinc-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-6">
        
        {/* Zone 1: Wordmark Brand Title (Strictly 1 clean text element) */}
        <a 
          href="/about.html"
          onClick={(e) => {
            e.preventDefault();
            playTapSound(480, 0.03);
            handleTabClick('about');
          }}
          className="text-base sm:text-lg font-bold font-display tracking-tight text-white whitespace-nowrap shrink-0 hover:text-zinc-200 transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50"></span>
          <span>Sahasrasya Studio</span>
        </a>

        {/* Zone 2: 6 Structured Active Tabs with lucide-react icons & real HTML links */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/70 p-1.5 rounded-xl border border-zinc-800/80">
          {NAV_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab.id);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/80 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-zinc-500'}`} />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Credentials / CV) & Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => {
              playTapSound(550, 0.04);
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>CV &amp; Dossier</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              playTapSound(500, 0.03);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c10]/98 backdrop-blur-2xl border-b border-zinc-800 px-5 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider px-2">
            Navigation Menu (HTML Pages)
          </div>
          
          <div className="flex flex-col space-y-1">
            {NAV_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab.id);
                  }}
                  className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-zinc-800 text-white font-semibold border border-zinc-700/80'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-zinc-400'}`} />
                    <span>{tab.label}</span>
                  </div>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <a
              href={MY_PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-zinc-200 bg-zinc-900 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram: @shsrsyaa</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl cursor-pointer transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>View Full CV &amp; Dossier</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

