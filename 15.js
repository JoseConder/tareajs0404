/// 15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
///números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
///Calcular la suma de los impares.

const prompt = require('prompt-sync')();

function naturalNumbers() {
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let count = 0;
    let countEvens= 0;
    let sumOdds = 0;
    let lesser = Math.min(num1, num2);
    let greater = Math.max(num1, num2);
  
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
  
naturalNumbers();