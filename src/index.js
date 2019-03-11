import loadHeader from './header-component.js';
import './search-component.js';
import loadCharacters from './list-template.js';
import charData from '../data/fake.js';

loadHeader();
loadCharacters(charData);