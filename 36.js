///36.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su
///matriz transpuesta.

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
console.log("                    ")

let reverseMatrix = [];

for (let i = 0; i < matrix[0].length; i++) {
  reverseMatrix[i] = [];
  for (let j = 0; j < matrix.length; j++) {
    reverseMatrix[i][j] = matrix[j][i];
  }
}

for (let i = 0; i < reverseMatrix.length; i++) {
    console.log(reverseMatrix[i]);
}