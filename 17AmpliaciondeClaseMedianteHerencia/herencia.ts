class Car {
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
    protected worker(): string {
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

class ElectriCar extends Car {
    //Propiedades
    private _range: number;
    //Constructor
    constructor( make: string, color: string, ranger: number, doors = 2 ){
        super(make, color, doors);
        this._range = ranger;
    }
    //Accesorio
    get range(){
        return this._range;
    }
    set range(range){
        this._range = range;
    }
    //Metodos
    charge(){
        console.log(this.worker() + 'is charging');
    }
    brake(): string {
        return `${this.worker()} está frenando con el sistema de frenado regenerativo.`
    }
}

let spark = new ElectriCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectriCar('Electri Car Co.', 'Black', 263);
console.log(eCar.doors);
spark.charge();
console.log(spark.brake());

