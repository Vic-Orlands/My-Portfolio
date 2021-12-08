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

// <---------below is the function that hides and shows the profile nav dropdown--------->
const showNav = () => {
	const navContent = document.querySelector('#mobileNav');
	navContent.classList.toggle('mobile-view');
};

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

function toggleSkill() {
	const dropdownText = document.querySelector('#skill-text');
	dropdownText.classList.toggle('dropdown-text');
}

// animation calls starts here

let rule = CSSRulePlugin.getRule(".top-body article h1::after")

gsap.from('.up', {
	opacity: 0, duration: 1.5, y: 70, delay: 0.6, stagger: 1.6
})
gsap.from('.dwn', {
	opacity: 1, duration: 1.5, y:  -70, ease: "elastic(4, 0.3)"
})
gsap.to(rule, { cssRule: { scaleY: 0}, duration: 1.2})