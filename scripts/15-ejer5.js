'use strict'
/*
Muestre todos los numeros divisores de un numero introduce en prompt
*/

var numero = parseInt(prompt("Introduce un numero", 0));

//su manera
for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        console.log("Divisor: " + i);
    }
}

// mi manera
var resultado;
for (var i = 0; i <= numero; i++) {
    resultado = numero % i;
    if (resultado == 0) {
        console.log(numero + " es divisor de " + i);
    }

}