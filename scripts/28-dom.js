'use strict'

//DOM - Document Object Model
// es el arbol de todas los elementos que hay en un pagina web a nivel de html, todas las etiquetas son un elemento del dom
function cambiaColor(color) {
    caja.style.background = color;
}

var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡texto en la caja desde js!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");

var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto = todosLosDivs[2].textContent;
contenidoEnTexto = todosLosDivs[2].innerHTML; //te permite asignar un nuevo valor
contenidoEnTexto.style.background = "red";

contenidoEnTexto.innerHTML = "Otro texto";
console.log(contenidoEnTexto);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
//prepend => añade antes
//append => añade despues
//appendChild => añade

seccion.append(hr);

//conseguir elementos por su clase css
var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');
divAmarillos[0].style.background = "yellow";
ç

var div;
for (div in divRojos) {
    if (divRojos[div].className == "rojo") {
        divRojos[div].style.background = "red";
    }
}

//query selector solo vale para selelcionar el primer elemento
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

//query selector all