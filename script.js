// Show and hide elements
const button = document.getElementById('menuButton')
const menu = document.getElementById('menu')
const pageContent = document.getElementById('pageContent')
const body  = document.body

button.addEventListener('click', toggle)

function toggle() {
    menu.classList.toggle('active');
    button.classList.toggle('active');
    pageContent.classList.toggle('active');
    body.classList.toggle('active');
}

//highlight selected menu item
document.addEventListener('DOMContentLoaded', function() {
const selector = '.menuLink';
const elems = Array.from( document.querySelectorAll( selector ) );
const navigation = document.querySelector( '.menuNav' );

function makeActive(event) {
    const target = event.target;

    if (!target || !target.matches(selector)) {
        return;
    }

    elems.forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
}
navigation.addEventListener('click', makeActive);
});