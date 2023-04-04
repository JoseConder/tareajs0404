///43.- Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones
///cuantas veces deseemos

const fs = require('fs');
const prompt = require('prompt-sync')();

function addText(){
    let id = prompt("Ingresa el ID: ");
    let name = prompt("Ingresa el nombre: ");
    let lastName = prompt("Ingresa los apellidos: ");
    let address = prompt("Ingresa la direccion: ");
    let state = prompt("Ingresa el estado: ");

    let text = "\n"+ "ID: " + id + "\n" +"Nombre: " + name + "\n" + "Apellidos: " + lastName + "\n" +"Direccion: " + address + "\n" + "Estado: " + state + "\n";

    fs.appendFile('DATOS.DAT', text, function(err) {
        if (err) throw err;
        console.log('Se agregó la nueva línea de texto al archivo');
    menu();
    });
}

function deleteText(){
    const archivo = 'DATOS.DAT';

    let palabra = prompt('Ingresa la frase a borrar: ');

    fs.readFile(archivo, 'utf-8', function(err, data) {
        if (err) throw err;
  
        const contenido = data.replace(new RegExp(`.*${palabra}.*\\n?`, 'g'), '');

    fs.writeFile(archivo, contenido, function(err) {
        if (err) throw err;
        console.log(`La frase "${palabra}" fue eliminada del archivo "${archivo}"`);
        });
    menu();
    });
}

function menu(){
    console.log("Bienvenido al menu de altas y bajas de DATOS.DAT: ");
    console.log("Ingrese una opcion...");
    console.log("1.- Agregar Datos ");
    console.log("2.- Eliminar Datos ");
    console.log("3.- Salir del menu")
    let opcion = parseInt(prompt('Ingrese una opción: '));

    switch (opcion) {
    case 1:
        addText();
        break;
    case 2:
        deleteText();
        break;
    case 3:
        console.log("Saliendo del menu");
    }    
}


menu();