interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string
}

let iceCream : IceCream = {
    flavor: 'vainilla',
    scoops: 2
}

console.log(iceCream.flavor);

function tooManyScoopos(dessert: IceCream){
    if(dessert.scoops >= 4){
        return dessert.scoops + ' is too many scoops '
    }else {
        return 'Your order will be ready soon!'
    }
}

console.log(tooManyScoopos({flavor: 'vanilla', scoops: 5}));
