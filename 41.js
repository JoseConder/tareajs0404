///41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
///ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.

const fs = require('fs');
const prompt = require('prompt-sync')();

let id = prompt("Ingresa el ID: ");
let name = prompt("Ingresa el nombre: ");
let lastName = prompt("Ingresa los apellidos: ");
let address = prompt("Ingresa la direccion: ");
let state = prompt("Ingresa el estado: ");

let text = "\n"+ "ID: " + id + "\n" +"Nombre: " + name + "\n" + "Apellidos: " + lastName + "\n" +"Direccion: " + address + "\n" + "Estado: " + state + "\n";

fs.appendFile('DATOS.DAT', text, function(err) {
  if (err) throw err;
  console.log('Se agregó la nueva línea de texto al archivo');
});
