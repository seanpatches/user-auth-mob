import loadHeader from './header-component.js';
import './search-component.js';
import loadCharacters from './list-template.js';
import { readFromQuery } from './hash-query.js';
import makeURL from './make-url.js';

loadHeader();

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    const queryOptions = readFromQuery(hash);
    const searchURL = makeURL(queryOptions);

    fetch(searchURL)
        .then(response => response.json())
        .then(charData => {
            loadCharacters(charData);
        });

    const searchBar = document.getElementById('search-bar');
    searchBar.textContent = queryOptions.name;
});