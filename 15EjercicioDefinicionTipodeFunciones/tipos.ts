/**
 * Defina un tipo de función llamado calculator mediante un alias de tipo. La signatura de tipo tiene una lista de parámetros (x: number, y: number) y devuelve un valor number, separados por un operador de flecha (=>). Observe que la sintaxis de la signatura de tipo es la misma que una función de flecha.
 */
type calculator = (x: number, y: number) => number; 

/**
 *Ahora puede usar el tipo de función como una firma de tipo al declarar funciones. Declare dos variables del tipo de función calculator, una para la operación de suma y otra para la de resta. Pruebe las nuevas funciones devolviendo el resultado de cada una de ellas a la consola.
 */

let addNumbers: calculator = (x: number, y:number): number => x + y;

let subtractNumbers: calculator = (x: number, y:number): number => x - y;

console.log( addNumbers(1, 2) );
console.log( subtractNumbers(5, 4) );

/**
 * También puede utilizar el tipo de función calculator para pasar valores de otra función. Escriba la función doCalculation, que devuelve el resultado de la función addNumbers o subtractNumbers según el valor pasado al parámetro operation.
 */

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers
    }else{
        return subtractNumbers;
    }
}
console.log(doCalculation('add')(1, 2));


//* Inferencia de tipos de funciones

/**
 * Al definir una función, no es necesario que los nombres de los parámetros de la función coincidan con los del tipo de función. Aunque es necesario asignar un nombre a los parámetros de la signatura de tipo en ambos lugares, los nombres se omiten al comprobar si dos tipos de funciones son compatibles.

También puede dejar excluir los tipos de parámetros y el tipo de valor devuelto, ya que TypeScript los inferirá del tipo de función.

En lo que respecta a TypeScript, estas tres instrucciones son idénticas.
 */

// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
} 

let addNumbers1: Calculator = (x: number, y: number): number => x + y;
let addNumbers2: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers3: Calculator = (num1, num2) => num1 + num2;