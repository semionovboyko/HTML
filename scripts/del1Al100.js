
for( var num = 1; num <= 100; num ++){
  if( num % 3 == 0){
    console.log("Fizz");
  }else if (num % 5 == 0){
    console.log("Buzz");
  }else{
    console.log(num);
  }
}

//solucion

/*for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}*/
