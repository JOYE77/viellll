/* script.js — alur animasi & interaksi */

const $ = id => document.getElementById(id);
const C = CONFIG;
const PALETTE = ['#22d3ee','#67e8f9','#a5f3fc','#38bdf8','#e0fbff','#7dd3fc','#2dd4bf','#ffffff'];

document.title = C.title;
$('welcome').textContent = C.welcome;
$('start').textContent = C.btnStart;
$('hint').textContent = C.hint;

const rand = (a, b) => a + Math.random() * (b - a);
const wait = ms => new Promise(r => setTimeout(r, ms));
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const pile = [];
function preparePile() {
  const W = innerWidth, H = innerHeight, base = Math.min(W, H), N = W < 700 ? 60 : 90;
  for (let i = 0; i < N; i++) {
    const img = new Image(); img.src = randomFlower(); img.className = 'bl'; img.alt = ''; img.draggable = false;
    const y = 112 - Math.pow(Math.random(), .8) * 125;
    img._y = y;
    img.style.cssText = `left:${rand(-3, 103)}%;top:${y}%;width:${Math.max(120, base * rand(.3, .55))}px;--r:${rand(0, 360)}deg;z-index:${Math.round(y) + 20}`;
    $('bloom').append(img); pile.push(img);
  }
}

async function launch() {
  const hero = $('introFlower'), r = hero.getBoundingClientRect(), W = innerWidth, H = innerHeight;
  const S = Math.min(240, Math.max(140, W * .2)), dur = 1250;
  const p0 = [r.left + r.width / 2, r.top + r.height / 2], p1 = [W / 2, H * .82], c = [W * .55, H * .12];
  const rot0 = parseFloat(getComputedStyle(hero).rotate) || -20, s0 = r.width / S;
  const path = () => Array.from({ length: 41 }, (_, i) => {
    const t = i / 40, p = ease(t), q = 1 - p;
    const x = q * q * p0[0] + 2 * q * p * c[0] + p * p * p1[0], y = q * q * p0[1] + 2 * q * p * c[1] + p * p * p1[1];
    return { offset: t, transform: `translate(${x}px,${y}px) translate(-50%,-50%) rotate(${rot0 * (1 - p)}deg) scale(${s0 + (1 - s0) * p})` };
  });
  const clone = cls => { const e = new Image(); e.src = HERO_FLOWER; e.alt = ''; e.className = cls; e.style.width = S + 'px'; document.body.append(e); return e; };
  hero.style.visibility = 'hidden';
  const ghosts = [0, 1, 2, 3, 4, 5].map(j => {
    const g = clone('fly ghost'), op = .3 - j * .045;
    g.animate(path().map(f => ({ ...f, opacity: f.offset < .06 ? op * f.offset / .06 : op })), { duration: dur, delay: (j + 1) * 55, easing: 'linear', fill: 'both' });
    return g;
  });
  const fly = clone('fly');
  await fly.animate(path(), { duration: dur, easing: 'linear', fill: 'both' }).finished;

  burst();
  const still = new Image(); still.src = HERO_FLOWER; still.alt = ''; still.className = 'bl'; still._y = 82;
  still.style.cssText = `left:50%;top:82%;width:${S}px;--r:0deg;opacity:1;z-index:300`;
  $('bloom').append(still); fly.remove();
  ghosts.forEach(g => g.animate({ opacity: 0 }, { duration: 220, fill: 'forwards' }).finished.then(() => g.remove()));
  return still;
}

function burst() {
  const g = document.createElement('div'); g.id = 'glow';
  g.animate([{ transform: 'scale(1)', opacity: .95 }, { transform: 'scale(75)', opacity: 0 }], { duration: 1300, easing: 'ease-out', fill: 'both' });
  const r = document.createElement('div'); r.id = 'rays';
  for (let i = 0; i < 16; i++) {
    const l = document.createElement('i'), a = -84 + i * 168 / 15; l.className = 'ray';
    l.animate([{ transform: `rotate(${a}deg) scaleY(0)`, opacity: 1 }, { transform: `rotate(${a}deg) scaleY(1)`, opacity: 1, offset: .5 }, { transform: `rotate(${a}deg) scaleY(1)`, opacity: 0 }],
      { duration: 1200, delay: rand(0, 160), easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'both' });
    r.append(l);
  }
  document.body.append(g, r);
  setTimeout(() => { g.remove(); r.remove(); }, 1700);
}

function growPile() {
  const order = [...pile].sort((a, b) => b._y - a._y), N = order.length, T = 3200;
  return Promise.all(order.map((el, i) => el.animate(
    [{ opacity: 0, transform: 'translateY(70px) rotate(-30deg) scale(.15)' }, { opacity: 1, transform: 'translateY(0) rotate(0deg) scale(1)' }],
    { duration: 800, delay: Math.pow(i / N, .9) * T + rand(0, 120), easing: 'cubic-bezier(.2,1.25,.4,1)', fill: 'both' }).finished));
}

async function fadePile(still) {
  $('env').classList.remove('hide');
  $('mus').classList.remove('hide');
  $('envelope').animate([{ opacity: 0, transform: 'translateY(26px) scale(.94)' }, { opacity: 1, transform: 'none' }],
    { duration: 1600, delay: 250, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' });
  await wait(250);
  await Promise.all([...pile, still].map(el => el.animate(
    [{ opacity: 1, transform: 'translateY(0) rotate(0deg) scale(1)' }, { opacity: 0, transform: 'translateY(-16px) rotate(0deg) scale(1.07)' }],
    { duration: 1400, delay: rand(0, 500), easing: 'ease-in-out', fill: 'forwards' }).finished));
}

$('start').onclick = async () => {
  $('start').disabled = true; $('intro').style.pointerEvents = 'none';
  [document.querySelector('.who'), $('start')].forEach(el => el.animate(
    [{ opacity: 1, transform: 'none', filter: 'blur(0px)' }, { opacity: 0, transform: 'translateX(-28px)', filter: 'blur(6px)' }],
    { duration: 700, easing: 'ease-in', fill: 'forwards' }));
  const landed = launch();
  await wait(1000);
  $('bloom').classList.remove('hide');
  const grown = growPile();
  const still = await landed;
  await grown; await wait(600);
  await fadePile(still);
  $('bloom').remove(); $('intro').remove();
};

$('start').disabled = true;
$('introFlower').src = HERO_FLOWER;
preparePile();
Promise.race([
  Promise.all([document.fonts ? document.fonts.ready : 0, ...[...document.images].map(i => i.decode().catch(() => {}))]),
  wait(3500)
]).then(() => { document.body.classList.add('ready'); $('start').disabled = false; });

let opened = false;
$('envelope').onclick = () => {
  if (opened) return; opened = true;
  $('env').classList.add('open');
  Music.autoStart();
  $('mus').classList.add('hide');
  setTimeout(() => { $('mus').classList.add('top'); $('mus').classList.remove('hide'); }, 700);
  setTimeout(() => $('env').classList.add('dim'), 900);
  setTimeout(() => Story.begin(), 1300);
};
$('mus').onclick = () => Music.toggle();

const HB = [[7,.75],[7,.25],[9,1],[7,1],[12,1],[11,2],[7,.75],[7,.25],[9,1],[7,1],[14,1],[12,2],
            [7,.75],[7,.25],[19,1],[16,1],[12,1],[11,1],[9,2],[17,.75],[17,.25],[16,1],[12,1],[14,1],[12,2]];
const Music = (() => {
  const M = CONFIG.music;
  let au, ctx, timer, playing = false, touched = false;
  const sync = () => {
    document.body.classList.toggle('playing', playing);
    $('mlab').textContent = playing ? 'Jeda musik' : 'Putar musik';
    document.querySelectorAll('.pb').forEach(b => b.textContent = playing ? '❚❚' : '▶');
  };
  function stopMelody() { clearTimeout(timer); if (ctx) { ctx.close(); ctx = null; } }
  function melody() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const vol = (M.volume ?? .8) * .25;
    let t = ctx.currentTime + .05;
    HB.forEach(([n, d]) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), L = d * .42;
      o.type = 'triangle'; o.frequency.value = 261.63 * 2 ** (n / 12);
      o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .02); g.gain.exponentialRampToValueAtTime(.001, t + L * .95);
      o.start(t); o.stop(t + L); t += L;
    });
    timer = setTimeout(() => { stopMelody(); if (M.loop !== false && playing) melody(); else pause(); }, (t - ctx.currentTime) * 1000 + 800);
  }
  function play() {
    playing = true;
    if (M.file) {
      if (!au) {
        au = new Audio(M.file); au.loop = M.loop !== false; au.volume = M.volume ?? .8;
        au.onerror = () => { au = null; M.file = ''; if (playing) melody(); };
      }
      au.play().catch(() => {});
    } else melody();
    sync();
  }
  function pause() { playing = false; if (au) au.pause(); stopMelody(); sync(); }
  return {
    sync,
    toggle() { touched = true; playing ? pause() : play(); },
    autoStart() { if (M.autoStart && !touched && !playing) play(); }
  };
})();

function confetti(n = 70) {
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i'); p.className = 'cf';
    p.style.cssText = `left:${Math.random()*100}%;background:${PALETTE[i%8]};--dx:${(Math.random()-.5)*160}px;--t:${2+Math.random()*2.5}s;--s:${6+Math.random()*7}px;animation-delay:${Math.random()*.6}s;border-radius:${Math.random()>.5?'50%':'2px'}`;
    document.body.append(p); setTimeout(() => p.remove(), 5500);
  }
}
