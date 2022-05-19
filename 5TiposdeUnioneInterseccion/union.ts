//* TIPOS DE UNION
/**
 * Un tipo de unión describe un valor que puede ser uno de varios tipos. Esto puede ser útil cuando un valor no está bajo su control (por ejemplo, valores de una biblioteca, una API o entrada del usuario).

El anytipo también puede aceptar diferentes tipos, entonces, ¿por qué querría usar un tipo de unión? Los tipos de unión restringen la asignación de valores a los tipos especificados, mientras que cualquier tipo no tiene restricciones. Otra razón es el soporte de Intellisense.

Un tipo de unión usa la barra vertical o tubería ( |) para separar cada tipo. En el siguiente ejemplo, multiTypepuede ser a  numbero a  boolean:
 */

let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid

/**
 * Usando protectores de tipo, puede trabajar fácilmente con una variable de un tipo de unión. En este ejemplo, la addfunción acepta dos valores que pueden ser a numbero a string. Si ambos valores son tipos de números, los suma. Si ambos son tipos de cadena, los concatena. De lo contrario, genera un error.
 */

function add(x: number | string, y: number | string){
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);                                     //concat() : Concatenar string
    }
    throw new Error('Los parámetros deben ser números o cadenas');   //throw : manda una excepcion 
}

console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2));         //* Returns 3
console.log(add('one', 2));     //* Returns error


//* TIPOS DE INTERSECCION

/**
 * Los tipos de intersección están estrechamente relacionados con los tipos de unión, pero se usan de manera muy diferente. Un tipo de intersección combina dos o más tipos para crear un nuevo tipo que tiene todas las propiedades de los tipos existentes. Esto le permite agregar tipos existentes para obtener un solo tipo que tenga todas las funciones que necesita.

Un tipo de Intersección utiliza el símbolo de y comercial ( & ) para separar cada tipo.

Los tipos de intersección se usan con mayor frecuencia con las interfaces. El siguiente ejemplo define dos interfaces, Employeey Manager, y luego crea un nuevo tipo de intersección llamado ManagementEmployeeque combina las propiedades en ambas interfaces.
 */
interface Employee {
    employeeID: number;
    ege:        number;
}
interface Manager {
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 1234,
    ege:        34,
    stockPlan: true
}


//* Definición de tipos literales

/**
 * Los tipos literales se escriben como literales de tipo objeto, matriz, función o constructor y se utilizan para componer nuevos tipos a partir de otros tipos.

La mejor manera de demostrar el uso de tipos literales es con un ejemplo. Esta definición de tipo crea un tipo literal llamado testResult, que puede contener uno de tres stringvalores:
 */
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid

/**
 * Al establecer el valor de la variable myResult, "incomplete"y "pass"son entradas válidas, mientras "failure"que no lo es porque no es uno de los elementos de la testResultdefinición de tipo.

TypeScript también tiene tipos de literales numéricos, que actúan de la misma manera que los literales de cadena anteriores. Por ejemplo:
 */

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
diceRoll = 7;    //* Invalid