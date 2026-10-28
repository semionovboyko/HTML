'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['la verdad duele', 'la vida es bella', 'Gran torino'];

var cine = [categorias, peliculas]

//console.log(cine[0][1]);
//console.log(cine[1][2]);

//peliculas[]= "Batman"; solo en PHP

peliculas.push("Batman"); //añadir a la array


var elemento = "";
do {
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
} while (elemento != "ACABAR");
peliculas.pop(); //eliminar el ultimo valor

var indice = peliculas.indexOf('Gran torino'); // devuelve la posicion o -1 si no lo encuntra

if (indice > -1) {
    peliculas.slice(indice, 1); //borra desde el indice hasta el numero que digas
}

var peliculas_string = peliculas.join(); //  convertir una array en string y separarlo por comas

console.log(peliculas_string);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", "); //convertir la cadena en una array 

peliculas.sort(); //Ordenar alfabeticamente
peliculas.reverse(); //Dar la vuelta a la array