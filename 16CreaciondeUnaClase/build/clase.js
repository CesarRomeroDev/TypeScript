"use strict";
var Car = /** @class */ (function () {
    //CONSTRUCTOR
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++; //*Increments the value of the static property
    }
    Object.defineProperty(Car.prototype, "make", {
        //ACCESSORS
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return 'The color of the car is ' + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            this._doors = doors;
        },
        enumerable: false,
        configurable: true
    });
    //METHODS
    Car.prototype.worker = function () {
        return this._make;
    };
    Car.prototype.accelerate = function (speed) {
        return this.worker() + " is accelerating to " + speed + " MPH.";
    };
    Car.prototype.brake = function () {
        return this.worker() + " is braking with the standard braking system";
    };
    Car.prototype.turn = function (direction) {
        return this.worker() + " is turning " + direction;
    };
    Car.getNumberOfCars = function () {
        return Car.numberOfCars;
    };
    //Propiedades:
    Car.numberOfCars = 0; //*New static property
    return Car;
}());
var myCar1 = new Car('Cool Car Company', 'blue', 2);
console.log(myCar1.color);
// console.log(myCar1._color);
// let myCar2 = new Car('Galaxy Motors', 'red', 3);
// console.log(myCar2.doors = 5);
var myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('left'));
//* Modificadores de acceso
/*
Modificador de acceso
public:	Si no especifica un modificador de acceso, el valor predeterminado es p??blico. Tambi??n puede establecer expl??citamente el miembro en
        p??blico mediante la palabra clave public.

private: Si modifica el miembro con la palabra clave private, no se puede tener acceso a ??l desde fuera de la clase contenedora.

protected: El modificador protected act??a de forma muy similar al modificador private, con la excepci??n de que tambi??n se puede tener
           acceso a los miembros declarados protected dentro de las clases derivadas. (Proporcionaremos m??s informaci??n al respecto m??s
            adelante en el m??dulo).
            687
 */
//* Acceso a una clase
//Establezca el modificador de acceso de las propiedades _color, _doors y _make y la funci??n worker en private.
//Pruebe de nuevo el acceso a los miembros de la clase escribiendo myCar1. y observe que las propiedades y la funci??n worker ahora no est??n
// disponibles. Cualquier intento de utilizar estos miembros de la clase generar?? un error en tiempo de compilaci??n.
//* Definici??n de propiedades est??ticas
/**
 * Las propiedades y m??todos de las clases definidos hasta ahora son propiedades de instancia, lo que significa que se crea una instancia
 *  de ellos y se les llama en cada instancia del objeto de la clase. Hay otro tipo de propiedad denominada propiedad est??tica.
 *  Todas las instancias de una clase comparten las propiedades y los m??todos est??ticos.
    Para convertir una propiedad en est??tica, use la palabra clave static antes de un nombre de m??todo o propiedad.
 */
/*
Tenga en cuenta que se usa la sintaxis className.propertyName en lugar de this. cuando se obtiene acceso a la propiedad est??tica.
Tambi??n puede definir m??todos est??ticos. Puede llamar al m??todo getNumberOfCars para devolver el valor de numberOfCars.
 */
/**
 * Cree una instancia de la clase Car como de costumbre y, a continuaci??n, use la sintaxis Car.getNumberOfCars()
 *  para devolver el n??mero de instancias.
 */
// Instantiate the Car object with all parameters
var myCar4 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
var myCar5 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars());
