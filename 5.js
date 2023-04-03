///5.-Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos impares hay.

function oddsToHundred(){
    let odds = 0
    console.log("Los numeros impares entre el 0 y el 100 son: ")
    for(let i=0; i<101; i++){
        if( i % 2 !== 0){
            console.log(i);
            odds ++;
        }
    }
    console.log("Existen " + odds + " numeros impares entre el 0 y el 100")
}
oddsToHundred();