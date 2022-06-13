const hamburgerBtn = document.querySelector('.hamburger')
const links = document.querySelector('.nav__links')

const hamburger = () => {
	hamburgerBtn.classList.toggle('is-active')
	links.classList.toggle('active')
	
}

hamburgerBtn.addEventListener('click', hamburger)



// nav__list--mobile--isActive