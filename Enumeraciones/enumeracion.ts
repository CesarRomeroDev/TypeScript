/**
 * Las enumeraciones le permiten especificar una lista de opciones disponibles. Son extremadamente útiles cuando tiene un conjunto de valores que puede tomar un tipo de variable en particular. Imaginemos que tiene un campo en una base de datos externa llamada ContractStatus , que contiene los números 1, 2 o 3, que representan los siguientes estados de contacto: Permanente , Temporal y Aprendiz . Crearemos una enumeración con estos valores y exploraremos la compatibilidad con TypeScript.
 */

/**
 * De forma predeterminada, los enumvalores comienzan con un valor de 0, también lo Permanentes 0, Tempes 1 y Apprenticees 2. Si desea que los valores comiencen con un valor diferente, en este caso 1, especifíquelo en la enumdeclaración. Realice las siguientes ediciones para que enumlos valores comiencen en 1.
 */
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

//EJEMPLO DOS
/**
 * Para mostrar el nombre asociado con la enumeración, podemos usar el indexador provisto. Agregue lo siguiente al final de su código:
    console.log(ContractStatusa[employeeStatuss]);
 * 
 */
enum ContractStatusa {
    Julio = 1,
    Pepe,
    Maria
}

let employeeStatuss: ContractStatusa = ContractStatusa.Maria;
console.log(ContractStatusa[employeeStatuss]);