'use strict';
// const cors = 'https://cors-anywhere.herokuapp.com/';
const cors = 'https://users.metropolia.fi/~ilkkamtk/proxy.php/?ur=';
const google = 'https://www.google.com/maps/dir/?api=1&';

// kustomi ikonit css:llä
const punainenIkoni = L.divIcon({className: 'punainen-ikoni'});
const vihreaIkoni = L.divIcon({className: 'vihrea-ikoni'});

// taulukko johon kerätään markkerit
const markkerit = [];

// Asetukset paikkatiedon hakua varten (valinnainen)
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const nimi = document.getElementById('nimi');
const osoite = document.getElementById('osoite');
const kaupunki = document.getElementById('kaupunki');
const lisatiedot = document.getElementById('lisatiedot');
const navigoi = document.querySelector('#navigoi a');

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
function lisaaMarker(crd, ikoni) {
  const markkeri = L.marker([crd.latitude, crd.longitude], {icon: ikoni}).
      addTo(map);
  return markkeri;
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
  const omaPaikka = lisaaMarker(crd, vihreaIkoni);
  omaPaikka.bindPopup('Olen tässä.').openPopup();
  markkerit.push(omaPaikka);
  // hae latauspisteet
  //haeLatauspisteet(crd);
  // haetaankin helsingin ruakakaupat
  haeRuokakaupat(crd);
}

// Funktio, joka ajetaan, jos paikkatietojen hakemisessa tapahtuu virhe
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Käynnistetään paikkatietojen haku
navigator.geolocation.getCurrentPosition(success, error, options);

// blan B
function haeRuokakaupat(crd) {
  fetch(
      `${cors}https://open-api.myhelsinki.fi/v1/places/?tags_filter=SHOPPING,Grocery`).
      then(function(vastaus) {
        return vastaus.json();
      }).
      then(function(kaupat) {
        console.log(kaupat.data);
        for (let i = 0; i < kaupat.data.length; i++) {
          const koordinaatit = {
            latitude: kaupat.data[i].location.lat,
            longitude: kaupat.data[i].location.lon,
          };
          const kauppa = lisaaMarker(koordinaatit, punainenIkoni);
          markkerit.push(kauppa);
          kauppa.bindPopup(kaupat.data[i].name.fi);
          kauppa.on('popupopen', function() {
            nimi.innerHTML = kaupat.data[i].name.fi;
            osoite.innerHTML = kaupat.data[i].location.address.street_address;
            kaupunki.innerHTML = kaupat.data[i].location.address.locality;
            lisatiedot.innerHTML = kaupat.data[i].description.body;
            navigoi.href = `${google}origin=${crd.latitude},${crd.longitude}&destination=${koordinaatit.latitude},${koordinaatit.longitude}&travelmode=transit&dir_action=navigate`;
          });
        }
        // featureGroup markkereita varten
        const ryhma = new L.featureGroup(markkerit);
        map.fitBounds(ryhma.getBounds());
      }).
      catch(function(virhe) {
        console.log(virhe);
      });
}

function haeLatauspisteet(crd) {
  fetch(
      `https://api.openchargemap.io/v3/poi/?latitude=${crd.latitude}&longitude=${crd.longitude}&distance=10&distanceunit=KM`).
      then(function(vastaus) {
        // console.log(vastaus);
        return vastaus.json();
      }).
      then(function(latauspisteet) {
        console.log(latauspisteet);
        for (let i = 0; i < latauspisteet.length; i++) {
          const koordinaatit = {
            latitude: latauspisteet[i].AddressInfo.Latitude,
            longitude: latauspisteet[i].AddressInfo.Longitude,
          };
          const latauspiste = lisaaMarker(koordinaatit);
          latauspiste.bindPopup(latauspisteet[i].AddressInfo.Title);
        }
      }).
      catch(function(virhe) {
        console.log(virhe);
      });
}
