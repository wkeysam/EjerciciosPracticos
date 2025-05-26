function generarPatron() {
            let n = parseInt(prompt("Introduce un número entre 3 y 10:"));

            if (isNaN(n) || n < 3 || n > 10) {
                alert("Por favor, introduce un número válido entre 3 y 10.");
                return;
            }

            let patron = "";
            for (let i = 1; i <= n; i++) {
                patron += "*".repeat(i) + "\n";
            }

            console.log(patron);
            alert("Patrón generado en la consola.");
        }