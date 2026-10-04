import React, { useEffect, useState } from 'react';

export const ScrollBlurShield: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top scroll blur vignette */}
      <div
        className={`fixed top-0 left-0 right-0 h-24 pointer-events-none z-30 transition-opacity duration-300 ${
          scrollY > 40 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          maskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)'
        }}
      />

      {/* Bottom subtle edge blur */}
      <div
        className="fixed bottom-0 left-0 right-0 h-14 pointer-events-none z-30 opacity-70"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
        }}
      />
    </>
  );
};
