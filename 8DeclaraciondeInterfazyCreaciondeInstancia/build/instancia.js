"use strict";
var iceCream = {
    flavor: 'vainilla',
    scoops: 2
};
console.log(iceCream.flavor);
function tooManyScoopos(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops ';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
//*Como la funcion y el parametro es de tipo IceCream, pide que se agregue la propiedad instructions pero como es de tipo opcional no manda     error.
console.log(tooManyScoopos({ flavor: 'Fresa', scoops: 5 }));
