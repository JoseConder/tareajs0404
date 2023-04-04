///39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el
///segundo 2, el tercero 3 y así sucesivamente.

const Pages = 3;
const Rows = 4;
const Cols = 5;
let n = 1;

for (let page = 1; page <= Pages; page++) {
  console.log(`Página ${page}`);
    for (let row = 1; row <= Rows; row++) {
    let rowValues = [];
      for (let col = 1; col <= Cols; col++) {
      rowValues.push(n);
      n++;
    }
    console.log(rowValues.join("      "));
  }
  console.log("");
}
