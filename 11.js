///11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por
///teclado.

const prompt = require('prompt-sync')();

function threeToX(n){
    let threes = 0
    console.log("Los multiplos de 3 entre el 0 y el " + n + "son: ")
    for(let i=1; i<= n; i++){
        if( i % 3 == 0){
            console.log(i);
            threes ++;
        }
    }
    console.log("Existen " + threes + " multiplos de 3 entre el 0 y el " + n )
}

let number = prompt("Ingresa un numero: ");
threeToX(number);