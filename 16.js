///16.- Imprimir diez veces la serie de números del 1 al 10.

function oneToTen(){
    for(i = 1; i<= 10; i++){
        for(i = 1; i<= 10; i++){
            console.log(i)
        }
        console.log("Serie no. : " + j)
    }
    
}

function repeat10(){
    for(j = 1; j<=10; j ++){
        oneToTen();
    }
}

repeat10();