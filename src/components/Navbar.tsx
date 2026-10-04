import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Instagram, Linkedin } from 'lucide-react';
import { MY_PROFILE } from '../portfolioConfig';
import { playTapSound } from '../utils/sound';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', targetId: 'about' },
    { name: 'Focus', targetId: 'passions' },
    { name: 'Education', targetId: 'education' },
    { name: 'Experience', targetId: 'experience' },
    { name: 'Skills', targetId: 'skills' },
    { name: 'Connect', targetId: 'contact' }
  ];

  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    playTapSound(500, 0.03);
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060709]/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Wordmark (Deleted) */}
        <div />

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={(e) => scrollToSection(e, link.targetId)}
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-zinc-500/50 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Actions - CV */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => {
              playTapSound(550, 0.04);
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              playTapSound(500, 0.03);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-1.5 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060709]/95 backdrop-blur-2xl border-b border-zinc-800 px-6 py-5 space-y-3.5 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={(e) => scrollToSection(e, link.targetId)}
                className="text-left text-xs font-medium text-zinc-300 hover:text-white transition-colors py-1 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <a
              href={MY_PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-zinc-200 bg-zinc-900 rounded-lg border border-zinc-700/60"
            >
              <Instagram className="w-3.5 h-3.5 text-zinc-300" />
              <span>Instagram: @shsrsyaa</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-zinc-950 bg-white rounded-lg cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>View Full CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
