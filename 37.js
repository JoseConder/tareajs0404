///37.-Cargar las notas de los alumnos de un colegio en función del número de cursos y del número 
///de alumnos por curso.

const prompt = require('prompt-sync')();

let numCursos = parseInt(prompt("Ingrese el numero de cursos: "));
let numAlumnosPorCurso = parseInt(prompt("Ingrese el numero de alumnos por curso: "));

let notas = [];

for (let i = 0; i < numCursos; i++) {
  notas[i] = [];
  for (let j = 0; j < numAlumnosPorCurso; j++) {
    let nota = parseFloat(prompt(`Ingrese la nota del alumno ${j+1} del curso ${i+1}:`));
    notas[i][j] = nota;
  }
}
console.log("");
for (let i = 0; i < notas.length; i++) {
  console.log(`Notas del curso ${i+1}:`);
  for (let j = 0; j < notas[i].length; j++) {
    console.log(`Alumno ${j+1}: ${notas[i][j]}`);
  }
  console.log("");
}

