'use strict'
//funcion anonimas no tiene nombre, ese conjunto de instrucciones no va tener ningun nombre y yo lo puedo guardar dentro
// de una variable. Se suele usar mucho een JavaScript muchisimo librerias y mas cosas pero sobre todo se utiliza para hacer
//CAL VAX(call back) que es una funcion que se ejecuta dentro de otra
//es una funcion que se le pasa como parametro otra funcion

var pelicula = function(nombre) {
        return "La pelicula es " + nombre;
    }
    //en la consola hacer la llamada pelicula("nombre");


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) { // son funciones de call back
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato) { // funciones de call back
        console.log("La suma es: ", dato);
    },
    function(dato) {
        console.log("La suma por dos es: ", (dato * 2));

    });

//esto se ve mucho en QWERRTY JQUERI y frewords de desarrollo con Javascript

//para funciones call back se usan funciones de flecha en lugar de function(dato){ seria dato => { o
// (dato1, dato2) =>{