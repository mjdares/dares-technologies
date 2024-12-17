export const validateEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return re.test(email)
}

export const formatDate = (date) => {
	return new Date(date).toLocaleDateString('en-IN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

export const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' })
	}
}
