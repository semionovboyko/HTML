'use strict'
//Las funciones son un grupo de ordenes agruadas con un nombre concreto es decir en una funcion y voy tener un 
// conjunto de reglas, de funciones ,de cosas que se van a ejecutar y yo puedo coger esa funcion y reutilizarla tantas
// veces como quiera. Es un conjunto de ordenes que se van ejecutar cuando nosotros invoquemos a la funcion
// Es una agrupacion reutilizable de un conjunto de instrucciones.

//Defino la funcion
function calculadora() {
    //conjunto de instrucciones a ejecutar
    console.log("Hola soy la calculadora")
    return "Hola soy la calculadora!!";
}

//invocar o llamar a la funcion
console.log(calculadora(), calculadora(), calculadora())
calculadora(); //podria llamarla desde la calculadora

//o 
var resultado = calculadora();

console.log(resultado);

//_____________________________________________________________________________

function calculadoraMejor(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
}
calculadoraMejor(12, 8);
calculadoraMejor(33, 4);

for (var i = 0; i <= 10; i++) {
    console.log(i);
    calculadoraMejor(i, 8);
}

//_________________________________________________________________________________
//Parametros opcionales

function sumar(numero1, numero2, mostrar = false) { //este parametro viene inicializado por defecto

    if (mostrar == false) {
        console.log(mostrar) //esta variable que es un parametro que le paso a la funcion
        console.log("Suma: " + (numero1 - numero2));
    } else {
        document.write("Suma: " + (numero1 + numero2) + "<br/>");
    }
}

sumar(1, 4); //el ultimo parametro no hace falta porque lleva un resultado dentro
sumar(1, 4, true); //parametro que actua como flag que es una variable queda tru o false

//_______________________________________________________________________________________

//funciones dentro de otras funciones
function mostrarConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 - numero2));
}

function mostrarPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 - numero2));
}

function restar(numero1, numero2, mostrar = false) {
    if (mostrar == false) {
        mostrarConsola(numero1, numero2);
    } else {
        mostrarPantalla(numero1, numero2);
    }
    return true;
}