///35.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e
///imprimirla.

let matrix = new Array(4);

for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(5);
  for (let j = 0; j < matrix[i].length; j++) {
    matrix[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
}
