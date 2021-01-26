// Put code of task B here
// const data = ['Kissakuva', 'Kaunis kissa', 'Tähän paljon tekstiä ja sillee.'];
const data = {
  otsikko: 'Kissakuva',
  kappale: 'Tähän paljon tekstiä ja sillee.',
  kuvateksi: 'Kaunis kissa',
};

const main = document.querySelector('main');
const html = `<article>
            <header>
                <h2>${data.otsikko}</h2>
            </header>
            <figure>
                <img src="http://placekitten.com/322/160" alt="title">
                <figcaption>${data.kuvateksi}</figcaption>
            </figure>
            <p>${data.kappale}</p>
        </article>`;
main.innerHTML += html;