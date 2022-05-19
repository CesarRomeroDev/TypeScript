"use strict";
//* TIPOS DE UNION
/**
 * Un tipo de unión describe un valor que puede ser uno de varios tipos. Esto puede ser útil cuando un valor no está bajo su control (por ejemplo, valores de una biblioteca, una API o entrada del usuario).

El anytipo también puede aceptar diferentes tipos, entonces, ¿por qué querría usar un tipo de unión? Los tipos de unión restringen la asignación de valores a los tipos especificados, mientras que cualquier tipo no tiene restricciones. Otra razón es el soporte de Intellisense.

Un tipo de unión usa la barra vertical o tubería ( |) para separar cada tipo. En el siguiente ejemplo, multiTypepuede ser a  numbero a  boolean:
 */
var multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = "twenty"; //* Invalid
/**
 * Usando protectores de tipo, puede trabajar fácilmente con una variable de un tipo de unión. En este ejemplo, la addfunción acepta dos valores que pueden ser a numbero a string. Si ambos valores son tipos de números, los suma. Si ambos son tipos de cadena, los concatena. De lo contrario, genera un error.
 */
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y); //concat() : Concatenar string
    }
    throw new Error('Los parámetros deben ser números o cadenas'); //throw : manda una excepcion 
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
var newManager = {
    employeeID: 1234,
    ege: 34,
    stockPlan: true
};
var myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid
var diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid
