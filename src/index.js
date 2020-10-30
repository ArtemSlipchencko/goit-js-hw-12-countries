import './styles.css';
import debounce from 'lodash.debounce';

const input = document.querySelector('input');
const div = document.querySelector('.country');

const searchCountry = function() {

    fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
    .then(data => data.json())
    .then(data => console.log(data))
    .then(data => {
        if (data.length = 1) {
            div.innerHTML += `<h1>${data[0].name}</h1>`;
        }
    })
    



}

input.addEventListener('input', debounce(searchCountry, 500));

alert('Notice me, senpai!');