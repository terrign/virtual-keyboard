import json from '../assets/buttons.json';

export default class Button {

  static buttons = json

  static controlButtons = ['Backspase', 'Tab', 'Enter', 'CapsLock','ShiftLeft', 'ShiftRight',
                           'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight','ControlRight',
                           'ArrowUp','ArrowLeft','ArrowRight','ArrowDown']

  constructor (code, lang, keyboard) {
    this.code = code
    this.key = Button.buttons[code]
    this.keyboard = keyboard
    return this.createButton(lang)
  }

  createButton(lang) {
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
      value.innerText = button.dataset[`${lang}Key`]
      button.addEventListener('mousedown', this.buttonHandler)
    } else {
      value.innerText = Button.buttons[this.code]
      button.classList.add(this.code.toLowerCase())
      button.addEventListener('mousedown',this.controlButtonHandler)
    }
    button.addEventListener('mousedown', this.clickAnimation)
    button.append(value)
  return button
  }

  buttonHandler = this.buttonHandlerFunc.bind(this)

  buttonHandlerFunc (event) {
    const txt = document.querySelector('textarea')
    txt.value += event.currentTarget.firstElementChild.innerText
  }

  controlButtonHandler = this.controlButtonHandlerFunc.bind(this)

  controlButtonHandlerFunc(event) {
    const txt = document.querySelector('textarea')
    txt.focus()
    const getSelectionRange = () => [txt.selectionStart,txt.selectionEnd]
    const id = event.currentTarget.id
    if (id ==='Backspace') {
      let range = getSelectionRange()
      if (range[1] - range[0] === 0) {
        txt.value = txt.value.slice(0, range[0] - 1) + txt.value.slice(range[0], txt.value.length)
        txt.setSelectionRange(range[0]-1,range[0]-1)
      }
      if (range[1] - range[0] > 0) {
        txt.value = txt.value.slice(0, range[0]) + txt.value.slice(range[1], txt.value.length)
        txt.setSelectionRange(range[0],range[0])
      }
    }
    if (id ==='Tab') txt.value += '\t';
    if (id ==='Enter') txt.value += '\n';
    if (id ==='Delete') {
      let range = getSelectionRange()
      if (range[1] - range[0] === 0) {
        txt.value = txt.value.slice(0, range[0]) + txt.value.slice(range[0] + 1, txt.value.length)
        txt.setSelectionRange(range[0],range[0])
      }
      if (range[1] - range[0] > 0) {
        txt.value = txt.value.slice(0, range[0]) + txt.value.slice(range[1], txt.value.length)
        txt.setSelectionRange(range[0],range[0])
      }
    }
    if (id === 'ArrowUp') {
      txt.value += Button.buttons.ArrowUp
    }
    if (id === 'ArrowDown') {
      txt.value += Button.buttons.ArrowDown
    }
    if (id === 'ArrowRight') {
      txt.value += Button.buttons.ArrowRight
    }
    if (id === 'ArrowLeft') {
      txt.value += Button.buttons.ArrowLeft
    }
    if (id === 'Space') {
      txt.value += ' '
    }
    if (id === 'CapsLock') {
      this.keyboard.capsLockEnabled = this.keyboard.capsLockEnabled ===  false ? true : false
      if(!event.currentTarget.classList.contains('capslock-active')) event.currentTarget.classList.add('capslock-active')
      else if(event.currentTarget.classList.contains('capslock-active')) event.currentTarget.classList.remove('capslock-active')
      
    }
  }

  clickAnimation = this.clickAnimationHandler.bind(this)


  clickAnimationHandler(event) {
    let trgt = event.currentTarget
    trgt.classList.add('keyboard__button_active')
    document.addEventListener('mouseup', () => {
      trgt.classList.remove('keyboard__button_active')
      document.querySelector('textarea').focus()
    },{once:true})
  }


}