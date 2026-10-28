'use strict' //el lenguaje del programa es mas estricto

//contenedor de informacion

var pais = 'España';
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais + ' ' + continente;
let prueba = "hola";

//para cambiar antiguas varibles a nuevas
pais = "Mexico";
continente = "Latinoamerica";

console.log(pais, continente, antiguedad);
alert(pais_y_continente); // resultado España Europa por la variable pais_continente sigue igual

//constantes 
const pi = 314;