const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

const cursorGlow = document.querySelector('.cursor-glow');
const supportsPointerGlow = window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion;

if (cursorGlow && supportsPointerGlow) {
  window.addEventListener('pointermove', (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
    cursorGlow.classList.add('is-visible');
  }, { passive: true });

  document.addEventListener('mouseleave', () => cursorGlow.classList.remove('is-visible'));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a')];

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach((anchor) => {
      anchor.classList.toggle('is-active', anchor.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });

sections.forEach((section) => navObserver.observe(section));

const badgeStage = document.getElementById('badge-stage');
const badge = document.getElementById('draggable-badge');
const strapLeft = document.querySelector('.badge-strap-left');
const strapRight = document.querySelector('.badge-strap-right');

if (badgeStage && badge && strapLeft && strapRight) {
  const motion = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    dragging: false,
    pointerId: null,
    originX: 0,
    originY: 0,
    startX: 0,
    startY: 0
  };

  const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

  const layout = () => {
    const width = badgeStage.clientWidth;
    const mobile = window.innerWidth <= 680;
    const tablet = window.innerWidth <= 980;
    return {
      center: width * (mobile ? 0.5 : tablet ? 0.52 : 0.61),
      top: mobile ? 175 : 195,
      anchorOffset: mobile ? 71 : 83,
      attachmentOffset: mobile ? 63 : 76,
      anchorY: mobile ? -78 : -88
    };
  };

  const positionStrap = (strap, anchorX, anchorY, attachmentX, attachmentY) => {
    const dx = attachmentX - anchorX;
    const dy = attachmentY - anchorY;
    const length = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI - 90;

    strap.style.left = `${anchorX}px`;
    strap.style.top = `${anchorY}px`;
    strap.style.height = `${length}px`;
    strap.style.transform = `translateX(-50%) rotate(${angle}deg)`;
  };

  const renderBadge = (time = 0) => {
    const dimensions = layout();
    const resting = !motion.dragging && Math.abs(motion.x) < .2 && Math.abs(motion.vx) < .2;
    const idleX = resting && !prefersReducedMotion ? Math.sin(time * .00105) * 2.2 : 0;
    const idleAngle = resting && !prefersReducedMotion ? Math.sin(time * .00105) * .65 : 0;
    const displayX = motion.x + idleX;
    const tilt = clamp(motion.vx * .45 + motion.x * .025 + idleAngle, -7, 7);

    badge.style.transform = `translateX(-50%) translate3d(${displayX}px, ${motion.y}px, 0) rotate(${tilt}deg)`;

    const cardCenter = dimensions.center + displayX;
    const attachmentY = dimensions.top + motion.y + 5;
    positionStrap(
      strapLeft,
      dimensions.center - dimensions.anchorOffset,
      dimensions.anchorY,
      cardCenter - dimensions.attachmentOffset,
      attachmentY
    );
    positionStrap(
      strapRight,
      dimensions.center + dimensions.anchorOffset,
      dimensions.anchorY,
      cardCenter + dimensions.attachmentOffset,
      attachmentY
    );
  };

  const animateBadge = (time) => {
    if (!motion.dragging && !prefersReducedMotion) {
      motion.vx += -motion.x * .045;
      motion.vy += -motion.y * .055;
      motion.vx *= .9;
      motion.vy *= .87;
      motion.x += motion.vx;
      motion.y += motion.vy;

      if (Math.abs(motion.x) < .02 && Math.abs(motion.vx) < .02) {
        motion.x = 0;
        motion.vx = 0;
      }
      if (Math.abs(motion.y) < .02 && Math.abs(motion.vy) < .02) {
        motion.y = 0;
        motion.vy = 0;
      }
    }

    renderBadge(time);
    window.requestAnimationFrame(animateBadge);
  };

  badge.addEventListener('pointerdown', (event) => {
    motion.dragging = true;
    motion.pointerId = event.pointerId;
    motion.startX = event.clientX;
    motion.startY = event.clientY;
    motion.originX = motion.x;
    motion.originY = motion.y;
    motion.vx = 0;
    motion.vy = 0;
    badge.setPointerCapture(event.pointerId);
  });

  badge.addEventListener('pointermove', (event) => {
    if (!motion.dragging || event.pointerId !== motion.pointerId) return;
    const previousX = motion.x;
    const previousY = motion.y;
    motion.x = clamp(motion.originX + event.clientX - motion.startX, -100, 100);
    motion.y = clamp(motion.originY + event.clientY - motion.startY, -65, 85);
    motion.vx = motion.x - previousX;
    motion.vy = motion.y - previousY;
  });

  const releaseBadge = (event) => {
    if (!motion.dragging || (event && event.pointerId !== motion.pointerId)) return;
    motion.dragging = false;
    if (event && badge.hasPointerCapture(event.pointerId)) badge.releasePointerCapture(event.pointerId);
    motion.pointerId = null;
  };

  badge.addEventListener('pointerup', releaseBadge);
  badge.addEventListener('pointercancel', releaseBadge);
  badge.addEventListener('lostpointercapture', () => {
    motion.dragging = false;
    motion.pointerId = null;
  });

  badge.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    motion.vx = motion.vx || 7;
    motion.vy = -2;
  });

  window.addEventListener('resize', () => renderBadge(performance.now()), { passive: true });
  window.requestAnimationFrame(animateBadge);
}

const carousel = document.querySelector('.project-carousel');
const track = document.querySelector('.project-track');
const slides = [...document.querySelectorAll('.project-slide')];
const dots = [...document.querySelectorAll('.carousel-dot')];
const previousButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

if (carousel && track && slides.length) {
  let activeIndex = 0;
  let autoplay = null;
  let touchStartX = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    dots.forEach((dot, dotIndex) => {
      const selected = dotIndex === activeIndex;
      dot.classList.toggle('is-active', selected);
      dot.setAttribute('aria-selected', String(selected));
    });
  };

  const stopAutoplay = () => {
    if (autoplay) window.clearInterval(autoplay);
    autoplay = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (prefersReducedMotion) return;
    autoplay = window.setInterval(() => showSlide(activeIndex + 1), 5200);
  };

  previousButton?.addEventListener('click', () => {
    showSlide(activeIndex - 1);
    startAutoplay();
  });
  nextButton?.addEventListener('click', () => {
    showSlide(activeIndex + 1);
    startAutoplay();
  });
  dots.forEach((dot, index) => dot.addEventListener('click', () => {
    showSlide(index);
    startAutoplay();
  }));

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', startAutoplay);
  carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
    stopAutoplay();
  }, { passive: true });
  carousel.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) showSlide(activeIndex + (distance < 0 ? 1 : -1));
    startAutoplay();
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  showSlide(0);
  startAutoplay();
}
