
let suma = 0;
let resta = 0;
let mult = 0;
let div = 0;

const realizarOperacion = () => {
    let solicitud = "";

    while (solicitud !== 'salir') {
        let num1 = parseFloat(prompt('Ingrese primer número'));
        let num2 = parseFloat(prompt('Ingrese segundo número'));
        let operacion = prompt('Escriba la operación que desea realizar (multiplicación, división, resta, suma)');

        if (operacion === 'suma') {
            suma = num1 + num2;
            alert('El resultado de la operación es: ' + suma);
        } else if (operacion === 'resta') {
            resta = num1 - num2;
            alert('El resultado de la operación es: ' + resta);
        } else if (operacion === 'multiplicacion') {
            mult = num1 * num2;
            alert('El resultado de la operación es: ' + mult);
        } else if (operacion === 'division') {
            if (num2 === 0) {
                alert('Error: División por cero');
            } else {
                div = num1 / num2;
                alert('El resultado de la operación es: ' + div);
            }
        } else {
            alert('Operación no válida');
        }

        solicitud = prompt('Escriba "salir" para finalizar o presione cualquier tecla para continuar');
    }
}

realizarOperacion();
