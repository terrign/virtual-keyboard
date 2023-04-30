import Keyboard from './keyboard';
import '../styles/style.css';

const keyboard = new Keyboard();

keyboard.init();

document.addEventListener('keydown', (e) => {
  if ((e.altKey === true && e.key === 'Shift') || (e.shiftKey === true && e.key === 'Alt')) keyboard.updateLang();
});
