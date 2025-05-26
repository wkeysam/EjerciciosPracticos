let saldo = 1000;

        function mostrarMenu() {
            let opcion;
            do {
                opcion = prompt("Bienvenido al Cajero Automático\n" +
                                "1. Consultar Saldo\n" +
                                "2. Retirar Dinero\n" +
                                "3. Depositar Dinero\n" +
                                "4. Salir\n" +
                                "Elige una opción (1-4):");

                 if (opcion === '1') {
                    alert(`Tu saldo actual es: $${saldo}`);
                } else if (opcion === '2') {
                    retirarDinero();
                } else if (opcion === '3') {
                    depositarDinero();
                } else if (opcion === '4') {
                    alert("Gracias por usar el cajero automático. ¡Hasta luego!");
                } else {
                    alert("Opción no válida. Por favor, elige una opción entre 1 y 4.");
                }
            } while (opcion !== '4');
        }

        function retirarDinero() {
            let cantidad = parseFloat(prompt("Introduce la cantidad a retirar:"));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Cantidad no válida.");
            } else if (cantidad > saldo) {
                alert("Saldo insuficiente.");
            } else {
                saldo -= cantidad;
                alert(`Has retirado $${cantidad}. Tu nuevo saldo es: $${saldo}`);
            }
        }

        function depositarDinero() {
            let cantidad = parseFloat(prompt("Introduce la cantidad a depositar:"));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Cantidad no válida.");
            } else {
                saldo += cantidad;
                alert(`Has depositado $${cantidad}. Tu nuevo saldo es: $${saldo}`);
            }
        }