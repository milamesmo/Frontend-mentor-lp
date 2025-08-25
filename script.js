const btnMenu = document.getElementById('btn__menu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const iconOpen = document.getElementById('menu__open'); 
const iconClose = document.getElementById('menu__close');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');

  if(menu.classList.contains('hidden')) {
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';
  } else {
    iconOpen.style.display = 'none';
    iconClose.style.display = 'block';
  }
});

overlay.addEventListener('click', () => {
  menu.classList.add('hidden');
  overlay.classList.add('hidden');
  iconOpen.style.display = 'block';
  iconClose.style.display = 'none';
});