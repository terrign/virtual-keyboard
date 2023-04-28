export default class Keyboard {

  id = 'hello'

  get getId() {
    return this.id
  }

  constructor(textArea) {
    this.textField = textArea
    this.layout = []
  }

  init() {
    console.log('keyboard class is active')
  }

  async hi () {
    return await Promise.resolve('async is working')
  }
}