
let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it

x = 1;
/**
 * esto genera el error El tipo 'cadena' no se puede asignar
 * al tipo 'número' porque la verificación de tipo estático no 
 * permite stringque se asigne a la variable.
 */
x = 'one';
y = 'one';


/**
 * Ingrese el nombre de la variable yseguido de un punto y notará 
 * una cosa más. Aunque no especificó explícitamente un tipo para 
 * la variable y, Intellisense proporciona métodos que solo se aplican a un numbertipo.
 */
// y.


/**
 * TypeScript ha inferido z que es de tipo any porque no asignó un tipo ni lo inicializó cuando se declaró
 */
z = 'one';
z = 1;



/**
 * Tipo Booleano
 */

 let flag: boolean;
 let yes = true;
 let no = false;

 /**
  * Tipo Numerico
  */

  let xx: number;
  let yy = 0;
  let zz: number = 123.456;
  let big: bigint = 100n;

  /**
   * Tipo Cadena
   */

   let s: string;
   let empty = "";
   let abc = 'abc';

   /**
    * Cadena de Plantillas
    */

    let firstName: string = "Mateo";
    let sentence: string = `My name is ${firstName}. I am new to TypeScript.`;
    console.log(sentence);