const hamburgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.nav__list--mobile')


const hamburger = () => {
	hamburgerBtn.classList.toggle('is-active')
	mobileNav.classList.toggle('nav__list--mobile--isActive')
	
}

hamburgerBtn.addEventListener('click', hamburger)



// nav__list--mobile--isActive