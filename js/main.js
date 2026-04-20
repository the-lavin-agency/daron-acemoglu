/* ============================================================
   DARON ACEMOGLU — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navigation scroll behavior ──────────────────────────── */
  const nav = document.querySelector('.site-nav');
  const updateNav = () => {
    if (window.scrollY > 40) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Mobile menu toggle ───────────────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    navLinks?.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle?.classList.remove('open');
      navLinks?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── Active nav link ─────────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Intersection Observer — fade-in sections ─────────────── */
  const fadeEls = document.querySelectorAll('.fade-in-section');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ── Contact form submission ──────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const original = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate submission — replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));

      btn.textContent = '✓ Message Sent';
      btn.style.background = '#2d6a4f';
      btn.style.color = '#fff';

      setTimeout(() => {
        contactForm.reset();
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.color = '';
      }, 4000);
    });
  }

  /* ── Smooth anchor scroll ────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height')) || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
