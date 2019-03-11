const test = QUnit.test;

QUnit.module('hash query interaction');
const currentQuery = '';
const searchTerm = 'rick';

function writeToQuery(searchTerm) {
    const searchParams = new URLSearchParams(currentQuery);
    searchParams.set('name', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}
// window.location.hash.slice(1) -> 'name=rick&page=1'
// const currentQuery = window.location.hash.slice(1);
function readFromQuery(hash) {
    const searchParams = new URLSearchParams(hash);
    const queryOptions = {
        name: searchParams.get('name'),
        page: Number(searchParams.get('page'))
    };
    return queryOptions;
}

test('write search term to query', assert => {
    const expected = 'name=rick&page=1';

    const result = writeToQuery(searchTerm);

    assert.equal(result, expected);
});

test('read search from query', assert => {
    const hash = 'name=rick&page=1';
    const expected = {
        name: 'rick',
        page: 1
    };
    const result = readFromQuery(hash);
    assert.deepEqual(result, expected);
})
