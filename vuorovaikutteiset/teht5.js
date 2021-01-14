'use strict';
const eka = +prompt('Anna eka luku');
const toka = +prompt('Anna toka luku');
const kolmas = +prompt('Anna kolmas luku');

const summa = eka + toka + kolmas;
document.write('Summa on ' + summa);

// rivinvaihto
document.write('<br>');

const tulo = eka * toka * kolmas;
document.write('Tulo on ' + tulo);

// rivinvaihto
document.write('<br>');
const keskiarvo = summa / 3;
document.write('Keskiarvo on ' + keskiarvo);