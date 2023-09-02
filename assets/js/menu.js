
const navlink = document.querySelectorAll('.header__link');
const dropdown = document.querySelectorAll('.header__dropdown-menu');

function setAriaExpandedFalse() {
    navlink.forEach((btn) => btn.setAttribute('aria-expanded', false))
}

function closeDropdownMenu() {
    dropdown.forEach((drop) => {
        drop.classList.remove('active');
        drop.addEventListener('click', e => e.stopPropagation());
    })
}

navlink.forEach((btn) => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false')
    })
})

document.documentElement.addEventListener('click', () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
})

const navbar = document.querySelector('.header__nav')
const navbutton = document.querySelector('.header__nav-toggle')

navbutton.addEventListener('click', e => {
    e.preventDefault()
    navbar.classList.toggle('open')
    
    let attr = navbutton.getAttribute('aria-expanded')
    navbutton.setAttribute('aria-expanded',attr === 'false' ? "true" : "false")
    
    
    document.querySelector('.overlay').classList.toggle('visible')
    e.stopPropagation();

    
})