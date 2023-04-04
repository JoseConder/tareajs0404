///29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10.
function dices(){
    let count = 0;
    for(let i = 1; i <= 100; i++){
        let dice = Math.floor(Math.random()*6) + 1;
        let dice2 = Math.floor(Math.random()*6) + 1;
        let sum = dice + dice2;
        if(sum == 10){
            count++;
        }
    }
    console.log("La cantidad de veces que la suma de los dados dio 10 en la 100 tiradas fue: " + count);

}

dices();