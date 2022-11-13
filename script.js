"use strict"

function setburgerMenu() {
  const burgerBtn = document.querySelector('.header__burger')
  const header = document.querySelector('.header')
  const menu = document.querySelector('.menu')
  let isLock = false
  

  burgerBtn.addEventListener('click', () => {
    isLock = !isLock
    //toggleBodyLock(isLock)

    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
    header.classList.toggle('active')
  })
}
setburgerMenu()