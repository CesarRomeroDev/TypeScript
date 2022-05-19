/**
 * Introduccion:
 * Hay momentos en los que necesitará trabajar con valores que son desconocidos para usted en el momento de desarrollar su código, o que son de un rango estrecho posible de tipos de valores. En estos casos, puede usar los tipos anyy unknowny usar aserción de tipo y guardias de tipo para mantener el control sobre lo que su código puede hacer con los valores que se pasan.
 */

/**
 * El anytipo es el tipo que puede representar cualquier valor de JavaScript sin restricciones. Esto puede ser útil cuando espera un valor de una biblioteca de terceros o entradas de usuario donde el valor es dinámico porque el anytipo le permitirá reasignar diferentes tipos de valores.
 */

/**El siguiente ejemplo declara una variable de tipo anyy le asigna valores: */

let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

/**
 * Debido a que randomValueestá registrado como any, todos los ejemplos siguientes son TypeScript válidos y no generarán un error de tiempo de compilación. Sin embargo, pueden ocurrir errores de tiempo de ejecución según el tipo de datos real de la variable. Dado el ejemplo anterior donde randomValuese establece en un valor booleano, las siguientes líneas de código generarán problemas en tiempo de ejecución:
 */

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error