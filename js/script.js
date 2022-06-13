

const hamburgerBtn = document.querySelector('.hamburger')

const hamburger = () => {
	hamburgerBtn.classList.toggle('is-active')
}

hamburgerBtn.addEventListener('click', hamburger)
