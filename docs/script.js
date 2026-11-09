const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  links?.classList.toggle('is-open', !open);
});

links?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  });
});

document.getElementById('year').textContent = String(new Date().getFullYear());

const hero = document.querySelector('.hero');
const badgeRig = document.querySelector('.badge-rig');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const supportsPointerEffect = window.matchMedia('(pointer: fine)').matches
  && !prefersReducedMotion;

if (hero && supportsPointerEffect) {
  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    hero.style.setProperty('--pointer-x', `${x}px`);
    hero.style.setProperty('--pointer-y', `${y}px`);
    hero.classList.add('pointer-active');
  });

  hero.addEventListener('pointerleave', () => {
    hero.classList.remove('pointer-active');
  });
}

if (badgeRig && !prefersReducedMotion) {
  let previousScrollY = window.scrollY;
  let scrollSwing = 0;
  let swingFrame = null;

  const settleBadge = () => {
    scrollSwing *= 0.86;
    badgeRig.style.setProperty('--scroll-swing', `${scrollSwing.toFixed(2)}deg`);

    if (Math.abs(scrollSwing) > 0.04) {
      swingFrame = window.requestAnimationFrame(settleBadge);
    } else {
      scrollSwing = 0;
      badgeRig.style.setProperty('--scroll-swing', '0deg');
      swingFrame = null;
    }
  };

  window.addEventListener('scroll', () => {
    const delta = window.scrollY - previousScrollY;
    previousScrollY = window.scrollY;
    scrollSwing = Math.max(-5, Math.min(5, scrollSwing + delta * 0.035));

    if (!swingFrame) {
      swingFrame = window.requestAnimationFrame(settleBadge);
    }
  }, { passive: true });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

