///21.- Hacer un programa que calcule independientemente la suma de los pares y los impares de
///los números entre 1 y 1000.

function oddsAndEvens(){
    let odds = 0
    let evens = 0
    console.log("La sumas de numeros pares e impares entre el 0 y el 1000 son: ")
    for(let i=1; i<=1000; i++){
        if( i % 2 != 0){
            odds += i;
        }
        else{
            evens += i;
        }
    }
    console.log("suma de pares: " + evens);
    console.log("suma de impares: " + odds);
}
oddsAndEvens();