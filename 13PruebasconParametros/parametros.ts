//* Parametros Obligatorios

/**
 Todos los parámetros de función son necesarios, a menos que se especifique lo contrario, y el número de argumentos pasados a una función debe coincidir con el número de parámetros necesarios que espera la función
 En este ejemplo, se requieren todos los parámetros.
 */

 function addNumbers (x: number, y: number): number{
     return x + y;
 }

 addNumbers(1, 2);  //return 3
 addNumbers(2);     //return an error

 //* Parametros Opcionales

 /**
  * Los parámetros de ruta se pueden convertir en opcionales si se anexa un signo de interrogación (?) al final del nombre del parámetro.

En este ejemplo, x es necesario y y es opcional. El parámetro opcional debe ir después de los parámetros obligatorios en la lista de parámetros. Además, para que esta función devuelva el valor correcto, debe abordar la posibilidad de que y se pueda pasar como un valor indefinido.
  */

function addNumbers1 (x: number, y?: number): number {
    if( y === undefined ) {
        return x
    } else {
        return x + y;
    }
}

addNumbers1(1, 3);      //return 4
addNumbers1(2);         //return 2