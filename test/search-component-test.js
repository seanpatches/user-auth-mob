const test = QUnit.test;

QUnit.module('SEARCH API');

function makeCharTemplate() {
    const html = `
        <li>
            <p>Rick Sanchez</p>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg">
            <p>Human</p>
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
    const result = makeCharTemplate();
    // assert
    assert.htmlEqual(result, expected);
})