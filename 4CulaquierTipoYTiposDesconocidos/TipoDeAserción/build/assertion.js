"use strict";
/**
 * Si necesita tratar una variable como un tipo de datos diferente, puede usar una aserción de tipo . Una aserción de tipo le dice a TypeScript que ha realizado las comprobaciones especiales que necesita antes de llamar a la declaración. Le dice al compilador "confía en mí, sé lo que estoy haciendo". Una aserción de tipo es como una conversión de tipo en otros idiomas, pero no realiza una verificación o reestructuración especial de los datos. No tiene impacto en el tiempo de ejecución y es utilizado únicamente por el compilador.

Las aserciones de tipo tienen dos formas. Una es la assintaxis:

(randomValue as string).toUpperCase();

La otra versión es la sintaxis de "soporte angular":

(<string>randomValue).toUpperCase();
 */
/**
 * El siguiente ejemplo realiza la verificación necesaria para determinar que randomValuees un stringantes de usar la aserción de tipo para llamar al toUpperCasemétodo.
 */
var randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
if (typeof randomValue === 'string') {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
/**
 * TypeScript ahora asume que ha realizado la verificación necesaria. La aserción de tipo dice que randomValuedebe tratarse como un stringy luego toUpperCasese puede aplicar el método.
 */ 
