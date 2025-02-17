let contador = 0;
let intervalo;
let intervaloReverso;
let ventana;

window.onload = function () {
    document.getElementById("uno").addEventListener("click", apertura);
    document.getElementById("dos").addEventListener("click", parar);
    document.getElementById("tres").addEventListener("click", cierre);
}

function apertura() {
    intervalo = setInterval(movimiento, 500);
    intervaloReverso = setTimeout(reverso, 1000);
    if (ventana == undefined) {
        ventana = window.open("", "", "width=200 height=200");
    }

}
function movimiento() {

    ventana.moveBy(contador, 0);
    console.log(contador);
    contador++;
}

function reverso(){
    document.getElementById("demo").innerHTML = "Happy Birthday!" 
}

function parar() {
    clearInterval(intervalo);
}

function cierre() {
    ventana.close();
    ventana = undefined;
}