'use strict'
// plantillas de texto sustituir valores dentro de un string sin necesidad de estar concatenando, de forma que pueda tener 
//una plantilla de texto y sustituir variables dentro de ella
//${}se interpola el valor de una variable dentro de la plantilla es decir imprimo la variable dentro de la propia plantilla

var nombre = prompt("mete tu nombre");
var apellidos = prompt("mete tus apellidos");

//var texto = "Mi nombre es: "+ nombre + "<br\> Mis apellidos son: "+ apellidos;

var texto = `
    <h1>Hola que tal</h1>
    <h3>mi nombre es: ${nombre}</h3> 
    <h3>mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);