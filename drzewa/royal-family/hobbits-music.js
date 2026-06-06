/* ═══════════════════════════════════════════════════════════════════
   MUSIC PLAYER — Tolkien / Shire Tree
   Two-track loop: tolkien-1.mp3 → tolkien-2.mp3 → tolkien-1.mp3 …
   Exports: window._musicPause(), window._musicResume()
═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const TRACKS = ['music/tolkien-1.mp3', 'music/tolkien-2.mp3'];
  let trackIdx = 0;
  let audio = null;
  let paused = false;
  let started = false;

  const bar = document.createElement('div');
  bar.id = 'music-bar';
  bar.innerHTML = `
    <button id="music-toggle" title="Play / Pause">▶</button>
    <span id="music-title">♪ Shire music</span>
    <div id="music-vol-wrap">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="opacity:.6;flex-shrink:0">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
      </svg>
      <input id="music-vol" type="range" min="0" max="1" step="0.02" value="0.35">
    </div>`;
  document.body.appendChild(bar);

  const toggleBtn = document.getElementById('music-toggle');
  const titleSpan = document.getElementById('music-title');
  const volInput  = document.getElementById('music-vol');

  const style = document.createElement('style');
  style.textContent = `
    #music-bar {
      position: fixed; bottom: 46px; left: 50%; transform: translateX(-50%);
      z-index: 8888;
      display: flex; align-items: center; gap: 10px;
      padding: 5px 14px 5px 10px;
      background: rgba(12,24,8,0.82);
      border: 1px solid rgba(120,170,80,0.35);
      border-radius: 3px;
      backdrop-filter: blur(6px);
      font-family: 'Cinzel', Georgia, serif;
      font-size: 10px; letter-spacing: 1.2px;
      color: rgba(190,230,140,0.85);
      pointer-events: auto;
      transition: opacity 0.3s;
    }
    #music-bar:hover { opacity: 1 !important; }
    #music-toggle {
      background: none; border: none; cursor: pointer;
      font-size: 13px; color: rgba(190,230,140,0.9);
      padding: 0 2px; line-height: 1;
      transition: color 0.15s;
    }
    #music-toggle:hover { color: #B8E870; }
    #music-title {
      white-space: nowrap; max-width: 160px;
      overflow: hidden; text-overflow: ellipsis;
      opacity: 0.75;
    }
    #music-vol-wrap {
      display: flex; align-items: center; gap: 5px;
    }
    #music-vol {
      -webkit-appearance: none; appearance: none;
      width: 72px; height: 3px;
      background: rgba(100,160,60,0.35);
      border-radius: 2px; outline: none; cursor: pointer;
    }
    #music-vol::-webkit-slider-thumb {
      -webkit-appearance: none; appearance: none;
      width: 11px; height: 11px; border-radius: 50%;
      background: #5A9E2D; cursor: pointer;
    }
    #music-vol::-moz-range-thumb {
      width: 11px; height: 11px; border-radius: 50%;
      background: #5A9E2D; border: none; cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  function createAudio(idx) {
    if (audio) { audio.pause(); audio.src = ''; }
    audio = new Audio(TRACKS[idx]);
    audio.volume = parseFloat(volInput.value);
    audio.addEventListener('ended', nextTrack);
    audio.addEventListener('canplaythrough', function onReady() {
      audio.removeEventListener('canplaythrough', onReady);
      if (!paused) audio.play().catch(() => {});
    });
    audio.load();
  }

  function nextTrack() {
    trackIdx = (trackIdx + 1) % TRACKS.length;
    createAudio(trackIdx);
    const labels = ['♪ Shire Beyond Hills', '♪ Shire Beyond Hills II'];
    titleSpan.textContent = labels[trackIdx] || '♪ Shire music';
  }

  function startOnInteraction() {
    if (started) return;
    started = true;
    createAudio(trackIdx);
    const labels = ['♪ Shire Beyond Hills', '♪ Shire Beyond Hills II'];
    titleSpan.textContent = labels[trackIdx] || '♪ Shire music';
    toggleBtn.textContent = '⏸';
    document.removeEventListener('click', startOnInteraction);
    document.removeEventListener('keydown', startOnInteraction);
  }
  document.addEventListener('click', startOnInteraction);
  document.addEventListener('keydown', startOnInteraction);

  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (!started) { startOnInteraction(); return; }
    if (!audio) return;
    if (audio.paused) {
      paused = false;
      audio.play().catch(() => {});
      toggleBtn.textContent = '⏸';
    } else {
      paused = true;
      audio.pause();
      toggleBtn.textContent = '▶';
    }
  });

  volInput.addEventListener('input', function () {
    if (audio) audio.volume = parseFloat(this.value);
  });
  volInput.addEventListener('click', e => e.stopPropagation());

  window._musicPause = function () {
    if (audio && !audio.paused) audio.pause();
  };
  window._musicResume = function () {
    if (!paused && audio && audio.paused && started) {
      audio.play().catch(() => {});
      toggleBtn.textContent = '⏸';
    }
  };

  let fadeTimer;
  function resetFade() {
    bar.style.opacity = '1';
    clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => { bar.style.opacity = '0.55'; }, 4000);
  }
  bar.addEventListener('mouseenter', resetFade);
  document.addEventListener('mousemove', resetFade);
  resetFade();

})();
