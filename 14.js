///14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números que
///vamos introduciendo por teclado

const prompt = require('prompt-sync')();

function greaterOrLesser(){
    let greater = -Infinity;
    let lesser = Infinity;
    for(let i=1; i<=5; i++){
        number = prompt("ingresa un numero: ");
        greater = number;
        
        if(number > greater){
            greater = number;
        }
        if(number < lesser){
            lesser = number;
        }
    }

    console.log("El numero mayor fue: " + greater);
    console.log("El numero menor fue: " + lesser);
}

greaterOrLesser();