import React, { useState, useEffect } from 'react';
import { Navbar, NAV_TABS } from './components/Navbar';
import { Hero } from './components/Hero';
import { FocusSection } from './components/PassionsAndWork';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { TouchEffects } from './components/TouchEffects';
import { ScrollBlurShield } from './components/ScrollBlurShield';
import { InteractiveBackground } from './components/InteractiveBackground';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { playTapSound } from './utils/sound';

const VALID_TABS = ['about', 'focus', 'education', 'experience', 'skills', 'connect'];

const getInitialTab = () => {
  if (typeof document !== 'undefined') {
    const rootEl = document.getElementById('root');
    const dataPage = rootEl?.getAttribute('data-page');
    if (dataPage && VALID_TABS.includes(dataPage)) {
      return dataPage;
    }

    const metaPage = document.querySelector('meta[name="page-id"]')?.getAttribute('content');
    if (metaPage && VALID_TABS.includes(metaPage)) {
      return metaPage;
    }

    const path = window.location.pathname.toLowerCase();
    for (const tab of VALID_TABS) {
      if (path.includes(tab)) {
        return tab;
      }
    }

    const hash = window.location.hash.replace('#', '');
    if (VALID_TABS.includes(hash)) {
      return hash;
    }
  }

  return 'about';
};

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState('Web App Development');

  // Synchronize activeTab with URL pathname, popstate, and hash changes
  useEffect(() => {
    const syncFromLocation = () => {
      const tab = getInitialTab();
      setActiveTab(tab);
    };

    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  const handleTabChange = (tabId) => {
    if (VALID_TABS.includes(tabId)) {
      setActiveTab(tabId);
      
      const targetUrl = tabId === 'about' ? '/about.html' : `/${tabId}.html`;
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ tab: tabId }, '', targetUrl);
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tabId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForInquiry(serviceTitle);
    handleTabChange('connect');
  };

  const currentTabIndex = VALID_TABS.indexOf(activeTab);
  const prevTab = currentTabIndex > 0 ? VALID_TABS[currentTabIndex - 1] : null;
  const nextTab = currentTabIndex < VALID_TABS.length - 1 ? VALID_TABS[currentTabIndex + 1] : null;

  const getTabLabel = (id) => {
    const found = NAV_TABS.find((t) => t.id === id);
    return found ? found.label : id;
  };

  const getTabHref = (id) => {
    return id === 'about' ? '/about.html' : `/${id}.html`;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e4e4e7] relative selection:bg-red-600/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Interactive ITS Campus Background */}
      <InteractiveBackground />

      {/* Progressive Frosted Scroll Blur Shields */}
      <ScrollBlurShield />

      {/* Interactive Touch & Cursor Ripple Effects */}
      <TouchEffects />

      {/* Top Navigation */}
      <Navbar 
        activeTab={activeTab}
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 pt-18">
        
        {/* Dedicated Screen Content */}
        <div key={activeTab} className="animate-in fade-in duration-300 slide-in-from-bottom-2">
            
            {/* 1. About / Hero */}
            {activeTab === 'about' && (
              <Hero />
            )}

            {/* 2. Focus & Expertise */}
            {activeTab === 'focus' && (
              <FocusSection 
                onSelectService={handleSelectService} 
                onNavigateToTab={handleTabChange}
              />
            )}

            {/* 3. Education & Languages */}
            {activeTab === 'education' && (
              <EducationSection 
                onOpenResume={() => setIsResumeOpen(true)}
              />
            )}

            {/* 4. Experience & Leadership */}
            {activeTab === 'experience' && (
              <ExperienceSection />
            )}

            {/* 5. Skills & Toolkit */}
            {activeTab === 'skills' && (
              <SkillsSection 
                onNavigateToTab={handleTabChange}
              />
            )}

            {/* 6. Connect */}
            {activeTab === 'connect' && (
              <Contact 
                initialService={selectedServiceForInquiry} 
              />
            )}

            {/* Bottom Tab Pagination Controls (Native Multi-Page HTML Links) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/10 flex items-center justify-between gap-4">
              {prevTab ? (
                <a
                  href={getTabHref(prevTab)}
                  onClick={() => playTapSound(500, 0.03)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 backdrop-blur-md text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4 text-white transition-colors" />
                  <div>
                    <span className="block text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Previous</span>
                    <span>{getTabLabel(prevTab)}</span>
                  </div>
                </a>
              ) : <div />}

              {nextTab ? (
                <a
                  href={getTabHref(nextTab)}
                  onClick={() => playTapSound(500, 0.03)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 backdrop-blur-md text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95 group"
                >
                  <div className="text-right">
                    <span className="block text-[10px] text-zinc-400 group-hover:text-white uppercase tracking-wider font-semibold">Next</span>
                    <span>{getTabLabel(nextTab)}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white transition-colors" />
                </a>
              ) : <div />}
            </div>

          </div>

      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Digital CV / Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      
    </div>
  );
}
