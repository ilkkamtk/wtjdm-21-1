const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

const lista = document.querySelector('ul');

for (let i = 0; i < pics.length; i++) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = pics[i].thumb;
  img.alt = 'kuvake';

  li.appendChild(img);
  lista.appendChild(li);
}