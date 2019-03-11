const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const search = searchBar.value;
    console.log(search);
});