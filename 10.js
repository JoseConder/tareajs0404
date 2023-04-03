///10.- Introducir un número por teclado y que nos diga si es par o impar.

const prompt = require('prompt-sync')();

function isEven(n){
    if(n % 2 == 0){
        console.log("El numero es par")
    }
    else{
        console.log("El numero es impar")
    }
}

let number = prompt("Ingresa un numero: ")
isEven(number);