/* =====================================================
   config.js — ✏️ PENGATURAN (nama, umur, foto, hadiah, musik)
   Kata-kata panjang ada di teks.js
   ===================================================== */
const CONFIG = {
  welcome: " HALOO VIEL",
  name: "VIEL",
  age: "19",
  title: "BIRTHDAY VIELL",
  btnStart: "KESINII LIT",
  hint: "BUKAAAAA BUKAA BUKAA",

  // Buku diary: sapaan & penutup surat
  diary: { salutation: "Dearest VIEL,", signoff: "Love always,", pageChars: 600 },

  // Foto di slide "Our Memories" (tumpukan polaroid yang bisa dilempar).
  photos: [
    { src: "img/kenangan/foto1.jpg", cap: "ROSBLOSS IKAANNN" },
    { src: "img/kenangan/foto2.jpg", cap: "PAPP PAS FT PAPJIIK" },
    { src: "img/kenangan/foto3.jpg", cap: "CIMIITTTT!!" },
    { src: "img/kenangan/foto4.jpg", cap: "YAALLAH" },
    { src: "img/kenangan/foto5.jpg", cap: "MUEHEHHEHEEK" }
  ],

  wishesSign: "with love",

  gift: {
    title: "TADAAAAAA",
    text: "",
    photo: EMBEDDED_ASSETS.bouquet,
    localFile: "img/buket.webp",
    finalPhoto: EMBEDDED_ASSETS.bouquetPhoto
  },


  endDecorations: [
    { type: "butterfly", label: "Kupu-kupu Biru", note: "💙", src: EMBEDDED_ASSETS.butterfly, localFile: "img/dekor/kupu.jpg", cls: "dec-drift", style: "left:5%;top:9%;width:82px;--rot:-12deg;--mx:36px;--my:-24px;--dur:11s;--del:0s" },
    { type: "butterfly", label: "Kupu-kupu Biru", note: "💙", src: EMBEDDED_ASSETS.butterfly, localFile: "img/dekor/kupu.jpg", cls: "dec-drift", style: "right:6%;top:16%;width:70px;--rot:14deg;--mx:-34px;--my:22px;--dur:13s;--del:-3s" },
    { type: "butterfly", label: "Kupu-kupu Biru", note: "💙", src: EMBEDDED_ASSETS.butterfly, localFile: "img/dekor/kupu.jpg", cls: "dec-drift", style: "right:14%;top:66%;width:64px;--rot:-10deg;--mx:-28px;--my:-20px;--dur:12.5s;--del:-6s" },
    { type: "tiger", label: "Macan Biru", note: "💙", src: EMBEDDED_ASSETS.tiger, localFile: "img/dekor/macan1.jpg", cls: "dec-float", style: "left:4%;bottom:11%;width:92px;--rot:-8deg;--mx:16px;--my:-22px;--dur:8.5s;--del:-1s" },
    { type: "tiger", label: "Macan Biru", note: "💙", src: EMBEDDED_ASSETS.tiger, localFile: "img/dekor/macan2.jpg", cls: "dec-float", style: "left:9%;top:42%;width:76px;--rot:7deg;--mx:-14px;--my:-20px;--dur:9.5s;--del:-2.5s" },
    { type: "octopus", label: "Gurita Biru", note: "💙", src: EMBEDDED_ASSETS.octopus, localFile: "img/dekor/gurita.jpg", cls: "dec-float", style: "right:3.5%;bottom:11%;width:102px;--rot:6deg;--mx:-18px;--my:-22px;--dur:10s;--del:-2s" },
    { type: "flower", label: "Bunga Biru", note: "💙", src: EMBEDDED_ASSETS.flower, localFile: "img/dekor/bunga1.jpg", cls: "dec-float", style: "right:9%;top:7%;width:88px;--rot:10deg;--mx:20px;--my:18px;--dur:9s;--del:-4s" },
    { type: "flower", label: "Bunga Biru", note: "💙", src: EMBEDDED_ASSETS.flower, localFile: "img/dekor/bunga2.png", cls: "dec-drift", style: "left:13%;top:66%;width:82px;--rot:-10deg;--mx:26px;--my:-20px;--dur:13.5s;--del:-5s" }
  ],

  music: { title: "Happy Birthday", artist: "Lagu untukmu", file: "musik/lagu.mp3", autoStart: true, loop: true, volume: 0.8 }
};
