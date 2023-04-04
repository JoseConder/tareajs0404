let ventas = [];
for (let i = 0; i < 3; i++) {
  ventas[i] = [];
  for (let j = 0; j < 12; j++) {
    ventas[i][j] = [];
    for (let k = 0; k < 4; k++) {
      ventas[i][j][k] = Math.floor(Math.random() * 1000) + 1;
    }
  }
}

let totalVentas = [];
for (let j = 0; j < 12; j++) {
  totalVentas[j] = [];
  for (let k = 0; k < 4; k++) {
    let sumaVentas = 0;
    for (let i = 0; i < 3; i++) {
      sumaVentas += ventas[i][j][k];
    }
    totalVentas[j][k] = sumaVentas;
  }
}

console.log("Ventas realizadas por los representantes por mes y por producto: ");
for (let i = 0; i < ventas.length; i++) {
  for (let j = 0; j < ventas[i].length; j++) {
    console.log(`Representante ${i + 1}, Mes ${j + 1}:`);
    console.table(ventas[i][j]);
  }
}
console.log("Total de ventas por mes y producto: ");
console.table(totalVentas);
