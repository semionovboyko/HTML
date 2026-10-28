'use strict' //el lenguaje del programa es mas estricto
// el alcance de las variables y como funcionan en los diferentes bloques

//Prueba con var
var num = 40;
console.log(num); //valor 40

if (true) {
    num = 50;
    console.log(num); //valor 50
}

console.log(num); //valor 50

//Prueba con let
var texto = "Hola";
console.log(texto); // valor Hola

if (true) {
    let texto = "Adios";
    console.log(texto); //valor adios porque let solo funciona en el bloque
}

console.log(texto); //valor js

//Funciones que transforman los tipos de datos

var numero_falso= "33";

console.log(Number(numero_falso)+7); // valor 40

//parseInt lo cambia a entero
//parseFloat a decimal
//String para convertirlos en texto

//para saber de que tipo es mi variable usar la funcion 
//typeof
console.log(typeof numero_falso);