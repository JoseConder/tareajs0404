///42.- Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.

const fs = require('fs');
const prompt = require('prompt-sync')();

const archivo = 'DATOS.DAT';
let palabra = prompt('Ingresa la frase a borrar: ');

fs.readFile(archivo, 'utf-8', function(err, data) {
  if (err) throw err;
  
  const contenido = data.replace(new RegExp(`^.*${palabra}.*$\\n`, 'gm'), '');
  
  fs.writeFile(archivo, contenido, function(err) {
    if (err) throw err;
    console.log(`La frase "${palabra}" fue eliminada del archivo "${archivo}"`);
  });
});

