import { makeHeader, makeProfile } from '../src/header-component.js';
const test = QUnit.test;

QUnit.module('HEADER');


test('display static section of header', assert => {
    //arrange
    const expected = `
    <div id="header">
    <img src="./assets/readingRainbow.jpg" alt="website logo" id="logo">
    <h1>Book List</h1>
    </div>
    `;
    
    //act
    const result = makeHeader();
    
    //assert
    assert.htmlEqual(result, expected);
});


test('append user\'s data into header', assert => {
    //arrange
    const user = {
        displayName: 'Phoebe',
        photoURL: './phoebe'
    };

    const expected = `
        <div id="profile">
            <img src="./phoebe">
            <span>Phoebe</span>
            <button>Sign Out</button>
        </div>
    `;

    //act
    const result = makeProfile(user);

    //assert
    assert.htmlEqual(result, expected);
});