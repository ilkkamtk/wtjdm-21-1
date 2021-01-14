'use strict';
const luku = prompt('Anna vuosiluku');

// loogiset lausekkeet:
// luku % 4 === 0
// luku % 100 !== 0
// luku % 400 === 0

/*
if (luku % 400 === 0 || luku % 4 === 0 && luku % 100 !== 0) {
  document.write('Vuosi on karkausvuosi');
} else {
  document.write('Vuosi ei ole karkausvuosi');
}
*/

if(luku % 4 === 0){
  if(luku % 100 === 0){
    if(luku % 400 === 0){
      document.write('Vuosi on karkausvuosi');
    } else {
      document.write('Vuosi ei ole karkausvuosi');
    }
  }
  document.write('Vuosi on karkausvuosi');
} else {
  document.write('Vuosi ei ole karkausvuosi');
}

