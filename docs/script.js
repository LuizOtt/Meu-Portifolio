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
  svg.setAttribute('aria-hidden', 'true');
  use.setAttribute('href', 'assets/icons.svg#' + name);
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

for (const link of $$('[data-profile]')) {
  const heroLink = link.cloneNode(true);
  heroLink.removeAttribute('data-profile');
  heroLink.className = 'button';
  heroLink.prepend(icon(link.dataset.profile));
  $('.hero-actions').append(heroLink);
}

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
const heroTitle = $('.hero-copy h1');
if (!reduced.matches) {
  const accessibleTitle = heroTitle.textContent.trim().replace(/\s+/g, ' ');
  const textNodes = [];
  const walker = document.createTreeWalker(heroTitle, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  let letterIndex = 0;
  for (const textNode of textNodes) {
    const fragment = document.createDocumentFragment();
    for (const character of textNode.textContent) {
      if (/\s/.test(character)) {
        fragment.append(character);
        continue;
      }
      const letter = element('span', 'hero-letter', character);
      letter.style.setProperty('--letter-index', letterIndex++);
      fragment.append(letter);
    }
    textNode.replaceWith(fragment);
  }
  heroTitle.setAttribute('aria-label', accessibleTitle);
}
if (finePointer.matches && !reduced.matches) {
  heroTitle.addEventListener('pointermove', (event) => {
    const rect = heroCopy.getBoundingClientRect();
    heroCopy.style.setProperty('--title-x', (event.clientX - rect.left) + 'px');
    heroCopy.style.setProperty('--title-y', (event.clientY - rect.top) + 'px');
  });
  heroTitle.addEventListener('pointerenter', () => heroCopy.classList.add('is-title-active'));
  heroTitle.addEventListener('pointerleave', () => heroCopy.classList.remove('is-title-active'));
}

function setupBadge() {
  const control = $('.badge-control');
  const pivot = $('.badge-swing');
  const limit = (n) => Math.max(-9, Math.min(9, n));
  let pointer, startX, startAngle, angle = 0, speed = 0, frame, previous, proximityTimer;
  let dragEnded = false;
  const draw = () => pivot.style.setProperty('--tilt', angle.toFixed(2) + 'deg');

  function settle(now) {
    const dt = previous ? Math.min((now - previous) / 1000, .025) : 1 / 60;
    previous = now;
    speed += (-90 * angle - 12 * speed) * dt;
    angle = limit(angle + speed * dt);
    if (Math.abs(angle) < .04 && Math.abs(speed) < .35) {
      angle = speed = 0;
      frame = previous = null;
    } else {
      frame = requestAnimationFrame(settle);
    }
    draw();
  }

  function stop() {
    cancelAnimationFrame(frame);
    frame = previous = null;
  }
  function reset() {
    stop();
    clearTimeout(proximityTimer);
    pointer = null;
    control.hidden = !finePointer.matches || reduced.matches || smallScreen.matches;
    angle = speed = 0;
    draw();
  }
  for (const query of [finePointer, reduced, smallScreen]) query.addEventListener('change', reset);
  reset();

  control.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    stop();
    pointer = event.pointerId;
    startX = event.clientX;
    startAngle = angle;
    dragEnded = false;
    control.setPointerCapture(pointer);
  });
  control.addEventListener('pointermove', (event) => {
    if (event.pointerId !== pointer) return;
    const dx = event.clientX - startX;
    if (Math.abs(dx) > 4) dragEnded = true;
    angle = limit(startAngle - dx * .105);
    draw();
  });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    control.addEventListener(type, (event) => {
      if (event.pointerId !== pointer) return;
      pointer = null;
      if (dragEnded) frame = requestAnimationFrame(settle);
    });
  }
  control.addEventListener('click', (event) => {
    if (dragEnded && event.detail) return;
    stop();
    speed = 45;
    frame = requestAnimationFrame(settle);
  });
  addEventListener('pointermove', (event) => {
    if (pointer || control.hidden || event.pointerType === 'touch') return;
    const rect = pivot.getBoundingClientRect();
    const distanceX = event.clientX - (rect.left + rect.width / 2);
    const distanceY = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(distanceX, distanceY);
    if (distance > 270) return;
    stop();
    angle = limit(angle * .72 - (distanceX / 270) * 1.15);
    draw();
    clearTimeout(proximityTimer);
    proximityTimer = setTimeout(() => { frame = requestAnimationFrame(settle); }, 90);
  }, { passive: true });
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
    hovered = true;
    scrollValue = rail.scrollLeft;
    stop();
  };
  rail.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch') pauseNow();
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
  let frame = null, lastTime = 0, scrollValue = 0, manualUntil = 0;
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
    const details = element('dl');
    for (const [label, value] of [
      ['Contexto e problema', project.context], ['Objetivo', project.goal],
      ['Minha participação', project.role], ['Tecnologias e recursos', project.tools.join(' · ')],
      ['Como funciona', project.flow], ['Resultado ou estágio atual', project.result],
      ['Aprendizados e próximos passos', project.next]
    ]) {
      const row = element('div');
      row.append(element('dt', '', label), element('dd', '', value));
      details.append(row);
    }
    content.replaceChildren(element('p', 'eyebrow', project.category + ' · ' + project.type), title, preview, details);
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
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .15 }).observe(rail);
  new ResizeObserver(() => { if (rail.clientWidth !== width) measure(); }).observe(rail);
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', measure);
  measure();
}
setupProjects();
