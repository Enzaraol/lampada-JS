const turnOn = document.getElementById ('on');
const turnOff = document.getElementById ('off');
const turnlamp = document.getElementById ('lamp');


function lampOn () {
        lamp.src = './imgs/ligada.jpg';
}

function lampOff () {
    lamp.src = './imgs/desligada.jpg';
}

function lampBroken () {
    lamp.src = './imgs/quebrada.jpg';
}


turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
turnlamp.addEventListener ('mouseover', lampOn);
turnlamp.addEventListener ('mouseleave', lampOff);
turnlamp.addEventListener ('dblclick', lampBroken)
