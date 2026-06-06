/* ═══════════════════════════════════════════════════════════════════
   HOBBITS' TREE — UI layer
   No left rail · Shire-record sidebar · Search · Tweaks
   ─────────────────────────────────────────────────────────────────── */
'use strict';

(function(){
const E = window.kingsEngine;
const PEOPLE_K = E.PEOPLE;
const PMAP_K = E.PMAP;
const ERAS_K = E.ERAS;
const eraOfPerson = E.eraOfPerson;
const eraOfIndex = E.eraOfIndex;
const isRuler = E.isRuler;
const reignSpan = E.reignSpan;
const t = E.t;
const DATA = E._DATA;

/* ═══ DATE FORMATTING ═══════════════════════════════════════════════ */
const MONTHS = {
  pl: ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'],
  en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  es: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
  fr: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
};
let curLang = 'en';

const L18N_LOCAL = {
  pl: {
    yrsThrone: y => `${y} ${y===1?'rok':((y%10>=2&&y%10<=4&&(y%100<10||y%100>=20))?'lata':'lat')} na tronie`,
    lived: (y,isF) => `${isF?'Przeżyła':'Przeżył'} ${y} ${y===1?'rok':((y%10>=2&&y%10<=4&&(y%100<10||y%100>=20))?'lata':'lat')}`,
    aged: (y,isF) => `Ma ${y} ${y===1?'rok':((y%10>=2&&y%10<=4&&(y%100<10||y%100>=20))?'lata':'lat')}`,
    regnal: i => `${i}. hobbit w rodowodzie`,
    connectionsTitle: 'Koligacje',
    father: 'Ojciec', mother: 'Matka',
    spouse: (isF) => isF ? 'Mąż' : 'Żona',
    childrenLabel: 'Dzieci',
    note_ph: 'np. siostra Billa Kłapouchego…',
    bio_ph: 'Napisz historię…',
    place_ph: 'miejsce',
    epithet_ph: 'przydomek',
    royalHouse: 'Z RODZIN SHIRE',
    yrsShort: 'lat', onThrone: 'w rodowodzie',
    evBirth: 'Narodziny', evAccession: 'Wstąpienie', evEndReign: 'Koniec', evDeath: 'Śmierć',
  },
  en: {
    yrsThrone: y => `${y} years in the lineage`,
    lived: (y) => `Lived ${y} years`,
    aged: (y) => `Aged ${y} years`,
    regnal: i => `${i}${i===1?'st':i===2?'nd':i===3?'rd':'th'} in the succession`,
    connectionsTitle: 'Connections',
    father: 'Father', mother: 'Mother',
    spouse: () => 'Spouse',
    childrenLabel: 'Children',
    note_ph: 'e.g. cousin of Meriadoc Brandybuck…',
    bio_ph: 'Write a biography…',
    place_ph: 'place',
    epithet_ph: 'epithet',
    royalHouse: 'OF THE SHIRE FAMILIES',
    yrsShort: 'yrs', onThrone: 'in lineage',
    evBirth: 'Birth', evAccession: 'Coming of age', evEndReign: 'End', evDeath: 'Death',
  },
  es: {
    yrsThrone: y => `${y} ${y===1?'año':'años'} en el linaje`,
    lived: (y) => `Vivió ${y} años`,
    aged: (y) => `Tiene ${y} años`,
    regnal: i => `${i}º en la sucesión`,
    connectionsTitle: 'Conexiones',
    father: 'Padre', mother: 'Madre',
    spouse: (isF) => isF ? 'Esposo' : 'Esposa',
    childrenLabel: 'Hijos',
    note_ph: 'p. ej. primo de Meriadoc Brandigamo…',
    bio_ph: 'Escribe una historia…',
    place_ph: 'lugar',
    epithet_ph: 'epíteto',
    royalHouse: 'DE LAS FAMILIAS DE LA COMARCA',
    yrsShort: 'años', onThrone: 'en el linaje',
    evBirth: 'Nacimiento', evAccession: 'Mayoría de edad', evEndReign: 'Fin', evDeath: 'Fallecimiento',
  },
  fr: {
    yrsThrone: y => `${y} ${y===1?'an':'ans'} dans la lignée`,
    lived: (y) => `Vécut ${y} ans`,
    aged: (y) => `Âgé(e) de ${y} ans`,
    regnal: i => `${i}${i===1?'er':'e'} dans la succession`,
    connectionsTitle: 'Alliances',
    father: 'Père', mother: 'Mère',
    spouse: (isF) => isF ? 'Époux' : 'Épouse',
    childrenLabel: 'Enfants',
    note_ph: "p. ex. cousin de Meriodoc Brandebouc…",
    bio_ph: 'Écrivez une biographie…',
    place_ph: 'lieu',
    epithet_ph: 'épithète',
    royalHouse: 'DES FAMILLES DE LA COMTÉ',
    yrsShort: 'ans', onThrone: 'dans la lignée',
    evBirth: 'Naissance', evAccession: 'Majorité', evEndReign: 'Fin', evDeath: 'Décès',
  },
};
const T2 = (k, ...args) => {
  const fn = (L18N_LOCAL[curLang] || L18N_LOCAL.en)[k] || (L18N_LOCAL.en[k] || k);
  return typeof fn === 'function' ? fn(...args) : fn;
};

function formatDate(val) {
  if (!val && val !== 0) return '';
  const s = String(val).trim();
  if (/^\d{4}$/.test(s)) return s;
  if (!/^\d/.test(s) || s.includes(' ')) return s;
  const parts = s.split('-');
  if (parts.length === 2) {
    const m = parseInt(parts[1],10)-1;
    return `${MONTHS[curLang][m]||parts[1]} ${parts[0]}`;
  }
  if (parts.length === 3) {
    const day = parseInt(parts[2],10);
    const m = parseInt(parts[1],10)-1;
    const yr = parts[0];
    const mName = MONTHS[curLang][m] || parts[1];
    if (curLang === 'pl') return `${day} ${mName} ${yr}`;
    if (curLang === 'en') return `${mName} ${day}, ${yr}`;
    if (curLang === 'es') return `${day} de ${mName} de ${yr}`;
    if (curLang === 'fr') return `${day} ${mName} ${yr}`;
  }
  return s;
}

/* ═══ RAIL — no-ops (hobbits tree has no left rail) ════════════════ */
function renderRail() { /* intentionally empty */ }
function updateRail()  { /* intentionally empty */ }

/* ═══ ROYAL DECREE SIDEBAR ═════════════════════════════════════════ */
const sidebarEl = document.getElementById('sidebar');
let sidebarHiddenByUser = false;

function openSidebar(id) {
  if (sidebarHiddenByUser) return;
  updateSidebar(id);
  sidebarEl.classList.add('open');
}
function closeSidebar() {
  sidebarEl.classList.remove('open');
}

document.getElementById('sb-handle').addEventListener('click', () => {
  if (sidebarEl.classList.contains('open')) {
    closeSidebar(); sidebarHiddenByUser = true;
  } else {
    sidebarHiddenByUser = false;
    openSidebar(E.currentFocusId || E.FOCUS_ID);
  }
});

function escHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* Shire seal SVG — family-coloured acorn/leaf motif */
function waxSealSVG(era) {
  const color = era?.color || '#2D6E2D';
  return `
    <svg class="wax-seal" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wax-grad-${era?.id||'x'}" cx="35%" cy="30%" r="70%">
          <stop offset="0%"  stop-color="${shade(color, 55)}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${shade(color, -35)}"/>
        </radialGradient>
      </defs>
      <path d="
        M 28 4
        L 32 6 L 36 4 L 38 8 L 43 8 L 44 12 L 48 14 L 47 18 L 51 22 L 49 26 L 52 30 L 49 34 L 50 38 L 45 39 L 44 44 L 40 44 L 37 48 L 32 47 L 28 50 L 24 47 L 19 48 L 16 44 L 12 44 L 11 39 L 6 38 L 7 34 L 4 30 L 7 26 L 5 22 L 9 18 L 8 14 L 12 12 L 13 8 L 18 8 L 20 4 L 24 6 Z
      " fill="url(#wax-grad-${era?.id||'x'})" stroke="${shade(color, -50)}" stroke-width="0.8" stroke-linejoin="round"/>
      <circle cx="28" cy="27" r="13" fill="none" stroke="${shade(color, -30)}" stroke-width="0.7" opacity="0.7"/>
      <!-- Leaf motif -->
      <path d="M28 17 C22 19 20 25 22 29 C24 33 28 34 28 34 C28 34 32 33 34 29 C36 25 34 19 28 17Z"
            fill="none" stroke="${shade(color, 40)}" stroke-width="1.2" opacity="0.7"/>
      <line x1="28" y1="17" x2="28" y2="34" stroke="${shade(color, 40)}" stroke-width="0.8" opacity="0.55"/>
    </svg>
  `;
}
function shade(hex, percent){
  const num = parseInt(hex.replace('#',''),16);
  const r = (num>>16)&255, g=(num>>8)&255, b=num&255;
  const adj = (c) => Math.max(0, Math.min(255, Math.round(c + (percent/100)*255)));
  return `#${[adj(r),adj(g),adj(b)].map(n=>n.toString(16).padStart(2,'0')).join('')}`;
}

/* Build a portrait medallion SVG for the sidebar */
function portraitMedallionHTML(person, era) {
  const r = 80, prh = 92, cx = 100, cy = 110;
  const color = era?.color || '#2D6E2D';
  return `
    <svg width="200" height="220" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg"
         data-portrait-svg data-id="${person.id}"
         style="cursor:pointer" title="Click to enlarge"
         onclick="window._enlargePortrait && window._enlargePortrait('${person.id}')">
      <defs>
        <clipPath id="sb-clip-${person.id}">
          <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${prh}"/>
        </clipPath>
        <radialGradient id="sb-rim-${person.id}" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#F5F0E4"/>
          <stop offset="100%" stop-color="${shade(color, 30)}"/>
        </radialGradient>
      </defs>
      <ellipse cx="${cx}" cy="${cy}" rx="${r+12}" ry="${prh+12}"
        fill="url(#sb-rim-${person.id})" stroke="${shade(color,-20)}" stroke-width="1.5"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${r+6}" ry="${prh+6}"
        fill="none" stroke="${color}" stroke-width="2.5"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${r+3}" ry="${prh+3}"
        fill="none" stroke="#A87010" stroke-width="0.8" opacity="0.75"/>
      <text x="${cx}" y="14" text-anchor="middle" fill="${color}" font-size="14" font-family="serif">✦</text>
      <text x="${cx}" y="216" text-anchor="middle" fill="${color}" font-size="14" font-family="serif">✦</text>
      <!-- Shire parchment fill — real image overlaid by tryLoadSidebarImage -->
      <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${prh}"
        fill="#EEF2E4" clip-path="url(#sb-clip-${person.id})"/>
      <g clip-path="url(#sb-clip-${person.id})"></g>
      <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${prh}"
        fill="none" stroke="${shade(color, -10)}" stroke-width="2"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${r-3}" ry="${prh-3}"
        fill="none" stroke="#A87010" stroke-width="0.6" opacity="0.55"/>
    </svg>
  `;
}

function tryLoadSidebarImage(person) {
  if (DATA.noPortrait) return;
  const pFolder = DATA.portraitFolder;
  const ag = E.ageGroup ? E.ageGroup(person) : 'adult';
  const imgSrc = person.image ||
    (pFolder ? `${pFolder}/${ag}_${person.g === 'F' ? 'female' : 'male'}.jpg` : null);
  if (!imgSrc) return;
  const probe = new Image();
  probe.onload = () => {
    const svg = document.querySelector(`[data-portrait-svg][data-id="${person.id}"]`);
    if (!svg) return;
    const r = 80, prh = 92, cx = 100, cy = 110;
    const ns = 'http://www.w3.org/2000/svg';
    const clipG = svg.querySelector('g[clip-path]');
    if (!clipG) return;
    clipG.innerHTML = '';
    const img = document.createElementNS(ns, 'image');
    img.setAttribute('href', imgSrc);
    img.setAttribute('x', cx - r);
    img.setAttribute('y', cy - prh);
    img.setAttribute('width', r * 2);
    img.setAttribute('height', prh * 2);
    img.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    clipG.appendChild(img);
    svg.dataset.portraitSrc = imgSrc;
  };
  probe.onerror = () => {};
  probe.src = imgSrc;
}

/* Click-to-enlarge portrait overlay */
window._enlargePortrait = function(personId) {
  const svg = document.querySelector(`[data-portrait-svg][data-id="${personId}"]`);
  const src = svg && svg.dataset.portraitSrc;
  const ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.72);z-index:99999;display:flex;align-items:center;justify-content:center;cursor:zoom-out';
  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = 'max-width:90vw;max-height:88vh;border-radius:4px;box-shadow:0 8px 40px rgba(0,0,0,0.7)';
    ov.appendChild(img);
  } else {
    const msg = document.createElement('div');
    msg.style.cssText = 'color:#E8D898;font-family:Cinzel,serif;font-size:14px;letter-spacing:2px;text-align:center;padding:40px';
    msg.textContent = 'No portrait available.\nClick the pencil to add an image URL.';
    ov.appendChild(msg);
  }
  ov.addEventListener('click', () => ov.remove());
  document.body.appendChild(ov);
};

function deriveEvents(p) {
  const events = [];
  const by = p.b ? String(p.b).match(/\d{4}/)?.[0] : null;
  const dy = p.d ? String(p.d).match(/\d{4}/)?.[0] : null;
  if (by) events.push({ year: parseInt(by,10), label: T2('evBirth') });
  if (p.rs) {
    const y = String(p.rs).match(/\d{4}/)?.[0];
    if (y) events.push({ year: parseInt(y,10), label: T2('evAccession') });
  }
  if (p.re && p.re !== p.rs) {
    const y = String(p.re).match(/\d{4}/)?.[0];
    if (y && y !== dy) events.push({ year: parseInt(y,10), label: T2('evEndReign') });
  }
  if (dy) events.push({ year: parseInt(dy,10), label: T2('evDeath') });
  return events.sort((a,b)=>a.year-b.year);
}

const FUN_FACTS_OVERRIDES = {
  en: {
    bilbo_baggins: "He found a magic ring in a goblin cave and thought nothing more of it for 60 years.",
    frodo_baggins: "He carried the One Ring to the fires of Mount Doom — a burden no other creature could have borne.",
    samwise_gamgee: "He carried Frodo up Mount Doom when Frodo could no longer walk. That was the real heroism.",
    merry_brandybuck: "He was there at the breaking of Isengard, and he stabbed the Witch-king of Angmar.",
    pippin_took: "He accidentally revealed himself to Sauron through a palantír and became the youngest Guard of the Citadel.",
    gandalf: "He fell with the Balrog into the deep places of the earth and returned as Gandalf the White.",
    gerontius_took: "The Old Took — he outlived everyone, ruling the Shire for 72 years and fathering 12 children.",
  },
  pl: {
    bilbo_baggins: "Znalazł magiczny pierścień w jaskini goblinów i nie przejmował się nim przez kolejne 60 lat.",
    frodo_baggins: "Zaniósł Jedyny Pierścień do ognia Góry Przeznaczenia — ciężar, którego żadne inne stworzenie nie mogłoby udźwignąć.",
    samwise_gamgee: "Wniósł Froda na Górę Przeznaczenia, gdy ten nie mógł już iść. To był prawdziwy heroizm.",
    gerontius_took: "Stary Tuk — przeżył wszystkich, rządząc Shire przez 72 lata i doczekawszy się 12 dzieci.",
  },
  es: {
    bilbo_baggins: "Encontró un anillo mágico en una cueva de goblins y no se preocupó por ello durante 60 años.",
    frodo_baggins: "Llevó el Único Anillo hasta los fuegos del Monte del Destino — una carga que ninguna otra criatura podría haber soportado.",
    samwise_gamgee: "Cargó a Frodo hasta el Monte del Destino cuando Frodo ya no podía caminar. Ese fue el verdadero heroísmo.",
  },
  fr: {
    bilbo_baggins: "Il trouva un anneau magique dans une grotte de gobelins et n'y pensa plus pendant 60 ans.",
    frodo_baggins: "Il porta l'Anneau Unique jusqu'aux feux de la Montagne du Destin — un fardeau qu'aucune autre créature n'aurait pu supporter.",
    samwise_gamgee: "Il porta Frodon jusqu'au sommet de la Montagne du Destin quand Frodon ne pouvait plus marcher. C'était le vrai héroïsme.",
  },
};
function deriveFunFact(p) {
  const overrides = FUN_FACTS_OVERRIDES[curLang] || FUN_FACTS_OVERRIDES.en;
  if (overrides[p.id]) return overrides[p.id];
  const bioText = typeof p.bio === 'object' ? (p.bio[curLang] || p.bio.en || p.bio.pl || '') : (p.bio || '');
  if (!bioText) return null;
  const paras = bioText.split(/\n\n+/);
  const search = paras[1] || paras[0] || '';
  const sentences = search.split(/(?<=[.!?])\s+/).filter(s => s.length > 30 && s.length < 200);
  return sentences[0] || null;
}

function bioParagraphs(p) {
  const txt = typeof p.bio === 'object' ? (p.bio[curLang] || p.bio.en || p.bio.pl || '') : (p.bio || '');
  if (!txt) return [];
  return txt.split(/\n\n+/).map(s => s.trim()).filter(Boolean);
}

function chip(id) {
  const p = PMAP_K[id]; if (!p) return '';
  const initial = (p.fn || '?').charAt(0);
  const isF = p.g === 'F';
  return `<button class="chip" onclick="window.kingsUI.goto('${id}')">
    <span class="chip-dot${isF ? ' fem' : ''}">${escHtml(initial)}</span>
    ${escHtml(p.fn)} ${escHtml(p.ln)}
  </button>`;
}

/* ═══ EDIT MODE ════════════════════════════════════════════════════ */
let editMode = false;
function setEditMode(on) {
  editMode = on;
  sidebarEl.classList.toggle('edit-mode', on);
  const btn = document.getElementById('edit-pencil-btn');
  if (btn) { btn.classList.toggle('active', on); btn.innerHTML = on ? '🔓' : '✏️'; }
  const sb = document.getElementById('sb-content');
  if (sb) {
    sb.querySelectorAll('[data-edit]').forEach(el => el.setAttribute('contenteditable', on ? 'true' : 'false'));
    sb.querySelectorAll('[data-edit-conn]').forEach(el => el.setAttribute('contenteditable', on ? 'true' : 'false'));
  }
}

/* ═══ EDITABLE OVERRIDES (localStorage) ════════════════════════════ */
const OVERRIDES_KEY = 'hobbits_overrides';
let OVERRIDES = {};
try { OVERRIDES = JSON.parse(localStorage.getItem(OVERRIDES_KEY) || '{}'); }
catch(e) { OVERRIDES = {}; }

function getPerson(id) {
  const base = PMAP_K[id];
  if (!base) return null;
  const ov = OVERRIDES[id];
  if (!ov) return base;
  const merged = { ...base, ...ov };
  if (typeof base.bio === 'object' && typeof ov.bio === 'object') {
    merged.bio = { ...base.bio, ...ov.bio };
  }
  return merged;
}
function setOverride(id, field, value) {
  if (!OVERRIDES[id]) OVERRIDES[id] = {};
  if (field.startsWith('bio.')) {
    const lang = field.split('.')[1];
    if (!OVERRIDES[id].bio) OVERRIDES[id].bio = {};
    OVERRIDES[id].bio[lang] = value;
    PMAP_K[id].bio = { ...(typeof PMAP_K[id].bio === 'object' ? PMAP_K[id].bio : {}), [lang]: value };
  } else if (field.startsWith('conn.')) {
    const otherId = field.slice(5);
    if (!OVERRIDES[id].conn) OVERRIDES[id].conn = {};
    OVERRIDES[id].conn[otherId] = value;
  } else {
    OVERRIDES[id][field] = value;
    PMAP_K[id][field] = value;
  }
  try { localStorage.setItem(OVERRIDES_KEY, JSON.stringify(OVERRIDES)); } catch(e){}
}
function getConnectionNote(id, otherId) {
  return OVERRIDES[id]?.conn?.[otherId] || '';
}
Object.keys(OVERRIDES).forEach(id => {
  const o = OVERRIDES[id];
  Object.keys(o).forEach(k => {
    if (k === 'bio') {
      PMAP_K[id] && (PMAP_K[id].bio = { ...(typeof PMAP_K[id].bio === 'object' ? PMAP_K[id].bio : {}), ...o.bio });
    } else if (k !== 'conn') {
      if (PMAP_K[id]) PMAP_K[id][k] = o[k];
    }
  });
});

function updateSidebar(personId) {
  const p = getPerson(personId);
  if (!p) return;
  const era = eraOfPerson(personId);
  const sb = document.getElementById('sb-content');

  sb.style.setProperty('--era-color', era?.color || '#2D6E2D');
  sb.style.setProperty('--era-color-soft', era?.soft || '#6AA850');

  const ruler = isRuler(p);
  const span = ruler ? reignSpan(p) : null;

  const chain = DATA.succession || [];
  const succIdx = chain.indexOf(personId);
  const regnalLabel = succIdx >= 0 ? T2('regnal', succIdx + 1) : '';

  const isF = p.g === 'F';
  const bornLabel = isF ? t('born_f') : t('born');
  const diedLabel = isF ? t('died_f') : t('died');
  const dateLines = [];
  if (p.b) {
    let s = `<span class="dl-label">${bornLabel}</span> <strong data-edit data-id="${personId}" data-field="b">${escHtml(formatDate(p.b))}</strong>`;
    s += ` <span class="symbol">·</span> <span data-edit data-id="${personId}" data-field="bp" data-placeholder="${T2('place_ph')}">${escHtml(p.bp || '')}</span>`;
    dateLines.push(s);
  }
  if (p.d) {
    let s = `<span class="dl-label">${diedLabel}</span> <strong data-edit data-id="${personId}" data-field="d">${escHtml(formatDate(p.d))}</strong>`;
    s += ` <span class="symbol">·</span> <span data-edit data-id="${personId}" data-field="dp" data-placeholder="${T2('place_ph')}">${escHtml(p.dp || '')}</span>`;
    dateLines.push(s);
  }

  let lifespanBadge = '';
  const by = parseInt(String(p.b||'').match(/\d{4}/)?.[0] || '', 10);
  const dy = parseInt(String(p.d||'').match(/\d{4}/)?.[0] || '', 10);
  if (by) {
    const endY = dy || new Date().getFullYear();
    const lived = endY - by;
    if (lived > 0 && lived < 200) {
      const label = dy ? T2('lived', lived, isF) : T2('aged', lived, isF);
      lifespanBadge = `<div class="lifespan-badge">${escHtml(label)}</div>`;
    }
  }

  let reignLine = '';
  if (ruler && span) {
    const label = `${t('reigned')}: <strong>${span.start} – ${span.end}</strong> <span class="symbol">·</span> ${T2('yrsThrone', span.years)}`;
    reignLine = `<div class="decree-dates" style="margin-top:8px">${label}</div>`;
  }

  const events = ruler ? deriveEvents(p) : [];
  const funFact = deriveFunFact(p);
  const paras = bioParagraphs(p);
  const bioText = typeof p.bio === 'object' ? (p.bio[curLang] || p.bio.en || '') : (p.bio || '');

  const parentIds = (p.p || []).filter(id => PMAP_K[id]);
  const spouseIds = (p.s || []).filter(id => PMAP_K[id]);
  const childIds = PEOPLE_K.filter(c => (c.p || []).includes(personId)).map(c => c.id);
  const father = parentIds.map(id=>PMAP_K[id]).find(pp=>pp.g==='M');
  const mother = parentIds.map(id=>PMAP_K[id]).find(pp=>pp.g==='F');

  sb.innerHTML = `
    <div class="decree-head">
      <div class="seal-row">
        ${waxSealSVG(era)}
        <div class="seal-meta">
          <div class="regnal-num">${succIdx >= 0 ? escHtml(regnalLabel) : T2('royalHouse')}</div>
          <div class="dynasty-line">${era ? escHtml(era.name[curLang] || era.name.pl || era.name.en) : 'The Shire'}</div>
        </div>
      </div>
      <h1 class="decree-name" data-edit data-id="${personId}" data-field="fn">${escHtml(p.fn || '')}</h1>
      <div class="decree-epithet" data-edit data-id="${personId}" data-field="ln" data-placeholder="${T2('epithet_ph')}">${escHtml(p.ln || '')}</div>
      ${dateLines.length ? `<div class="decree-dates">${dateLines.join('<br>')}</div>` : ''}
      ${reignLine}
      ${lifespanBadge}
    </div>

    <div class="portrait-frame">
      ${portraitMedallionHTML(p, era)}
    </div>

    ${funFact ? `
    <div class="fun-fact">
      <div class="fun-fact-label">${escHtml(t('funFact'))}</div>
      <div class="fun-fact-body" data-edit data-id="${personId}" data-field="funFact">${escHtml(funFact)}</div>
    </div>
    ` : ''}

    ${bioText || paras.length ? `
    <div class="decree-section">
      <div class="section-rule">
        <span class="section-rule-title">${escHtml(t('biography'))}</span>
      </div>
      <div class="bio-prose" data-edit data-id="${personId}" data-field="bio.${curLang}" data-placeholder="${T2('bio_ph')}">${
        paras.length
          ? paras.map(para => `<p>${escHtml(para).replace(/\n/g, '<br>')}</p>`).join('')
          : escHtml(bioText)
      }</div>
    </div>
    ` : `<div class="decree-section"><div class="bio-prose" data-edit data-id="${personId}" data-field="bio.${curLang}" data-placeholder="${T2('bio_ph')}"></div></div>`}

    ${events.length >= 2 ? `
    <div class="decree-section events-strip">
      <div class="section-rule">
        <span class="section-rule-title">${escHtml(t('keyEvents'))}</span>
      </div>
      <div class="events-rail" id="events-rail-${personId}"></div>
    </div>
    ` : ''}

    <div class="decree-section">
      <div class="section-rule">
        <span class="section-rule-title">${T2('connectionsTitle')}</span>
      </div>
      <div class="connections-grid">
        ${father ? connectionRow(T2('father'), [father.id], personId) : ''}
        ${mother ? connectionRow(T2('mother'), [mother.id], personId) : ''}
        ${spouseIds.length ? connectionRow(T2('spouse', isF), spouseIds, personId) : ''}
        ${childIds.length ? connectionRow(T2('childrenLabel'), childIds, personId) : ''}
      </div>
    </div>

    <div style="height: 40px"></div>
  `;

  if (events.length >= 2) {
    const railEl = document.getElementById(`events-rail-${personId}`);
    if (railEl) {
      const minY = events[0].year;
      const maxY = events[events.length - 1].year;
      const range = Math.max(1, maxY - minY);
      events.forEach(ev => {
        const pct = ((ev.year - minY) / range) * 100;
        const pt = document.createElement('div');
        pt.className = 'event-point';
        pt.style.left = pct + '%';
        pt.innerHTML = `<span class="event-year">${ev.year}</span><span class="event-tip">${escHtml(ev.label)}</span>`;
        railEl.appendChild(pt);
      });
    }
  }

  wireEditableFields(sb);
  tryLoadSidebarImage(p);
}

function connectionRow(label, ids, ownerId) {
  return `
    <div class="connection-row">
      <div class="connection-label">${escHtml(label)}</div>
      <div class="connection-people">
        ${ids.map(id => {
          const pp = PMAP_K[id]; if (!pp) return '';
          const era2 = eraOfPerson(id);
          const note = getConnectionNote(ownerId, id);
          return `
            <div class="connection-item">
              <span class="connection-name" onclick="window.kingsUI.goto('${id}')">
                <span>${escHtml(pp.fn)} ${escHtml(pp.ln || '')}</span>
                ${era2 ? `<span class="connection-name-flag" style="color:${era2.color}">${escHtml(era2.name[curLang] || era2.name.en)}</span>` : ''}
              </span>
              <div class="connection-note"
                data-edit-conn
                data-owner="${ownerId}" data-other="${id}"
                data-placeholder="${T2('note_ph')}">${escHtml(note)}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function wireEditableFields(scope) {
  scope.querySelectorAll('[data-edit]').forEach(el => {
    el.setAttribute('contenteditable', editMode ? 'true' : 'false');
    el.setAttribute('spellcheck', 'false');
    el.addEventListener('blur', () => {
      const id = el.dataset.id;
      const field = el.dataset.field;
      if (!id || !field) return;
      const value = (field === 'bio.' + curLang)
        ? el.innerText.trim()
        : el.textContent.trim();
      setOverride(id, field, value);
      if (['fn','ln','b','d','rs','re'].includes(field)) {
        if (E.currentFocusId) E.transitionTo(E.currentFocusId, false);
      }
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey && el.tagName !== 'DIV') {
        e.preventDefault(); el.blur();
      }
    });
  });
  scope.querySelectorAll('[data-edit-conn]').forEach(el => {
    el.addEventListener('blur', () => {
      const owner = el.dataset.owner;
      const other = el.dataset.other;
      if (!owner || !other) return;
      setOverride(owner, 'conn.' + other, el.textContent.trim());
    });
  });
}

window.kingsUI = {
  openSidebar, updateSidebar,
  updateTimeline: updateRail,
  scrollToFocus,
  goto(id) { E.transitionTo(id, true); },
};

/* ═══ SCROLL TO FOCUS ═══════════════════════════════════════════════ */
function scrollToFocus(pos) {
  const c = document.getElementById('tree-wrap');
  const sbVisible = sidebarEl.classList.contains('open') ? (sidebarEl.offsetWidth - 32) : 0;
  const availW = c.clientWidth - sbVisible;
  const scrollLeft = pos.focalCx - availW / 2;
  const scrollTop  = Math.max(0, pos.focalRowY - c.clientHeight * 0.28);
  c.scrollTo({ left: scrollLeft, top: scrollTop, behavior: 'smooth' });
}

/* ═══ SEARCH ════════════════════════════════════════════════════════ */
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

function openSearch() {
  searchOverlay.classList.add('open');
  searchInput.value = '';
  searchInput.placeholder = t('searchPh');
  renderSearchResults('');
  setTimeout(() => searchInput.focus(), 30);
}
function closeSearch() { searchOverlay.classList.remove('open'); }

function renderSearchResults(q) {
  q = q.trim().toLowerCase();
  if (!q) {
    const chain = DATA.succession || [];
    searchResults.innerHTML = chain.slice(0, 14).map(id => {
      const p = PMAP_K[id]; if (!p) return '';
      return buildSearchRow(p, '');
    }).join('');
    return;
  }
  const scored = [];
  PEOPLE_K.forEach(p => {
    const full = ((p.fn||'') + ' ' + (p.ln||'')).toLowerCase();
    if (full.includes(q)) {
      scored.push({ p, score: full.startsWith(q) ? 2 : 1 });
    }
  });
  scored.sort((a,b) => b.score - a.score || (a.p.fn||'').localeCompare(b.p.fn||''));
  if (!scored.length) {
    searchResults.innerHTML = `<div id="search-empty">${escHtml(t('searchEmpty'))}</div>`;
    return;
  }
  searchResults.innerHTML = scored.slice(0, 30).map(({p}) => buildSearchRow(p, q)).join('');
}

function buildSearchRow(p, q) {
  const era = eraOfPerson(p.id);
  const years = [String(p.b||'').slice(0,4), String(p.d||'').slice(0,4)].filter(Boolean).join('–');
  const hl = (s) => {
    if (!q) return escHtml(s||'');
    const i = (s||'').toLowerCase().indexOf(q);
    if (i < 0) return escHtml(s||'');
    return escHtml(s.slice(0,i)) + '<em>' + escHtml(s.slice(i,i+q.length)) + '</em>' + escHtml(s.slice(i+q.length));
  };
  return `<div class="search-result" tabindex="0" data-id="${p.id}"
    onclick="window.kingsUI.goto('${p.id}'); window._closeSearch();"
    onkeydown="if(event.key==='Enter'){window.kingsUI.goto('${p.id}'); window._closeSearch();}">
    <span class="sr-name">
      ${hl(p.fn)} ${hl(p.ln)}
    </span>
    <span class="sr-meta">${escHtml(years)}${era ? ' · ' + escHtml(era.name[curLang] || era.name.en) : ''}</span>
  </div>`;
}

window._closeSearch = closeSearch;

document.getElementById('search-btn').addEventListener('click', openSearch);
searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSearch();
  if (e.key === 'Enter') {
    const first = document.querySelector('.search-result');
    if (first) first.click();
  }
});
searchOverlay.addEventListener('click', e => {
  if (e.target === searchOverlay) closeSearch();
});
document.addEventListener('keydown', e => {
  if (e.key === '/' && !/^(INPUT|TEXTAREA)$/i.test(document.activeElement?.tagName||'')) {
    e.preventDefault(); openSearch();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    e.preventDefault(); openSearch();
  }
});

/* ═══ LANGUAGE SWITCH ══════════════════════════════════════════════ */
function setLanguage(l) {
  curLang = l;
  E.setLang(l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  // Brand title and sub are set in HTML — don't overwrite with Polish kings i18n
  if (E.currentFocusId) updateSidebar(E.currentFocusId);
}
document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => setLanguage(b.dataset.lang));
});

/* ═══ TWEAKS PANEL ═════════════════════════════════════════════════ */
const tweaksPanel = document.getElementById('tweaks-panel');

window.addEventListener('message', e => {
  if (!e.data) return;
  if (e.data.type === '__activate_edit_mode') showTweaks();
  if (e.data.type === '__deactivate_edit_mode') hideTweaks();
});

function showTweaks() { tweaksPanel.classList.add('open'); }
function hideTweaks() {
  tweaksPanel.classList.remove('open');
  try { window.parent.postMessage({type:'__edit_mode_dismissed'}, '*'); } catch(e){}
}
document.getElementById('tweaks-close').addEventListener('click', hideTweaks);

function setBackground(kind) {
  document.body.classList.remove('bg-paper','bg-linen','bg-plain');
  document.body.classList.add('bg-' + kind);
  document.querySelectorAll('#tw-bg .tweak-btn').forEach(b => b.classList.toggle('active', b.dataset.val === kind));
  persist({ bg: kind });
}
function setDensity(kind) {
  const factor = kind === 'compact' ? 0.85 : 1.15;
  E.applyDensity(factor);
  document.querySelectorAll('#tw-density .tweak-btn').forEach(b => b.classList.toggle('active', b.dataset.val === kind));
  if (E.currentFocusId) E.transitionTo(E.currentFocusId, false);
  persist({ density: kind });
}
function setCardStyle(kind) {
  E.setCardStyle(kind);
  document.querySelectorAll('#tw-cards .tweak-btn').forEach(b => b.classList.toggle('active', b.dataset.val === kind));
  if (E.currentFocusId) E.transitionTo(E.currentFocusId, false);
  persist({ cardStyle: kind });
}

document.querySelectorAll('#tw-bg .tweak-btn').forEach(b => b.addEventListener('click', () => setBackground(b.dataset.val)));
document.querySelectorAll('#tw-density .tweak-btn').forEach(b => b.addEventListener('click', () => setDensity(b.dataset.val)));
document.querySelectorAll('#tw-cards .tweak-btn').forEach(b => b.addEventListener('click', () => setCardStyle(b.dataset.val)));

function persist(diff) {
  try { window.parent.postMessage({type:'__edit_mode_set_keys', edits: diff}, '*'); } catch(e){}
}

setTimeout(() => {
  try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch(e){}
}, 100);

/* ═══ PENCIL EDIT TOGGLE ═══════════════════════════════════════════ */
const editBtnH = document.getElementById('edit-pencil-btn');
if (editBtnH) editBtnH.addEventListener('click', () => setEditMode(!editMode));

/* ═══ INIT ═════════════════════════════════════════════════════════ */
function init() {
  const D = window.TWEAK_DEFAULTS || {};
  setBackground(D.bg || 'plain');
  setDensity(D.density || 'spacious');
  setCardStyle(D.cardStyle || 'medallion');

  E.transitionTo(E.FOCUS_ID, false);
  setTimeout(() => {
    if (E.currentFocusId) {
      updateSidebar(E.currentFocusId);
      sidebarEl.classList.add('open');
      const pos = E.calculateLayout(E.buildHourglass(E.currentFocusId));
      scrollToFocus(pos);
    }
  }, 60);
}

document.addEventListener('DOMContentLoaded', init);
if (document.readyState !== 'loading') init();

})();
