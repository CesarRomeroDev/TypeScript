"use strict";
//* Uso de los métodos y las propiedades de un tipo genérico
/**
 * A la hora de usar variables de tipo para crear componentes genéricos, solo se pueden usar las propiedades
 * y los métodos de los objetos que están disponibles para cada tipo. Esto impide que se produzcan errores al
 * intentar realizar una operación con un valor de parámetro que es incompatible con el tipo que se le pasa.
 * Si se agrega la instrucción let result: T = value + value a la función identity, TypeScript genera el error
 * La parte izquierda de una operación aritmética debe ser de tipo "any", "number", "bigint" o un tipo de enumeración
 * porque no sabe qué valor se le pasará en tiempo de ejecución. Si se pasara un valor no numérico, la expresión generaría
 * un error, por lo que TypeScript informa del problema en tiempo de compilación.
 */
function identity(value, message) {
    var result = value + value; // Error
    console.log(message);
    return result;
}
function identity(value, message) {
    var result = value + value; // Error
    console.log(message);
    return result;
}
var returnNumber = identity(100, 'Hello!'); // OK
var returnString = identity('100', 'Hola!'); // OK
var returnBoolean = identity(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
/**
 * También puede restringir un tipo a la propiedad de otro objeto. En este ejemplo se usa extends con el operador keyof,
 * que toma un tipo de objeto y genera una unión literal de cadena o de valores numéricos de sus claves. Aquí se usa K
 * extends keyof T para garantizar que el parámetro de clave es del tipo correcto para el tipo asignado a pet.
 */
/**
 * El keyofoperador toma un tipo de objeto y produce una cadena o unión literal numérica de sus claves.
 * El siguiente tipo P es del mismo tipo que “x” | "y":
 */
function getPets(pet, key) {
    return pet[key];
}
var pets1 = {
    cats: 4,
    dogs: 3,
    parrots: 1,
    fish: 6
};
console.log(getPets(pets1, 'fish'));
var pets2 = {
    1: "cats",
    2: "dogs",
    3: "parrots",
    4: "fish"
};
console.log(getPets(pets2, 3));
