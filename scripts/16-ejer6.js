'use strict'

/*
Que nos diga si un numero es par o impar
1.Ventana prompt
2.Si no es valido que nos pida de nuevo el numero
*/

//su manera
var numero = parseInt(prompt("Introduce un numero", 0));

while (isNaN(numero)) {
    var numero = parseInt(prompt("Introduce un numero", 0));
}

if (numero % 2 == 0) {
    alert("es un numero par");
} else {
    alert("es un numero impar");
}

//mi manera
while (isNaN(numero)) {
    var numero = parseInt(prompt("Introduce un numero", 0));
}

if (numero % 2 == 0) {
    console.log(numero + " es par");
} else {
    console.log(numero + " es impar");
}