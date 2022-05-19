"use strict";
/**
 * Este ejemplo cambia el anytipo del ejemplo anterior a unknown. Ahora generará errores de verificación de tipos y le impedirá compilar el código hasta que tome las medidas adecuadas para resolverlos.
 */
var randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
console.log(randomValue.name); // Error: Object is of type unknown
randomValue(); // Error: Object is of type unknown
randomValue.toUpperCase(); // Error: Object is of type unknown
/**
 *Nota:
 *  La principal diferencia entre anyy unknownes que no puede interactuar con una variable de tipo unknown; hacerlo genera un error de compilación . anyomite cualquier verificación en tiempo de compilación y el objeto se evalúa en tiempo de ejecución; si el método o la propiedad existe, se comportará como se esperaba.
 */ 
