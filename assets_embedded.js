/* =====================================================
   assets_embedded.js — Ilustrasi bawaan (Buket Lily Biru,
   Kupu-kupu Biru, Macan Biru, Gurita Biru, dan Bunga Biru)
   ===================================================== */
const EMBEDDED_ASSETS = {
  bouquet: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 440">
    <defs>
      <linearGradient id="wrapBack" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f8fafc"/><stop offset="100%" stop-color="#cbd5e1"/></linearGradient>
      <linearGradient id="wrapFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e2e8f0"/></linearGradient>
      <linearGradient id="pinkPaper" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fecdd3"/><stop offset="100%" stop-color="#fda4af"/></linearGradient>
      <radialGradient id="lilyBlue" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#1e3a8a"/><stop offset="45%" stop-color="#3b82f6"/><stop offset="85%" stop-color="#bae6fd"/><stop offset="100%" stop-color="#f0f9ff"/></radialGradient>
      <radialGradient id="lilyWhite" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#7dd3fc"/><stop offset="35%" stop-color="#e0f2fe"/><stop offset="80%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cbd5e1"/></radialGradient>
      <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1e40af"/><stop offset="50%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient>
    </defs>
    <polygon points="85,75 180,45 275,75 315,175 180,320 45,175" fill="url(#wrapBack)" stroke="#cbd5e1" stroke-width="2"/>
    <polygon points="48,135 92,90 120,210 65,190" fill="url(#pinkPaper)" opacity="0.85"/>
    <polygon points="270,85 325,155 245,235 225,150" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    <polygon points="90,85 35,160 115,240 135,150" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    <g fill="#ffffff" stroke="#94a3b8" stroke-width="0.8">
      <circle cx="120" cy="115" r="4"/><circle cx="132" cy="108" r="3.5"/><circle cx="145" cy="118" r="4"/>
      <circle cx="225" cy="112" r="4"/><circle cx="238" cy="120" r="3.5"/><circle cx="215" cy="124" r="3.5"/>
      <circle cx="178" cy="95" r="4"/><circle cx="190" cy="102" r="3.5"/>
    </g>
    <ellipse cx="222" cy="82" rx="7" ry="18" transform="rotate(25 222 82)" fill="#84cc16" stroke="#4d7c0f" stroke-width="1.2"/>
    <ellipse cx="236" cy="92" rx="6" ry="15" transform="rotate(42 236 92)" fill="#a3e635" stroke="#4d7c0f" stroke-width="1.2"/>
    <g transform="translate(135,120) scale(0.85)">
      <path d="M0,-48 C16,-25 16,-8 0,0 C-16,-8 -16,-25 0,-48 Z" fill="url(#lilyWhite)" stroke="#94a3b8"/>
      <path d="M45,-15 C28,5 12,8 0,0 C8,-14 25,-22 45,-15 Z" fill="url(#lilyWhite)" stroke="#94a3b8"/>
      <path d="M28,40 C6,30 -2,16 0,0 C15,4 28,18 28,40 Z" fill="url(#lilyWhite)" stroke="#94a3b8"/>
      <path d="M-28,40 C-28,18 -15,4 0,0 C2,16 -6,30 -28,40 Z" fill="url(#lilyWhite)" stroke="#94a3b8"/>
      <path d="M-45,-15 C-25,-22 -8,-14 0,0 C-12,8 -28,5 -45,-15 Z" fill="url(#lilyWhite)" stroke="#94a3b8"/>
      <g stroke="#991b1b" stroke-width="1.5" fill="#7f1d1d"><line x1="0" y1="0" x2="-8" y2="-16"/><circle cx="-8" cy="-16" r="2.2"/><line x1="0" y1="0" x2="7" y2="-18"/><circle cx="7" cy="-18" r="2.2"/><line x1="0" y1="0" x2="0" y2="-22"/><circle cx="0" cy="-22" r="2.2"/></g>
    </g>
    <g transform="translate(185,135) scale(0.95)">
      <path d="M0,-50 C18,-26 16,-8 0,0 C-16,-8 -18,-26 0,-50 Z" fill="url(#lilyBlue)" stroke="#1e3a8a"/>
      <path d="M48,-14 C28,6 12,8 0,0 C8,-14 26,-22 48,-14 Z" fill="url(#lilyBlue)" stroke="#1e3a8a"/>
      <path d="M30,42 C6,32 -2,16 0,0 C16,4 28,18 30,42 Z" fill="url(#lilyBlue)" stroke="#1e3a8a"/>
      <path d="M-30,42 C-28,18 -16,4 0,0 C2,16 -6,32 -30,42 Z" fill="url(#lilyBlue)" stroke="#1e3a8a"/>
      <path d="M-48,-14 C-26,-22 -8,-14 0,0 C-12,8 -28,6 -48,-14 Z" fill="url(#lilyBlue)" stroke="#1e3a8a"/>
      <g fill="#172554"><circle cx="-5" cy="-12" r="1.3"/><circle cx="5" cy="-14" r="1.3"/><circle cx="0" cy="-20" r="1.3"/><circle cx="-9" cy="-6" r="1.3"/><circle cx="9" cy="-7" r="1.3"/></g>
      <g stroke="#fde047" stroke-width="1.6" fill="#eab308"><line x1="0" y1="0" x2="-7" y2="-15"/><circle cx="-7" cy="-15" r="2.3"/><line x1="0" y1="0" x2="8" y2="-16"/><circle cx="8" cy="-16" r="2.3"/><line x1="0" y1="0" x2="1" y2="-21"/><circle cx="1" cy="-21" r="2.3"/></g>
    </g>
    <g transform="translate(252,158) rotate(22) scale(0.85)">
      <path d="M0,-48 C16,-25 16,-8 0,0 C-16,-8 -16,-25 0,-48 Z" fill="url(#lilyBlue)" stroke="#1e40af"/>
      <path d="M45,-15 C28,5 12,8 0,0 C8,-14 25,-22 45,-15 Z" fill="url(#lilyBlue)" stroke="#1e40af"/>
      <path d="M28,40 C6,30 -2,16 0,0 C15,4 28,18 28,40 Z" fill="url(#lilyBlue)" stroke="#1e40af"/>
      <path d="M-28,40 C-28,18 -15,4 0,0 C2,16 -6,30 -28,40 Z" fill="url(#lilyBlue)" stroke="#1e40af"/>
      <path d="M-45,-15 C-25,-22 -8,-14 0,0 C-12,8 -28,5 -45,-15 Z" fill="url(#lilyBlue)" stroke="#1e40af"/>
      <g stroke="#facc15" stroke-width="1.5" fill="#ca8a04"><line x1="0" y1="0" x2="-6" y2="-15"/><circle cx="-6" cy="-15" r="2.2"/><line x1="0" y1="0" x2="7" y2="-14"/><circle cx="7" cy="-14" r="2.2"/></g>
    </g>
    <g transform="translate(112,188) rotate(-18) scale(0.92)">
      <path d="M0,-48 C16,-25 16,-8 0,0 C-16,-8 -16,-25 0,-48 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <path d="M45,-15 C28,5 12,8 0,0 C8,-14 25,-22 45,-15 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <path d="M28,40 C6,30 -2,16 0,0 C15,4 28,18 28,40 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <path d="M-28,40 C-28,18 -15,4 0,0 C2,16 -6,30 -28,40 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <path d="M-45,-15 C-25,-22 -8,-14 0,0 C-12,8 -28,5 -45,-15 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <g stroke="#65a30d" stroke-width="1.5" fill="#84cc16"><line x1="0" y1="0" x2="-6" y2="-14"/><circle cx="-6" cy="-14" r="2.2"/><line x1="0" y1="0" x2="6" y2="-15"/><circle cx="6" cy="-15" r="2.2"/></g>
    </g>
    <g transform="translate(162,212) scale(0.9)">
      <path d="M0,-48 C16,-25 16,-8 0,0 C-16,-8 -16,-25 0,-48 Z" fill="url(#lilyBlue)" stroke="#60a5fa"/>
      <path d="M45,-15 C28,5 12,8 0,0 C8,-14 25,-22 45,-15 Z" fill="url(#lilyBlue)" stroke="#60a5fa"/>
      <path d="M28,40 C6,30 -2,16 0,0 C15,4 28,18 28,40 Z" fill="url(#lilyBlue)" stroke="#60a5fa"/>
      <path d="M-28,40 C-28,18 -15,4 0,0 C2,16 -6,30 -28,40 Z" fill="url(#lilyBlue)" stroke="#60a5fa"/>
      <path d="M-45,-15 C-25,-22 -8,-14 0,0 C-12,8 -28,5 -45,-15 Z" fill="url(#lilyBlue)" stroke="#60a5fa"/>
      <g stroke="#fde047" stroke-width="1.5" fill="#eab308"><line x1="0" y1="0" x2="-5" y2="-15"/><circle cx="-5" cy="-15" r="2.2"/><line x1="0" y1="0" x2="6" y2="-14"/><circle cx="6" cy="-14" r="2.2"/></g>
    </g>
    <g transform="translate(232,208) rotate(15) scale(0.9)">
      <path d="M0,-48 C16,-25 16,-8 0,0 C-16,-8 -16,-25 0,-48 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <path d="M45,-15 C28,5 12,8 0,0 C8,-14 25,-22 45,-15 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <path d="M28,40 C6,30 -2,16 0,0 C15,4 28,18 28,40 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <path d="M-28,40 C-28,18 -15,4 0,0 C2,16 -6,30 -28,40 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <path d="M-45,-15 C-25,-22 -8,-14 0,0 C-12,8 -28,5 -45,-15 Z" fill="url(#lilyWhite)" stroke="#93c5fd"/>
      <g stroke="#65a30d" stroke-width="1.5" fill="#84cc16"><line x1="0" y1="0" x2="-6" y2="-14"/><circle cx="-6" cy="-14" r="2.2"/><line x1="0" y1="0" x2="6" y2="-15"/><circle cx="6" cy="-15" r="2.2"/></g>
    </g>
    <polygon points="75,215 180,262 285,215 245,355 180,385 115,355" fill="url(#wrapFront)" stroke="#cbd5e1" stroke-width="2"/>
    <polygon points="115,245 180,275 245,245 215,395 180,415 145,395" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <g transform="translate(180,285)">
      <path d="M-12,8 L-48,95 L-28,85 L-18,105 L0,18 Z" fill="url(#ribbon)" stroke="#1e3a8a" stroke-width="1.5"/>
      <path d="M12,8 L48,95 L28,85 L18,105 L0,18 Z" fill="url(#ribbon)" stroke="#1e3a8a" stroke-width="1.5"/>
      <path d="M-6,0 C-45,-35 -82,-12 -68,16 C-55,34 -22,22 -6,6 Z" fill="url(#ribbon)" stroke="#1e3a8a" stroke-width="1.5"/>
      <path d="M6,0 C45,-35 82,-12 68,16 C55,34 22,22 6,6 Z" fill="url(#ribbon)" stroke="#1e3a8a" stroke-width="1.5"/>
      <path d="M-8,6 C-42,12 -64,36 -46,52 C-30,62 -14,34 -5,12 Z" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.5"/>
      <path d="M8,6 C42,12 64,36 46,52 C30,62 14,34 5,12 Z" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.5"/>
      <rect x="-12" y="-10" width="24" height="22" rx="6" fill="#1e40af" stroke="#172554" stroke-width="1.5"/>
      <g fill="#bae6fd" opacity="0.8">
        <circle cx="-38" cy="2" r="3"/><circle cx="38" cy="2" r="3"/><circle cx="-26" cy="52" r="3"/><circle cx="26" cy="52" r="3"/>
      </g>
    </g>
  </svg>`),

  butterfly: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180">
    <defs>
      <radialGradient id="bfWing" cx="40%" cy="40%" r="65%"><stop offset="0%" stop-color="#e0f2fe"/><stop offset="55%" stop-color="#60a5fa"/><stop offset="88%" stop-color="#1e40af"/><stop offset="100%" stop-color="#172554"/></radialGradient>
    </defs>
    <path d="M96,62 Q82,32 72,28" fill="none" stroke="#1e3a8a" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="72" cy="28" r="2.5" fill="#1e3a8a"/>
    <path d="M104,62 Q118,32 128,28" fill="none" stroke="#1e3a8a" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="128" cy="28" r="2.5" fill="#1e3a8a"/>
    <path d="M98,78 C65,30 12,26 16,65 C20,96 62,102 98,94 Z" fill="url(#bfWing)" stroke="#172554" stroke-width="2"/>
    <path d="M102,78 C135,30 188,26 184,65 C180,96 138,102 102,94 Z" fill="url(#bfWing)" stroke="#172554" stroke-width="2"/>
    <path d="M98,94 C64,98 30,118 44,146 C56,166 86,144 98,116 Z" fill="url(#bfWing)" stroke="#172554" stroke-width="2"/>
    <path d="M102,94 C136,98 170,118 156,146 C144,166 114,144 102,116 Z" fill="url(#bfWing)" stroke="#172554" stroke-width="2"/>
    <g stroke="#1e3a8a" stroke-width="1.2" opacity="0.55" fill="none">
      <path d="M96,82 L32,54"/><path d="M96,86 L28,74"/><path d="M104,82 L168,54"/><path d="M104,86 L172,74"/>
      <path d="M96,100 L52,134"/><path d="M104,100 L148,134"/>
    </g>
    <g fill="#ffffff" opacity="0.9">
      <circle cx="26" cy="48" r="3"/><circle cx="23" cy="60" r="2.5"/><circle cx="26" cy="72" r="2.5"/>
      <circle cx="174" cy="48" r="3"/><circle cx="177" cy="60" r="2.5"/><circle cx="174" cy="72" r="2.5"/>
      <circle cx="52" cy="146" r="2.5"/><circle cx="148" cy="146" r="2.5"/>
    </g>
    <ellipse cx="100" cy="96" rx="4.5" ry="28" fill="#172554"/>
    <circle cx="100" cy="65" r="5" fill="#172554"/>
  </svg>`),

  tiger: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220">
    <path d="M100,10 Q104,34 126,38 Q104,42 100,66 Q96,42 74,38 Q96,34 100,10 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round"/>
    <path d="M52,95 C42,68 62,58 76,78 Z" fill="#bae6fd" stroke="#1e3a8a" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M148,95 C158,68 138,58 124,78 Z" fill="#bae6fd" stroke="#1e3a8a" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M46,122 C44,88 72,72 100,72 C128,72 156,88 154,122 C152,154 128,168 100,168 C72,168 48,154 46,122 Z" fill="#bae6fd" stroke="#1e3a8a" stroke-width="3.5"/>
    <path d="M84,84 Q100,88 116,84" fill="none" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
    <path d="M88,96 Q100,100 112,96" fill="none" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
    <line x1="100" y1="76" x2="100" y2="102" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
    <path d="M100,108 Q103,120 112,123 Q103,126 100,138 Q97,126 88,123 Q97,120 100,108 Z" fill="#1e3a8a"/>
    <ellipse cx="75" cy="108" rx="5" ry="4" fill="#1e3a8a"/>
    <ellipse cx="125" cy="108" rx="5" ry="4" fill="#1e3a8a"/>
    <path d="M58,128 Q74,116 88,132 Q74,142 58,128 Z" fill="#ffffff" stroke="#1e3a8a" stroke-width="3"/>
    <circle cx="74" cy="130" r="6" fill="#1e40af"/>
    <path d="M142,128 Q126,116 112,132 Q126,142 142,128 Z" fill="#ffffff" stroke="#1e3a8a" stroke-width="3"/>
    <circle cx="126" cy="130" r="6" fill="#1e40af"/>
    <path d="M47,126 L60,130 M49,140 L63,142 M153,126 L140,130 M151,140 L137,142" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
    <path d="M93,144 L107,144 L100,152 Z" fill="#1e3a8a"/>
    <path d="M86,156 Q94,162 100,154 Q106,162 114,156" fill="none" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round"/>
    <g transform="translate(64,182)">
      <ellipse cx="0" cy="6" rx="20" ry="17" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="3"/>
      <ellipse cx="0" cy="8" rx="9" ry="7" fill="#1e40af"/>
      <circle cx="-11" cy="-4" r="4" fill="#1e40af"/><circle cx="0" cy="-7" r="4" fill="#1e40af"/><circle cx="11" cy="-4" r="4" fill="#1e40af"/>
    </g>
    <g transform="translate(136,182)">
      <ellipse cx="0" cy="6" rx="20" ry="17" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="3"/>
      <ellipse cx="0" cy="8" rx="9" ry="7" fill="#1e40af"/>
      <circle cx="-11" cy="-4" r="4" fill="#1e40af"/><circle cx="0" cy="-7" r="4" fill="#1e40af"/><circle cx="11" cy="-4" r="4" fill="#1e40af"/>
    </g>
  </svg>`),

  octopus: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
    <g fill="#2b6cb0" stroke="#1a365d" stroke-width="2.5" stroke-linejoin="round">
      <path d="M25,195 C20,130 12,65 36,24 C42,45 32,95 45,135 C58,95 95,82 105,112 C110,128 85,134 86,120 C87,110 68,112 64,142 C96,128 148,116 176,78 C178,108 145,142 104,158 C136,154 176,162 174,192 C172,210 144,210 144,192 C144,180 122,178 106,195 Z"/>
      <path d="M135,198 C142,162 182,152 198,178 C210,198 186,216 168,204 C156,196 166,182 176,188" fill="#3182ce"/>
    </g>
    <g fill="#ffffff" stroke="#1a365d" stroke-width="1.5">
      <circle cx="30" cy="60" r="4"/><circle cx="28" cy="80" r="4.5"/><circle cx="29" cy="102" r="5"/><circle cx="32" cy="124" r="5.5"/>
      <circle cx="72" cy="102" r="4.5"/><circle cx="88" cy="100" r="4"/><circle cx="100" cy="112" r="3.5"/>
      <circle cx="122" cy="138" r="5"/><circle cx="142" cy="124" r="4.5"/><circle cx="158" cy="106" r="4"/>
      <circle cx="132" cy="172" r="5"/><circle cx="154" cy="176" r="4.5"/><circle cx="166" cy="190" r="4"/>
    </g>
  </svg>`),

  flower: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
    <defs>
      <radialGradient id="flBlue" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#1e3a8a"/><stop offset="45%" stop-color="#3b82f6"/><stop offset="85%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#e0f2fe"/></radialGradient>
    </defs>
    <path d="M90,90 Q86,138 76,172" fill="none" stroke="#65a30d" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(90,84)">
      <path d="M0,-58 C22,-32 20,-10 0,0 C-20,-10 -22,-32 0,-58 Z" fill="url(#flBlue)" stroke="#1e40af" stroke-width="1.5"/>
      <path d="M55,-18 C32,8 12,10 0,0 C10,-18 32,-26 55,-18 Z" fill="url(#flBlue)" stroke="#1e40af" stroke-width="1.5"/>
      <path d="M35,48 C8,36 -2,18 0,0 C18,6 34,22 35,48 Z" fill="url(#flBlue)" stroke="#1e40af" stroke-width="1.5"/>
      <path d="M-35,48 C-34,22 -18,6 0,0 C2,18 -8,36 -35,48 Z" fill="url(#flBlue)" stroke="#1e40af" stroke-width="1.5"/>
      <path d="M-55,-18 C-32,-26 -10,-18 0,0 C-12,10 -32,8 -55,-18 Z" fill="url(#flBlue)" stroke="#1e40af" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="9" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="4" fill="#1e3a8a"/>
    </g>
    <g transform="translate(32,34) rotate(-25) scale(0.35)">
      <path d="M0,-40 C18,-20 15,0 0,0 C-15,0 -18,-20 0,-40 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <path d="M38,-10 C20,10 0,10 0,0 C5,-15 22,-18 38,-10 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <path d="M-38,-10 C-22,-18 -5,-15 0,0 C0,10 -20,10 -38,-10 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <circle cx="0" cy="-4" r="5" fill="#fef08a"/>
    </g>
    <g transform="translate(148,136) rotate(30) scale(0.32)">
      <path d="M0,-40 C18,-20 15,0 0,0 C-15,0 -18,-20 0,-40 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <path d="M38,-10 C20,10 0,10 0,0 C5,-15 22,-18 38,-10 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <path d="M-38,-10 C-22,-18 -5,-15 0,0 C0,10 -20,10 -38,-10 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <circle cx="0" cy="-4" r="5" fill="#fef08a"/>
    </g>
  </svg>`)
};
