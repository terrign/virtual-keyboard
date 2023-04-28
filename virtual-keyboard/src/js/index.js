import lang from './lang-save.js';
import Keyboard from './keyboard.js';
import Button from './button.js';
import json from '../assets/buttons.json';
import '../styles/style.css';

lang();

const keyboard = new Keyboard();

const button = new Button();

keyboard.init();
button.init();

keyboard.hi().then(console.log);
console.log(json);
console.log(keyboard.getId);
