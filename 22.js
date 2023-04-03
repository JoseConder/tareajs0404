///22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada
///impresión ir desplazada cuatro columnas hacia la derecha.

const prompt = require('prompt-sync')();

function phrase(){
    let phrase = prompt("Ingresa una frase: ");
    for(let i = 0 ; i <= 5; i++){
        console.log(" ".repeat(i) + phrase);
    }
}

phrase();