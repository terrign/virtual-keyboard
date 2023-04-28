import Button from './button'

export default class Keyboard {

  constructor(textArea) {
    this.textField = textArea
    this.layout = []
  }

  static saveLang() {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
    document.addEventListener('keydown',(e) => {
      if(e.altKey === true && e.key ==='Shift' || e.shiftKey === true && e.key === 'Alt') {
        localStorage.getItem('lang') === 'ru' ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'ru')
      }
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
    return keyBoard
  }

  async hi () {
    return await Promise.resolve('async is working')
  }
}