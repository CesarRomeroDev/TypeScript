//* QUE ES UNA INTERFAZ?

/**
 * Puede usar interfaces para describir un objeto, asignar nombres a los tipos del objeto y parametrizarlos, y componer tipos de objetos con nombre existentes en otros nuevos.

Esta simple interfaz define las dos propiedades y un método de un objeto Employee.
 */

interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}


/**
 * En este ejemplo se implementa la interfaz mediante la declaración de una variable del tipo Employee. Cumple el contrato al pasar los valores de las propiedades firstName y lastName, y al especificar que el método fullName debe combinar las propiedades firstName y lastName, y devolver el resultado.
 */

 let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
console.log(employee.fullName());
// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

/**
 * La comprobación de tipos garantiza que el número 10 no sea asignable a employee.firstName porque está esperando un objeto string.
 */

//* QUE DIFERENCIA A UNA MATRIZ DE UN ALIAS DE TIPO?

/**La interfaz Employee anterior también se puede expresar como un alias de tipo mediante la palabra clave type: */
type Employeer = {
    firstName: string;
    lastName: string;
    fullName(): string;
}
/**
 * La principal diferencia es que un alias de tipos no se puede volver a abrir para agregar nuevas propiedades, mientras que una interfaz siempre es extensible. Además, solo se puede describir una unión o tupla mediante un alias de tipos.
 */