//funcion es un conjunto de instrucciones que se  pueden repetir tantas veces 
//como queramos

'use strict'

//ALERTA
alert("Esta es mi alerta!!");
alerta("Este es mi texto");

//CONFIRMACION funcion confirm
var mi_resultado = confirm("¿Esta seguro de querer continuar?");
console.log(mi_resultado);
//creando una variable podemos ver el resultado del usuario

//INGRESO DATOS 
var mi_result = prompt("¿ Que edad tienes?", 18);
console.log(typeof mi_result);
// recive siempre dos parametros:
//1 la pregunta
//2 el valor por defecto en el que aparece en la pantalla
// Siempre devuelve un String de resultado