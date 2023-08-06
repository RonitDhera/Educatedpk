const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const rightnav = document.querySelector('.rightnav');

burger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
});

