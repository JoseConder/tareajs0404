///12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los
///números pares por un lado, y por otro, la de todos los impares

function oneToHundred(){
    let evens = 0
    let odds = 0
    for(let i =1; i<101; i++){
        console.log(i);
        if(i % 2 == 0){
            evens += i;
        }
        else{
            odds += i;
        }

    }

    console.log("La suma de los pares del 0 al 100 es: " + evens);
    console.log("La suma de los impares del 0 al 100 es :" + odds);
}

oneToHundred();