const navBtn = document.querySelector('.burger-btn')
const navArrow = document.querySelector('.fa-angle-left')
const navList = document.querySelector('.navigation-list')
const navHead = document.querySelector('#header')

const showNav = () => {
	navBtn.classList.toggle('btn-rotate')
	navList.classList.toggle('show-navigation-list')
	// navHead.classList.toggle('header-scale')
}

const hideNav = (e) => {
	if (e.target.classList.contains('hide-nav') === false) {
		navList.classList.remove('show-navigation-list')
		navBtn.classList.remove('btn-rotate')
		// navHead.classList.remove('header-scale')
	}
}

const scrollCheck = () => {
	if (scrollY > 90) {
		navHead.classList.add('header-scale')
	} else {
		navHead.classList.remove('header-scale')
	}
}

document.addEventListener('click', hideNav)
navBtn.addEventListener('click', showNav)

document.addEventListener('scroll', scrollCheck)
