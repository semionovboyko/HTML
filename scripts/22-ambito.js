'use strict'

function holaMundo(texto) {
    var hola = "Texto dentro de la funcion"; //variable local solo puedo acceder a ella dentro de la funcion
    console.log(texto);
    console.log(hola)
    console.log(typeof numero.toString()) //para convertir tipo int a string //typeof para saber que tipo es 
}

var numero = 12;
var texto = "hola mundo soy una variable global"; // variable que puedo acceder desde cualquier parte del fichero
holaMundo(texto);