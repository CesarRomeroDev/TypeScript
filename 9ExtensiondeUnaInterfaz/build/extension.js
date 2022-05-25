"use strict";
/**
 * Las interfaces se pueden extender entre sí. Esto le permite copiar los miembros de una interfaz en otra, lo que ofrece más flexibilidad a la hora de separar las interfaces en componentes reutilizables.
 */
/**
 * Debería observar un error en la nueva interfaz. TypeScript ha detectado que las interfaces IceCream y Sundae tienen una propiedad denominada instructions, pero su tipo es diferente. Para resolver este error, vamos a hacer que ambas propiedades instructions sean del mismo tipo (string).
 */
//* la variable era de tipo IceCream y se cambio a tipo Sundae, esto genero un error y para corregirlo se agregaron las propiedades obligatorias de Sindae
var iceCream = {
    flavor: 'vainilla',
    scoops: 2,
    sauce: 'chocolate',
    nuts: true,
};
function tooManyScoopos(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + '\n' + dessert.flavor;
    }
    else {
        return dessert.scoops + '\n' + dessert.sauce;
    }
}
console.log(tooManyScoopos({ flavor: 'vainilla', scoops: 3, sauce: 'chocolate' }));
