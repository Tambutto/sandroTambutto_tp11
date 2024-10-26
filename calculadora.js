// -- MICRO DESAFIO 4 -- 

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let operacion = prompt("Ingrese la operacion a realizar (suma, resta, multiplicacion, division: ");

let resultado;

switch (operacion) {
    case "suma":
        resultado = num1 + num2;
        break;
    case "resta":
        resultado = num1 - num2;
        break;
    case "multiplicacion":
        resultado = num1 * num2;
        break;
    case "division":
        resultado = num1 / num2;
        break        
    default:
        resultado = "operacion no valida"
        break;
}

console.log(`El resultado de la ${operacion} es: ${resultado}}`);