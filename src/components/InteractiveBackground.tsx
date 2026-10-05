import React, { useEffect, useRef } from 'react';
import itsCampusBg from '../assets/images/Institut Teknologi Sepuluh November.jpg';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  // 1. Slow, continuous, autonomous background drift (constant majestic motion, NOT tied to cursor jerking)
  useEffect(() => {
    let animId: number;
    let startTime = performance.now();

    const animateDrift = (time: number) => {
      const elapsed = time - startTime;
      
      // Extremely slow, graceful organic pan and gentle breathing scale
      const panX = Math.sin(elapsed * 0.00012) * 12;
      const panY = Math.cos(elapsed * 0.00009) * 8;
      const scale = 1.05 + Math.sin(elapsed * 0.00007) * 0.015;

      if (bgImageRef.current) {
        bgImageRef.current.style.transform = `scale(${scale.toFixed(4)}) translate3d(${panX.toFixed(2)}px, ${panY.toFixed(2)}px, 0)`;
      }

      animId = requestAnimationFrame(animateDrift);
    };

    animId = requestAnimationFrame(animateDrift);
    return () => cancelAnimationFrame(animId);
  }, []);

  // 2. Slow-floating ambient bubbles & gentle constellation particles
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
      baseX: number;
      vy: number;
      speedModifier: number;
      size: number;
      alpha: number;
      pulseAngle: number;
      color: string;
      swayOffset: number;
    }

    const particleCount = Math.min(38, Math.floor((width * height) / 38000));
    const particles: Particle[] = [];

    const colors = [
      'rgba(56, 189, 248, ',  // Soft ITS blue
      'rgba(147, 197, 253, ', // Ice cyan
      'rgba(167, 139, 250, ', // Subtle lavender
      'rgba(255, 255, 255, '  // Pure starlight
    ];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      particles.push({
        x,
        baseX: x,
        y: Math.random() * height,
        vy: -(Math.random() * 0.18 + 0.07), // Very slow, calm upward float
        speedModifier: Math.random() * 0.4 + 0.8,
        size: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
        pulseAngle: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        swayOffset: Math.random() * 100
      });
    }

    let particleAnimId: number;

    const render = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle constellation connections between close slow particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 7200) { // ~85px distance
            const alpha = (1 - Math.sqrt(distSq) / 85) * 0.06;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw each bubble/particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Constant, ultra-slow floating motion (gentle sine wave sway)
        p.pulseAngle += 0.008;
        const currentAlpha = p.alpha + Math.sin(p.pulseAngle) * 0.08;
        
        // Gentle horizontal sway
        p.x = p.baseX + Math.sin((timestamp * 0.0004) + p.swayOffset) * 16;
        p.y += p.vy * p.speedModifier;

        // Wrap around smoothly
        if (p.y < -15) {
          p.y = height + 15;
          p.baseX = Math.random() * width;
          p.x = p.baseX;
        }

        // Draw soft ambient particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.05, Math.min(0.7, currentAlpha))})`;
        ctx.fill();
      }

      particleAnimId = requestAnimationFrame(render);
    };

    particleAnimId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(particleAnimId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#060709]"
    >
      {/* 1. Clear Campus Landmark with Slow Cinematic Drift */}
      <div
        ref={bgImageRef}
        className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] transition-transform duration-1000 ease-out will-change-transform"
      >
        <img
          src={itsCampusBg}
          alt="Institut Teknologi Sepuluh Nopember Campus Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_30%] filter blur-[3px] md:blur-[4px] brightness-[0.52] saturate-[1.15] contrast-[1.08]"
        />
      </div>

      {/* 2. Top-to-Bottom Shadow Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(6, 7, 9, 0.75) 0%, rgba(6, 7, 9, 0.28) 22%, rgba(6, 7, 9, 0.38) 55%, rgba(6, 7, 9, 0.88) 85%, #060709 100%)'
        }}
      />

      {/* 3. Radial Shadow Vignette for Smooth Focus */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 80% at 50% 35%, transparent 25%, rgba(6, 7, 9, 0.55) 70%, #060709 100%)'
        }}
      />

      {/* 4. Slow Breathing Celestial Ambient Aura (Enhancement Effect) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full pointer-events-none opacity-40 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)'
        }}
      />

      {/* 5. Ambient Slow-Floating Bubbles & Starlight Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-90"
      />

      {/* 6. Subtle Modern Fine Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};
