"use strict";
//* Genericos
/**
 * Los genéricos son plantillas de código que puede definir y reutilizar en todo el código base.
 *  Proporcionan una manera de indicar a las funciones, clases o interfaces qué tipo quiere usar
 * al llamarlas. Esto es similar a los argumentos que se pasan a una función, salvo en que un genérico
 * le permite indicar al componente qué tipo debe esperar en el momento en que se llama.

    Cree funciones genéricas cuando el código sea una función o una clase que:

    Funcione con varios tipos de datos.
    Use ese tipo de datos en varios lugares.
    Los genéricos pueden:

    Proporcionar más flexibilidad a la hora de trabajar con tipos.
    Permitir la reutilización de código.
    Reducir la necesidad de usar el tipo any.
 */
//* ¿Por qué usar Genericos?
/**
 * La función getArray genera una matriz de elementos de tipo any.
 */
function getArray(items) {
    return new Array().concat(items); //El concat()método se utiliza para fusionar dos o más matrices.
}
/**
 * Después, la variable numberArray se declara mediante una llamada a la función getArray,
 *  en la que se le pasa una matriz de números, y la variable stringArray se declara con una
 * matriz de cadenas. Pero dado que se usa el tipo any, no hay nada que impida que el código
 * inserte una cadena (string) en numberArray o un número (number) en stringArray.
 */
var numberArray = getArray([5, 10, 15, 20]);
var strinArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);
strinArray.push('Rabbits');
numberArray.push('Este no es un numero');
strinArray.push(30);
console.log(numberArray);
console.log(strinArray);
/**
 * ¿Qué ocurre si quiere especificar el tipo de los valores que contendrá la matriz cuando llame a la función?
 * ¿Y si quiere que TypeScript realice después la comprobación de tipos de los valores que se pasan para asegurarse
 * de que son del tipo especificado? Aquí es donde entran en juego los genéricos.
    En este ejemplo se vuelve a escribir la función getArray mediante genéricos. De este modo, la matriz puede aceptar
    cualquier tipo que se especifique al llamar a la función.
 */
function getArrays(items) {
    return new Array().concat(items);
}
/**
 * En este ejemplo, con las declaraciones de variable para numberArray y stringArray actualizadas para llamar
 * a la función con el tipo deseado, TypeScript evita que se agreguen elementos no válidos a la matriz.
 */
var numberArray1 = getArrays([5, 10, 15, 20]);
numberArray1.push(25);
numberArray1.push('Este no es un numero'); //Generates a compile time type check error
console.log(numberArray1);
var stringArray1 = getArrays(['Cats', 'Dogs', 'Birds']);
stringArray1.push('Rabbits');
stringArray1.push(30); //Generates a compile time type check error
console.log(stringArray1);
//* Uso de varias variables de tipo
/**
 * No está limitado a usar una única variable de tipo en los componentes genéricos.

Por ejemplo, la función identity acepta dos parámetros, value y message, y devuelve el parámetro value.
Puede usar dos genéricos, T y U, para asignar distintos tipos a cada parámetro y al tipo de valor devuelto.
La variable returnNumber se inicializa mediante una llamada a la función identity con <number, string> como
tipos para los argumentos value y message; returnString se inicializa llamando a la función con <string, string>;
 y returnBoolean se inicializa llamándola con <boolean, string>. Al usar estas variables, TypeScript puede comprobar
 el tipo de los valores y devolver un error en tiempo de compilación si hay un conflicto.
 */
function identity(value, message) {
    console.log(message);
    return value;
}
var returnNumber = identity(100, 'HELLO');
//  console.log(returnNumber = returnNumber * 100);            //ok
var returnString = identity('100', 'Hola');
console.log(returnString * 100); //Error: Type 'number' not assignable to type 'string'
var returnBoolean = identity(true, 'Bonjour!');
console.log(returnBoolean * 100); //Error: Type 'number' not assignable to type 'boolean'
