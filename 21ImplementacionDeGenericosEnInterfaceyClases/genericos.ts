//* Declaración de una interfaz genérica

/**Declare una interfaz simple denominada Identity que tenga dos propiedades, 
 * value y message, y dos variables de tipo genérico, T y U, para los tipos de las propiedades. */

interface Identity<T, U> {
    value: T;
    message: U;
}

/**Declare dos variables usando la interfaz Identity como un tipo de objeto. */

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello'
}
let returnString: Identity<string, number> = {
    value: 'Hello',
    message: 25
}

//* Declaración de una interfaz genérica como un tipo de función

/**Declare una interfaz genérica denominada ProcessIdentity que incluya la signatura genérica de un método, 
 * (value: T, message: U): T. Observe que el método no tiene nombre. De esta manera, puede aplicarlo a cualquier 
 * función con una signatura de tipo coincidente. */

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}
/**Declare una función llamada processIdentity que tenga la misma signatura de tipo que la interfaz ProcessIdentity */
function processIdentity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
    
}
/**Declare una variable de tipo de función denominada processor con la interfaz ProcessIdentity como el tipo de variable,
 *  y pase number para el tipo T y string para el tipo U. Después, asígnele la función processIdentity. 
 * Puede usar esta variable como una función en el código y TypeScript comprobará los tipos. */

 let processor: ProcessIdentity<number, string> = processIdentity;
 let returnNumber1 = processor(100, 'Hello!');   // OK
 let returnString1 = processor('Hello!', 100);   // Type check error

 //* Declaración de una interfaz genérica como un tipo de clase

 /**Declare una interfaz denominada ProcessIdentity que tenga dos propiedades, value y message, y dos 
  * variables de tipo genérico, T y U, para los tipos de las propiedades. Después, agregue una signatura 
  * genérica de un método denominado process que devuelva un valor del tipo T.
  */

  interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}

/**Defina una clase genérica denominada processIdentity que implemente la interfaz ProcessIdentity. 
 * En este caso, asigne a los tipos de variable de la clase processIdentity los nombres X e Y. Puede usar 
 * nombres de variable diferentes en la interfaz y en la clase porque el valor del tipo se propaga y el nombre de la variable no importa. */

 class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor = new processIdentity<number, string>(100, 'Hello');
processor.process();           // Displays 'Hello'
processor.value = '100';       // Type check error