const menu = document.querySelector('#mobile__menu');
const menulinks = document.querySelector ('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});