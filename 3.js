///3.- Hacer un programa que imprima los números pares entre 0 y 100.

function evenBetweenHundred(){
    for(let i=0; i<101; i++){
        if (i%2 == 0){
            console.log(i);
        }
    }
}

evenBetweenHundred();