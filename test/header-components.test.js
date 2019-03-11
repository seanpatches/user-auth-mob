const test = QUnit.test;

QUnit.module('HEADER');

function makeHeader(){
    const html = `
        <div>
            <img src="./assets/readingRainbow.jpg" alt="website logo">
            <h1>Book List</h1>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
test('display static section of header', assert => {
    //arrange
    const expected = `
        <div>
        <img src="./assets/readingRainbow.jpg" alt="website logo">
        <h1>Book List</h1>
        </div>
    `;

    //act
    const result = makeHeader();

    //assert
    assert.htmlEqual(result, expected);
});