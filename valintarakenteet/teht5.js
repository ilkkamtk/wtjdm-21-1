'use strict';

const lasketaanko = confirm('Lasketaanko neliöjuuri?');

if (lasketaanko) {
  const luku = +prompt('Anna luku');
  if (luku > 0) {
    const tulos = Math.sqrt(luku);
    // document.write('Luvun ' + luku + ' neliöjuuri on ' + tulos);
    // vaihtotehto: template string
    document.write(`Luvun ${luku} neliöjuuri on ${tulos}`);
  } else {
    document.write('Negatiivisen luvun neliöjuuri ei ole määritelty');
  }
} else {
  document.write('Neliöjuurta ei lasketa.');
}