///7.- Introducir tantas frases como queramos y contarlas.
const prompt = require("prompt-sync")();

function countPhrases(){
    let count = 0
    let phrase = prompt("Dime algo: ")
    while(phrase != ""){
        count++;
        phrase = prompt("Dime otra cosa mas: ")

    }
    console.log("Se han ingresado " + count + " frases!");
}

countPhrases();