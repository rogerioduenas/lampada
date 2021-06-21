const ligar = document.getElementById ("ligar");
const desligar = document.getElementById ("desligar");
const lampada = document.getElementById ("lampada");

function isLampBroken() {
    //lampsrc é o endereço e o indexof varre a string procurando o 
    //trexo da string "quebrada", se ele nao encontra ele tras -1, 
    //como é para procurar e se ele achar ele vai trazer mais que -1
    //se retornar >-1 nao acende mais por conta do if do lampoff e on
    return lampada.src.indexOf ("quebrada") > -1;
}
function lampOn() {
    //se for diferente de quebrada acende
    if ( !isLampBroken()) {
    lampada.src = "./assets/acessa.jpg";
    }
}
function lampOff() {
    //se for diferente de quebrada apaga
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

/*
                EXEMPLO COM APENAS UM BOTAO PARA LIGAR E DESLIGAR

const on_off = document.getElementById ("on_off");
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
function lampOnOff() {
    //se o texto do botao for = a Ligar e muda o texto para desligar
    if (on_off.textContent == "LIGAR") {
        lampOn();
        on_off.textContent = "DESLIGAR";
    } else {
        lampOff();
        on_off.textContent = "LIGAR";
    }
}
on_off.addEventListener ("click", lampOnOff);
lampada.addEventListener ("mouseover", lampOn);
lampada.addEventListener ("mouseleave", lampOff);
lampada.addEventListener ("dblclick", lampBroken);*/