///18.- Hacer un programa que cuente las veces que aparece una determinada letra en una frase
/// que introduciremos por teclado.

const prompt = require('prompt-sync')();

function letterOnPhrase(phrase, letter){
    let count = 0;
    const x = phrase.split('');
    for(let i = 0; i < x.length; i++){
        if(x[i] === letter){
            count ++;
        }
    }
    console.log( phrase + " : contiene " + count + " letras " + "'" + letter + "'");

}

function main(){
    let phrase = prompt("Ingresa una frase: ");
    let letter = prompt("ingresa una letra: ");
    letterOnPhrase(phrase,letter)
}

main();
