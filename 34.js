///34.- Usando el ejemplo anterior, hacer un programa que busque una nota en la lista.

const prompt = require('prompt-sync')();


function addNotes(notes, signature, note){
    notes[signature] = note;
}

function lookForNote(notes, wantedNote){
    for(let signature in notes){
        if(notes[signature] === wantedNote){
            console.log(`La calificación ${wantedNote} fue encontrada en ${signature}`);
        }else{
            console.log(`La calificación ${wantedNote} no fue encontrada`);
        }
    }
}

function main(){
    let notes = {}
    let op = parseInt(prompt("Cuantas materias vas a ingresar? "));
    for(let i = 1; i<= op; i++){
        let signature = prompt("Nombre de asignatura: ");
        let note = parseFloat(prompt("Calificacion: "));
        addNotes(notes, signature, note);
    }
    console.log("gustas buscar una califiacion en especifico? ");
    let res = prompt("y/n");
    if(res === "y" || res === "Y"){
        let wantedNote = parseFloat(prompt("Que calificacion buscas?"));
        lookForNote(notes, wantedNote);
    }else{
        console.log("Muy bien");
    }
}

main();