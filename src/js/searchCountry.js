import {showCountry} from '../index.js';
const input = document.querySelector('input');

export const searchCountry = function() {

    fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
    .then(data => data.json())
    .then(data => showCountry(data));
    
};