const btnMenu = document.getElementById('btn__menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', ()=> {
menu.classList.toggle('hidden');
});