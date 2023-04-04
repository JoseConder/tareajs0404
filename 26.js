///26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla.

const prompt = require('prompt-sync')();

let phrase = prompt('Ingrese una frase: ');
function center(phrase){
    let width = process.stdout.columns;
    let space = Math.floor((width - phrase.length) / 2);
    console.log(' '.repeat(space) + phrase);
}

center(phrase);