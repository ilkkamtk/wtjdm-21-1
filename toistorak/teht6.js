'use strict';

const lkm = prompt('Anna noppien lukumäärä');
const luku = +prompt('Minkä luvun todennäköisyyden haluat selvittää');

let osumat = 0;
for (let i = 0; i < 10000; i++) {
  let summa = 0;
  for (let j = 0; j < lkm; j++) {
    const noppa = Math.floor(Math.random() * 6) + 1;
    summa += noppa;
  }
  if (summa === luku) {
    osumat++;
  }
}

const todNak = (100 * osumat / 10000).toFixed(2);

document.write(`Luvun ${luku} todennäköisyys ${lkm} nopalla on ${todNak}%`);
