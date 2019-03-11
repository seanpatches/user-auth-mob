const test = QUnit.test;

QUnit.module('SEARCH API');

const data = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    species: 'Human'
};

function makeCharTemplate(data) {
    const html = `
        <li>
            <p>${data.name}</p>
            <img src="${data.image}">
            <p>${data.species}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
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