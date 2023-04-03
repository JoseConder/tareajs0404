///9.- Introducir un número por teclado y que nos diga si es positivo o negativo.

const prompt = require('prompt-sync')();

function negativoOrPositive(number){
    if(number < 0 ){
        console.log("El numero es negativo");
    }
    else if(number == 0){
        console.log("El numero es 0 no es positivo ni negativo");
    }
    else{
        console.log("el numero es positivo");
    }

}

let number = prompt("Ingresa un numero: ")
negativoOrPositive(number);

