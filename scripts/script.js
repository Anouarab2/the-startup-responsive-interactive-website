// selecteer de elementen die aangesproken moeten worden
let bewaren = document.querySelector('.bewaar-deel')
let tekst = document.querySelector('.bewaar-deel')

bewaren.addEventListener('click', bewaarHuis)
// tekst.addEventListener('click', tekstAnders)

tekst.addEventListener('click', function() {
    tekst.textContent = (tekst.textContent === 'Bewaar') ? 'Bewaard!' : 'Bewaar';
  });


function bewaarHuis(){
    bewaren.classList.toggle('active')
}

bewaren.addEventListener('animationend', bewaarHuis)


const openMenu = document.querySelector('.menu-button');
const menu = document.querySelector('.huis-opties');

openMenu.addEventListener('click', menuOpen)

function menuOpen(){
    openMenu.classList.toggle('move')
    menu.classList.toggle('move')
}
