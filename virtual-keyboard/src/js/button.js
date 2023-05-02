import json from '../assets/buttons.json';

export default class Button {
  static buttons = json;

  constructor(code, keyboard) {
    this.code = code;
    this.key = Button.buttons[code];
    this.keyboard = keyboard;
  }

  button(lang) {
    return this.createButton(lang);
  }

  createButton(lang) {
    const button = document.createElement('div');
    const value = document.createElement('div');
    button.setAttribute('id', this.code);
    button.classList.add('keyboard-button');
    value.classList.add('keyboard-button__value');
    if (typeof this.key !== 'string') {
      button.dataset.enKey = Button.buttons[this.code].en.key;
      button.dataset.enShiftKey = Button.buttons[this.code].en.shiftkey;
      button.dataset.ruKey = Button.buttons[this.code].ru.key;
      button.dataset.ruShiftKey = Button.buttons[this.code].ru.shiftkey;
      value.innerText = button.dataset[`${lang}Key`];
      button.addEventListener('mousedown', this.buttonHandler);
    } else {
      value.innerText = Button.buttons[this.code];
      button.classList.add(this.code.toLowerCase());
      button.addEventListener('mousedown', this.controlButtonHandler);
    }
    button.addEventListener('mousedown', this.clickAnimation);
    button.append(value);
    return button;
  }

  buttonHandler = this.buttonHandlerFunc.bind(this);

  buttonHandlerFunc(event) {
    const txt = event.currentTarget.firstElementChild.innerText;
    this.handleSelectionInsertion(this.valueInsert, txt);
  }

  controlButtonHandler = this.controlButtonHandlerFunc.bind(this);

  controlButtonHandlerFunc(event) {
    const txt = this.keyboard.textArea;
    txt.focus();
    const range = this.getSelectionRange();
    const { id } = event.currentTarget;
    if (id === 'Backspace') {
      if (range[0] === 0 && range[1] === 0) return;
      if (range[1] - range[0] === 0) {
        txt.value = txt.value.slice(0, range[0] - 1) + txt.value.slice(range[0], txt.value.length);
        txt.setSelectionRange(range[0] - 1, range[0] - 1);
      }
      if (range[1] - range[0] > 0) {
        this.removeSelection();
      }
    }
    if (id === 'Tab') this.handleSelectionInsertion(this.valueInsert, '\t');
    if (id === 'Enter') this.handleSelectionInsertion(this.valueInsert, '\n');
    if (id === 'Delete') {
      if (range[1] - range[0] === 0) {
        txt.value = txt.value.slice(0, range[0]) + txt.value.slice(range[0] + 1, txt.value.length);
        txt.setSelectionRange(range[0], range[0]);
      }
      if (range[1] - range[0] > 0) {
        this.removeSelection();
      }
    }
    if (id === 'ArrowUp') {
      this.handleSelectionInsertion(this.valueInsert, Button.buttons.ArrowUp);
    }
    if (id === 'ArrowDown') {
      this.handleSelectionInsertion(this.valueInsert, Button.buttons.ArrowDown);
    }
    if (id === 'ArrowRight') {
      this.handleSelectionInsertion(this.valueInsert, Button.buttons.ArrowRight);
    }
    if (id === 'ArrowLeft') {
      this.handleSelectionInsertion(this.valueInsert, Button.buttons.ArrowLeft);
    }
    if (id === 'Space') {
      this.handleSelectionInsertion(this.valueInsert, ' ');
    }
    if (id === 'CapsLock') {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'CapsLock', code: 'CapsLock' }));
    }
  }

  valueInsert = (value) => {
    const txt = this.keyboard.textArea;
    const range = this.getSelectionRange()[0];
    txt.value = txt.value.slice(0, range) + value + txt.value.slice(range, txt.value.length);
    txt.setSelectionRange(range + 1, range + 1);
  };

  getSelectionRange() {
    return [this.keyboard.textArea.selectionStart, this.keyboard.textArea.selectionEnd];
  }

  removeSelection = () => {
    const txt = this.keyboard.textArea;
    const range = this.getSelectionRange();
    txt.value = txt.value.slice(0, range[0]) + txt.value.slice(range[1], txt.value.length);
    txt.setSelectionRange(range[0], range[0]);
  };

  handleSelectionInsertion(func, arg) {
    const range = this.getSelectionRange();
    if (range[1] - range[0] === 0) func(arg);
    if (range[1] - range[0] > 0) {
      this.removeSelection();
      func(arg);
    }
  }

  clickAnimation = Button.clickAnimationHandler.bind(this);

  static clickAnimationHandler(event) {
    const trgt = event.currentTarget;
    trgt.classList.add('keyboard__button_active');
    document.addEventListener('mouseup', () => {
      trgt.classList.remove('keyboard__button_active');
      document.querySelector('textarea').focus();
    }, { once: true });
  }
}
