// Pure Vanilla JavaScript for shsrsyaa-sites

(function () {
  'use strict';

  // 1. Audio Synthesizer for subtle tactile feedback
  let audioCtx = null;
  function playTap(freq = 500, duration = 0.03) {
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) audioCtx = new AudioContextClass();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  // 2. Navigation without modifying URL hash (#)
  function setupNavigation() {
    const navButtons = document.querySelectorAll('[data-target]');
    const mobileDrawer = document.getElementById('mobileDrawer');

    navButtons.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        playTap(520, 0.03);

        const targetId = btn.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (mobileDrawer && !mobileDrawer.classList.contains('hidden')) {
          mobileDrawer.classList.add('hidden');
        }

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Mobile menu toggle
    const toggleBtn = document.getElementById('mobileMenuToggle');
    if (toggleBtn && mobileDrawer) {
      toggleBtn.addEventListener('click', () => {
        playTap(480, 0.03);
        mobileDrawer.classList.toggle('hidden');
      });
    }

    // Scroll to top button in footer
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        playTap(600, 0.04);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Navbar scroll blur effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 3. Interactive Parallax Background & Cursor Spotlight
  function setupBackground() {
    const bgParallax = document.getElementById('bgParallax');
    const spotlight = document.getElementById('spotlight');

    let mouseX = 0.5;
    let mouseY = 0.3;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', e => {
      const normX = e.clientX / window.innerWidth;
      const normY = e.clientY / window.innerHeight;
      mouseX = normX;
      mouseY = normY;

      targetX = (normX - 0.5) * -35;
      targetY = (normY - 0.5) * -25;

      if (spotlight) {
        spotlight.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        spotlight.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      if (spotlight) spotlight.style.opacity = '0';
    });

    function animateBg() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (bgParallax) {
        bgParallax.style.transform = `scale(1.08) translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      }

      requestAnimationFrame(animateBg);
    }
    animateBg();

    // Ambient floating sparks on canvas
    const canvas = document.getElementById('ambientCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      const particleCount = Math.min(45, Math.floor((width * height) / 30000));
      const particles = [];
      const colors = [
        'rgba(56, 189, 248, ',
        'rgba(147, 197, 253, ',
        'rgba(251, 191, 36, ',
        'rgba(255, 255, 255, '
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

      function renderParticles() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
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

        requestAnimationFrame(renderParticles);
      }
      renderParticles();
    }
  }

  // 4. Tilt Card Effect
  function setupTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // 5. Scroll Reveal with IntersectionObserver
  function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // 6. CV Modal Dialog & Print
  function setupModal() {
    const modal = document.getElementById('resumeModal');
    const openBtn = document.getElementById('openResumeBtn');
    const mobileOpenBtn = document.getElementById('mobileResumeBtn');
    const closeBtn = document.getElementById('closeResumeBtn');
    const footerCloseBtn = document.getElementById('modalCloseFooterBtn');
    const printBtn = document.getElementById('printCvBtn');

    function openModal() {
      playTap(550, 0.04);
      if (modal) modal.classList.remove('hidden');
    }

    function closeModal() {
      playTap(450, 0.03);
      if (modal) modal.classList.add('hidden');
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (mobileOpenBtn) mobileOpenBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (footerCloseBtn) footerCloseBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
      });
    }

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        playTap(600, 0.04);
        window.print();
      });
    }
  }

  // 7. Clipboard Email Copy
  function setupCopyEmail() {
    const copyBtn = document.getElementById('copyEmailBtn');
    const copyText = document.getElementById('copyEmailText');

    if (copyBtn && copyText) {
      copyBtn.addEventListener('click', () => {
        playTap(600, 0.04);
        const email = 'tuddechnnel07@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          const original = copyText.innerText;
          copyText.innerText = 'Copied to Clipboard!';
          setTimeout(() => {
            copyText.innerText = original;
          }, 2000);
        });
      });
    }
  }

  // Initialize all features once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupBackground();
    setupTiltCards();
    setupScrollReveal();
    setupModal();
    setupCopyEmail();
  });
})();
