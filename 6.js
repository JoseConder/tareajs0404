/// 6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un 
///número que introducimos por teclado.
const prompt = require('prompt-sync')();

function naturalNumbers(n){
    for(i=0; i<=n; i++){
        console.log(i);
    }
    
}

let number = prompt("Que numero deseas?");
naturalNumbers(number);