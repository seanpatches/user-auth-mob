import { writeToQuery } from './hash-query.js';

const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchBar.value;
    const currentQuery = window.location.hash.slice(1);
    const newQuery = writeToQuery(currentQuery, searchTerm);
    window.location.hash = newQuery;
});