// Put code of task C here
const data = {
  otsikko: 'Kissakuva',
  kappale: 'Tähän paljon tekstiä ja sillee.',
  kuvateksi: 'Kaunis kissa',
};

const main = document.querySelector('main');
const article = document.createElement('article');
const header = document.createElement('header');
const h2 = document.createElement('h2');
const figure = document.createElement('figure');
const figcaption = document.createElement('figcaption');
const img = document.createElement('img');
const p = document.createElement('p');

h2.innerHTML = data.otsikko;
img.src = 'http://placekitten.com/322/160';
img.alt = 'alttiteksti';
figcaption.innerHTML = data.kuvateksi;
p.innerHTML = data.kappale;

header.appendChild(h2);
article.appendChild(header);

figure.appendChild(img);
figure.appendChild(figcaption);
article.appendChild(figure);

article.appendChild(p)

main.appendChild(article);