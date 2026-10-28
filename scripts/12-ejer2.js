'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros
introducidos hasta introducir un numeor negativo y ahi mostrar el 
resultado
*/


var suma = 0;
var cont = 0;

do {
    //parseInt para pasarlo a un numero y que no sea un String
    var num = parseInt(prompt('Introduce un numero', 0));

    if (isNaN(num)) {
        num = 0;
    } else if (num >= 0) {
        suma += num;
        cont++;
    }

    console.log(suma);
    console.log(cont);

} while (num > 0);




alert("La suma de los numeros es: " + suma + " son " + cont);
alert("la media es: " + suma / cont);