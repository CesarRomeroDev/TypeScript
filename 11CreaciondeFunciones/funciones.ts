//* Funciones Con Nombre
/**
 * Una función con nombre es una declaración de función escrita con la palabra clave function que se proporciona con un nombre distinto en el ámbito actual. Las declaraciones de función con nombre se cargan en el contexto de ejecución antes de que se ejecute el código. Esto se conoce como "elevación", lo que significa que puede usar la función antes de declararla.

La sintaxis para declarar una función con nombre en TypeScript es la misma que para definir una en JavaScript. La única diferencia con TypeScript es que puede proporcionar una anotación de tipo para los parámetros de la función y el valor devuelto.
 */

function addNumbers(x: number, y: number): number {         //* Esta función acepta dos parámetros de tipo number y devuelve un valor number.
    return x + y;
    
}
console.log(addNumbers(5, 6));

//* Funciones Anónimas
/**
 * Una expresión de función (o función anónima) es una función que no está cargada previamente en el contexto de ejecución y solo se ejecuta cuando el código la encuentra. Las expresiones de función se crean en tiempo de ejecución y se deben declarar antes de que se puedan llamar. Esto significa que no se elevan, a diferencia de las declaraciones de función con nombre que se elevan en cuanto se inicia la ejecución del programa y se pueden llamar antes de su declaración.

Las expresiones de función representan valores, de modo que normalmente se asignan a una variable o se pasan a otras funciones, y pueden ser anónimas, lo que significa que la función no tiene nombre.

En este ejemplo se asigna una expresión function a la variable addNumbers. Observe que esa función aparece en lugar del nombre de la función, lo que hace que la función sea anónima. Ahora puede usar esta variable para llamar a la función.
 */

let addzNumbers = function (x: number, y: number): number {
    return x + y;
}
console.log(addzNumbers(3, 9));

let total = function(input: number[] ): number {
    let total: number = 0;
    for(let i = 0; i < input.length; i++){
        if(isNaN(input[i])){
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
console.log(total([1, 2, 3]));

//* Funciones Flecha
/**
 * En este ejemplo se compara la sintaxis de una función function anónima con una función de flecha de una sola línea. La función de flecha abrevia la sintaxis omitiendo la palabra clave de la función y agregando el operador => entre los parámetros y el cuerpo de la función.
 */

let addNumbers1 = function(x: number, y: number): number {      //Funcion Anonima
    return x + y;
}

let addNumbers2 = (x: number, y: number): number => x + y;

/**
 * En este ejemplo, observe también que las llaves se han quitado y no hay ninguna instrucción return. Las funciones de flecha de una sola línea pueden usar una sintaxis de cuerpo concisa o una devolución implícita, que permite la omisión de llaves y la palabra clave return.
 */

 let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
console.log(total2([1, 2, 10]));