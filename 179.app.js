!function(){"use strict";var e,t={9396:function(){var e=JSON.parse('{"Backquote":{"ru":{"key":"ё","shiftkey":"Ё"},"en":{"key":"`","shiftkey":"~"}},"Digit1":{"ru":{"key":"1","shiftkey":"!"},"en":{"key":"1","shiftkey":"!"}},"Digit2":{"ru":{"key":"2","shiftkey":"\\""},"en":{"key":"2","shiftkey":"@"}},"Digit3":{"ru":{"key":"3","shiftkey":"№"},"en":{"key":"3","shiftkey":"#"}},"Digit4":{"ru":{"key":"4","shiftkey":";"},"en":{"key":"4","shiftkey":"$"}},"Digit5":{"ru":{"key":"5","shiftkey":"%"},"en":{"key":"5","shiftkey":"%"}},"Digit6":{"ru":{"key":"6","shiftkey":":"},"en":{"key":"6","shiftkey":"^"}},"Digit7":{"ru":{"key":"7","shiftkey":"?"},"en":{"key":"7","shiftkey":"&"}},"Digit8":{"ru":{"key":"8","shiftkey":"*"},"en":{"key":"8","shiftkey":"*"}},"Digit9":{"ru":{"key":"9","shiftkey":"("},"en":{"key":"9","shiftkey":"("}},"Digit0":{"ru":{"key":"0","shiftkey":")"},"en":{"key":"0","shiftkey":")"}},"Minus":{"ru":{"key":"-","shiftkey":"_"},"en":{"key":"-","shiftkey":"_"}},"Equal":{"ru":{"key":"=","shiftkey":"+"},"en":{"key":"=","shiftkey":"+"}},"Backspace":"⌫","Tab":"Tab","KeyQ":{"ru":{"key":"й","shiftkey":"Й"},"en":{"key":"q","shiftkey":"Q"}},"KeyW":{"ru":{"key":"ц","shiftkey":"Ц"},"en":{"key":"w","shiftkey":"W"}},"KeyE":{"ru":{"key":"у","shiftkey":"У"},"en":{"key":"e","shiftkey":"E"}},"KeyR":{"ru":{"key":"к","shiftkey":"К"},"en":{"key":"r","shiftkey":"R"}},"KeyT":{"ru":{"key":"е","shiftkey":"Е"},"en":{"key":"t","shiftkey":"T"}},"KeyY":{"ru":{"key":"н","shiftkey":"Н"},"en":{"key":"y","shiftkey":"Y"}},"KeyU":{"ru":{"key":"г","shiftkey":"Г"},"en":{"key":"u","shiftkey":"U"}},"KeyI":{"ru":{"key":"ш","shiftkey":"Ш"},"en":{"key":"i","shiftkey":"I"}},"KeyO":{"ru":{"key":"щ","shiftkey":"Щ"},"en":{"key":"o","shiftkey":"O"}},"KeyP":{"ru":{"key":"з","shiftkey":"З"},"en":{"key":"p","shiftkey":"P"}},"BracketLeft":{"ru":{"key":"х","shiftkey":"Х"},"en":{"key":"[","shiftkey":"{"}},"BracketRight":{"ru":{"key":"ъ","shiftkey":"Ъ"},"en":{"key":"]","shiftkey":"}"}},"Delete":"Del","CapsLock":"Caps lock","KeyA":{"ru":{"key":"ф","shiftkey":"Ф"},"en":{"key":"a","shiftkey":"A"}},"KeyS":{"ru":{"key":"ы","shiftkey":"Ы"},"en":{"key":"s","shiftkey":"S"}},"KeyD":{"ru":{"key":"в","shiftkey":"В"},"en":{"key":"d","shiftkey":"D"}},"KeyF":{"ru":{"key":"а","shiftkey":"А"},"en":{"key":"f","shiftkey":"F"}},"KeyG":{"ru":{"key":"п","shiftkey":"П"},"en":{"key":"g","shiftkey":"G"}},"KeyH":{"ru":{"key":"р","shiftkey":"Р"},"en":{"key":"h","shiftkey":"H"}},"KeyJ":{"ru":{"key":"о","shiftkey":"О"},"en":{"key":"j","shiftkey":"J"}},"KeyK":{"ru":{"key":"л","shiftkey":"Л"},"en":{"key":"k","shiftkey":"K"}},"KeyL":{"ru":{"key":"д","shiftkey":"Д"},"en":{"key":"l","shiftkey":"L"}},"Semicolon":{"ru":{"key":"ж","shiftkey":"Ж"},"en":{"key":";","shiftkey":":"}},"Quote":{"ru":{"key":"э","shiftkey":"Э"},"en":{"key":"\'","shiftkey":"\\""}},"Enter":"Enter","ShiftLeft":"Shift","Backslash":{"ru":{"key":"\\\\","shiftkey":"/"},"en":{"key":"\\\\","shiftkey":"|"}},"KeyZ":{"ru":{"key":"я","shiftkey":"Я"},"en":{"key":"z","shiftkey":"Z"}},"KeyX":{"ru":{"key":"ч","shiftkey":"Ч"},"en":{"key":"x","shiftkey":"X"}},"KeyC":{"ru":{"key":"с","shiftkey":"С"},"en":{"key":"c","shiftkey":"C"}},"KeyV":{"ru":{"key":"м","shiftkey":"М"},"en":{"key":"v","shiftkey":"V"}},"KeyB":{"ru":{"key":"и","shiftkey":"И"},"en":{"key":"b","shiftkey":"B"}},"KeyN":{"ru":{"key":"т","shiftkey":"Т"},"en":{"key":"n","shiftkey":"N"}},"KeyM":{"ru":{"key":"ь","shiftkey":"Ь"},"en":{"key":"m","shiftkey":"M"}},"Comma":{"ru":{"key":"б","shiftkey":"Б"},"en":{"key":",","shiftkey":"<"}},"Period":{"ru":{"key":"ю","shiftkey":"Ю"},"en":{"key":".","shiftkey":">"}},"Slash":{"ru":{"key":".","shiftkey":","},"en":{"key":"/","shiftkey":"?"}},"ArrowUp":"↑","ShiftRight":"Shift","ControlLeft":"Ctrl","MetaLeft":"Win","AltLeft":"Alt","Space":"Space","AltRight":"Alt","ControlRight":"Ctrl","ArrowLeft":"←","ArrowDown":"↓","ArrowRight":"→"}');function t(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class n{constructor(e,i){t(this,"buttonHandler",this.buttonHandlerFunc.bind(this)),t(this,"controlButtonHandler",this.controlButtonHandlerFunc.bind(this)),t(this,"valueInsert",(e=>{const t=this.keyboard.textArea,n=this.getSelectionRange()[0];t.value=t.value.slice(0,n)+e+t.value.slice(n,t.value.length),t.setSelectionRange(n+1,n+1)})),t(this,"removeSelection",(()=>{const e=this.keyboard.textArea,t=this.getSelectionRange();e.value=e.value.slice(0,t[0])+e.value.slice(t[1],e.value.length),e.setSelectionRange(t[0],t[0])})),t(this,"clickAnimation",n.clickAnimationHandler.bind(this)),this.code=e,this.key=n.buttons[e],this.keyboard=i}button(e){return this.createButton(e)}createButton(e){const t=document.createElement("div"),i=document.createElement("div");return t.setAttribute("id",this.code),t.classList.add("keyboard-button"),i.classList.add("keyboard-button__value"),"string"!=typeof this.key?(t.dataset.enKey=n.buttons[this.code].en.key,t.dataset.enShiftKey=n.buttons[this.code].en.shiftkey,t.dataset.ruKey=n.buttons[this.code].ru.key,t.dataset.ruShiftKey=n.buttons[this.code].ru.shiftkey,i.innerText=t.dataset["".concat(e,"Key")],t.addEventListener("mousedown",this.buttonHandler)):(i.innerText=n.buttons[this.code],t.classList.add(this.code.toLowerCase()),t.addEventListener("mousedown",this.controlButtonHandler)),t.addEventListener("mousedown",this.clickAnimation),t.append(i),t}buttonHandlerFunc(e){const t=e.currentTarget.firstElementChild.innerText;this.handleSelectionInsertion(this.valueInsert,t)}controlButtonHandlerFunc(e){const t=this.keyboard.textArea;t.focus();const i=this.getSelectionRange(),{id:s}=e.currentTarget;"Backspace"===s&&(i[1]-i[0]==0&&(t.value=t.value.slice(0,i[0]-1)+t.value.slice(i[0],t.value.length),t.setSelectionRange(i[0]-1,i[0]-1)),i[1]-i[0]>0&&this.removeSelection()),"Tab"===s&&this.handleSelectionInsertion(this.valueInsert,"\t"),"Enter"===s&&this.handleSelectionInsertion(this.valueInsert,"\n"),"Delete"===s&&(i[1]-i[0]==0&&(t.value=t.value.slice(0,i[0])+t.value.slice(i[0]+1,t.value.length),t.setSelectionRange(i[0],i[0])),i[1]-i[0]>0&&this.removeSelection()),"ArrowUp"===s&&this.handleSelectionInsertion(this.valueInsert,n.buttons.ArrowUp),"ArrowDown"===s&&this.handleSelectionInsertion(this.valueInsert,n.buttons.ArrowDown),"ArrowRight"===s&&this.handleSelectionInsertion(this.valueInsert,n.buttons.ArrowRight),"ArrowLeft"===s&&this.handleSelectionInsertion(this.valueInsert,n.buttons.ArrowLeft),"Space"===s&&this.handleSelectionInsertion(this.valueInsert," "),"CapsLock"===s&&document.dispatchEvent(new KeyboardEvent("keydown",{key:"CapsLock",code:"CapsLock"}))}getSelectionRange(){return[this.keyboard.textArea.selectionStart,this.keyboard.textArea.selectionEnd]}handleSelectionInsertion(e,t){const n=this.getSelectionRange();n[1]-n[0]==0&&e(t),n[1]-n[0]>0&&(this.removeSelection(),e(t))}static clickAnimationHandler(e){const t=e.currentTarget;t.classList.add("keyboard__button_active"),document.addEventListener("mouseup",(()=>{t.classList.remove("keyboard__button_active"),document.querySelector("textarea").focus()}),{once:!0})}}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t(n,"buttons",e);class s{constructor(){i(this,"updateLang",this.updateKeyboardLanguage.bind(this)),this.shiftPressed=!1,this.capsLockEnabled=!1,this.lang=localStorage.getItem("lang"),this.textArea=s.createTextArea()}static createTextArea(){const e=document.createElement("textarea");return e.classList.add("text"),e}createKeyboard(){const e=document.createElement("div");e.classList.add("keyboard");return Object.keys(n.buttons).forEach((t=>{const i=new n(t,this).button(localStorage.getItem("lang"));e.append(i)})),e.append(s.createControls()),e}static createControls(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div");return e.classList.add("controls-container"),t.classList.add("tip-button"),n.classList.add("lang-button"),t.innerText="?",n.innerText=localStorage.getItem("lang").toUpperCase(),s.toolTip(e,t),e.append(t,n),e}static toolTip(e,t){const n=document.createElement("div");n.classList.add("tool-tip"),n.classList.add("tool-tip_hidden");const i=document.createElement("li");i.innerText="Windows Keyboard";const s=document.createElement("li");s.innerText="Language change shortcut: Shift + Alt",n.append(i,s),e.append(n),t.addEventListener("click",(()=>{n.classList.toggle("tool-tip_hidden")}))}updateKeyboardLanguage(){this.lang="ru"===this.lang?"en":"ru",localStorage.setItem("lang","ru"===localStorage.getItem("lang")?"en":"ru"),document.querySelector(".lang-button")&&(document.querySelector(".lang-button").innerText=localStorage.getItem("lang").toUpperCase()),document.querySelectorAll(".keyboard-button").forEach((e=>{const t=e;t.dataset["".concat(this.lang,"Key")]&&(t.firstElementChild.innerText=t.dataset["".concat(this.lang,"Key")])}))}addShiftToggle(){document.addEventListener("keydown",(e=>{"Shift"===e.key&&(this.shiftPressed=!0,document.querySelector("#".concat(e.code)).classList.add("keyboard__button_active"),document.querySelectorAll(".keyboard-button").forEach((e=>{if(e.dataset["".concat(this.lang,"ShiftKey")]&&!this.capsLockEnabled){e.firstElementChild.innerText=e.dataset["".concat(this.lang,"ShiftKey")]}if(e.dataset["".concat(this.lang,"ShiftKey")]&&this.capsLockEnabled){e.firstElementChild.innerText=e.dataset["".concat(this.lang,"ShiftKey")].toLowerCase()}}))),document.addEventListener("keyup",(e=>{"Shift"===e.key&&(this.shiftPressed=!1,document.querySelector("#".concat(e.code)).classList.remove("keyboard__button_active"),document.querySelectorAll(".keyboard-button").forEach((e=>{if(e.dataset["".concat(this.lang,"Key")]&&!this.capsLockEnabled){e.firstElementChild.innerText=e.dataset["".concat(this.lang,"Key")]}if(e.dataset["".concat(this.lang,"ShiftKey")]&&this.capsLockEnabled){e.firstElementChild.innerText=e.dataset["".concat(this.lang,"Key")].toUpperCase()}}),{once:!0}))}))}))}addCapsToggle(){document.addEventListener("keydown",(e=>{"CapsLock"===e.key&&!1===e.repeat&&(this.capsLockEnabled=!1===this.capsLockEnabled,this.capsLockEnabled&&(document.querySelectorAll(".keyboard-button").forEach((e=>{if(e.dataset["".concat(this.lang,"ShiftKey")]){const t=e;t.firstElementChild.innerText=t.firstElementChild.innerText.toUpperCase()}})),document.querySelector("#CapsLock").classList.add("capslock-active")),this.capsLockEnabled||(document.querySelectorAll(".keyboard-button").forEach((e=>{if(e.dataset["".concat(this.lang,"ShiftKey")]){const t=e;t.firstElementChild.innerText=t.firstElementChild.innerText.toLowerCase()}})),document.querySelector("#CapsLock").classList.remove("capslock-active")))}))}static eventDispatcher(){document.addEventListener("keydown",(e=>{n.buttons[e.code]&&"ShiftRight"!==e.code&&"ShiftLeft"!==e.code&&"CapsLock"!==e.code&&(e.preventDefault(),document.querySelector("#".concat(e.code)).dispatchEvent(new Event("mousedown")),document.addEventListener("keyup",(()=>{e.preventDefault(),document.dispatchEvent(new Event("mouseup"))})))}))}init(){localStorage.getItem("lang")||localStorage.setItem("lang","en");const e=document.createElement("div");e.classList.add("container"),e.append(this.textArea,this.createKeyboard()),document.body.append(e),document.addEventListener("DOMContentLoaded",(()=>{setTimeout((()=>document.querySelector(".keyboard").classList.add("keyboard_active")),1)})),this.addShiftToggle(),this.addCapsToggle(),s.eventDispatcher()}}const r=new s;r.init(),document.addEventListener("keydown",(e=>{(!0===e.altKey&&"Shift"===e.key||!0===e.shiftKey&&"Alt"===e.key)&&r.updateLang()})),document.querySelector(".lang-button").addEventListener("click",(()=>r.updateLang()))}},n={};function i(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=function(t,n,s,r){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],s=e[l][1],r=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(a=!1,r<o&&(o=r));if(a){e.splice(l--,1);var y=s();void 0!==y&&(t=y)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,s,r]},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,o=n[0],a=n[1],c=n[2],y=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(c)var l=c(i)}for(t&&t(n);y<o.length;y++)r=o[y],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),i.O(void 0,[202],(function(){return i(1202)}));var s=i.O(void 0,[202],(function(){return i(9396)}));s=i.O(s)}();
//# sourceMappingURL=179.app.js.map