///8.- Hacer un programa que solo nos permita introducir S o N.
const prompt = require('prompt-sync')();

function sOrN(){
    let a = prompt("ingresa s o n porfavor: ")
    while ( a != "S" && a != "s" && a != "N" && a != "n"){
        a = prompt("ingresa s o n porfavor: ")
    }
    if (a === "S" || a === "s"){
        console.log("Bien, ingresaste s");
    }
    else{
        console.log("Bien, ingresas n");
    }


}

sOrN();