const burgerMenuSvg = document.querySelector('header svg')
const sideMenu = document.querySelector('.burgerMenu')
const closeMenu = document.querySelector('.svg svg')

burgerMenuSvg.addEventListener('click', () => {
        sideMenu.style.left = '0'
})

closeMenu.addEventListener('click', () => {
    sideMenu.style.left = '-300px'
})
