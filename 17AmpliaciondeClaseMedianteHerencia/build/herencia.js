"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ElectriCar = /** @class */ (function (_super) {
    __extends(ElectriCar, _super);
    //Constructor
    function ElectriCar(make, color, ranger, doors) {
        if (doors === void 0) { doors = 2; }
        var _this = _super.call(this, make, color, doors) || this;
        _this._range = ranger;
        return _this;
    }
    Object.defineProperty(ElectriCar.prototype, "range", {
        //Accesorio
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
        },
        enumerable: false,
        configurable: true
    });
    //Metodos
    ElectriCar.prototype.charge = function () {
        console.log(this.worker() + 'is charging');
    };
    ElectriCar.prototype.brake = function () {
        return this.worker() + " est\u00E1 frenando con el sistema de frenado regenerativo.";
    };
    return ElectriCar;
}(Car));
var spark = new ElectriCar('Spark Motors', 'silver', 124, 2);
var eCar = new ElectriCar('Electri Car Co.', 'Black', 263);
console.log(eCar.doors);
spark.charge();
console.log(spark.brake());
