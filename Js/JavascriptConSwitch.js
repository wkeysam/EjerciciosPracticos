const num1 = parseFloat(prompt("Introduce el primer número:"));
const num2 = parseFloat(prompt("Introduce el segundo número:"));
const operacion = prompt("Elige una operación: +, -, *, /");

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, introduce números válidos.");
} else {
    switch (operacion) {
        case '+':
            alert(`Resultado: ${num1 + num2}`);
            break;
        case '-':
            alert(`Resultado: ${num1 - num2}`);
            break;
        case '*':
            alert(`Resultado: ${num1 * num2}`);
            break;
        case '/':
            if (num2 === 0) {
                alert("Error: No se puede dividir por cero.");
            } else {
                alert(`Resultado: ${num1 / num2}`);
            }
            break;
        default:
            alert("Operación no válida. Por favor, elige +, -, * o /.");
    }
}
