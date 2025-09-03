const btnMenu = document.getElementById('btn__menu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const iconOpen = document.getElementById('menu__open'); 
const iconClose = document.getElementById('menu__close');

const cards = document.querySelectorAll(".depoiment__card");
let indice = 0;
const ultimoIndice = cards.length - 1;

const dots = document.querySelectorAll('.depoiment__index');



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


cards[indice].style.display = "block";
dots[indice].style.backgroundColor = 'var(--BrightRed)';

function mudaSlide(){
  //esconder todos os slides
  cards.forEach(function(card){
    card.style.display = 'none';
  })

  dots.forEach(function(dot){
    dot.style.backgroundColor = 'white';
  })

  if (indice>= ultimoIndice){
    indice = -1;

  }
  //mostrar próximo slide e mudar indice
  
  cards[++indice].style.display = 'block';
  dots[indice].style.backgroundColor = 'var(--BrightRed)';
  
}
setInterval(mudaSlide, 3000);
