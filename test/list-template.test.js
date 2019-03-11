import { makeCharTemplate } from '../src/list-template.js';
const test = QUnit.test;

QUnit.module('SEARCH API');

const data = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    species: 'Human'
};

test('static creation of li', assert => {
    // arrange
    const expected = `
        <li>
            <p>Rick Sanchez</p>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg">
            <p>Human</p>
        </li>
    `;
    // act
    const result = makeCharTemplate(data);
    // assert
    assert.htmlEqual(result, expected);
});