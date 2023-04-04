///45.- Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el
///campo ID. Crear un programa que nos permita consultar un registro siempre que queramos.

const fs = require('fs');
const prompt = require('prompt-sync')();

function searchText() {
  const archivo = 'DATOS.DAT';

  let palabra = prompt('Ingresa el ID a buscar: ');

  fs.readFile(archivo, 'utf-8', function (err, data) {
    if (err) throw err;

    let lines = data.split('\n');
    let matches = [];

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(palabra)) {
        for (let j = i + 1; j <= Math.min(i + 5, lines.length - 1); j++) {
          matches.push(lines[j]);
        }
      }
    }

    console.log(`Resultados para el ID "${palabra}":`);
    console.log("\n")
    console.log(matches.join('\n'));
    main();
  });
}

function main() {
  console.log("Bienvenido al menu de busqueda de DATOS.DAT: ");
  console.log("Ingrese una opcion...");
  console.log("1.- Buscar por ID ");
  console.log("2.- Salir del menu");
  let opcion = parseInt(prompt('Ingrese una opción: '));

  switch (opcion) {
    case 1:
      searchText();
      break;
    case 2:
      console.log("Saliendo del menu");
      return;
  }
}

main();
