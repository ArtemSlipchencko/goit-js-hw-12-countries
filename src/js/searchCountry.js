const input = document.querySelector('input');

export const searchCountry = function() {

   return fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
    .then(data => data.json());
    
};