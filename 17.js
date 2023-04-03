///17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el
///segundo sea mayor o igual que el primero.

const prompt = require('prompt-sync')();

function multiplesBetween(n1, n2){
    let sum = 0;
    let count = 0;
    for(i = n1; i <= n2; i++){
        if( i % 2 == 0){
            console.log(i);
            sum += i;
            count ++;
        }
    }
    console.log("Existen " + count + "multiplos de 2 en la serie");
    console.log("La suma de los multiplos es: " + sum);
}

let n1 = parseInt(prompt("Introduce un número: "));
let n2 = parseInt(prompt("Introduce otro número: "));
if(n1 <= n2){
    multiplesBetween(n1, n2);
}
else{
    console.log("El segundo número debe ser mayor o igual que el primero.");
}