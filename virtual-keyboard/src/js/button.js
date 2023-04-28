import json from '../assets/buttons.json';

export default class Button {

  static buttons = json

  static controlButtons = ['Backspase', 'Tab', 'Enter', 'CapsLock','ShiftLeft', 'ShiftRight',
                           'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight','ControlRight',
                           'ArrowUp','ArrowLeft','ArrowRight','ArrowDown']

  constructor (code) {
    this.code = code
    this.key = Button.buttons[code]
    return this.createButton()
  }

  createButton() {
    const button = document.createElement('div')
    const value = document.createElement('div')
    button.setAttribute('id', this.code)
    button.classList.add('keyboard-button')
    value.classList.add('keyboard-button__value')
    if(typeof this.key !== 'string') {
      button.dataset.enKey = Button.buttons[this.code].en.key
      button.dataset.enShiftKey = Button.buttons[this.code].en.shiftkey
      button.dataset.ruKey = Button.buttons[this.code].ru.key
      button.dataset.ruShiftKey = Button.buttons[this.code].ru.shiftkey
      value.innerText = button.dataset.enKey
    } else {
      button.dataset.controlButton = true
      value.innerText = Button.buttons[this.code]
    }
    button.append(value)
  return button
  }

  init() {
    console.log('Button class is active')
  }

}

