 function CalcularIva(precio) {
                return precio * 1.21;
            }

            function CrearSaludo(nombre, apellidos) {
                return `Hola ${nombre} ${apellidos}`;
            }

            function esMayorDeEdad(edad) {
                return edad >= 18;
            }

           
            console.log(CalcularIva(100)); 
            console.log(CrearSaludo("Samuel")); 
            console.log(esMayorDeEdad(20));
        