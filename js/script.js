const hamburgerBtn = document.querySelector('.hamburger')
const links = document.querySelector('.nav__links')
const linksA = document.querySelectorAll('.nav__links-a')
const nav = document.querySelector('.nav')
const sections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const hamburger = () => {
	hamburgerBtn.classList.toggle('is-active')
	links.classList.toggle('active')
	links.classList.toggle('show-nav')
}

const handleFooterYear = () =>{
const date = new Date()
const year = date.getFullYear()

footerYear.innerHTML = year
}

const closeNav = () => {
	linksA.forEach(linkA => {
		linkA.addEventListener('click',()=>hamburger())
	})
}

hamburgerBtn.addEventListener('click', hamburger)

handleFooterYear()
closeNav()


