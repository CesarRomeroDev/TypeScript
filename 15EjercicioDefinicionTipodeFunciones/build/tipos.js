"use strict";
/**
 *Ahora puede usar el tipo de función como una firma de tipo al declarar funciones. Declare dos variables del tipo de función calculator, una para la operación de suma y otra para la de resta. Pruebe las nuevas funciones devolviendo el resultado de cada una de ellas a la consola.
 */
var addNumbers = function (x, y) { return x + y; };
var subtractNumbers = function (x, y) { return x - y; };
console.log(addNumbers(1, 2));
console.log(subtractNumbers(5, 4));
/**
 * También puede utilizar el tipo de función calculator para pasar valores de otra función. Escriba la función doCalculation, que devuelve el resultado de la función addNumbers o subtractNumbers según el valor pasado al parámetro operation.
 */
var doCalculation = function (operation) {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));
var addNumbers1 = function (x, y) { return x + y; };
var addNumbers2 = function (number1, number2) { return number1 + number2; };
var addNumbers3 = function (num1, num2) { return num1 + num2; };
