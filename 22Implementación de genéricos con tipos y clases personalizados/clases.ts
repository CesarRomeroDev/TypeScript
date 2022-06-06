//* Implementación de genéricos con tipos y clases personalizados

/**El uso de genéricos con tipos primitivos (como number, string o boolean) ilustra bien los conceptos de los genéricos,
 *  pero resulta más eficaz usarlos con tipos y clases personalizados. En este ejemplo hay una clase base denominada Car 
 * y dos subclases, ElectricCar y Truck. La función accelerate acepta una instancia genérica de Car y, después, la devuelve. 
 * Al indicar a la función accelerate que T debe extender Car, TypeScript sabe a qué funciones y propiedades se puede llamar 
 * dentro de la función. El genérico también devuelve el tipo específico del objeto "Car" (ElectricCar o Truck) que se pasa a
 *  la función, en lugar de un objeto Car no específico. */

 class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);