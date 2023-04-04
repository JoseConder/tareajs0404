///44.- Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que
///introduciremos por teclado.

const fs = require('fs');
const prompt = require('prompt-sync')();

function searchText(){
    const archivo = 'DATOS.DAT';

    let palabra = prompt('Ingresa la palabra a buscar: ');

    fs.readFile(archivo, 'utf-8', function(err, data) {
        if (err) throw err;

        let lines = data.split('\n');
        let matches = [];

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(palabra)) {
                for (let j = Math.max(i - 5, 0); j < i; j++) {
                    matches.push(lines[j]);
                }
                matches.push(lines[i]);
            }
        }

        console.log(`Resultados de la búsqueda para la palabra "${palabra}":`);
        console.log(matches.join('\n'));
    });
}


searchText();
