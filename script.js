window.addEventListener('load', () => {
	document.querySelector('html').classList.add('theme-default');
});
// < --------onClick of dark theme par, the theme changes to white bg-------- >
let darkTheme = document.querySelector('#dark').addEventListener('click', () => {
	document.querySelector('html').classList.add('theme-dark');
	document.querySelector('html').classList.remove('theme-light');
	document.querySelector('html').classList.remove('theme-default');
});

// < --------onClick of green theme par, the theme changes to white bg-------- >
let greenTheme = document.querySelector('#green').addEventListener('click', () => {
	document.querySelector('html').classList.add('theme-light');
	document.querySelector('html').classList.remove('theme-dark');
	document.querySelector('html').classList.remove('theme-default');
});

// < --------onClick of white theme par, the theme changes to white bg-------- >
let whiteTheme = document.querySelector('#white').addEventListener('click', () => {
	document.querySelector('html').classList.add('theme-default');
	document.querySelector('html').classList.remove('theme-dark');
	document.querySelector('html').classList.remove('theme-light');
});

// <---------below is the function that hides and shows the profile dropdown--------->
function toggleIntro() {
	const dropdownText = document.querySelector('#intro-text');

	dropdownText.classList.toggle('dropdown-text');
}

function toggleExperience() {
	const dropdownText = document.querySelector('#experience-text');

	dropdownText.classList.toggle('dropdown-text');
}

function toggleVolunteer() {
	const dropdownText = document.querySelector('#volunteer-text');

	dropdownText.classList.toggle('dropdown-text');
}
