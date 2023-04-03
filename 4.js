///4.- Hacer un programa que imprima la suma de los 100 primeros números.

function sumToHundred(){
    let sum = 0
    for(let i=0; i<101; i++){
        sum += i;
    }
    console.log("La suma de los numeros del 0 al 100 es: " + sum);
}

sumToHundred();