// selecteer de elementen die aangesproken moeten worden
let bewaren = document.querySelector('.bewaar-deel')

bewaren.addEventListener('click', bewaarHuis)

function bewaarHuis(){
    bewaren.classList.toggle('active')
}

bewaren.addEventListener('animationend', bewaarHuis)



const scale = document.querySelector('.video-figure');
const groter = document.querySelector('video');

scale.addEventListener('click', videoGroter)

function videoGroter(){
    scale.classList.toggle('groter')
}
