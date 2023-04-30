import Button from './button';

export default class Keyboard {
  constructor() {
    this.shiftPressed = false;
    this.capsLockEnabled = false;
    this.lang = localStorage.getItem('lang');
    this.textArea = Keyboard.createTextArea();
  }

  static createTextArea() {
    const textArea = document.createElement('textarea');
    textArea.classList.add('text');
    return textArea;
  }

  createKeyboard() {
    const keyBoard = document.createElement('div');
    keyBoard.classList.add('keyboard');
    const arr = Object.keys(Button.buttons);
    arr.forEach((key) => {
      const button = new Button(key, this).button(localStorage.getItem('lang'));
      keyBoard.append(button);
    });
    keyBoard.append(Keyboard.createControls());
    return keyBoard;
  }

  static createControls() {
    const controlsContainer = document.createElement('div');
    const tipButton = document.createElement('div');
    const langButton = document.createElement('div');
    controlsContainer.classList.add('controls-container');
    tipButton.classList.add('tip-button');
    langButton.classList.add('lang-button');
    tipButton.innerText = '?';
    langButton.innerText = localStorage.getItem('lang').toUpperCase();
    controlsContainer.append(tipButton, langButton);
    return controlsContainer;
  }

  updateLang = this.updateKeyboardLanguage.bind(this);

  updateKeyboardLanguage() {
    this.lang = this.lang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', localStorage.getItem('lang') === 'ru' ? 'en' : 'ru');
    if (document.querySelector('.lang-button')) document.querySelector('.lang-button').innerText = localStorage.getItem('lang').toUpperCase();
    document.querySelectorAll('.keyboard-button').forEach((a) => {
      const button = a;
      if (button.dataset[`${this.lang}Key`]) button.firstElementChild.innerText = button.dataset[`${this.lang}Key`];
    });
  }

  addShiftToggle() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Shift') {
        this.shiftPressed = true;
        document.querySelector(`#${e.code}`).classList.add('keyboard__button_active');
        document.querySelectorAll('.keyboard-button').forEach((a) => {
          if (a.dataset[`${this.lang}ShiftKey`]) {
            const button = a;
            button.firstElementChild.innerText = a.dataset[`${this.lang}ShiftKey`];
          }
        });
      }
      document.addEventListener('keyup', (f) => {
        if (f.key === 'Shift') {
          this.shiftPressed = false;
          document.querySelector(`#${f.code}`).classList.remove('keyboard__button_active');
          document.querySelectorAll('.keyboard-button').forEach((a) => {
            if (a.dataset[`${this.lang}Key`]) {
              const button = a;
              button.firstElementChild.innerText = a.dataset[`${this.lang}Key`];
            }
          }, { once: true });
        }
      });
    });
  }

  static eventDispatcher() {
    document.addEventListener('keydown', (e) => {
      if (Button.buttons[e.code] && e.code !== ('ShiftRight') && e.code !== ('ShiftLeft')) {
        e.preventDefault();
        document.querySelector(`#${e.code}`).dispatchEvent(new Event('mousedown'));
        document.addEventListener('keyup', () => {
          e.preventDefault();
          document.dispatchEvent(new Event('mouseup'));
        });
      }
    });
  }

  init() {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');
    const container = document.createElement('div');
    container.classList.add('container');
    container.append(this.textArea, this.createKeyboard());
    document.body.append(container);
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => document.querySelector('.keyboard').classList.add('keyboard_active'), 1);
    });
    this.addShiftToggle();
    Keyboard.eventDispatcher();
  }
}
