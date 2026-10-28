/*var elNumero = Number(prompt("Dame un número", ""));
alert("Tú número es la raíz cuadrada de " +
      elNumero * elNumero);*/

var elNumero = Number(prompt("Dame un número", ""));
if (!isNaN(elNumero))
    alert("Tu número es la raíz cuadrada de " + elNumero * elNumero);
else
    alert("Hey. ¿Por qué no me diste un número?");

var resultado = 1;
var contador = 0;
while (contador < 10) {
    resultado = resultado * 2;
    contador = contador + 1;
}
console.log(resultado);