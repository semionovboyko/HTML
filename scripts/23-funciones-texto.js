'use strict'

//propiedades, funciones y metodos que tiene jscript por defecto que nos van a servir para procesar 
//textos, para hacer busquedas en textos y para ver diferentes propiedades en los textos o en las cadenas de texto

//transformacion de textos

var numero = 444;
var texto1 = "Bienvenido";
var texto2 = "curso";

var dato = numero.toString();
dato = texto1.toUpperCase(); //mayusculas
dato = texto2.toLowerCase(); //minuscula
console.log(dato);

//calcular la longitud
var nombre = "";
var nombre1 = ["hola", "hol"];
console.log(nombre.length);

//concatenar - unir textos
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);
//o 
var dostextos = texto1.concat(" " + texto2);

//busquedassss

var busqueda = texto2.indexOf("curso"); //este metodo me dice en que posicion se encuenta esa palabra o si existe
console.log(busqueda);
busqueda = texto1.lastIndexOf("Bienvenido"); // nos saca la ultima coincidencia en el texto
busqueda = texto2.search("curso"); // lo mismo que indexof, -1 no existe
busqueda = texto2.match("curso"); // nos devuelve una array con varios datos que busca, donde se encuenta y el texto
// -- match(/curso/g); para buscar mas coincidencias
busqueda = texto2.substr(1, 2); // sacar caracteres desde el caracter hasta otro caracter
busqueda = texto2.charAt(1); // para sacar una letra en concreto, poniendo en que posicion esta
busqueda = texto2.startsWith("curso"); // para buscar textos especificos al comienzo del string y te dice si es true o false
busqueda = texto2.endsWith("curso"); //lo mismo pero al final
busqueda = texto2.includes("curso"); //busca la palabra en concreto y devuelve true o false si la encuentra

// remplazar, separar y cortar textos

busqueda = texto2.replace("curso", "pepe"); // remplaza texto
busqueda = texto2.slice(3); // separa o cortar el string apartir del caracter que eligas incluso hacer desde hasta(3,6)
busqueda = texto2.split(); //sirve para recortar las palabras y meterlas en una array
//split() este mete todo el texto en una sola posicion de la array
//split(" ") este mete cada palabra en diferesntes posicines de la array
busqueda = texto2.trim(); //quita los espacios sobrantes por delante y por detras util en correos y nombres
// en php es trim(variable)