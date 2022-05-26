"use strict";
//* Parametros Obligatorios
/**
 Todos los parámetros de función son necesarios, a menos que se especifique lo contrario, y el número de argumentos pasados a una función debe coincidir con el número de parámetros necesarios que espera la función
 En este ejemplo, se requieren todos los parámetros.
 */
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2); //return 3
//  addNumbers(2);     //return an error
//* Parametros Opcionales
/**
 * Los parámetros de ruta se pueden convertir en opcionales si se anexa un signo de interrogación (?) al final del nombre del parámetro.

En este ejemplo, x es necesario y y es opcional. El parámetro opcional debe ir después de los parámetros obligatorios en la lista de parámetros. Además, para que esta función devuelva el valor correcto, debe abordar la posibilidad de que y se pueda pasar como un valor indefinido.
 */
function addNumbers1(x, y) {
    if (y === undefined) { //* Para mandar el valor corrcto debemos pasar a "y" como undefined
        return x;
    }
    else {
        return x + y;
    }
}
addNumbers1(1, 3); //return 4
addNumbers1(2); //return 2
//* Parametros Predeterminados
/**
 * También puede asignar valores predeterminados a los parámetros opcionales. Si se pasa un valor como argumento al parámetro opcional, se le asignará ese valor. De lo contrario, se le asignará el valor predeterminado. Al igual que con los parámetros opcionales, los parámetros predeterminados deben aparecer después de los parámetros necesarios en la lista de parámetros.

En este ejemplo, x es necesario y y es opcional. Si el valor no se pasa a y, el valor predeterminado es 25.
 */
function addNumbers2(x, y) {
    if (y === void 0) { y = 25; }
    return x + y;
}
console.log(addNumbers2(1, 2));
console.log(addNumbers2(1));
//* Parametros de REST
/**
 * Si desea trabajar con varios parámetros como grupo (en una matriz) o no sabe cuántos parámetros tomará una función en última instancia, puede usar los parámetros de REST. Los parámetros de REST se tratan como un número sin límite de parámetros opcionales. Puede dejarlos desactivados o tener tantos como desee.

Este ejemplo tiene un parámetro necesario y un parámetro opcional denominado restOfNumbers que puede aceptar cualquier número de números adicionales. Los puntos suspensivos (...) antes de restOfNumbers indican al compilador que compile una matriz de los argumentos pasados a la función y le asigna el nombre que le sigue para poder usarse en la función.
 */
var addAllNumbers3 = function (firstNumber) {
    var restOfNumbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumbers[_i - 1] = arguments[_i];
    }
    var total = firstNumber;
    for (var counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
console.log(addAllNumbers3(1, 2, 3, 4, 5, 6, 7)); // returns 28
console.log(addAllNumbers3(2)); // returns 2
function displayMessage(_a) {
    var text = _a.text, sender = _a.sender;
    console.log("Message from " + sender + ": " + text);
}
console.log(displayMessage({ sender: 'Christopher', text: 'hello, world' }));
