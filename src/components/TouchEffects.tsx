import React, { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const TouchEffects: React.FC = () => {
  const [pointerPos, setPointerPos] = useState({ x: -200, y: -200 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let nextId = 0;

    const handlePointerMove = (e: PointerEvent) => {
      setPointerPos({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };

    const handlePointerDown = (e: PointerEvent) => {
      const newRipple: Ripple = {
        id: nextId++,
        x: e.clientX,
        y: e.clientY
      };
      setRipples((prev) => [...prev.slice(-5), newRipple]);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Subtle silver/ice-blue ambient aura following touch or pointer */}
      {isActive && (
        <div
          className="absolute w-80 h-80 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
          style={{
            left: `${pointerPos.x}px`,
            top: `${pointerPos.y}px`,
            background: 'radial-gradient(circle, rgba(228, 228, 231, 0.05) 0%, rgba(96, 165, 250, 0.03) 40%, transparent 70%)',
            filter: 'blur(35px)'
          }}
        />
      )}

      {/* Ripple wave on tap/touch in silver/subtle blue */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full border border-zinc-400/30 -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '50px',
            height: '50px',
            animationDuration: '550ms'
          }}
        />
      ))}
    </div>
  );
};
