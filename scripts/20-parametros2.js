'use strict'

//parametros REST y SPREAD

// rest cuando queremos pasar a una funcion parametros indefinidos usamos ...nombreParametro se capturan todos los valores 
// y se guardan en una array, arreglo o una lista de collecion de valores
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) { //rest
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("naranja", "manzana", "pomelo", "mandarina", "pera");

var frutas = ["uva", 'piña']; // spread funciona al reves de una array lo separa como parametros diferentes

listadoFrutas(...frutas, "melon", "coco", "naranja");