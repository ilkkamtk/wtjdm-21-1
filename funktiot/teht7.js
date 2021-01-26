'use strict';

function parilliset(taulukko) {
  // const even = [];
  /*
  for(let i = 0; i < taulukko.length; i++){
    if(numero % 2 === 0){
      even.push(numero);
    }
  }
  */
  const even = taulukko.filter(function(numero) {
    if (numero % 2 === 0) {
      return numero;
    }
  });
  return even;
}

const alkup = [12, 4, 5, 2, 5, 7, 8, 9, 11, 13, 45, 64567578, 2454, 4];
const muokattu = parilliset(alkup);
console.log(muokattu);