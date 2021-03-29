const btn = document.querySelector('.menu-btn')
const burger = document.querySelector('.menu-btn__burger')

const openMenu = () => {
  burger.classList.remove('burger-menu-inactive')
  burger.classList.add('burger-menu-active')
}

const closeMenu = () => {
  burger.classList.remove('burger-menu-active')
  burger.classList.add('burger-menu-inactive')
}

btn.addEventListener('click', () => {
  if (burger.classList.contains('burger-menu-active')) closeMenu()
  else openMenu()
})
