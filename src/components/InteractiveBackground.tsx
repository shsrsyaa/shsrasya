import React, { useEffect, useRef, useState } from 'react';
import itsCampusBg from '../assets/images/Institut Teknologi Sepuluh November.jpg';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.3 });
  const [isHovering, setIsHovering] = useState(false);

  // Parallax smooth interpolation
  const posRef = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0 });
  const bgImageRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = e.clientX / innerWidth;
      const normY = e.clientY / innerHeight;
      setMousePos({ x: normX, y: normY });
      setIsHovering(true);

      // Smooth parallax offset
      posRef.current.targetX = (normX - 0.5) * -35;
      posRef.current.targetY = (normY - 0.5) * -25;

      // Spotlight coordinates
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      posRef.current.targetX = 0;
      posRef.current.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth RAF loop for parallax
    let animId: number;
    const animate = () => {
      const state = posRef.current;
      state.currentX += (state.targetX - state.currentX) * 0.06;
      state.currentY += (state.targetY - state.currentY) * 0.06;

      if (bgImageRef.current) {
        bgImageRef.current.style.transform = `scale(1.08) translate3d(${state.currentX.toFixed(2)}px, ${state.currentY.toFixed(2)}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Ambient interactive particles reflecting campus atmosphere
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      baseAlpha: number;
      color: string;
    }

    const particleCount = Math.min(45, Math.floor((width * height) / 30000));
    const particles: Particle[] = [];

    const colors = [
      'rgba(56, 189, 248, ',  // ITS Blue
      'rgba(147, 197, 253, ', // Ice blue
      'rgba(251, 191, 36, ',  // Pagoda roof warm gold
      'rgba(255, 255, 255, '  // Starlight
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.15,
        size: Math.random() * 2 + 0.8,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let particleAnimId: number;
    let mousePixX = width * 0.5;
    let mousePixY = height * 0.3;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mousePixX += ((mousePos.x * width) - mousePixX) * 0.1;
      mousePixY += ((mousePos.y * height) - mousePixY) * 0.1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.x - mousePixX;
        const dy = p.y - mousePixY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && isHovering) {
          const force = (200 - dist) / 200;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
          p.alpha = Math.min(0.9, p.baseAlpha + force * 0.5);
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      particleAnimId = requestAnimationFrame(render);
    };

    particleAnimId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(particleAnimId);
    };
  }, [mousePos, isHovering]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#060709]"
    >
      {/* 1. Clear & Recognizable Campus Landmark Image with Parallax & Soft Professional Blur */}
      <div
        ref={bgImageRef}
        className="absolute -inset-12 w-[calc(100%+96px)] h-[calc(100%+96px)] transition-transform duration-100 ease-out will-change-transform"
      >
        <img
          src={itsCampusBg}
          alt="Institut Teknologi Sepuluh Nopember Campus Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_30%] filter blur-[3px] md:blur-[4px] brightness-[0.55] saturate-[1.2] contrast-[1.1]"
        />
      </div>

      {/* 2. Top-to-Bottom Shadow Vignette: subtle in center, smooth dark framing at navbar & footer */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(6, 7, 9, 0.72) 0%, rgba(6, 7, 9, 0.28) 20%, rgba(6, 7, 9, 0.38) 55%, rgba(6, 7, 9, 0.85) 85%, #060709 100%)'
        }}
      />

      {/* 3. Radial Shadow Vignette for Elegant Edge Falloff */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 80% at 50% 35%, transparent 25%, rgba(6, 7, 9, 0.55) 70%, #060709 100%)'
        }}
      />

      {/* 4. Interactive Cursor Spotlight: gently illuminates the architecture as cursor glides */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(245, 158, 11, 0.05) 35%, transparent 70%)',
          opacity: isHovering ? 1 : 0
        }}
      />

      {/* 5. Ambient Interactive Floating Sparks / Campus Atmosphere */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-90"
      />

      {/* 6. Subtle Modern Fine Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};
