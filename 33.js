///33.- Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
// y calcule e imprima su media.

const prompt = require('prompt-sync')();

function getNotes(){
    let notes = [];
    for(let i = 0; i<10; i++){
        let note = parseFloat(prompt("Ingresa una calificacion: "))
        notes.push(note);
    }
    return notes;
}

function avg(notes){
    let sum = notes.reduce((a, b) => a + b);
    let avg = sum / notes.length;
    return avg;
}

console.log("Hola!, Bienvenido, obtendremos la media de tus calificaciones... ");
let notes = getNotes();
console.log("La media de tus calificaciones es: ");
console.log(avg(notes));