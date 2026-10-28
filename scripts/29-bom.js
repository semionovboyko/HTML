'use strict'

// BOM - Browser Object Model
// los elementos que nos da el navegador web

//tamaño que tiene la ventana
function getBom() {
    console.log(window.innerHeight); //altura
    console.log(window.innerWidth);
}
getBom();

console.log(screen.width); //lo mismo pero lo saca directamente calculado
console.log(screen.height);

//url que tengo ahora mismo cargada
console.log(window.location.href);

//te manda al la url del parametro
function redirect(url) {
    window.location.href = url;
}

//abrir una ventana
function abrirVentana(url) {
    window.open(url);
}

function abrirVentana2(url) {
    window.open(url, "", "width=400, height=300");
}