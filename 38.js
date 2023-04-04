///38.-Ordenar una matriz de M filas y N columnas por la primera columna utilizando el método
///SHELL (por inserción).

function shell(matrix) {
    let Rows = matrix.length;
    let gap = Math.floor(Rows / 2);
    
    while (gap > 0) {
      for (let i = gap; i < Rows; i++) {
        let temp = matrix[i];
        let j = i;
        while (j >= gap && matrix[j - gap][0] > temp[0]) {
          matrix[j] = matrix[j - gap];
          j -= gap;
        }
        matrix[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }
    return matrix;
  }
  
  let matrix = [  [7, 5, 6],
    [2, 8, 9],
    [1, 3, 4],
    [10, 11, 12]
  ];
  
  console.log(shell(matrix));
  