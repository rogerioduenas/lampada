const ligar = document.getElementById ("ligar");
const desligar = document.getElementById ("desligar");
const lampada = document.getElementById ("lampada");

function isLampBroken() {
    return lampada.src.indexOf ("quebrada") > -1;
}
function lampOn() {
    if ( !isLampBroken()) {
    lampada.src = "./assets/acessa.jpg";
    }
}
function lampOff() {
    if ( !isLampBroken()) {
    lampada.src = "./assets/apagada.jpg";
    }
}
function lampBroken() {
    lampada.src = "./assets/quebrada.jpg"
}

ligar.addEventListener ("click", lampOn);
desligar.addEventListener ("click", lampOff); 
lampada.addEventListener ("mouseover", lampOn);
lampada.addEventListener ("mouseleave", lampOff);
lampada.addEventListener ("dblclick", lampBroken);
