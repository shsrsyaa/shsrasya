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
import { ChevronLeft, ChevronRight, Layers, LayoutGrid } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'tabbed' | 'scroll'>('tabbed');
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
    <div className="min-h-screen bg-[#060709] text-[#e4e4e7] relative selection:bg-blue-500/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Interactive ITS Campus Background with Cinematic Blur & Shadow Vignette */}
      <InteractiveBackground />

      {/* Top & Bottom Progressive Frosted Scroll Blur Shields */}
      <ScrollBlurShield />

      {/* Interactive Touch & Cursor Ripples in Silver & Subtle Blue */}
      <TouchEffects />

      {/* Top Navigation with 6 Structured Active Tabs in Strict Layout Sequence:
          1. About / Hero
          2. Focus & Expertise
          3. Education & Languages
          4. Experience & Leadership
          5. Skills & Toolkit
          6. Connect */}
      <Navbar 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 pt-18">
        
        {/* Dedicated Tab Bar Indicator & View Switcher */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-zinc-500">View:</span>
            <span className="text-zinc-200 font-semibold">{getTabLabel(activeTab)}</span>
            <span className="text-zinc-600">({currentTabIndex + 1} of {VALID_TABS.length})</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-900/80 border border-zinc-800">
            <button
              type="button"
              onClick={() => {
                playTapSound(480, 0.02);
                setViewMode('tabbed');
              }}
              title="Dedicated Tab View (Independent Screen per Tab)"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                viewMode === 'tabbed'
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Layers className="w-3 h-3 text-blue-400" />
              <span>Dedicated Tab</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playTapSound(480, 0.02);
                setViewMode('scroll');
              }}
              title="Continuous Scroll View (All Sections Stacked in Order)"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                viewMode === 'scroll'
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <LayoutGrid className="w-3 h-3 text-indigo-400" />
              <span>Full Page</span>
            </button>
          </div>
        </div>

        {/* VIEW MODE 1: DEDICATED TABBED SCREEN (Only active tab is mounted & rendered) */}
        {viewMode === 'tabbed' ? (
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

            {/* Bottom Tab Pagination Controls (Step through pages sequentially with real HTML links) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-zinc-800/80 flex items-center justify-between gap-4">
              {prevTab ? (
                <a
                  href={getTabHref(prevTab)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange(prevTab);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4 text-zinc-400" />
                  <div className="text-left">
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Previous Page</span>
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
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-all cursor-pointer shadow-md active:scale-95"
                >
                  <div className="text-right">
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Next Page</span>
                    <span>{getTabLabel(nextTab)}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-blue-600" />
                </a>
              ) : <div />}
            </div>

          </div>
        ) : (
          /* VIEW MODE 2: CONTINUOUS SCROLL VIEW (Exact requested layout order) */
          <div className="space-y-0">
            {/* 1. About / Hero */}
            <Hero 
              onOpenResume={() => setIsResumeOpen(true)}
              onNavigateToTab={handleTabChange}
            />

            {/* 2. Focus & Expertise (BEFORE EducationSection) */}
            <FocusSection 
              onSelectService={handleSelectService} 
              onNavigateToTab={handleTabChange}
            />

            {/* 3. Education & Languages */}
            <EducationSection 
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* 4. Experience & Leadership */}
            <ExperienceSection />

            {/* 5. Skills & Toolkit */}
            <SkillsSection 
              onNavigateToTab={handleTabChange}
            />

            {/* 6. Connect */}
            <Contact 
              initialService={selectedServiceForInquiry} 
            />
          </div>
        )}

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



