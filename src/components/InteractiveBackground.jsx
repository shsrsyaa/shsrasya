import React, { useEffect, useRef } from 'react';
import itsCampusBg from '../assets/images/Institut Teknologi Sepuluh November.jpg';

export const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const bgImageRef = useRef(null);

  // Slow, continuous background drift
  useEffect(() => {
    let animId;
    let startTime = performance.now();

    const animateDrift = (time) => {
      const elapsed = time - startTime;
      
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

  // Ambient constellation particles
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

    const particleCount = Math.min(38, Math.floor((width * height) / 38000));
    const particles = [];

    const colors = [
      'rgba(239, 68, 68, ',
      'rgba(248, 113, 113, ',
      'rgba(228, 228, 231, ',
      'rgba(255, 255, 255, '
    ];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      particles.push({
        x,
        baseX: x,
        y: Math.random() * height,
        vy: -(Math.random() * 0.18 + 0.07),
        speedModifier: Math.random() * 0.4 + 0.8,
        size: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
        pulseAngle: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        swayOffset: Math.random() * 100
      });
    }

    let particleAnimId;

    const render = (timestamp) => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 7200) {
            const alpha = (1 - Math.sqrt(distSq) / 85) * 0.12;
            ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.pulseAngle += 0.008;
        const currentAlpha = p.alpha + Math.sin(p.pulseAngle) * 0.08;
        
        p.x = p.baseX + Math.sin((timestamp * 0.0004) + p.swayOffset) * 16;
        p.y += p.vy * p.speedModifier;

        if (p.y < -15) {
          p.y = height + 15;
          p.baseX = Math.random() * width;
          p.x = p.baseX;
        }

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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]"
    >
      {/* 1. Campus Landmark with Slow Drift */}
      <div
        ref={bgImageRef}
        className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] transition-transform duration-1000 ease-out will-change-transform"
      >
        <img
          src={itsCampusBg}
          alt="Institut Teknologi Sepuluh Nopember Campus Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_30%] filter blur-[3px] md:blur-[4px] brightness-[0.38] saturate-[1.1] contrast-[1.15]"
        />
      </div>

      {/* 2. Red Crimson Atmospheric Tint Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(153, 27, 27, 0.25) 0%, rgba(69, 10, 10, 0.38) 50%, rgba(5, 5, 5, 0.8) 100%)'
        }}
      />

      {/* 3. Top-to-Bottom Shadow Vignette with Red Warmth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(5, 5, 5, 0.8) 0%, rgba(127, 29, 29, 0.20) 30%, rgba(5, 5, 5, 0.55) 60%, rgba(5, 5, 5, 0.95) 90%, #050505 100%)'
        }}
      />

      {/* 4. Radial Red Spotlight Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 85% 75% at 50% 30%, rgba(220, 38, 38, 0.22) 0%, rgba(153, 27, 27, 0.16) 40%, rgba(5, 5, 5, 0.75) 75%, #050505 100%)'
        }}
      />

      {/* 5. Breathing Crimson Ambient Aura */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] rounded-full pointer-events-none opacity-50 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(185, 28, 28, 0.18) 40%, transparent 70%)'
        }}
      />

      {/* 6. Lower Deep Crimson Ground Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[450px] pointer-events-none opacity-35 blur-[140px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(220, 38, 38, 0.35) 0%, transparent 65%)'
        }}
      />

      {/* 7. Ambient Slow-Floating Crimson & White Bubbles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-85"
      />

      {/* 8. Subtle Fine Grid Texture */}
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
