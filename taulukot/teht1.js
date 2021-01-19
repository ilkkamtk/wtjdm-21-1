'use strict';
const lkm = 5;
const numerot = [];

for(let i = 0; i < lkm; i++){
  const numero = prompt('Anna luku');
  numerot.push(numero);
}

numerot.reverse();
for(let i = 0; i < lkm; i++){
 console.log(numerot[i]);
}
