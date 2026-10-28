'use strict'

//arrays, arreglos, matrices 

var nombre = "Victor";
var nombre = ["Vistor", "Juan", "Manolo", "Jose", 53, true];
//indice     0        1        2 ...
var lenguajes = new Array("PHP", "js", "go", "java");

console.log(nombres[2]);
console.log(lenguajes);

//variable.length  

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introduce el num correcto menor que " + nombres.length);
} else {
    alert("el elemento selecciondo es: " + nombres[elemento]);
}

// recorrer array
document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}

//
lenguajes.forEach((elemento, indice, arr) => {
    console.log(arr);
    document.write("<li>" + indice + " " + elemento + "</li>");
});

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");

//BUSQUEDAS

var busqueda = lenguajes.find(function(lenguaje) {
    return leguaje == "PHP";
});

var busqueda = lenguajes.find(lenguaje => leguaje == "PHP");
var busqueda = lenguajes.findIndex(lenguaje => leguaje == "PHP"); //devuelve la posicion

var precios = [10, 20, 30, 80, 12];
var busqueda = precios.some(precio => precio >= 20); //devuelve true o false 
console.log(busqueda);