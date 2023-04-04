///31.- Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
///las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
///multiplicar.

const prompt = require('prompt-sync')();

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

function isPrime(n) {
    if(n < 2){
        return false;
    }
    
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
    
  }
function multitable(n){
    for(let i =1; i<= 10; i++){
        console.log(n +" x " + i + " : " + n*i);
    }

}

function main(){
    let n = prompt("Ingresa un numero: ");
    console.log("El factorial de " + n + " es: " + factorial(n));
    console.log("El numero " + n + " es primo? " + isPrime(n));
    console.log("La tabla de multiplicar de " + n + " es: ");
    multitable(n);
}

main();