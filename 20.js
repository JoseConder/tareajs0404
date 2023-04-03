/// 20.- Calcular el factorial de un número, mediante funciones.

const prompt = require('prompt-sync')();

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

let number = prompt("Ingresa un numero: ")
let resp = factorial(number);
console.log("El factorial de " + number + " es: " + resp);