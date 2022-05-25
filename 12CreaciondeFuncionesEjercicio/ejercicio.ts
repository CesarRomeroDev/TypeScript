//* Ejercicio 1
/**
 * Ahora, asigne el tipo string al parámetro message. Esta función con nombre no devuelve un valor para que pueda excluir el tipo de valor devuelto (también puede pasar void como el tipo de valor devuelto, pero no es necesario hacerlo).
 */
function displayAlert(message: string){
    alert('the message is' + message);
}

//* Ejercicio 2

function sum(input: number[]): number{
    let total: number = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue
        }
        total += Number(input[count]);
    }
    return total;
}
sum([1, 2, 3]);