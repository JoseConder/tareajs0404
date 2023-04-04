/// 30.- Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su
/// multiplicación o su división.

const prompt = require("prompt-sync")();

function sum(n1, n2){
    let res = n1 + n2;
    return res;
}

function sub(n1, n2){
    let res = n1 - n2;
    return res;
}

function mult(n1, n2){
    let res = n1 * n2;
    return res;
}

function div(n1, n2){
    if(n2 === 0){
        throw new Error("No se divide entre 0")
    }else{
        let res = n1 / n2;
        return res;
    }
}

function numbers(){
    let number1 = parseInt(prompt("Ingresa un numero: "))
    let number2 = parseInt(prompt("Ingrese otro numero: "))
    return {n1: number1, n2: number2};
}

function main(){
    console.log("Bienvenido a una calculadora basica...")
    let numbs = numbers();
    let n1 = numbs.n1;
    let n2 = numbs.n2;
    console.log("Que desea hacer?")
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicación');
    console.log('4. División');
    let opcion = parseInt(prompt('Ingrese una opción: '));

    switch (opcion) {
        case 1:
            console.log(`La suma de ${n1} y ${n2} es ${sum(n1, n2)}`);
            break;
        case 2:
            console.log(`La resta de ${n1} y ${n2} es ${sub(n1, n2)}`);
            break;
        case 3:
            console.log(`El producto de ${n1} y ${n2} es ${mult(n1, n2)}`);
            break;
        case 4:
            console.log(`La division de ${n1} entre ${n2} es ${div(n1, n2)}`);
            break;
        default:
            console.log("Operacion invalida");
    }
}

main();