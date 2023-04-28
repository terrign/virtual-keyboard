export default function saveLang() {
  if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
  document.addEventListener('keydown',(e) => {
    if(e.altKey === true && e.key ==='Shift' || e.shiftKey === true && e.key === 'Alt') {
      localStorage.getItem('lang') === 'ru' ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'ru')
    }
  })
}

