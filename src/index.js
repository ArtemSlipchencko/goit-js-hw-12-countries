import './styles.css';
import debounce from 'lodash.debounce';
import {searchCountry} from './js/searchCountry.js';
import {showCountry} from './js/showCountry';

const input = document.querySelector('input');

input.addEventListener('input', debounce(() => {
    searchCountry().then(data => showCountry(data));
}, 500));