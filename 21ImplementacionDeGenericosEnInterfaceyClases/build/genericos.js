"use strict";
//* Declaración de una interfaz genérica
/**Declare dos variables usando la interfaz Identity como un tipo de objeto. */
var returnNumber = {
    value: 25,
    message: 'Hello'
};
var returnString = {
    value: 'Hello',
    message: 25
};
/**Declare una función llamada processIdentity que tenga la misma signatura de tipo que la interfaz ProcessIdentity */
function processIdentity(value, message) {
    console.log(message);
    return value;
}
/**Declare una variable de tipo de función denominada processor con la interfaz ProcessIdentity como el tipo de variable,
 *  y pase number para el tipo T y string para el tipo U. Después, asígnele la función processIdentity.
 * Puede usar esta variable como una función en el código y TypeScript comprobará los tipos. */
var processor = processIdentity;
var returnNumber1 = processor(100, 'Hello!'); // OK
var returnString1 = processor('Hello!', 100); // Type check error
/**Defina una clase genérica denominada processIdentity que implemente la interfaz ProcessIdentity.
 * En este caso, asigne a los tipos de variable de la clase processIdentity los nombres X e Y. Puede usar
 * nombres de variable diferentes en la interfaz y en la clase porque el valor del tipo se propaga y el nombre de la variable no importa. */
var processIdentity = /** @class */ (function () {
    function processIdentity(val, msg) {
        this.value = val;
        this.message = msg;
    }
    processIdentity.prototype.process = function () {
        console.log(this.message);
        return this.value;
    };
    return processIdentity;
}());
var processor = new processIdentity(100, 'Hello');
processor.process(); // Displays 'Hello'
processor.value = '100'; // Type check error
