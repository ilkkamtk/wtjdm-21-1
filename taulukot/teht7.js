'use strict';
const ehdokkaidenLkm = +prompt('Anna ehdokkaiden lukumäärä');
const aanestajienLkm = +prompt('Anna äänestäjien lukumäärä');
const aanet = [];

for (let i = 0; i < aanestajienLkm; i++) {
  const aani = +prompt('Anna ehdokkaan äänestysnumero');
  aanet.push(aani);
}

const tulokset = [];
// täytetään tulokset nollilla, jotta yhteenlasku toimisi
for(let i = 0; i < ehdokkaidenLkm; i++){
  tulokset[i] = 0;
}


for (let i = 0; i < aanet.length; i++) {
  for (let j = 1; j <= ehdokkaidenLkm; j++) {
    if (aanet[i] === j) {
      tulokset[j-1]++;
    }
  }
}
console.log(tulokset);

const suurinAanimaara = Math.max(...tulokset);
const voittajanIndeksi = tulokset.indexOf(suurinAanimaara);

document.write(`Voittaja on ehdokas numero ${voittajanIndeksi + 1}`);