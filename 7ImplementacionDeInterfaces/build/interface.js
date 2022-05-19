"use strict";
//* QUE ES UNA INTERFAZ?
/**
 * En este ejemplo se implementa la interfaz mediante la declaración de una variable del tipo Employee. Cumple el contrato al pasar los valores de las propiedades firstName y lastName, y al especificar que el método fullName debe combinar las propiedades firstName y lastName, y devolver el resultado.
 */
var employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(employee.fullName());
/**
 * La principal diferencia es que un alias de tipos no se puede volver a abrir para agregar nuevas propiedades, mientras que una interfaz siempre es extensible. Además, solo se puede describir una unión o tupla mediante un alias de tipos.
 */ 
