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
