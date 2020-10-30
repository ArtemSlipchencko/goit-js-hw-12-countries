import './styles.css';
import debounce from 'lodash.debounce';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { aler, notice, info, success, error } from '@pnotify/core';


  defaultModules.set(PNotifyMobile, {});


const input = document.querySelector('input');
const div = document.querySelector('.country');

const searchCountry = function() {

    fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
    .then(data => data.json())
    .then(data => showCountry(data));
    
};

const showCountry = function(data) {
    console.log(data);

        if (data.length === 1) {
            div.innerHTML = `<div class="one-country"><div class="flag"><img src="${data[0].flag}" width="150px" height="100px" /></div><h1>${data[0].name}</h1><h2>Capital:</h2><p> ${data[0].capital}</p><h2>Population:</h2><p> ${data[0].population}</p><h2>Languages:</h2><ul class="languages"> </ul></div>`;
            [...data[0].languages].forEach(el => document.querySelector('.languages').innerHTML += `<li>${el.name}</li>`);
        } else if (data.length >= 2 && data.length < 10) {
            div.innerHTML = `<ul class="country-list"></ul>`;
            [...data].forEach(el => document.querySelector('.country-list').innerHTML += `<li>${el.name}</li>`);
        } else error('Too many matches found. Please enter a more specific query!');

};

input.addEventListener('input', debounce(searchCountry, 500));