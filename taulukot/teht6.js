'use strict';
const luvut = [];

for (; ;) {
  const luku = +prompt('Anna luku, nolla lopettaa');
  if (luku === 0) {
    break;
  }
  luvut.push(luku);
}

const lkm = luvut.length;

let mediaani = 0;
if (lkm % 2 === 0) {
  // parillinen
  const ylempiIndeksi = lkm / 2;
  const alempiIndeksi = ylempiIndeksi - 1;
  mediaani = (luvut[alempiIndeksi] + luvut[ylempiIndeksi]) / 2;
} else {
  // pariton
  mediaani = luvut[(lkm - 1) / 2];
}

document.write(`Mediaani on ${mediaani}`);