function validarContrasena() {
    let contrasena;
    do {
        contrasena = prompt("Crea una contraseña (mínimo 8 caracteres, al menos un número y una letra mayúscula):");

        // Opcional: Podrías añadir un mensaje si la contraseña es inválida y el usuario no canceló
        if (contrasena !== null && !esContrasenaValida(contrasena)) {
            alert("Contraseña no válida. Requisitos: mínimo 8 caracteres, un número y una mayúscula.");
        }

    } while (!esContrasenaValida(contrasena));
    

        alert("Contraseña creada con éxito");
    // Si el usuario cancela el prompt, no se muestra mensaje de éxito ni de cancelación aquí.
}

function esContrasenaValida(contrasena) {
    // Si el usuario cancela el prompt, contrasena será null.
    if (contrasena === null) {
        return false; // Esto asegura que el bucle do...while continúe.
    }

    const tieneLongitudMinima = contrasena.length >= 8;
    const tieneNumero = /\d/.test(contrasena); 
    const tieneMayuscula = /[A-Z]/.test(contrasena); 

    return tieneLongitudMinima && tieneNumero && tieneMayuscula;
}
