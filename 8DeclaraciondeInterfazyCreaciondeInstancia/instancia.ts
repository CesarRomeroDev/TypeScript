/**
 * ¿Qué ocurre si agrega otra propiedad a la interfaz IceCream? Vamos a agregar una nueva propiedad denominada instructions y a asignarle el tipo string.

Revise los errores que aparezcan en el código. Para resolverlos, debe agregar la propiedad instructions a los detalles de implementación de la declaración de variable y agregarla como un parámetro pasado a la función. Por ahora, haga que la propiedad instructions sea opcional. Para ello, agregue un signo de interrogación al nombre de la propiedad. Todos los errores deberían resolverse, dado que la interfaz ya no necesita la propiedad instructions.
 */
interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string       //* se agrega ? a la propiedad de tipo opcional 
}

let iceCream : IceCream = {     //* la variable 'iceCream' es de tipo IceCream 
    flavor: 'vainilla',
    scoops: 2
}

console.log(iceCream.flavor);

function tooManyScoopos(dessert: IceCream){     //* El parametro 'dessert' es de tipo 'IceCream' obtine todas sus propiedades
    if(dessert.scoops >= 4){
        return dessert.scoops + ' is too many scoops '
    }else {
        return 'Your order will be ready soon!'
    }
}

//*Como la funcion y el parametro es de tipo IceCream, pide que se agregue la propiedad instructions pero como es de tipo opcional no manda     error.

console.log(tooManyScoopos({flavor: 'Fresa', scoops: 5}));
