// Asetukset paikkatiedon hakua varten (valinnainen)
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// Käytetään leaflet.js -kirjastoa näyttämään sijainti kartalla (https://leafletjs.com/)
const map = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Funktio, joka keskittää kartan haluttuihin koordinaatteihin
function paivitaKartta(crd) {
  map.setView([crd.latitude, crd.longitude], 13);
}

// Funktio, jolla tehdään markkerit
function lisaaMarker(crd) {
  L.marker([crd.latitude, crd.longitude]).
      addTo(map).
      bindPopup('Olen tässä.').
      openPopup();
}

// Funktio, joka ajetaan, kun paikkatiedot on haettu
function success(pos) {
  const crd = pos.coords;

  // Tulostetaan paikkatiedot konsoliin
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  // keskitä (ja näytä) kartta
  paivitaKartta(crd);
  // lisää marker omaan lokaatioon
  lisaaMarker(crd);

}

// Funktio, joka ajetaan, jos paikkatietojen hakemisessa tapahtuu virhe
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Käynnistetään paikkatietojen haku
navigator.geolocation.getCurrentPosition(success, error, options);

fetch(
    'https://api.openchargemap.io/v3/poi/?latitude=60.2&longitude=24.9&distance=10&distanceunit=KM').
    then(function(vastaus) {
      // console.log(vastaus);
      return vastaus.json();
    }).
    then(function(latauspisteet){
      console.log(latauspisteet);
    });

