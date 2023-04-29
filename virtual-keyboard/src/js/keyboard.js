import Button from './button'

export default class Keyboard {

  constructor() {
    this.shiftPressed = false
    this.capsLockEnabled = false
    this.lang = localStorage.getItem('lang')
  }

  static saveLangToLocalOnChange() {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
  }

  static createTextArea() {
    const textArea = document.createElement('textarea')
    textArea.classList.add('text')
    return textArea
  }

  static createKeyboard() {
    const keyBoard = document.createElement('div')
    keyBoard.classList.add('keyboard')
    for (let key of Object.keys(Button.buttons)) {
      let button = new Button(key, localStorage.getItem('lang'))
      keyBoard.append(button)
    }
    keyBoard.append(Keyboard.createControls())
    return keyBoard
  }

  static createControls() {
    const controlsContainer = document.createElement('div')
    const tipButton = document.createElement('div')
    const langButton = document.createElement('div')
    controlsContainer.classList.add('controls-container')
    tipButton.classList.add('tip-button')
    langButton.classList.add('lang-button')
    tipButton.innerText = '?'
    langButton.innerText = localStorage.getItem('lang').toUpperCase()
    controlsContainer.append(tipButton,langButton)
    return controlsContainer
  }

  updateLang = this.updateKeyboardLanguage.bind(this)

  updateKeyboardLanguage() {
    this.lang === 'ru' ? this.lang = 'en' : this.lang = 'ru'
    localStorage.getItem('lang') === 'ru' ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'ru')
    if(document.querySelector('.lang-button')) document.querySelector('.lang-button').innerText = localStorage.getItem('lang').toUpperCase()
    document.querySelectorAll('.keyboard-button').forEach(a => {
      if(a.dataset[`${this.lang}Key`]) a.firstElementChild.innerText = a.dataset[`${this.lang}Key`]
    })
  }

  init() {
    Keyboard.saveLangToLocalOnChange()
    const container = document.createElement('div')
    container.classList.add('container')
    container.append(Keyboard.createTextArea(), Keyboard.createKeyboard())
    document.body.append(container)
    document.addEventListener('DOMContentLoaded',()=> {
      setTimeout(()=>document.querySelector('.keyboard').classList.add('keyboard_active'), 1)
    })
  }
}



