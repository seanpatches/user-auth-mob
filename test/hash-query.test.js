import { writeToQuery, readFromQuery } from '../src/hash-query.js';
const test = QUnit.test;

QUnit.module('hash query interaction');
const currentQuery = '';
const searchTerm = 'rick';



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
