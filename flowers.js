/* =====================================================
   flowers.js — ✏️ gambar bunga yang dipakai (semua ada di folder img/)
   ===================================================== */

const HERO_FLOWER = 'img/hero.webp';

const FLOWER_IMAGES = [
  'img/f01.webp', 'img/f02.webp', 'img/f03.webp', 'img/f04.webp', 'img/f05.webp',
  'img/f06.webp', 'img/f07.webp', 'img/f08.webp', 'img/f10.webp', 'img/f11.webp',
  'img/f12.webp', 'img/f13.webp', 'img/f14.webp', 'img/f15.webp', 'img/f16.webp',
  'img/f17.webp', 'img/f18.webp', 'img/f19.webp', 'img/f20.webp', 'img/f21.webp',
  'img/f22.webp', 'img/f23.webp'
];

const BOUQUET = [
  ['img/f20.webp', 33, 105, 80], ['img/f12.webp', 87, 58, 82], ['img/f04.webp', 141, 80, 68],
  ['img/f14.webp', 50, 132, 60], ['img/f11.webp', 156, 134, 58]
];

const randomFlower = () => FLOWER_IMAGES[Math.floor(Math.random() * FLOWER_IMAGES.length)];
