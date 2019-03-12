export default function makeURL(queryOptions) {
    const apiSite = 'https://rickandmortyapi.com/api/character/';
    const url = new URL(apiSite);
    url.searchParams.set('name', queryOptions.name);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();  
}
