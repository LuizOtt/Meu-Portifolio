'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const smallScreen = matchMedia('(max-width: 660px)');

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function icon(name) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  const use = document.createElementNS(ns, 'use');
  svg.setAttribute('class', 'icon');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('aria-hidden', 'true');
  use.setAttribute('href', '#' + name);
  svg.append(use);
  return svg;
}

$('#year').textContent = new Date().getFullYear();
const menu = $('.nav-toggle');
menu.hidden = false;
const setMenu = (open) => menu.setAttribute('aria-expanded', String(open));
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') === 'false'));
const navLinks = $$('.nav-links a');
navLinks.forEach((link) => link.addEventListener('click', () => {
  setMenu(false);
  if (smallScreen.matches) $(link.hash).focus({ preventScroll: true });
}));
$('.nav').addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
$$('main section').forEach((section) => section.tabIndex = -1);
let navigationFrame;
function updateNavigation() {
  navigationFrame = null;
  const probe = window.innerHeight * .32;
  let active = '#inicio';
  for (const section of $$('main section')) {
    if (section.getBoundingClientRect().top <= probe) active = '#' + section.id;
  }
  if (window.scrollY > 0 && window.scrollY + innerHeight >= document.documentElement.scrollHeight - 2) active = '#contato';
  for (const link of navLinks) {
    if (link.hash === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
addEventListener('scroll', () => {
  if (navigationFrame == null) navigationFrame = requestAnimationFrame(updateNavigation);
}, { passive: true });
updateNavigation();

const glow = $('.cursor-glow');
let glowFrame;
let point;
addEventListener('pointermove', (event) => {
  if (!finePointer.matches || reduced.matches || event.pointerType === 'touch') return;
  point = [event.clientX, event.clientY];
  if (glowFrame != null) return;
  glowFrame = requestAnimationFrame(() => {
    glowFrame = null;
    glow.style.setProperty('--glow-x', point[0] + 'px');
    glow.style.setProperty('--glow-y', point[1] + 'px');
    glow.classList.add('is-visible');
  });
}, { passive: true });
document.documentElement.addEventListener('pointerleave', () => {
  cancelAnimationFrame(glowFrame);
  glowFrame = null;
  glow.classList.remove('is-visible');
});

const heroCopy = $('.hero-copy');
const heroTech = $('.hero-copy h1 em');
if (finePointer.matches && !reduced.matches) {
  heroTech.addEventListener('pointermove', (event) => {
    const rect = heroCopy.getBoundingClientRect();
    heroCopy.style.setProperty('--title-x', (event.clientX - rect.left) + 'px');
    heroCopy.style.setProperty('--title-y', (event.clientY - rect.top) + 'px');
  });
  heroTech.addEventListener('pointerenter', () => heroCopy.classList.add('is-title-active'));
  heroTech.addEventListener('pointerleave', () => heroCopy.classList.remove('is-title-active'));
}

function setupBadge() {
  const control = $('.badge-control');
  const pivot = $('.badge-swing');
  const scene = $('.badge-scene');
  const flipButton = $('.badge-flip');
  const limit = (value, min, max) => Math.min(max, Math.max(min, value));
  let pointer = null, startX = 0, startY = 0, start = {}, last = {};
  let x = 0, y = 0, angle = 0, vx = 0, vy = 0, va = 0, frame = null, previous = 0, dragged = false, flipped = false;
  const draw = () => {
    pivot.style.setProperty('--badge-x', x.toFixed(1) + 'px');
    pivot.style.setProperty('--badge-y', y.toFixed(1) + 'px');
    pivot.style.setProperty('--tilt', angle.toFixed(2) + 'deg');
  };
  const stop = () => { cancelAnimationFrame(frame); frame = null; previous = 0; };
  const setFlip = (next) => {
    flipped = next;
    scene.classList.toggle('is-flipped', flipped);
    flipButton.setAttribute('aria-pressed', String(flipped));
    flipButton.textContent = flipped ? 'Ver frente' : 'Virar crachá';
  };
  function settle(now) {
    const dt = previous ? Math.min((now - previous) / 1000, .03) : 1 / 60;
    previous = now;
    vx += (-16 * x - 6.5 * vx) * dt;
    vy += (-13 * y - 6.2 * vy) * dt;
    va += (-66 * angle - 9 * va) * dt;
    x = limit(x + vx * dt, -58, 58);
    y = limit(y + vy * dt, -18, 36);
    angle = limit(angle + va * dt, -15, 15);
    draw();
    if (Math.max(Math.abs(x), Math.abs(y), Math.abs(angle), Math.abs(vx), Math.abs(vy), Math.abs(va)) < .08) {
      x = y = angle = vx = vy = va = 0;
      draw();
      stop();
      return;
    }
    frame = requestAnimationFrame(settle);
  }
  function reset() {
    stop();
    pointer = null;
    x = y = angle = vx = vy = va = 0;
    draw();
  }
  for (const query of [reduced, smallScreen]) query.addEventListener('change', reset);
  control.hidden = false;
  reset();
  const toggle = () => setFlip(!flipped);
  flipButton.addEventListener('click', (event) => { event.stopPropagation(); toggle(); });
  for (const link of $$('a', scene)) link.addEventListener('click', (event) => event.stopPropagation());
  control.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    stop();
    pointer = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    start = { x, y, angle };
    last = { x: event.clientX, y: event.clientY, time: performance.now() };
    dragged = false;
    control.setPointerCapture(pointer);
  });
  control.addEventListener('pointermove', (event) => {
    if (event.pointerId !== pointer) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.hypot(dx, dy) > 7) dragged = true;
    if (!dragged) return;
    if (Math.abs(dx) > Math.abs(dy)) event.preventDefault();
    x = limit(start.x + dx * .4, -58, 58);
    y = limit(start.y + dy * .2, -18, 36);
    angle = limit(start.angle - dx * .09, -15, 15);
    const now = performance.now();
    const dt = Math.max((now - last.time) / 1000, .016);
    vx = limit((event.clientX - last.x) * .4 / dt, -300, 300);
    vy = limit((event.clientY - last.y) * .2 / dt, -190, 190);
    va = limit(-(event.clientX - last.x) * .09 / dt, -180, 180);
    last = { x: event.clientX, y: event.clientY, time: now };
    draw();
  }, { passive: false });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    control.addEventListener(type, (event) => {
      if (event.pointerId !== pointer) return;
      pointer = null;
      if (dragged && !reduced.matches) frame = requestAnimationFrame(settle);
    });
  }
  control.addEventListener('click', (event) => {
    if (dragged && event.detail) return;
    toggle();
  });
}
setupBadge();

const projects = typeof portfolioProjects === 'undefined' ? [] : portfolioProjects;
const tools = typeof portfolioTools === 'undefined' ? [] : portfolioTools;

function tags(items) {
  const list = element('ul', 'tags');
  list.setAttribute('aria-label', 'Tecnologias e recursos');
  list.append(...items.map((item) => element('li', '', item)));
  return list;
}

function projectImage(project, eager = false) {
  const image = element('img');
  [image.width, image.height] = project.size;
  image.alt = project.alt;
  image.decoding = 'async';
  image.loading = eager ? 'eager' : 'lazy';
  image.addEventListener('error', () => {
    image.replaceWith(element('span', 'empty-message', 'Imagem indisponível.'));
  }, { once: true });
  image.src = 'assets/projects/' + project.image;
  return image;
}

function projectCard(project) {
  const item = element('li');
  const card = element('article', 'project-card');
  const media = element('div', 'project-media');
  media.append(projectImage(project));
  const body = element('div', 'project-body');
  const meta = element('div', 'project-meta');
  meta.append(element('span', '', project.category), element('span', 'project-type', project.type));
  const actions = element('div', 'project-actions');
  const button = element('button', 'button', 'Ver projeto');
  button.type = 'button';
  button.dataset.project = project.id;
  button.setAttribute('aria-label', 'Ver projeto: ' + project.title);
  button.setAttribute('aria-haspopup', 'dialog');
  const arrow = element('span', '', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  button.append(arrow);
  actions.append(button);
  body.append(meta, element('h3', '', project.title), element('p', '', project.description), actions);
  card.append(media, body);
  item.append(card);
  return item;
}

function setupTools() {
  const rail = $('.tools-rail');
  const track = $('.tools-track');
  if (!tools.length) {
    rail.replaceWith(element('p', 'empty-message', 'A lista de ferramentas está indisponível.'));
    return;
  }
  const makeItem = ([name, glyph], duplicate = false) => {
    const item = element('li', 'tool-item');
    item.append(icon(glyph), element('span', '', name));
    if (duplicate) item.setAttribute('aria-hidden', 'true');
    return item;
  };
  const originals = tools.map((tool) => makeItem(tool));
  track.append(...originals);
  let clones = [];
  let groupWidth = 0;
  let frame = null;
  let lastTime = 0;
  let scrollValue = 0;
  let hovered = false;
  let focused = false;
  let dragging = false;
  let manualUntil = 0;

  const stop = () => {
    if (frame != null) cancelAnimationFrame(frame);
    frame = null;
    lastTime = 0;
  };
  const canPlay = () => groupWidth > 0 && !reduced.matches && !hovered && !focused && !dragging && !document.hidden;
  const tick = (time) => {
    frame = null;
    if (!canPlay()) return;
    const elapsed = lastTime ? Math.min(time - lastTime, 42) : 0;
    lastTime = time;
    if (time > manualUntil) {
      scrollValue += elapsed * .018;
      if (scrollValue >= groupWidth) scrollValue -= groupWidth;
      rail.scrollLeft = scrollValue;
    }
    if (canPlay()) frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    const shouldPlay = canPlay();
    if (shouldPlay && frame == null) frame = requestAnimationFrame(tick);
    if (!shouldPlay) stop();
  };
  const measure = () => {
    if (reduced.matches) {
      clones.forEach((node) => node.remove());
      clones = [];
      groupWidth = 0;
      rail.scrollLeft = 0;
      stop();
      return;
    }
    if (!clones.length) {
      clones = tools.map((tool) => makeItem(tool, true));
      track.append(...clones);
    }
    const firstClone = clones[0];
    groupWidth = firstClone.offsetLeft - originals[0].offsetLeft;
    scrollValue = rail.scrollLeft % groupWidth;
    rail.scrollLeft = scrollValue;
    sync();
  };
  const pauseNow = () => {
    scrollValue = rail.scrollLeft;
    stop();
  };
  rail.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch') {
      hovered = true;
      pauseNow();
    }
  });
  rail.addEventListener('pointerleave', () => {
    hovered = false;
    sync();
  });
  rail.addEventListener('focusin', () => {
    focused = true;
    pauseNow();
  });
  rail.addEventListener('focusout', (event) => {
    focused = rail.contains(event.relatedTarget);
    sync();
  });
  rail.addEventListener('pointerdown', () => {
    dragging = true;
    manualUntil = performance.now() + 1200;
    pauseNow();
    rail.classList.add('is-dragging');
  });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    rail.addEventListener(type, () => {
      dragging = false;
      rail.classList.remove('is-dragging');
      scrollValue = rail.scrollLeft;
      sync();
    });
  }
  rail.addEventListener('wheel', () => {
    manualUntil = performance.now() + 1200;
    scrollValue = rail.scrollLeft;
  }, { passive: true });
  rail.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const distance = event.key === 'ArrowLeft' ? -160 : 160;
    rail.scrollBy({ left: distance, behavior: reduced.matches ? 'auto' : 'smooth' });
    manualUntil = performance.now() + 1200;
  });
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', measure);
  new ResizeObserver(measure).observe(rail);
  measure();
}
setupTools();

function setupProjects() {
  const rail = $('.project-rail');
  const list = $('.project-list');
  const controls = $('.carousel-controls');
  const originals = projects.map(projectCard);
  if (!originals.length) {
    rail.replaceWith(element('p', 'empty-message', 'Os projetos estão indisponíveis no momento.'));
    return;
  }
  list.append(...originals);
  const count = originals.length;
  for (const image of $$('img', list)) {
    if (!image.complete) image.addEventListener('load', () => requestAnimationFrame(measure), { once: true });
  }
  controls.hidden = count < 2;
  const pauseButton = $('[data-carousel="pause"]');
  const dialog = $('.case-dialog');
  let openingButton;
  let copies = [];
  let width = 0, cycle = 0, base = 0, step = 0;
  let hovered = false, focused = false, visible = false, paused = false;
  let frame = null, lastTime = 0, scrollValue = 0, manualUntil = performance.now() + 2200;
  let drag, suppressClick = false;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function replica(project) {
    const item = projectCard(project);
    item.setAttribute('aria-hidden', 'true');
    $('button', item).tabIndex = -1;
    return item;
  }

  function measure() {
    const logicalPosition = step ? (rail.scrollLeft - base) / step : 0;
    const loop = count > 3 && !reduced.matches;
    if (loop && !copies.length) {
      const before = projects.map(replica);
      const after = projects.map(replica);
      list.prepend(...before);
      list.append(...after);
      copies = [...before, ...after];
    } else if (!loop && copies.length) {
      copies.forEach((node) => node.remove());
      copies = [];
    }
    const left = (node) => node.getBoundingClientRect().left;
    width = rail.clientWidth;
    step = count > 1 ? left(originals[1]) - left(originals[0]) : 0;
    base = left(originals[0]) - left(list);
    cycle = copies.length ? left(copies[count]) - left(originals[0]) : 0;
    const position = loop ? ((logicalPosition % count) + count) % count : clamp(logicalPosition, 0, count - 1);
    rail.scrollLeft = base + position * step;
    scrollValue = rail.scrollLeft;
    manualUntil = Math.max(manualUntil, performance.now() + 1200);
    pauseButton.hidden = !cycle;
    sync();
  }

  function canPlay() {
    return cycle > 0 && !reduced.matches && !paused && !hovered && !focused && !drag && visible && !dialog.open && !document.hidden;
  }

  function sync() {
    if (canPlay()) {
      if (frame == null) frame = requestAnimationFrame(tick);
    } else if (frame != null) {
      cancelAnimationFrame(frame);
      frame = null;
      lastTime = 0;
    }
  }

  function wrap(value) {
    return base + (((value - base) % cycle) + cycle) % cycle;
  }

  function tick(time) {
    frame = null;
    if (!canPlay()) return;
    const elapsed = lastTime ? Math.min(time - lastTime, 42) : 0;
    lastTime = time;
    if (time > manualUntil) {
      if (Math.abs(rail.scrollLeft - scrollValue) > 1) scrollValue = rail.scrollLeft;
      scrollValue = wrap(scrollValue + elapsed * .019);
      rail.scrollLeft = scrollValue;
    }
    sync();
  }

  function go(delta) {
    if (!step) return;
    let next = base + (Math.round((rail.scrollLeft - base) / step) + delta) * step;
    if (cycle && (next < 0 || next > rail.scrollWidth - width)) {
      rail.scrollLeft = wrap(rail.scrollLeft);
      next = rail.scrollLeft + delta * step;
    }
    manualUntil = performance.now() + 3500;
    rail.scrollTo({ left: next, behavior: reduced.matches ? 'instant' : 'smooth' });
  }

  $('[data-carousel="previous"]').addEventListener('click', () => go(-1));
  $('[data-carousel="next"]').addEventListener('click', () => go(1));
  pauseButton.addEventListener('click', () => {
    paused = !paused;
    const label = paused ? 'Retomar movimento automático' : 'Pausar movimento automático';
    pauseButton.textContent = paused ? '▶' : 'Ⅱ';
    pauseButton.title = label;
    pauseButton.setAttribute('aria-label', label);
    sync();
  });
  rail.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    go(event.key === 'ArrowLeft' ? -1 : 1);
  });
  for (const node of [rail, controls]) {
    node.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'touch') { hovered = true; sync(); }
    });
    node.addEventListener('pointerleave', () => { hovered = false; sync(); });
    node.addEventListener('focusin', () => { focused = true; sync(); });
    node.addEventListener('focusout', (event) => {
      focused = rail.contains(event.relatedTarget) || controls.contains(event.relatedTarget);
      sync();
    });
  }
  rail.addEventListener('wheel', (event) => {
    if (event.deltaX || event.shiftKey) manualUntil = performance.now() + 3500;
  }, { passive: true });
  rail.addEventListener('dragstart', (event) => event.preventDefault());
  rail.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0 || event.clientY >= rail.getBoundingClientRect().top + rail.clientHeight) return;
    manualUntil = performance.now() + 3500;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, start: rail.scrollLeft, moving: false };
    sync();
  });
  rail.addEventListener('pointermove', (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    if (!drag.moving) {
      if (Math.abs(dx) < 7 || Math.abs(dx) < Math.abs(event.clientY - drag.y)) return;
      drag.moving = true;
      rail.setPointerCapture(event.pointerId);
      rail.classList.add('is-dragging');
    }
    rail.scrollLeft = drag.start - dx;
  });
  function endDrag(event) {
    if (!drag || drag.id !== event.pointerId) return;
    suppressClick = drag.moving;
    drag = null;
    setTimeout(() => suppressClick = false, 0);
    rail.classList.remove('is-dragging');
    scrollValue = rail.scrollLeft;
    manualUntil = performance.now() + 3500;
    sync();
  }
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) window.addEventListener(type, endDrag);

  rail.addEventListener('click', (event) => {
    if (suppressClick) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    const trigger = event.target.closest('[data-project]');
    const project = projects.find((item) => item.id === trigger?.dataset.project);
    if (!project) return;
    openingButton = trigger;
    const content = $('.case-content', dialog);
    const title = element('h2', '', project.title);
    title.id = 'case-title';
    const preview = element('figure');
    preview.append(projectImage(project, true), element('figcaption', '', project.type === 'Demonstração' ? 'Interface recriada com dados fictícios.' : project.id === 'b2b' ? 'Imagem ilustrativa original, sem dados de contatos.' : 'Captura do site público.'));
    const panel = (heading, text, wide = false) => {
      const card = element('section', 'case-panel' + (wide ? ' case-panel-wide' : ''));
      card.append(element('h3', '', heading), element('p', '', text));
      return card;
    };
    const technologies = element('section', 'case-panel case-panel-wide');
    technologies.append(element('h3', '', 'Tecnologias e funcionamento'));
    const techList = element('ul', 'case-tech');
    techList.append(...project.tools.map((tool) => element('li', '', tool)));
    technologies.append(techList, element('p', '', project.flow));
    const details = element('div', 'case-grid');
    details.append(
      panel('Problema', project.context),
      panel('Solução', project.goal),
      panel('Minha participação', project.role),
      panel('Resultado e próximos passos', project.result + ' ' + project.next),
      technologies
    );
    content.replaceChildren(
      element('p', 'eyebrow', project.category + ' · ' + project.type),
      title,
      element('p', 'case-lead', project.description),
      preview,
      details
    );
    if (project.url) {
      const link = element('a', 'button button-primary', 'Visitar site público ↗');
      Object.assign(link, { href: project.url, target: '_blank', rel: 'noopener noreferrer' });
      content.append(link);
    }
    dialog.scrollTop = 0;
    dialog.showModal();
    sync();
  }, { capture: true });
  dialog.addEventListener('close', () => {
    const restore = openingButton?.tabIndex === 0 ? openingButton : rail;
    restore.focus({ preventScroll: true });
    sync();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .15 }).observe(rail);
  new ResizeObserver(() => { if (rail.clientWidth !== width) measure(); }).observe(rail);
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', measure);
  measure();
}
setupProjects();
