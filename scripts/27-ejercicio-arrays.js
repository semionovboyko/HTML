'use strict'

/*
1. Pide 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorara el uso de funciones)
*/
//MI MANERA
var numeros = [];
var num;
do {
    num = prompt("Introduce un numero: ");
    numeros.push(num);
} while (numeros.length < 6);

//mostrar
document.write("<h2> ARRAY DE NUMEROS </h2>");
document.write("<ul>")

numeros.forEach((elemento, indice, ) => {
    document.write("<li>Indice-" + indice + ": <strong>" + elemento + "</strong><br/></li>");
});
document.write("</ul>");

var ordenados = numeros.sort();
var alreves = ordenados.reverse();

document.write(ordenados);

//document.write(alreves);

//SU MANERA
function mostrarArray(elemento, textoCustom = "") { // el texto es para añadir lo que quiera
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>")
    numeros.forEach((elemento, indice, ) => {
        document.write("<li>Indice-" + indice + ": <strong>" + elemento + "</strong><br/></li>");
    });
    document.write("</ul>");
}
//pedir numeros
var numeros = new(6);
// var numeros =[];
for (var i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("Introduce un numero", 0));
    //numeros.push(parseInt(prompt("Introduce un numero", 0));
}

//mostrar  en el cuerpo de la pagina
mostrarArray(numeros); //podriameter el texto custom

//ordenar y mostrar
numeros.sort(function(a, b) { return a - b });
mostrarArray(numeros, "Ordenados");

numeros.reverse();
mostrarArray(numeros, " reverso");

//contar elementos
document.write("<h1>El array tiene: " + numeros.length + "elementos");

//Busqueda

var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<hr/><h1>ENCONTRADO</h1");
    document.write("<h1>Posicion de la busqueda: " + posicion + "</h1<hr/>")
} else {
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>")
}