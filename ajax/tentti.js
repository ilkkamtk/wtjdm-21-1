'use strict';
const hakunappi = document.getElementById('hakunappi');
const hakuteksti = document.getElementById('hakuteksti');

hakunappi.addEventListener('click', function(evt) {
  console.log(hakuteksti.value);
  fetch('http://api.tvmaze.com/search/shows?q=' + hakuteksti.value).
      then(function(vastaus) {
        return vastaus.json();
      }).
      then(function(sarjat) {
        console.log(sarjat);
      }).
      catch(function(err) {
        console.error(err.message);
      });
});