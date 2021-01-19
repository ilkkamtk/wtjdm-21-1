'use strict';

document.write('<table>');
document.write('<tr>');
for (let n = 1; n <= 25; n++) {
  const luku = Math.floor(Math.random() * 4);
  const ruutu = 4 * n - luku;
  // console.log(ruutu);

  document.write(`<td style="border: 1px solid #000; padding: 8px;">${ruutu}</td>`);

  if(n % 5 === 0) {
    document.write('</tr>');
    if(n < 25) {
      document.write('<tr>');
    }
  }
}
document.write('</table>');
