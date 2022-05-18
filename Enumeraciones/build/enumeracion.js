"use strict";
/**
 * Las enumeraciones le permiten especificar una lista de opciones disponibles. Son extremadamente útiles cuando tiene un conjunto de valores que puede tomar un tipo de variable en particular. Imaginemos que tiene un campo en una base de datos externa llamada ContractStatus , que contiene los números 1, 2 o 3, que representan los siguientes estados de contacto: Permanente , Temporal y Aprendiz . Crearemos una enumeración con estos valores y exploraremos la compatibilidad con TypeScript.
 */
/**
 * De forma predeterminada, los enumvalores comienzan con un valor de 0, también lo Permanentes 0, Tempes 1 y Apprenticees 2. Si desea que los valores comiencen con un valor diferente, en este caso 1, especifíquelo en la enumdeclaración. Realice las siguientes ediciones para que enumlos valores comiencen en 1.
 */
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
//EJEMPLO DOS
/**
 * Para mostrar el nombre asociado con la enumeración, podemos usar el indexador provisto. Agregue lo siguiente al final de su código:
    console.log(ContractStatusa[employeeStatuss]);
 *
 */
var ContractStatusa;
(function (ContractStatusa) {
    ContractStatusa[ContractStatusa["Julio"] = 1] = "Julio";
    ContractStatusa[ContractStatusa["Pepe"] = 2] = "Pepe";
    ContractStatusa[ContractStatusa["Maria"] = 3] = "Maria";
})(ContractStatusa || (ContractStatusa = {}));
var employeeStatuss = ContractStatusa.Maria;
console.log(ContractStatusa[employeeStatuss]);
