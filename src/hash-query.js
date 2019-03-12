export function writeToQuery(currentQuery, searchTerm) {
    const searchParams = new URLSearchParams(currentQuery);
    searchParams.set('name', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function readFromQuery(hash) {
    const searchParams = new URLSearchParams(hash);
    const queryOptions = {
        name: searchParams.get('name'),
        page: Number(searchParams.get('page'))
    };
    return queryOptions;
}