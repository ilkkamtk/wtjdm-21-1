'use strict';

function muunnos() {
  const gallonat = prompt('Anna bensamäärä gallonoina');
  const litrat = 3.785 * gallonat;
  document.write(`${gallonat} gallonaa on ${litrat} litraa`);
}

muunnos();