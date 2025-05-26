const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
                let intentos = 0;
                let adivinado = false;

                while (!adivinado) {
                    const intento = parseInt(prompt("Adivina el número entre 1 y 100:"));

                    if (isNaN(intento) || intento < 1 || intento > 100) {
                        alert("Por favor, introduce un número válido entre 1 y 100.");
                        continue;
                    }

                    intentos++;

                    if (intento === numeroAleatorio) {
                        adivinado = true;
                        alert(`¡Felicidades! Has adivinado el número ${numeroAleatorio} en ${intentos} intentos.`);
                    } else if (intento < numeroAleatorio) {
                        alert(`El número a adivinar es $(Intento < numeroAleatorio ? "Mayor" : "menor}.`);
                    }
                }