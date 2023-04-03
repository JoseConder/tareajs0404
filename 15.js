/// 15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
///números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
///Calcular la suma de los impares.

const prompt = require('prompt-sync')();

function greaterOrLesser(){
    let greater = -Infinity;
    let lesser = Infinity;
    for(let i=1; i<=2; i++){
        number = prompt("ingresa un numero: ");
        greater = number;
        
        if(number > greater){
            greater = number;
        }
        if(number < lesser){
            lesser = number;
        }
    }
    return {lesser: lesser, greater: greater};
}


function naturalNumbers(n1, n2) {
    let count = 0;
    let countEvens= 0;
    let sumOdds = 0;
    let lesser = n1;
    let greater = n2;
  
    for (let i = lesser; i <= greater; i++) {
      console.log(i);
      count++;
      if (i % 2 == 0) {
        countEvens++;
      } else {
        sumOdds += i;
      }
    }
  
    console.log("Hay " + count + " números naturales entre " + lesser + " y " + greater);
    console.log("Hay " + countEvens + " números pares entre " + lesser + " y " + greater);
    console.log("La suma de los números impares es " + sumOdds);
  }
let res = greaterOrLesser();
let n1 = parseInt(res.lesser);
let n2 = parseInt(res.greater);
naturalNumbers(n1,n2);