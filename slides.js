/* =====================================================
   slides.js — sistem slide & background interaktif (gurita,
   bunga, kupu-kupu, macan) sejak pesan dibuka setelah intro
   ===================================================== */
const Story = (() => {
  const TX = TEKS, K = CONFIG;

  const UI = {
    diary:    ['', ''],
    memories: ['IIIKKKKKKK', 'SWIPE FOTONYA!!'],
    cake:     ['Time for Cake!', 'GESER PISAU DIBAWAH CINTAA!!'],
    wishes:   ['Floating Wishes', ''],
    gift:     ['', 'PENCET KADONYA!!']
  };

  const root = $('slides'), dots = $('dots'), ambient = $('ambient-bg'), slides = [];
  let cur = -1;
  const el = (tag, cls, html = '') => { const e = document.createElement(tag); e.className = cls; e.innerHTML = html; return e; };
  const add = (title, sub, raw, extraCls = '') => {
    const s = el('section', ('sl ' + extraCls).trim(), (title ? `<h2 class="st">${title}</h2>` : '') + (sub ? `<p class="ss">${sub}</p>` : ''));
    root.append(s); dots.append(el('i', ''));
    const o = { el: s, raw, enter: null }; slides.push(o); return o;
  };
  const go = (label, fn) => { const b = el('button', 'btn go hide', `${label} <b>→</b>`); b.onclick = fn; return b; };
  const reveal = b => {
    if (!b.classList.contains('hide')) return;
    b.classList.remove('hide');
    b.animate([{ opacity: 0, transform: 'translateY(12px) scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.2,1.3,.4,1)' });
  };

  // ---------- Fitur Menarik pada Background (Kupu-kupu, Bunga, Gurita, Macan) ----------
  const bgItems = [];
  let whisperTimer = 0;

  function showWhisper(x, y, text) {
    clearTimeout(whisperTimer);
    let tip = document.getElementById('bg-whisper');
    if (!tip) {
      tip = document.createElement('div');
      tip.id = 'bg-whisper';
      document.body.append(tip);
    }
    const px = Math.min(window.innerWidth - 130, Math.max(130, x));
    const py = Math.min(window.innerHeight - 54, Math.max(66, y - 46));
    tip.textContent = text;
    tip.style.left = px + 'px';
    tip.style.top = py + 'px';
    tip.classList.add('show');
    whisperTimer = setTimeout(() => tip.classList.remove('show'), 2600);
  }

  function spawnSparkles(x, y, type) {
    const icons = type === 'flower' ? ['🌸', '💙', '✨', '✦']
                : type === 'butterfly' ? ['🦋', '✨', '🩵', '✦']
                : type === 'octopus' ? ['🫧', '💙', '🩵', '✨']
                : ['⚡', '💙', '🐾', '✨'];
    for (let k = 0; k < 7; k++) {
      const sp = document.createElement('span');
      sp.className = 'bg-sparkle';
      sp.textContent = icons[k % icons.length];
      const ang = (k / 7) * Math.PI * 2 + rand(-0.25, 0.25);
      const dist = rand(38, 72);
      sp.style.left = x + 'px';
      sp.style.top = y + 'px';
      sp.style.setProperty('--tx', Math.cos(ang) * dist + 'px');
      sp.style.setProperty('--ty', Math.sin(ang) * dist + 'px');
      document.body.append(sp);
      setTimeout(() => sp.remove(), 850);
    }
  }

  function initAmbientDecorations() {
    if (!ambient || ambient.childElementCount > 0) return;
    const decors = K.endDecorations || [];

    decors.forEach(it => {
      const wrap = document.createElement('div');
      wrap.className = `amb-node ${it.cls || 'dec-float'}`;
      wrap.style.cssText = it.style || '';
      wrap.dataset.type = it.type || 'flower';
      wrap.dataset.note = it.note || 'Buat VIEL 💙';

      const img = document.createElement('img');
      img.className = 'dec-item is-svg';
      img.src = it.src;
      img.alt = it.label || '';
      img.draggable = false;

      if (it.localFile) {
        const probe = new Image();
        probe.onload = () => {
          img.src = it.localFile;
          img.classList.remove('is-svg');
        };
        probe.src = it.localFile;
      }

      wrap.append(img);

      wrap.addEventListener('click', e => {
        e.stopPropagation();
        const rect = wrap.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        wrap.classList.remove('pop-active');
        void wrap.offsetWidth;
        wrap.classList.add('pop-active');
        spawnSparkles(cx, cy, wrap.dataset.type);
        showWhisper(cx, cy, wrap.dataset.note);
        setTimeout(() => wrap.classList.remove('pop-active'), 750);
      });

      ambient.append(wrap);
      bgItems.push({ el: wrap, tx: 0, ty: 0 });
    });

    window.addEventListener('pointermove', e => {
      const nx = (e.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
      const ny = (e.clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
      bgItems.forEach((item, i) => {
        const depth = (i % 3 + 1) * 7;
        item.tx = -nx * depth;
        item.ty = -ny * depth;
        item.el.style.setProperty('--px', item.tx.toFixed(1) + 'px');
        item.el.style.setProperty('--py', item.ty.toFixed(1) + 'px');
      });
    }, { passive: true });
  }

  function tuneDecorationsForSlide(slideIndex) {
    const isReadingSlide = slideIndex === 0 || slideIndex === 1;
    ambient.style.opacity = isReadingSlide ? '0.52' : '0.88';
  }

  function show(n) {
    const prev = slides[cur], next = slides[n]; cur = n;
    [...dots.children].forEach((d, k) => d.className = k === n ? 'a' : k < n ? 'd' : '');
    if (n > 0) $('env').classList.add('gone');
    tuneDecorationsForSlide(n);

    const enter = () => {
      next.el.classList.add('on');
      if (!next.raw) next.el.animate([{ opacity: 0, transform: 'translateY(28px) scale(.97)', filter: 'blur(5px)' }, { opacity: 1, transform: 'none', filter: 'blur(0px)' }], { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)' });
      if (next.enter) next.enter();
    };
    if (!prev) return enter();
    prev.el.animate([{ opacity: 1, transform: 'none', filter: 'blur(0px)' }, { opacity: 0, transform: 'translateY(-26px) scale(.97)', filter: 'blur(5px)' }], { duration: 480, easing: 'ease-in', fill: 'forwards' })
      .finished.then(() => { prev.el.classList.remove('on'); enter(); });
  }
  const next = () => show(cur + 1);

  const paginate = (paras, max) => {
    const pages = []; let g = [], len = 0;
    paras.forEach(p => { if (g.length && len + p.length > max) { pages.push(g); g = []; len = 0; } g.push(p); len += p.length; });
    if (g.length) pages.push(g);
    return pages.map(x => x.map(p => `<p>${p}</p>`).join(''));
  };
  function pager(host, pages, cb) {
    host.innerHTML = '<div class="pgt"></div><div class="pgn"><button class="pv">‹</button><span class="pd"></span><button class="px">›</button></div>';
    const t = host.querySelector('.pgt'), d = host.querySelector('.pd'), pv = host.querySelector('.pv'), px = host.querySelector('.px');
    let i = 0;
    const set = n => {
      i = Math.max(0, Math.min(pages.length - 1, n));
      t.classList.remove('flip'); void t.offsetWidth; t.classList.add('flip');
      t.innerHTML = pages[i]; t.scrollTop = 0;
      d.innerHTML = pages.map((_, k) => `<i class="${k === i ? 'a' : ''}"></i>`).join('');
      pv.style.visibility = i ? 'visible' : 'hidden'; px.style.visibility = i < pages.length - 1 ? 'visible' : 'hidden';
      cb(i === pages.length - 1);
    };
    pv.onclick = () => set(i - 1); px.onclick = () => set(i + 1);
    set(0);
  }

  // ---------- 1. kartu ucapan (keluar dari amplop) ----------
  const s1 = add('', '', true), b1 = go('cinii litt', next), I = TX.intro;
  s1.el.innerHTML = `<div class="gcard"><div class="gage">${K.age}</div><div class="gball">🎈</div><small>${I.greet}</small><h3>${I.title}</h3><div class="pg"></div></div>`;
  s1.el.append(b1);
  pager(s1.el.querySelector('.pg'), paginate(I.paras, I.pageChars || 360), last => last && reveal(b1));
  s1.enter = () => {
    const e = $('envelope').getBoundingClientRect(), c = s1.el.querySelector('.gcard'), r = c.getBoundingClientRect();
    const dx = e.left + e.width / 2 - (r.left + r.width / 2), dy = e.top + e.height / 2 - (r.top + r.height / 2);
    c.animate([{ transform: `translate(${dx}px,${dy}px) scale(.2)`, opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 1000, easing: 'cubic-bezier(.2,.9,.25,1.1)' });
  };

  // ---------- 2. diary terkunci ----------
  const s2 = add(...UI.diary), b2 = go('cinii littt', next);
  s2.el.insertAdjacentHTML('beforeend', `<div class="dwrap"><div class="book"><div class="bin"><b>SECRET</b><span class="lock">🔒</span><small>pencettt cintaa</small></div></div>
    <div class="paper hide"><div class="sal">${K.diary.salutation}</div><div class="pg"></div><div class="sig" style="opacity:0">${K.diary.signoff}</div></div></div>`);
  s2.el.append(b2);
  const book = s2.el.querySelector('.book'), paper = s2.el.querySelector('.paper'), sig = s2.el.querySelector('.sig');
  pager(paper.querySelector('.pg'), paginate(TX.message, K.diary.pageChars || 600), last => { sig.style.opacity = last ? 1 : 0; if (last) reveal(b2); });
  let unlocked = false;
  book.onclick = () => {
    if (unlocked) return; unlocked = true;
    const lock = book.querySelector('.lock'), lab = book.querySelector('small');
    lock.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(-18deg)' }, { transform: 'rotate(14deg)' }, { transform: 'rotate(0) scale(1.25)' }], { duration: 600 });
    setTimeout(() => { lock.textContent = '🔑'; lab.textContent = 'YAYY ♥'; }, 450);
    setTimeout(() => book.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'perspective(600px) rotateY(-70deg) scale(.9)' }], { duration: 600, easing: 'ease-in', fill: 'forwards' }).finished.then(() => {
      book.style.display = 'none'; paper.classList.remove('hide');
      paper.animate([{ opacity: 0, transform: 'translateY(20px) scale(.96)' }, { opacity: 1, transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.2,.9,.3,1.1)' });
    }), 1000);
  };

  // ---------- 3. tumpukan foto yang bisa dilempar ----------
  const s3 = add(...UI.memories), b3 = go('Time for Cake!', next);
  s3.el.insertAdjacentHTML('beforeend', '<div class="stack"></div>');
  s3.el.append(b3);
  const stack = s3.el.querySelector('.stack');
  const cards = K.photos.map(p => {
    const c = el('div', 'pc', `<div class="ph">${p.src ? `<img src="${p.src}" alt="" draggable="false" onerror="this.parentNode.innerHTML='<span>📷<small>taruh foto</small></span>'">` : '<span>📷<small>ganti foto</small></span>'}</div><em>${p.cap || ''}</em>`);
    stack.append(c); return c;
  });
  const order = [...cards];
  const lay = (skip, instant) => order.forEach((c, k) => {
    if (c === skip) return;
    const m = Math.min(k, 3);
    c.style.transition = c === instant ? 'none' : 'transform .5s cubic-bezier(.2,.8,.2,1), opacity .4s';
    c.style.zIndex = order.length - k;
    c.style.transform = `translate(${k ? (k % 2 ? 5 : -5) * m : 0}px,${-3 * m}px) rotate(${k ? (k % 2 ? 2.4 : -2.4) * m : 0}deg)`;
    c.style.opacity = k > 3 ? 0 : 1;
  });
  lay();
  stack.addEventListener('pointerdown', e => {
    const c = order[0]; if (!c || !c.contains(e.target)) return;
    const sx = e.clientX, sy = e.clientY, t0 = performance.now(); let dx = 0, dy = 0;
    c.setPointerCapture(e.pointerId); c.style.transition = 'none';
    c.onpointermove = ev => { dx = ev.clientX - sx; dy = ev.clientY - sy; c.style.transform = `translate(${dx}px,${dy}px) rotate(${dx / 14}deg)`; };
    c.onpointerup = c.onpointercancel = () => {
      c.onpointermove = c.onpointerup = c.onpointercancel = null;
      const dist = Math.hypot(dx, dy), v = dist / Math.max(1, performance.now() - t0);
      if (dist > 90 || v > .6) {
        const k = 1 + 900 / Math.max(1, dist);
        order.push(order.shift()); lay(c);
        c.style.transition = 'transform .55s ease-in, opacity .5s';
        c.style.transform = `translate(${dx * k}px,${dy * k}px) rotate(${dx / 5}deg)`; c.style.opacity = 0;
        setTimeout(() => lay(null, c), 600);
      } else lay();
    };
  });
  s3.enter = () => reveal(b3);

  // ---------- 4. potong kue ----------
  const s4 = add(...UI.cake), b4 = go('SINII LAGII LITT!', next);
  const wave = (x, y, w, n, d) => { const g = w / n; let p = `M${x} ${y}q${g / 2} ${d} ${g} 0`; for (let k = 1; k < n; k++) p += `t${g} 0`; return `<path d="${p}V${y - 12}H${x}z" fill="#eefcff"/>`; };
  const digs = String(K.age).split('');
  const candles = digs.map((d, k) => { const x = 120 + (k - (digs.length - 1) / 2) * 34;
    return `<path class="flame" d="M${x} 6C${x + 7} 15 ${x + 6} 24 ${x} 26C${x - 6} 24 ${x - 7} 15 ${x} 6Z" fill="#ffd34d"/><path d="M${x} 26V32" stroke="#07485e" stroke-width="2" stroke-linecap="round"/><rect x="${x - 15}" y="32" width="30" height="38" rx="6" fill="#fff" stroke="#0891b2" stroke-width="2.5"/><text x="${x}" y="62" text-anchor="middle" font-size="28" font-weight="800" fill="#0891b2" font-family="Quicksand,sans-serif">${d}</text>`; }).join('');
  const cake = `<svg viewBox="0 0 240 230"><ellipse cx="120" cy="212" rx="104" ry="11" fill="#cdeaf2"/>
    <rect x="18" y="148" width="204" height="60" rx="12" fill="#5ec3e6"/>${wave(18, 160, 204, 8, 14)}
    <rect x="46" y="104" width="148" height="48" rx="10" fill="#2fa6d6"/>${wave(46, 114, 148, 6, 12)}
    <rect x="74" y="64" width="92" height="44" rx="9" fill="#78d6ee"/>${wave(74, 74, 92, 4, 10)}
    <path d="M120 142c-5-9-17-3-12 5l12 11 12-11c5-8-7-14-12-5z" fill="#fff"/>
    <g fill="#ffd34d"><circle cx="40" cy="190" r="2.6"/><circle cx="78" cy="196" r="2.6"/><circle cx="160" cy="194" r="2.6"/><circle cx="200" cy="188" r="2.6"/><circle cx="62" cy="130" r="2.4"/><circle cx="180" cy="132" r="2.4"/></g>
    <g fill="#fff"><circle cx="58" cy="178" r="2.4"/><circle cx="130" cy="192" r="2.4"/><circle cx="182" cy="176" r="2.4"/><circle cx="96" cy="128" r="2.2"/></g>${candles}</svg>`;
  const knife = '<svg viewBox="0 0 30 120"><rect x="9" y="0" width="12" height="40" rx="5" fill="#2c3e50"/><rect x="6" y="40" width="18" height="5" rx="2" fill="#94a3b8"/><path d="M9 45H21V100Q21 112 15 118Q9 112 9 100Z" fill="#e2e8f0" stroke="#94a3b8"/></svg>';
  s4.el.insertAdjacentHTML('beforeend', `<div class="cakebox"><div class="half l">${cake}</div><div class="half r">${cake}</div><div class="cutline"></div><div class="knife">${knife}</div></div>
    <div class="kbar"><span>Geser untuk memotong kue!</span><div class="kh">🔪</div></div>`);
  s4.el.append(b4);
  const cbox = s4.el.querySelector('.cakebox'), bar = s4.el.querySelector('.kbar'), kh = bar.querySelector('.kh');
  const maxX = () => bar.clientWidth - kh.offsetWidth - 8;
  const setP = p => {
    kh.style.transform = `translateX(${p * maxX()}px)`; bar.style.setProperty('--f', Math.min(1, p + .08));
    cbox.querySelector('.cutline').style.setProperty('--p', p); cbox.querySelector('.knife').style.top = (-26 + p * 82) + '%';
  };
  let x4 = 0, cutDone = false;
  kh.onpointerdown = e => {
    if (cutDone) return;
    kh.setPointerCapture(e.pointerId); kh.style.transition = 'none';
    const x0 = e.clientX - x4;
    kh.onpointermove = ev => { x4 = Math.max(0, Math.min(maxX(), ev.clientX - x0)); setP(x4 / maxX()); };
    kh.onpointerup = kh.onpointercancel = () => {
      kh.onpointermove = kh.onpointerup = kh.onpointercancel = null;
      if (x4 / maxX() > .95) return finishCut();
      kh.style.transition = 'transform .35s'; x4 = 0; setP(0);
    };
  };
  function finishCut() {
    cutDone = true; setP(1); cbox.classList.add('cut');
    s4.el.querySelector('.st').textContent = 'YAYYYYY';
    s4.el.querySelector('.ss').textContent = 'Lilinnya sudah padam ditiup cinta!';
    confetti(130);
    bar.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: 'forwards' }).finished.then(() => { bar.style.display = 'none'; reveal(b4); });
  }

  // ---------- 5. gelembung harapan ----------
  const s5 = add(...UI.wishes, false, 'sl-wishes'), b5 = go('Open Your Gift', next), WS = TX.wishes;
  s5.el.insertAdjacentHTML('beforeend', `<div class="wbox"></div><div class="wcard"><p class="wh">PENCET GELEMBUNGNYA LIT!!</p></div>
    <h3 class="whb">Happy Birthday, ${K.name} ♥</h3><small class="wsig">${K.wishesSign}</small><small class="wcnt">0/${WS.length}</small>`);
  s5.el.append(b5);
  let bubs = [], popped = 0, raf = 0;
  s5.enter = () => requestAnimationFrame(() => {
    const box = s5.el.querySelector('.wbox'), bw0 = box.clientWidth, bh0 = box.clientHeight;
    bubs = WS.map((w, k) => {
      const b = el('button', 'bub', w.label); box.append(b);
      const o = { b, w, x: rand(4, Math.max(5, bw0 - 110)), y: rand(4, Math.max(5, bh0 - 40)), vx: rand(.25, .5) * (k % 2 ? 1 : -1), vy: rand(.2, .42) * (k % 3 ? 1 : -1) };
      b.onclick = () => pop(o); return o;
    });
    const tick = () => {
      bubs.forEach(o => {
        const w = o.b.offsetWidth, h = o.b.offsetHeight;
        o.x += o.vx; o.y += o.vy;
        if (o.x < 0 || o.x > bw0 - w) o.vx *= -1; if (o.y < 0 || o.y > bh0 - h) o.vy *= -1;
        o.x = Math.max(0, Math.min(bw0 - w, o.x)); o.y = Math.max(0, Math.min(bh0 - h, o.y));
        o.b.style.transform = `translate(${o.x}px,${o.y}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
  });
  function pop(o) {
    if (o.done) return; o.done = true; bubs = bubs.filter(x => x !== o); popped++;
    const r = o.b.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    o.b.animate([{ opacity: 1, scale: '1' }, { opacity: 0, scale: '1.7' }], { duration: 350, fill: 'forwards' }).finished.then(() => o.b.remove());
    for (let k = 0; k < 8; k++) {
      const h = el('span', 'bh', '♥'), a = k / 8 * 6.283;
      h.style.cssText = `left:${cx}px;top:${cy}px;color:${['#22d3ee', '#7dd3fc', '#fff', '#67e8f9'][k % 4]}`; document.body.append(h);
      h.animate([{ transform: 'translate(-50%,-50%) scale(.4)', opacity: 1 }, { transform: `translate(calc(-50% + ${Math.cos(a) * 60}px),calc(-50% + ${Math.sin(a) * 60}px)) scale(1.2)`, opacity: 0 }], { duration: 800, easing: 'ease-out' }).onfinish = () => h.remove();
    }
    const card = s5.el.querySelector('.wcard');
    card.innerHTML = `<div class="wspark">✨ 💙 ✨</div><p class="wt">${o.w.text}</p>`;
    card.scrollTop = 0;
    card.animate([{ opacity: 0, transform: 'translateY(10px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'ease-out' });
    s5.el.querySelector('.wcnt').textContent = `${popped}/${WS.length}`;
    if (popped === WS.length) { cancelAnimationFrame(raf); reveal(b5); confetti(70); }
  }

  // ---------- 6. kado ----------
  const s6 = add(...UI.gift), b6 = go('SINII LITTT', next);
  s6.el.insertAdjacentHTML('beforeend', `<div class="gift"><div class="glow"></div><img class="gbq" src="${K.gift.photo}" alt="Buket Bunga" draggable="false"><svg viewBox="0 0 200 190"><ellipse cx="100" cy="176" rx="82" ry="8" fill="#0e74902e"/>
    <rect x="30" y="92" width="140" height="80" rx="6" fill="#0ea5c9"/><rect x="92" y="92" width="16" height="80" fill="#f6c445"/>
    <g fill="#fff" opacity=".8"><circle cx="54" cy="116" r="2"/><circle cx="148" cy="126" r="2"/><circle cx="64" cy="152" r="2"/><circle cx="138" cy="156" r="2"/></g>
    <g class="lid"><rect x="22" y="64" width="156" height="32" rx="6" fill="#12b8dc"/><rect x="92" y="64" width="16" height="32" fill="#f6c445"/>
    <ellipse cx="78" cy="56" rx="22" ry="12" transform="rotate(-18 78 56)" fill="#f6c445" stroke="#e0a82a"/><ellipse cx="122" cy="56" rx="22" ry="12" transform="rotate(18 122 56)" fill="#f6c445" stroke="#e0a82a"/><circle cx="100" cy="60" r="7" fill="#e0a82a"/></g>
    <g transform="rotate(-10 40 40)"><rect x="6" y="28" width="64" height="22" rx="3" fill="#fde68a"/><text x="38" y="43" font-size="11" text-anchor="middle" fill="#7c5a00" font-weight="700" font-family="Quicksand,sans-serif">For You ✨</text></g></svg></div>`);
  s6.el.append(b6);
  const gift = s6.el.querySelector('.gift'); let giftOpen = false;
  // pakai foto buket asli kalau filenya ada, kalau belum ada tetap tampil ilustrasi bawaan
  if (K.gift.localFile) {
    const probe6 = new Image();
    probe6.onload = () => { gift.querySelector('.gbq').src = K.gift.localFile; };
    probe6.src = K.gift.localFile;
  }
  gift.onclick = () => {
    if (giftOpen) return; giftOpen = true;
    gift.animate([{ rotate: '0deg' }, { rotate: '-6deg' }, { rotate: '6deg' }, { rotate: '-4deg' }, { rotate: '4deg' }, { rotate: '0deg' }], { duration: 650 }).finished.then(() => {
      const ss = s6.el.querySelector('.ss'); if (ss) ss.textContent = '';
      gift.classList.add('open'); confetti(120);
      const r = gift.getBoundingClientRect();
      setTimeout(() => spawnSparkles(r.left + r.width / 2, r.top + r.height * .25, 'flower'), 700);
      setTimeout(() => spawnSparkles(r.left + r.width * .3, r.top + r.height * .1, 'butterfly'), 1000);
      setTimeout(() => reveal(b6), 2600);
    });
  };

  // ---------- 7. penutup (buket bunga biru) ----------
  const s7 = add('', '');
  const G = K.gift;
  s7.el.insertAdjacentHTML('beforeend', `<h2 class="st"></h2><h1 class="big">${K.title}</h1>
    <div class="gcard2"><img class="bouquet-img" id="bouquetImg" src="${G.finalPhoto || G.photo}" alt="Buket Bunga"><h3>${G.title}</h3><p>${G.text}</p></div>
    <p class="close">${TX.closing}</p><button class="btn go" id="again">Putar ulang <b>↺</b></button>`);

  s7.el.querySelector('#again').onclick = () => location.reload();
  s7.enter = () => { confetti(140); setTimeout(() => confetti(80), 1500); };

  // ---------- hati melayang di latar ----------
  const hs = $('hearts');
  for (let k = 0; k < 24; k++) {
    const h = el('i', '', k % 4 ? '♥' : '✦');
    h.style.cssText = `left:${rand(0, 100)}%;font-size:${rand(10, 26)}px;animation-duration:${rand(9, 18)}s;animation-delay:${-rand(0, 18)}s;color:${['#fff', '#bdeefa', '#7dd3fc', '#a5f3fc'][k % 4]}`;
    hs.append(h);
  }

  return {
    begin() {
      initAmbientDecorations();
      $('story').classList.remove('hide');
      $('hearts').classList.add('on');
      show(0);
    }
  };
})();
