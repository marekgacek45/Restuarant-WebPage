const hamburgerBtn = document.querySelector('.hamburger')
const links = document.querySelector('.nav__links')
const linksA = document.querySelectorAll('.nav__links-a')
const nav = document.querySelector('.nav')
const footerYear = document.querySelector('.footer__year')

const hamburger = () => {
	hamburgerBtn.classList.toggle('is-active')
	links.classList.toggle('active')
}

const handleFooterYear = () => {
	const date = new Date()
	const year = date.getFullYear()

	footerYear.innerHTML = year
}

const closeNav = () => {
	linksA.forEach(linkA => {
		linkA.addEventListener('click', hamburger)
	})
}

const handleObserver = () => {
	const scroll = window.scrollY
	console.log(scroll)
	if (scroll >= 300 ) {
		nav.classList.remove('animation-close')
		nav.classList.add('animation-show')
	}else if (scroll <300 ){
		nav.classList.remove('animation-show')
		nav.classList.add('animation-close')
	}
}


hamburgerBtn.addEventListener('click', hamburger)

handleFooterYear()
closeNav()
handleObserver()
window.addEventListener('scroll', handleObserver)
