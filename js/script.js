const hamburgerBtn = document.querySelector('.hamburger')
const links = document.querySelector('.nav__links')
const nav = document.querySelector('.nav')
const footerYear = document.querySelector('.footer__year')

const hamburger = () => {
	hamburgerBtn.classList.toggle('is-active')
	links.classList.toggle('active')
}

const handleFooterYear = () =>{
const date = new Date()
const year = date.getFullYear()

footerYear.innerHTML = year
}



hamburgerBtn.addEventListener('click', hamburger)

handleFooterYear()


