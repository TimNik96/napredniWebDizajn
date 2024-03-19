const burgerMenu = document.querySelector("header svg")
const sideMenu = document.querySelector(".side-menu")
const closeSideMenu = document.querySelector(".close svg")

burgerMenu.addEventListener("click", () => {
    sideMenu.style.left = "0"
})

closeSideMenu.addEventListener("click", () => {
    sideMenu.style.left = "-300px"
})

AOS.init();