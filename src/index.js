import './styles.css';
import debounce from 'lodash.debounce';
import { alert, defaultModules } from 'node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from 'node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

  defaultModules.set(PNotifyMobile, {});

  alert('Notice me, senpai!');

const input = document.querySelector('input');
const div = document.querySelector('.country');

const searchCountry = function() {

    fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
    .then(data => data.json())
    .then(data => console.log(data))
    .then(data => {
        if (data.length = 1) {
            div.innerHTML += `<h1>${data[0].name}</h1><h2>Capital:</h2><p> ${data[0].capital}</p><h2>Population:</h2><p> ${data[0].population}</p><h2>Languages:</h2><p> </p>`;
        }
    })
    



}

input.addEventListener('input', debounce(searchCountry, 500));