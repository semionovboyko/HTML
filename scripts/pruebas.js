var x = "fuera";

var f1 = function() {
  var x = "dentro de f1";
};
f1();
console.log(x);
// → fuera

var f2 = function() {
  x = "dentro de f2";
};
f2();
console.log(x);
// → dentro de f2