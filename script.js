// ═══════════════════════════════════════
//   HASSAN SHATA PORTFOLIO — script.js
// ═══════════════════════════════════════

// ── CUSTOM CURSOR ──
const cur = document.getElementById('cur');

document.addEventListener('mousemove', e => {
  cur.style.left = (e.clientX - 5) + 'px';
  cur.style.top  = (e.clientY - 5) + 'px';
});

document.querySelectorAll('a, button, .skill-card, .soft-item, .exp-item, .edu-card, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => cur.classList.add('big'));
  el.addEventListener('mouseleave', () => cur.classList.remove('big'));
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('on'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── SMOOTH NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--orange)'
      : '';
  });
});

// ── NAV SCROLL EFFECT ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 50
    ? 'rgba(255,79,0,0.2)'
    : 'var(--line)';
});
