// Selecciona todos los botones con la clase "miBoton"
const botones = document.querySelectorAll('.miBoton');
const mostrarPantalla = document.getElementById('resultado');

let currentValue = ""; // Cadena que contiene el valor actual
let operator = "";     // Operador seleccionado
let previousValue = ""; // Valor previo antes de un operador

// Agrega un evento 'click' para cada boton -->
botones.forEach((boton) => {
    boton.addEventListener('click', function () {
        const value = boton.value;
        if (value === 'AC') {
            // Limpia todos los valores
            currentValue = "";
            previousValue = "";
            operator = "";
            mostrarPantalla.value = "";

        } else if (value === '=') {
            if (currentValue && previousValue && operator) {
                currentValue = eval(`${previousValue} ${operator} ${currentValue}`);
                mostrarPantalla.value = currentValue;
                previousValue = "";
                operator = "";
            }
        } else if ("/*-+".includes(value)) {
            // Guarda el operador y el valor previo
            if (currentValue) {
                previousValue = currentValue;
                currentValue = "";
                operator = value;
                mostrarPantalla.value = previousValue + " " + operator;
            }
        } else if (value === "←") {
            if (currentValue) {
                currentValue = currentValue.slice(0, -1); // Elimina el último carácter
                mostrarPantalla.value = currentValue;
            }
        }else if (value === ".") {
            if (!currentValue.includes(".")) {
                currentValue += "."; // Agrega el punto decimal
                mostrarPantalla.value = currentValue; // Actualiza el display
            }
        }else if (value === "%") {
            if (currentValue) {
                currentValue = (parseFloat(currentValue)/100).toString();
                mostrarPantalla.value = currentValue; // Actualiza el display
            }
        }  else {
            // Concatena los números
            currentValue += value;
            mostrarPantalla.value = currentValue;
        }
    });
});