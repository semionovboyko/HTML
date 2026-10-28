'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos
numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));
var num;

//document.write nos permite añadir texto
//en el body de la pagina
if (numero1 < numero2) {
    numero1 = numero1;
    numero2 = numero2;
} else if (numero1 > numero2) {
    numero2 = numero1;
    num = numero2;
    numero1 = num;
}
document.write("<h1>De" + numero1 + " a " + numero2 + " estan los numeros:</h1>")
for (var i = numero1; i <= numero2; i++) {
    document.write(i + "<br/>");
}