function convertirTemperatura() {
    // 1. Usamos prompt para obtener la opción como texto, y luego parseInt para convertirla a número entero.
    const opcionInput = prompt("Elige una opción:\n1: Celsius a Fahrenheit\n2: Fahrenheit a Celsius");
    const opcion = parseInt(opcionInput);

    // 2. Validamos la opción.
    //    isNaN(opcion) verifica si la conversión a número falló (ej: el usuario escribió "abc").
    //    Luego verificamos si la opción es diferente de 1 y 2.
    if (isNaN(opcion) || (opcion !== 1 && opcion !== 2)) {
        alert("Opción no válida. Por favor, elige 1 o 2.");
        return; // Termina la función si la opción no es válida
    }

    // 3. Pedimos la temperatura y la convertimos a número con decimales usando parseFloat.
    const temperaturaInput = prompt("Introduce la temperatura a convertir:");
    const temperatura = parseFloat(temperaturaInput);

    // 4. Validamos la temperatura.
    if (isNaN(temperatura)) {
        alert("Por favor, introduce un número válido para la temperatura.");
        return; // Termina la función si la temperatura no es válida
    }

    // 5. Realizamos la conversión usando el operador ternario.
    //    Ahora comparamos 'opcion' con los números 1 y 2.
    const resultado = opcion === 1 
        ? ((temperatura * 9 / 5) + 32).toFixed(2) 
        : ((temperatura - 32) * 5 / 9).toFixed(2);

    const unidadResultado = opcion === 1 ? "Fahrenheit" : "Celsius";
    const unidadOriginal = opcion === 1 ? "Celsius" : "Fahrenheit";
    
    alert(`La temperatura de ${temperatura}° ${unidadOriginal} convertida es: ${resultado}° ${unidadResultado}`);
}
