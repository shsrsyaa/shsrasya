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

type TabId = 'about' | 'focus' | 'education' | 'experience' | 'skills' | 'connect';

const VALID_TABS: TabId[] = ['about', 'focus', 'education', 'experience', 'skills', 'connect'];

const getInitialTab = (): TabId => {
  // 1. Check data-page on #root
  if (typeof document !== 'undefined') {
    const rootEl = document.getElementById('root');
    const dataPage = rootEl?.getAttribute('data-page') as TabId | null;
    if (dataPage && VALID_TABS.includes(dataPage)) {
      return dataPage;
    }

    // 2. Check meta tag
    const metaPage = document.querySelector('meta[name="page-id"]')?.getAttribute('content') as TabId | null;
    if (metaPage && VALID_TABS.includes(metaPage)) {
      return metaPage;
    }

    // 3. Check pathname (e.g. /focus.html, /education.html, /about.html)
    const path = window.location.pathname.toLowerCase();
    for (const tab of VALID_TABS) {
      if (path.includes(tab)) {
        return tab;
      }
    }

    // 4. Check hash
    const hash = window.location.hash.replace('#', '') as TabId;
    if (VALID_TABS.includes(hash)) {
      return hash;
    }
  }

  return 'about';
};

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>(getInitialTab);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Web App Development');

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

  const handleTabChange = (tabId: string) => {
    const targetTab = tabId as TabId;
    if (VALID_TABS.includes(targetTab)) {
      setActiveTab(targetTab);
      
      // Update browser URL to target HTML file seamlessly
      const targetUrl = targetTab === 'about' ? '/about.html' : `/${targetTab}.html`;
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ tab: targetTab }, '', targetUrl);
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tabId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    handleTabChange('connect');
  };

  // Sequential pagination helpers between discrete HTML tab pages
  const currentTabIndex = VALID_TABS.indexOf(activeTab);
  const prevTab = currentTabIndex > 0 ? VALID_TABS[currentTabIndex - 1] : null;
  const nextTab = currentTabIndex < VALID_TABS.length - 1 ? VALID_TABS[currentTabIndex + 1] : null;

  const getTabLabel = (id: TabId) => {
    const found = NAV_TABS.find((t) => t.id === id);
    return found ? found.label : id;
  };

  const getTabHref = (id: TabId) => {
    return id === 'about' ? '/about.html' : `/${id}.html`;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e4e4e7] relative selection:bg-red-600/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Interactive ITS Campus Background with Cinematic Blur & Shadow Vignette */}
      <InteractiveBackground />

      {/* Top & Bottom Progressive Frosted Scroll Blur Shields */}
      <ScrollBlurShield />

      {/* Interactive Touch & Cursor Ripples in Silver & Subtle Red */}
      <TouchEffects />

      {/* Top Navigation with 6 Structured Active Tabs in Strict Layout Sequence */}
      <Navbar 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 pt-18">
        
        {/* Dedicated Tab Bar Indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-white shadow-sm shadow-white/60 animate-pulse"></span>
            <span className="text-zinc-500">View:</span>
            <span className="text-white font-bold">{getTabLabel(activeTab)}</span>
            <span className="text-zinc-500">({currentTabIndex + 1} of {VALID_TABS.length})</span>
          </div>
        </div>

        {/* Dedicated Tabbed Screen */}
        <div key={activeTab} className="animate-in fade-in duration-300 slide-in-from-bottom-2">
            
            {/* 1. About / Hero */}
            {activeTab === 'about' && (
              <Hero 
                onOpenResume={() => setIsResumeOpen(true)}
                onNavigateToTab={handleTabChange}
              />
            )}

            {/* 2. Focus & Expertise (Placed BEFORE EducationSection) */}
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

            {/* Bottom Tab Pagination Controls - Transparent Buttons */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/10 flex items-center justify-between gap-4">
              {prevTab ? (
                <a
                  href={getTabHref(prevTab)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange(prevTab);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 backdrop-blur-md text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4 text-zinc-300" />
                  <div className="text-left">
                    <span className="block text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Previous Page</span>
                    <span>{getTabLabel(prevTab)}</span>
                  </div>
                </a>
              ) : <div />}

              {nextTab ? (
                <a
                  href={getTabHref(nextTab)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange(nextTab);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md text-white text-xs font-black transition-all cursor-pointer shadow-md active:scale-95 group"
                >
                  <div className="text-right">
                    <span className="block text-[10px] text-zinc-300 group-hover:text-white uppercase tracking-wider font-mono">Next Page</span>
                    <span>{getTabLabel(nextTab)}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white transition-colors" />
                </a>
              ) : <div />}
            </div>

          </div>

      </main>

      {/* Corporate Studio Footer */}
      <Footer onTabChange={handleTabChange} />

      {/* Digital CV / Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      
    </div>
  );
}



