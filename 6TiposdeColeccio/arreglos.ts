//* ARREGLOS

/**
 * TypeScript, como JavaScript, le permite trabajar con matrices. Los arreglos se pueden escribir de una de dos maneras. En el primero, usa el tipo de los elementos seguido de corchetes ( [ ]) para indicar una matriz de ese tipo de elemento:
 */
let list: number[] = [1, 2, 3];

/**
 * La segunda forma usa un tipo genérico Array, usando la sintaxis Array<type>:
 */
let list2: Array<number> = [1, 2, 3];
/**
 * No hay ninguna ventaja en usar uno sobre el otro, por lo que depende de usted decidir qué sintaxis usar.
 */


//* TUPLAS

/**
 * Tener una matriz de los mismos tipos de valores es útil, pero a veces tiene una matriz que contiene valores de tipos mixtos. Para ese propósito, TypeScript proporciona el tipo Tuple. Para declarar una Tupla, use la sintaxis variableName: [type, type, ...].
 */

//Ingrese el siguiente código para crear una Tupla que contenga a stringy a number:
let persona1: [string, number] = ['Marcia', 35];

//Intente agregar otro elemento a la matriz. Por ejemplo:
let persona2: [string, number] = ['Maecia', 35, true];
/**
 * Verá que se genera un error porque los elementos en la Tupla arrayestán arreglados. La person1Tupla es una matriz que contiene exactamente un string valor y un numeric valor.
 */

//Intente cambiar el orden de los elementos en la matriz. Por ejemplo:
let persona3: [string, number] = [35, 'Marcia'];
//Verá un error que indica que el orden de los valores debe coincidir con el orden de los tipos.