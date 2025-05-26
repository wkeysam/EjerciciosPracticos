function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function verificarNumeroPrimo() {
    let num = parseInt(prompt("Introduce un número para verificar si es primo:"));
    if (isNaN(num) || num < 2) {
        alert("Por favor, introduce un número entero mayor o igual a 2.");
        return;
    }
    if (esPrimo(num)) {
        alert(`${num} es un número primo.`);
    } else {
        alert(`${num} no es un número primo.`);
    }
}

verificarNumeroPrimo();