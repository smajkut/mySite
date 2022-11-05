const navBtn = document.querySelector('.burger-btn')
const navArrow = document.querySelector('.fa-angle-left')
const navList = document.querySelector('.navigation-list')


const showNav = () => {
    navBtn.classList.toggle('btn-rotate')
    navList.classList.toggle('show-navigation-list')

}
navBtn.addEventListener('click', showNav)