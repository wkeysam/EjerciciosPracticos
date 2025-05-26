// Descripción: Este programa solicita al usuario que ingrese tres notas, calcula el promedio y muestra un mensaje según el resultado. 
const notas = [];

for (let i = 1; i <= 3; i++) {
    const nota = parseFloat(prompt(`Introduce la nota ${i} (0-10):`));

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Por favor, introduce valores válidos entre 0 y 10.");
        throw new Error("Nota inválida. El programa se detiene.");
    }

    notas.push(nota);
}

const promedio = (notas[0] + notas[1] + notas[2]) / 3;
// Muestra el promedio en la consola
if (promedio < 5) {
    alert("Has suspendido");
} else if (promedio < 7) {
    alert("Aprobado");
} else if (promedio < 9) {
    alert("Notable");
} else {
    alert("Sobresaliente");
}
