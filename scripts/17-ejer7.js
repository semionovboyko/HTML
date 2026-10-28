'use strict'

// Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt('Introduce un numero', 1))
document.write("<h1>Tabla del " + numero + "</h1>");
for (var i = 0; i <= 10; i++) {
    //console.log(numero + '*' + i + "=" + numero * i);
    document.write(i + "x" + numero + "=" + (i * numero) + '<br/>');
}


for (var j = 0; j <= 10; j++) {
    document.write("<h1>Tabla del " + j + "</h1>");
    for (var i = 0; i <= 10; i++) {
        document.write(i + "x" + j + "=" + (i * j) + '<br/>');
    }
}


// mi Todas las tablas 

for (var i = 0; i <= 10; i++) {
    for (var j = 0; j <= 10; j++) {
        document.write(i + "x" + j + "=" + (i * j) + '<br/>');
    }
}