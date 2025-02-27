document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    })
})

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');

    } else {
        navbar.classList.remove('navbar--scroll');
    }
})