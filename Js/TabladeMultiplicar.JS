// Crear un programa que genere la tabla de multiplicar del número que elija el usuario
const numero = parseInt(prompt("Introduce un número entre 1 y 20:"));

// Pide al usuario un número entre el 1 y 20
if (isNaN(numero) || numero < 1 || numero > 20) {
    alert("Por favor, introduce un número válido entre 1 y 20.");
} else {
    let sumaTotal = 0; // Variable acumuladora

    // Utilizando un bucle for, genera la tabla de multiplicar de ese número del 1 al 10
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;

        // Muestra cada línea en la consola con el formato: "5x3=15"
        console.log(`${numero} x ${i} = ${resultado}`);

        sumaTotal += resultado; // Acumulamos
    }

    // Al final, muestra un mensaje con la suma total de todos los resultados
    console.log(`La suma total de todos los resultados es: ${sumaTotal}`);
    alert(`La suma total de todos los resultados es: ${sumaTotal}`);
}
