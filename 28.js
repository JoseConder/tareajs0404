///28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz.

function coinFlip(){
    console.log("Se lanza una moneda....");
    let coin = Math.random();
    if(coin<0.5){
        console.log("Salio cara!!!");
    }else{
        console.log("Salio cruz!!!");
    }

}

coinFlip();
