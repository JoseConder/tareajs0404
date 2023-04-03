///13.- Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100.

function twoOrThrees(){
    let count = 0
    for(let i = 1; i<101; i ++){
        if(i % 2 === 0 || i % 3 === 0){
            console.log(i);
            count ++;
        }
    }
    console.log("entre el 1 y el 100 existen " + count + " multiplos de 2 o 3...");
}

twoOrThrees();