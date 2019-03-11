const test = QUnit.test;

QUnit.module('hash query interaction');
const currentQuery = '';
const searchTerm = 'rick';

function writeToQuery(searchTerm){
    const searchParams = new URLSearchParams(currentQuery);
    searchParams.set('name', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('write search term to query', assert => {
    const expected = 'name=rick&page=1';

    const result = writeToQuery(searchTerm);

    assert.equal(result, expected);
});
