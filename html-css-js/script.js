// Vanilla JavaScript untuk Portofolio shsrsyaa-sites

(function () {
  'use strict';

  // 1. Audio Synthesizer untuk umpan balik taktil saat tombol diklik
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
      // Audio tidak didukung atau dicegah oleh peramban
    }
  }

  // 2. Navigasi halus tanpa memunculkan hash (#) pada bilah URL
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

    // Buka/tutup menu navigasi ponsel
    const toggleBtn = document.getElementById('mobileMenuToggle');
    if (toggleBtn && mobileDrawer) {
      toggleBtn.addEventListener('click', () => {
        playTap(480, 0.03);
        mobileDrawer.classList.toggle('hidden');
      });
    }

    // Tombol kembali ke atas pada footer
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        playTap(600, 0.04);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Efek keburaman navbar saat digulir
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 3. Efek Latar Belakang Tenang & Partikel Lambat Berkelanjutan
  function setupBackground() {
    const bgParallax = document.getElementById('bgParallax');
    let startTime = performance.now();

    function animateBg(time) {
      const elapsed = time - startTime;
      const panX = Math.sin(elapsed * 0.00012) * 12;
      const panY = Math.cos(elapsed * 0.00009) * 8;
      const scale = 1.05 + Math.sin(elapsed * 0.00007) * 0.015;

      if (bgParallax) {
        bgParallax.style.transform = `scale(${scale.toFixed(4)}) translate3d(${panX.toFixed(2)}px, ${panY.toFixed(2)}px, 0)`;
      }

      requestAnimationFrame(animateBg);
    }
    requestAnimationFrame(animateBg);

    // Partikel ambient lambat pada canvas
    const canvas = document.getElementById('ambientCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      const particleCount = Math.min(38, Math.floor((width * height) / 38000));
      const particles = [];
      const colors = [
        'rgba(56, 189, 248, ',
        'rgba(147, 197, 253, ',
        'rgba(167, 139, 250, ',
        'rgba(255, 255, 255, '
      ];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        particles.push({
          x,
          baseX: x,
          y: Math.random() * height,
          vy: -(Math.random() * 0.18 + 0.07),
          size: Math.random() * 2.2 + 0.8,
          alpha: Math.random() * 0.35 + 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
          swayOffset: Math.random() * 100
        });
      }

      function renderParticles(timestamp) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 7200) {
              const alpha = (1 - Math.sqrt(distSq) / 85) * 0.06;
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x = p.baseX + Math.sin((timestamp * 0.0004) + p.swayOffset) * 16;
          p.y += p.vy;

          if (p.y < -15) {
            p.y = height + 15;
            p.baseX = Math.random() * width;
            p.x = p.baseX;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();
        }

        requestAnimationFrame(renderParticles);
      }
      requestAnimationFrame(renderParticles);
    }
  }

  // 4. Efek Kemiringan 3D pada Kartu (Tilt Cards)
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

  // 5. Animasi Muncul Halus saat Digulir (IntersectionObserver)
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

  // 6. Modal Dialog CV & Cetak / PDF
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

  // 7. Salin Alamat Email ke Papan Klip
  function setupCopyEmail() {
    const copyBtn = document.getElementById('copyEmailBtn');
    const copyText = document.getElementById('copyEmailText');

    if (copyBtn && copyText) {
      copyBtn.addEventListener('click', () => {
        playTap(600, 0.04);
        const email = 'tuddechnnel07@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          const original = copyText.innerText;
          copyText.innerText = 'Alamat Email Berhasil Disalin!';
          setTimeout(() => {
            copyText.innerText = original;
          }, 2000);
        });
      });
    }
  }

  // Inisialisasi seluruh fitur saat dokumen siap
  document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupBackground();
    setupTiltCards();
    setupScrollReveal();
    setupModal();
    setupCopyEmail();
  });
})();
