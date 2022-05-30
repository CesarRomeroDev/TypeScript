interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string
}

class Car implements Vehicle{
    //Propiedades:
    private static numberOfCars: number = 0;        //*New static property
    private _make: string;
    private _color: string;
    private _doors: number;
    //CONSTRUCTOR
    constructor(make: string, color: string, doors = 4){
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++;     //*Increments the value of the static property
    }
    //ACCESSORS
    get make() {
        return this._make;
    }

    set make(make){
        this._make = make;
    }

    get color(){
        return 'The color of the car is ' + this._color
    }
    set color(color){
        this._color = color; 
    }

    get doors(){
        return this._doors;
    }
    set doors(doors){
            this._doors = doors;
    }
    //METHODS
    private worker(): string {
        return this._make;
    }
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string{
        return `${this.worker()} is braking with the standard braking system`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2);
console.log(myCar1.color);
// console.log(myCar1._color);
// let myCar2 = new Car('Galaxy Motors', 'red', 3);
// console.log(myCar2.doors = 5);

let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('left'));