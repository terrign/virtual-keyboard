import Button from './button'

export default class Keyboard {

  static saveLang() {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
    document.addEventListener('keydown',(e) => {
      if(e.altKey === true && e.key ==='Shift' || e.shiftKey === true && e.key === 'Alt') {
        localStorage.getItem('lang') === 'ru' ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'ru')
      }
      if(document.querySelector('.lang-button')) document.querySelector('.lang-button').innerText = localStorage.getItem('lang').toUpperCase()
    })
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
      let button = new Button(key)
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
    langButton.addEventListener('click', () => {
      localStorage.getItem('lang') === 'ru' ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'ru')
      document.querySelector('.lang-button').innerText = localStorage.getItem('lang').toUpperCase()
    })
    controlsContainer.append(tipButton,langButton)
    return controlsContainer
  }

  static initPage() {
    Keyboard.saveLang()
    const container = document.createElement('div')
    container.classList.add('container')
    container.append(Keyboard.createTextArea(), Keyboard.createKeyboard())
    document.body.append(container)
    document.addEventListener('DOMContentLoaded',()=> {
      setTimeout(()=>document.querySelector('.keyboard').classList.add('keyboard_active'), 100)
    })
  }

  async hi () {
    return await Promise.resolve('async is working')
  }
}