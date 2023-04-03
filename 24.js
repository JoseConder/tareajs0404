///24.- Comprobar si un número mayor o igual que la unidad es primo.

const prompt = require('prompt-sync')();

function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
    
  }
  
function main(){
    let number = parseInt(prompt("Ingresa un numero: "));
    let other = number + 1;
    console.log("El numero: " + number + " es primo?: " + isPrime(number))
    console.log("El numero: " + other + " es primo?: " + isPrime(other))
}

main();  