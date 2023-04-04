///27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.

const prompt = require('prompt-sync')();

function multitable(n){
    for(let i =1; i<= 10; i++){
        console.log(n +" x " + i + " : " + n*i);
    }

}

let number = prompt("Ingresa un numero entre el 0 y el 10: ")
if(number <0 || number >10){
    throw new RangeError("Solo numeros entre 0 y 10...");
}else{
    multitable(number);
}
