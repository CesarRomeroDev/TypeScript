"use strict";
//*Parámetros obligatorios
//Escriba la siguiente función de flecha, que acepta tres parámetros necesarios.
var addThereeNumbers = function (x, y, z) { return x + y + z; };
//Pruebe a llamar a la función escribiendo addThreeNumbers(10, 20). TypeScript genera el error Se esperaban 3 argumentos, pero obtuvo 2. No se proporcionó un argumento para "z". Cuando se ejecuta, la función devuelve NaN porque el tercer argumento se ha pasado como undefined, lo que hace que el cálculo no sea válido.
console.log(addThereeNumbers(10, 20));
//¿Qué ocurre al escribir addThreeNumbers(10, 20, 30, 40)? TypeScript genera el error Se esperaban 3 argumentos, pero obtuvo 4. Cuando se ejecuta, el cuarto argumento se quita y la función devuelve 60.
console.log(addThereeNumbers(10, 20, 30, 40));
//*Parámetros opcionales
//En la función, pruebe a convertir el y parámetro en opcional. ¿Qué sucede?
//TypeScript genera un error porque la posición de los parámetros opcionales es importante. En la lista de parámetros, los parámetros opcionales deben seguir todos los parámetros necesarios. En lugar del parámetro y, pruebe a convertir el parámetro z en opcional. Además, para que esta función devuelva el valor correcto, también debe actualizarla para abordar la posibilidad de que z se pueda pasar como undefined. Ahora debería poder llamar a la función mediante addThreeNumbers(10, 20) o addThreeNumbers(10, 20, 30).
var addThreeNumbers = function (x, y, z) {
    if (z === undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
console.log(addThreeNumbers(10, 20, 30));
//*Parámetros Predeterminados
//Escriba la siguiente función de flecha, que acepta tres parámetros necesarios.
var subtractThereeNumbers = function (x, y, z) {
    if (z === void 0) { z = 100; }
    return x - y - z;
};
console.log(subtractThereeNumbers(10, 20)); //* Se resta 10 - 20 = -10 - 100 = -110
console.log(subtractThereeNumbers(10, 20, 15)); //* returns -25
