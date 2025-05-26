 //Solicita la edad al usuario
 let edad = prompt("Por favor, introduce tu edad:");
           // Si no se intruduce un valor válido, muestra un mensaje de alerta
                edad = parseInt(edad);
                //Validación de la entrada
                if (isNaN(edad) || edad === null || edad.trim() === "") {
                alert("Por favor, introduce un número válido");
            } else {
                //Solicita mensaje con alert() según la edad
                if (edad < 13) {
                    alert("Eres un niño");
                } else if (edad >= 13 && edad <= 17) {
                    alert("Eres un adolescente");
                } else if (edad >= 18 && edad <= 64) {
                    alert("Eres un adulto");
                } else {
                    alert("Eres un adulto mayor");
            }
        }