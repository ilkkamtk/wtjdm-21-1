'use strict';

function muunnos(gal) {
  return 3.785 * gal;
}

const gallonat = prompt('Anna bensamäärä gallonoina');

const litrat = muunnos(gallonat);

document.write(`${gallonat} gallonaa on ${litrat} litraa`);