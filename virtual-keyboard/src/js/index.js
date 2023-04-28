import Keyboard from './keyboard.js';
import Button from './button.js';
import '../styles/style.css';



function initPage() {
  Keyboard.saveLang()
  const container = document.createElement('div')
  container.classList.add('container')
  container.append(Keyboard.createTextArea(), Keyboard.createKeyboard())
  document.body.append(container)
}

initPage()





